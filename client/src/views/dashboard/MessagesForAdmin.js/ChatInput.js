import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [file, setfile] = useState("");
console.log(msg)
console.log(file)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
    console.log("this is from chatinput message",message)
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg,file);
    console.log("this is from chatinput msg",msg)
    console.log("this is from chatinput file",file)

      setMsg("");
      setfile("")
 
     
    }
  };

  return (
    <Container>

      <div className="button-container">
      
      </div>

      {/* <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        /> */}
             <Form className="comment-text d-flex align-items-center mt-3" onSubmit={(event) => sendChat(event)}>
                                    <Form.Control type="text" className="rounded" placeholder="Type here!"   
                            onChange={(e) => setMsg(e.target.value)}
                            value={msg}/>
                                 
       
        
        <button type="submit" className="me-2 text-body">
        <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path fillRule  ="evenodd" clipRule="evenodd"
                                                d="M21.25 16.334V7.665C21.25 4.645 19.111 2.75 16.084 2.75H7.916C4.889 2.75 2.75 4.635 2.75 7.665L2.75 16.334C2.75 19.364 4.889 21.25 7.916 21.25H16.084C19.111 21.25 21.25 19.364 21.25 16.334Z"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                   <path d="M16.0861 12H7.91406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.3223 8.25205L16.0863 12L12.3223 15.748" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
        </button>
                                 </Form>
     
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
     padding: 0 3rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
   
  }
   
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
  
      padding-left: 2rem;
      font-size: 1rem;

   
    }
    button {
     
      display: flex;
      justify-content: center;
      align-items: center; 

  
      @media screen and (min-width: 720px) and (max-width: 1080px) {
   
        svg {
          font-size: 1rem;
        }
      }
       
    }
  }
`;
