import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Api } from '../constant/constant';
import chopp from '../../../assets/images/avatars/av.jpg'

import Card from '../../../components/Card'
import { Row, Col ,Image} from "react-bootstrap";

import styled from "styled-components";
import { useParams } from 'react-router-dom';


function Chat({ socket, username, room }) {
    const params = useParams()

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [rfqID, setrfqID] = useState(params.id);
    const [time, setTime] = useState(new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes() +
        ":" +
        new Date(Date.now()).getSeconds())

    const sendMessage = async () => {
        const result = await fetch(`${Api}/message`, {
            method: "post",
            body: JSON.stringify({ currentMessage, rfqID, time, username }),
            headers: { "Content-Type": "application/json" },
        });
        // result = await result.json();
        if (result) {


            // alert("Message Sent Succesfully!");
            // setCurrentMessage('')
            console.warn(result);
            if (currentMessage !== "") {
                const messageData = {
                    room: params.id,
                    username: username,
                    currentMessage: currentMessage,
                    rfqID: rfqID,
                    time:
                        new Date(Date.now()).getHours() +
                        ":" +
                        new Date(Date.now()).getMinutes() +
                        ":" +
                        new Date(Date.now()).getSeconds(),
                };

                await socket.emit("send_message", messageData);
                setMessageList((list) => [...list, messageData]);
                setCurrentMessage("");
            }
            getmessage()
            getmessage()
            getmessage()
            getmessage()
        }

    };

    const getmessage = async () => {
        let result = await fetch(`${Api}/message/search/${params.id}`);
        result = await result.json();
        setMessageList(result);
    };
    useEffect(() => {
        getmessage()
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <>
    

        <FinalChat>
                <div className="parent-div  d-flex align-items-center justify-content-center" style={{"width":"350px","height":"200px"}}>
       
<div className="child-div    " style={{"width":"250px","height":"100px"}}>
           

        <div className="chat-window">

          <div className="chat-body">
 
            <ScrollToBottom className="message-container">
              {messageList.map((messageContent) => {
                return (
                  <div
                    className="message"
                    id={username === messageContent.username ? "you" : "other"}
                  >
                    <div>
                      <div className="message-content">
                        <p>{messageContent.currentMessage}</p>
                      </div>
                      <div className="message-meta">
                        <p id="time">{messageContent.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
       
        </div>
 
        </div>
         
          </div>
<div></div>
<div></div>
<div></div>
        </FinalChat>
        </>
        // <>
        //     <Row>
        //         <Col lg="12">
        //             <Adg>
        //                 <div className="iq-timeline m-0 d-flex align-items-center justify-content-between position-relative">
        //                     <ul className="list-inline p-0 m-0 w-100">


        //                         <ScrollToBottom className="message-container">
        //                             {messageList.map((messageContent) => {
        //                                 <div
        //                                     className="message"
        //                                    >
        //                                     {   username === "other"? 
                                            
        //                                                      <li>
        //                                                      <div className="time">
        //                                                          <span>March 2020</span>
        //                                                      </div>
        //                                                      <div className="content">
        //                                                          <div className="timeline-dots border-primary"></div>
        //                                                          {/* <h6 className="mb-1">Client Call</h6> */}
        //                                                          <div className="d-inline-block w-100">
        //                                                              <p>  {messageContent.currentMessage}</p>
        //                                                          </div>
        //                                                      </div>
        //                                                  </li>:

                                                  
        //                                     <li>
        //                                         <div className="time bg-success">
        //                                             <span>April 2020</span>
        //                                         </div>
        //                                         <div className="content">
        //                                             <div className="timeline-dots border-success"></div>
        //                                             {/* <h6 className="mb-1">Mega event</h6> */}
        //                                             <div className="d-inline-block w-100">
        //                                             <p>  {messageContent.currentMessage}</p>
        //                                             </div>
        //                                         </div>
                                     
        //                                 </li>
        //                                     }
                                            

                                           
                                          
        //                                 </div>
        //                             })}
        //                         </ScrollToBottom>
        //                     </ul>
        //                 </div>
        //             </Adg>

        //         </Col>
        //     </Row>

        // </>
    );
}

export default Chat;
const FinalChat = styled.div`
 
 @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700");
 
 
 
 
   
 .chat-window {
   width: 450px;
   height: 420px;
 }
 
 .chat-window p {
   margin: 1;
 }
 .chat-window .chat-header {
   height: 45px;
   border-radius: 6px;
   background: #263238;
   position: relative;
   cursor: pointer;
 }
 .chat-window .chat-header p {
   display: block;
   padding: 0 1em 0 2em;
   color: #fff;
   font-weight: 700;
   line-height: 45px;
 }
 
 .chat-window .chat-body {
   height: calc(450px - (45px + 70px));
   border: 1px solid #263238;
   border-radius: 9px;
   background: #fff;
 
   position: relative;
 }
 .chat-window .chat-body .message-container {
   width: 100%;
   height: 100%;
   overflow-y: scroll;
   overflow-x: hidden;
   border-radius: 9px;
 }
 
 .chat-window .chat-body .message-container::-webkit-scrollbar {
   display: none;
 }
 .chat-window .chat-body .message {
   height: auto;
   padding: 10px;
   display: flex;
 }
 
 .chat-window .chat-body .message .message-content {
   width: auto;
   height: auto;
   min-height: 40px;
   max-width: 120px;
   background-color: #43a047;
   border-radius: 5px;
   color: white;
   display: flex;
   align-items: center;
   margin-right: 5px;
   margin-left: 5px;
   padding-right: 5px;
   padding-left: 5px;
   overflow-wrap: break-word;
   word-break: break-word;
 }
 
 #you {
   justify-content: flex-start;
 }
 
 #you .message-content {
   justify-content: flex-start;
 }
 
 #you .message-meta {
   justify-content: flex-start;
   margin-left: 5px;
 }
 
 #other {
   justify-content: flex-end;
 }
 
 #other .message-content {
   justify-content: flex-end;
   background-color: cornflowerblue;
 }
 
 #other .message-meta {
   justify-content: flex-end;
   margin-right: 5px;
 }
 
 .message-meta #author {
   margin-left: 10px;
   font-weight: bold;
 }
 
 .chat-window .chat-body .message .message-meta {
   display: flex;
   font-size: 12px;
 }
 
 .chat-window .chat-footer {
   height: 40px;
   border:2px solid #263238;
   border-radius: 15px;

  
   display: flex;
 }
 
 .chat-window .chat-footer input {
   height: 100%;
   flex: 85%;
   border: 0;
   padding: 0 0.7em;
   border-radius: 15px;
   font-size: 1em;
   border-right: 1px dotted #607d8b;
 
   outline: none;
   font-family: "Open Sans", sans-serif;
 }
 
 .chat-window .chat-footer button {
   border: 0;
   display: grid;
   place-items: center;
   cursor: pointer;
   flex: 15%;
   height: 100%;
   background: transparent;
   outline: none;
   font-size: 25px;
   color: lightgray;
 }
 
 .chat-window .chat-footer button:hover {
   color: #43a047;
 }
 .hide {
   opacity: 0 !important;
 }
 


`

const Adg = styled.div`

.App {
   width: 100vw;
   height: 100vh;
   background: #fff;
   color: #212121;
   font-family: "Open Sans", sans-serif;
   display: grid;
   place-items: center;
 }
 body {
   margin: 0%;
   padding: 0%;
 }
 @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700");
 
 .joinChatContainer {
   display: flex;
   flex-direction: column;
   text-align: center;
 }
 
 .joinChatContainer h3 {
   font-size: 2.5rem;
   margin-bottom: 1rem;
 }
 .joinChatContainer input {
   width: 210px;
   height: 40px;
   margin: 7px;
   border: 2px solid #43a047;
   border-radius: 5px;
   padding: 5px;
   font-size: 16px;
 }
 
 .joinChatContainer button {
   width: 225px;
   height: 50px;
   margin: 7px;
   border: none;
   border-radius: 5px;
   padding: 5px;
   font-size: 16px;
   background: #43a047;
   color: #fff;
   cursor: pointer;
 }
 
 .joinChatContainer button:hover {
   background: #2e7d32;
 }
 
 .chat-window {
   width: 300px;
   height: 420px;
 }
 
 .chat-window p {
   margin: 0;
 }
 .chat-window .chat-header {
   height: 45px;
   border: 2px solid #263238;
   border-radius: 9px;
   border-radius: 6px;
   background: #263238;
   position: relative;
   cursor: pointer;
 }
 .chat-window .chat-header p {
   display: block;
   padding: 0 1em 0 2em;
   color: #fff;
   font-weight: 700;
   line-height: 45px;
 }
 
 .chat-window .chat-body {
   height: calc(450px - (45px + 70px));
   border: 1px solid #263238;
   background: #fff;
 
   position: relative;
 }
 .chat-window .chat-body .message-container {
   width: 100%;
   height: 100%;
   overflow-y: scroll;
   overflow-x: hidden;
 }
 
 .chat-window .chat-body .message-container::-webkit-scrollbar {
   display: none;
 }
 .chat-window .chat-body .message {
   height: auto;
   padding: 10px;
   display: flex;
 }
 
 .chat-window .chat-body .message .message-content {
   width: auto;
   height: auto;
   min-height: 40px;
   max-width: 120px;
   background-color: #43a047;
   border-radius: 5px;
   color: white;
   display: flex;
   align-items: center;
   margin-right: 5px;
   margin-left: 5px;
   padding-right: 5px;
   padding-left: 5px;
   overflow-wrap: break-word;
   word-break: break-word;
 }
 
 #you {
   justify-content: flex-start;
 }
 
 #you .message-content {
   justify-content: flex-start;
 }
 
 #you .message-meta {
   justify-content: flex-start;
   margin-left: 5px;
 }
 
 #other {
   justify-content: flex-end;
 }
 
 #other .message-content {
   justify-content: flex-end;
   background-color: cornflowerblue;
 }
 
 #other .message-meta {
   justify-content: flex-end;
   margin-right: 5px;
 }
 
 .message-meta #author {
   margin-left: 10px;
   font-weight: bold;
 }
 
 .chat-window .chat-body .message .message-meta {
   display: flex;
   font-size: 12px;
 }
 
 .chat-window .chat-footer {
   height: 40px;
   
   border: 2.3px solid #263238;
   border-radius: 15px;
   display: flex;
 }
 
 .chat-window .chat-footer input {
   height: 100%;
   flex: 85%;
   border-radius: 15px;

   border: 0;
   padding: 0 0.7em;
   font-size: 1em;
   border-right: 1px dotted #607d8b;
 
   outline: none;
   font-family: "Open Sans", sans-serif;
 }
 
 .chat-window .chat-footer button {
   border: 0;
   display: grid;
   place-items: center;
   cursor: pointer;
   flex: 15%;
   height: 100%;
   background: transparent;
   outline: none;
   font-size: 25px;
   color: lightgray;
   border-radius: 15px;

 }
 
 .chat-window .chat-footer button:hover {
   color: #43a047;
 }
 .hide {
   opacity: 0 !important;
 }
 


`