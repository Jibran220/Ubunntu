import Card from '../../../components/Card'
import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import { Scrollbars } from 'react-custom-scrollbars';

import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../../assets/images/avatars/avtar_5.png'
import avatars2 from '../../../assets/images/avatars/02.png'
import avatars3 from '../../../assets/images/avatars/03.png'
import avatars4 from '../../../assets/images/avatars/04.png'
import avatars5 from '../../../assets/images/avatars/05.png'
import chopp from '../../../assets/images/avatars/av.jpg'
import icon1 from '../../../assets/images/icons/01.png'
import icon2 from '../../../assets/images/icons/02.png'
import icon3 from '../../../assets/images/icons/03.png'
import icon4 from '../../../assets/images/icons/04.png'
import icon8 from '../../../assets/images/icons/08.png'
import icon6 from '../../../assets/images/icons/06.png'
import icon7 from '../../../assets/images/icons/07.png'
import icon5 from '../../../assets/images/icons/05.png'
import shap2 from '../../../assets/images/shapes/02.png'
import Chat from "./Chat";

import shap4 from '../../../assets/images/shapes/04.png'
import shap6 from '../../../assets/images/shapes/06.png'
import pages2 from '../../../assets/images/pages/02-page.png'
import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'
import React, { useEffect, useState, useRef } from "react";
import FileBase from "react-file-base64";

import FsLightbox from "fslightbox-react";
import { allUsersRoute, host } from "../utils/APIRoutes";
import axios from "axios";
import { jsPDF } from "jspdf";
import Base64Downloader from 'react-base64-downloader';
import { io } from "socket.io-client";
import styled from "styled-components";
import { Row, Col, Image, Form, Nav, Dropdown, Tab, Table, FormControl, InputGroup ,NavDropdown} from "react-bootstrap";
import { useHistory, Link, useParams, useLocation } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ChatContainer from "../MessagesForAdmin.js/ComponentsForAdmin";
import Contacts from "../MessagesForAdmin.js/Contacts";
import Welcome from "../MessagesForAdmin.js/Welcome";
import { Api } from '../constant/constant';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserProfile =() =>{
   const socket =io.connect(`${Api}/`)
   const [datamessage, setdatamessage] = useState([])
   const [namem, setnamem] = useState('vendor');
   const [sender, setsender] = useState('vendor_id');
   const [receiver, setreceiver] = useState('admin_id');
   const [message, setmessage] = useState('');
    const scrollRef = useRef();
    
    const navigate = useHistory();
    const params = useParams();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(user);
    const [data, setData] = useState([]);
    const [com, setcom] = useState([]);
    const [data1, setData1] = useState([]);
    const [comment, setcomment] = useState("");
    const [userid, setuserid] = useState(params.id);
    const [vendorid, setvendorid] = useState(params.id);
    const [files, setfiles] = useState("");
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(contacts);
    const [currentaUser, setCurrentaUser] = useState(undefined);
    const [postData, setPostData] = useState({
      files:'',
      userid:params.id,
    title:''})
    
    useEffect(() => {
    socket.on('receive_Message',(data)=>{
      getmessage(data.message)
       
    })
    }, [socket])

    
    const sendMessage=()=>{
      socket.emit("send_Message",{message:"Bello"})
 
    }
    console.log("current_chat",contacts)
    console.log("i love to UUUUUUUUUUUUPER",data.map((tn) => tn.rfq_id));
  
   
  const messageEndRef=useRef(null)
  const [username, setUsername] = useState('you');
  const [room, setRoom] = useState(params.id);
  const [id, setid] = useState(params.id);
  const [showChat, setShowChat] = useState(true);
 
    useEffect(() => {
     if (username !== "" && room !== "") {
        socket.emit("join_room", room);
     }
    }, [])
  useEffect(() => {
  messageEndRef.current?.scrollIntoView()
  }, [message])
   
    const Addmessage = async () => {
      socket.emit("send_Message",{message })
      const result = await fetch(`${Api}/message`, {
         method: "post",
         body: JSON.stringify({ namem, sender, receiver, message  }),
         headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
         getmessage()      
         getmessage()      
         getmessage()  
      
         toast.info("Message Sent Succesfully!");
      setmessage('')
      }
      console.warn(result);
   };

   const getmessage = async () => {
      console.log("this is from message",params.id)
      let result = await fetch(`${Api}/message/search/${params.id}`);
      result = await result.json();
      setdatamessage(result);
   };
     
    useEffect(() => {
      getmessage()  
      if (currentaUser) {
        socket.current = io(host);
        socket.current.emit("add-user", currentaUser._id);
      console.log('this is from use eeeeeeeeeeeee',user.username)

      }
    }, [currentaUser]);
    useEffect(async () => {
      if (currentaUser) {
      console.log('this is from use eeeeeeeeeeeee',user.username)

        if (currentaUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
          setContacts(data.data);
        } else {
       
          const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
          setContacts(data.data);
        }
      }
    }, [currentUser]);
    useEffect(() => {
      getproducts();
      getcomments();
      console.log('this is from use eeeeeeeeeeeee',user.username)

      console.log("clclclclclcclcl",params.id)
  
  
      // getrfqdetail();
    }, []);
  
    const handleChatChange = (chat) => {
      setCurrentChat(chat);
      console.log("current_chat",chat);
    };
  
    console.log("clclclclclcclcl",params.id)
    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await fetch(`${Api}/attachments`, {
        method: "post",
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      
      if (result) {
        toast.info("Attachment added Succesfully!");
  
        setPostData({
        files: '',
        title:''})
      }
      console.warn(result);
    };
    const sendQuote=()=>{
      navigate.push(`/VendorQuoteLIst/${params.id}`)
    }
    const getproducts = async () => {
      let result = await fetch(`${Api}/userRFQ/view/${params.id}`);
      result = await result.json();
      setData(result);
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", result._id);
  
      let result1 = await fetch(
        `${Api}/rfqmanagers/${data.map((tn) => tn.rfq_id)}`
      );
      result1 = await result1.json();
      setData1(result1);
      console.log(data1);
      console.log("clclclclclcclcl",params.id)
    };
    console.log("i love to work",data.map((tn) => tn.rfq_id));
    const getcomments = async () => {
      console.log("clclclclclcclcl",params.id)
      let result = await fetch(`${Api}/commentrouter/search/${params.id}`);
      result = await result.json();
      setcom(result);
    };
  
   
   const [toggler, setToggler] = useState(false);
     
  return(
      <>
         <FsLightbox
                  toggler={ toggler }
                  sources={ [icon4,shap2,icon8,shap4,icon2,shap6,icon5,shap4,icon1] }
               />
         <Tab.Container  defaultActiveKey="first">
            <Row>
               <Col lg="12">
                  <Card>
                        <Card.Body>
                           <div className="d-flex flex-wrap align-items-center justify-content-between">
                              <div className="d-flex flex-wrap align-items-center">
                                 <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                    <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic"/>
                                 </div>
                                 <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                                 {data.map((item) => (
                        <h4 className="me-2 h4">{item.rfq_name}</h4>
                      ))}                                   
                      
                      
                      {data.map((item) => (
                        <span> - {item.Name}</span>
                      ))}                                 </div>
                              </div>

                              {data.map((item) => (



                              <Nav as="ul" className="d-flex nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">
                                 <Nav.Item as="li">
                         <Button variant="primary rounded-pill"  onClick={sendQuote}>feed</Button>

                            
                                 </Nav.Item> 
                         <br/>
                              
                         <Button variant="primary rounded-pill"  onClick={sendQuote}>Quote</Button>
                                    {/* < Button to={"/dashboard/app/VendorQoute/"+item._id}>Quote</ Button> */}
                            
                                 
                              </Nav>
                               ))}   
                           </div>
                        </Card.Body>
                  </Card>
               </Col>
               <Col lg="3" className="col-lg-3">
                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">Announcments</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                              {com.map((item)=>(
                        <ul className="list-inline m-0 p-0">
                           <li className="d-flex mb-2">
                              <div className="news-icon me-3">
                                 <svg width="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
                                 </svg>
                              </div>
                              <p className="news-detail mb-0">{item.comment}</p>
                              </li>
                         
                        </ul>
                              ))}
                   
                     </Card.Body>
                  </Card>

                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">Documents</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <ul className="list-inline m-0 p-0">
                           <li className="d-flex mb-2">
                              <div className="news-icon me-3">
                         
                              </div>
                             
                              </li>
                         
                        </ul>
                                  {/* <Form.Control type="text" className="rounded" placeholder="Type here!"    value={comment}
                            onChange={(e) => {
                              setcomment(e.target.value);
                            }} />
                          
                        <FileBase type="file"   title=" "  multiple={false} onDone={({ base64 }) => setPostData({ ...postData, files: base64 })} />
       */}
                                    
                        <Form.Group className="form-group">
                                    <Form.Label  className="custom-file-input">Document Title</Form.Label>
                                    <Form.Control type="text" id="customFile"  value={postData.title}
                                     onChange={(e) =>
                                       setPostData({
                                         ...postData,
                                         title: e.target.value,
                                       })
                                     }
                                   /> 
                                </Form.Group>
                                <Form.Group className="mb-3 form-group">
                                    <FileBase  type="file"  multiple={false} onDone={({ base64 }) => setPostData({ ...postData, files: base64 })}  id="customFile"/>
                                </Form.Group>
                                <Button onClick={handleSubmit} variant="btn btn-primary">Send</Button>{' '}
                                 
                               
                     </Card.Body>
                  </Card>
                 
               </Col>
               <Col lg="6">
                  <Tab.Content className="profile-content">
                     <Tab.Pane eventKey="first" id="profile-feed">
                        <Card>
                           <Card.Header className="d-flex align-items-center justify-content-between pb-4">
                              <div className="header-title">
                                 <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img me-3">
                                       <Image className="rounded-pill img-fluid avatar-60 bg-soft-danger p-1 ps-2" src={avatars2} alt=""/>
                                    </div>
                                    <div className="media-support-info mt-2">
                                       <h5 className="mb-0">Description</h5>
                                       <p className="mb-0 text-primary"></p>
                                    </div>
                                 </div>
                              </div>                        
                        
                           </Card.Header>
                           <Card.Body className="p-0">
                             
                              <div className="comment-area p-3">
                                 
                               
                              {data.map((item) => (
                        <p>{item.description}</p>
                      ))}
                                 <hr/>
                            
                              </div>                              
                           </Card.Body>
                        </Card>
                                       
                    
 
                           {/* <Scrollbars style={{ width: 700, height: 500 }}> 
                           <Container>  
                           <div className="chat-messages">   {datamessage.map((item) => {
          return (
           
              <div
                className={`message ${
                  item.sender == "vendor_id" ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{item.message}</p>
               
             
              </div>
           
            </div>
          );
        })}
        <div ref={messageEndRef}/>
        </div>  </Container>
        </Scrollbars> */}
                         
        <Chat socket={socket} username={username} room={room}  />
          
       
                              {/* <Form className="comment-text d-flex align-items-center mt-3" >
                           <Form.Control type="text" className="rounded" placeholder="Type here!" value={message}
                              onChange={(e) => {
                                 setmessage(e.target.value);
                              }} />
                           <div className="comment-attagement d-flex">
                              <Link to="#" className="me-2 text-body" onClick={Addmessage}>
                                 <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                       d="M21.25 16.334V7.665C21.25 4.645 19.111 2.75 16.084 2.75H7.916C4.889 2.75 2.75 4.635 2.75 7.665L2.75 16.334C2.75 19.364 4.889 21.25 7.916 21.25H16.084C19.111 21.25 21.25 19.364 21.25 16.334Z"
                                       stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.0861 12H7.91406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.3223 8.25205L16.0863 12L12.3223 15.748" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                       strokeLinejoin="round" />
                                 </svg>
                              </Link>

                           </div>
                        </Form> */}
                              
            

                     </Tab.Pane>
                     <Tab.Pane eventKey="second" id="profile-activity">
                        <Card>
                           <Card.Header className="d-flex justify-content-between">
                              <div className="header-title">
                                 <h4 className="card-title">Activity</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                                     
                              <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
                                 <ul className="list-inline p-0 m-0">
                                    <li>
                                     
                                       <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
                                       
                                    

                                       <div className="d-inline-block w-100">
                                          <p></p>
                                       </div>
                                    </li>
                                 
                                 </ul>
                              </div>
                                     

                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                     <Tab.Pane eventKey="third" id="profile-friends">
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">Friends</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <ul className="list-inline m-0 p-0">
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image className="theme-color-default-img  rounded-pill avatar-40" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img rounded-pill avatar-40" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img rounded-pill avatar-40" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img rounded-pill avatar-40" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img rounded-pill avatar-40" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img rounded-pill avatar-40" src={avatars44} alt="profile-pic"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Paul Molive</h6>
                                       <p className="mb-0">Web Designer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars5} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Paul Molive</h6>
                                       <p className="mb-0">trainee</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars2} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Anna Mull</h6>
                                       <p className="mb-0">Web Developer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars3} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Paige Turner</h6>
                                       <p className="mb-0">trainee</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars4} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Barb Ackue</h6>
                                       <p className="mb-0">Web Designer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars5} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Greta Life</h6>
                                       <p className="mb-0">Tester</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars3} alt="story-img" className="rounded-pill avatar-40"/>                              <div className="ms-3 flex-grow-1">
                                       <h6>Ira Membrit</h6>
                                       <p className="mb-0">Android Developer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                                 <li className="d-flex mb-4 align-items-center">
                                    <Image src={avatars2} alt="story-img" className="rounded-pill avatar-40"/>
                                    <div className="ms-3 flex-grow-1">
                                       <h6>Pete Sariya</h6>
                                       <p className="mb-0">Web Designer</p>
                                    </div>
                                    <Dropdown>
                                       <Dropdown.Toggle as="span"  id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                       </Dropdown.Toggle>
                                       <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                          <Dropdown.Item  href="#">Unfollow</Dropdown.Item>
                                          <Dropdown.Item  href="#">Unfriend</Dropdown.Item>
                                          <Dropdown.Item  href="#">block</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </li>
                              </ul>
                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                     <Tab.Pane eventKey="fourth" id="profile-profile">
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">Profile</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="text-center">
                                 <div className="user-profile">
                                    <Image className="theme-color-default-img  rounded-pill avatar-130 img-fluid" src={avatars11} alt="profile-pic"/>
                                    <Image className="theme-color-purple-img rounded-pill avatar-130 img-fluid" src={avatars22} alt="profile-pic"/>
                                    <Image className="theme-color-blue-img rounded-pill avatar-130 img-fluid" src={avatars33} alt="profile-pic"/>
                                    <Image className="theme-color-green-img rounded-pill avatar-130 img-fluid" src={avatars55} alt="profile-pic"/>
                                    <Image className="theme-color-yellow-img rounded-pill avatar-130 img-fluid" src={avatars66} alt="profile-pic"/>
                                    <Image className="theme-color-pink-img rounded-pill avatar-130 img-fluid" src={avatars44} alt="profile-pic"/>
                                 </div>
                                 <div className="mt-3">
                                    <h3 className="d-inline-block">Austin Robertson</h3>
                                    <p className="d-inline-block pl-3"> - Web developer</p>
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                 </div>
                              </div>
                           </Card.Body>
                        </Card>
                        <Card>
                           <Card.Header>
                              <div className="header-title">
                                 <h4 className="card-title">About User</h4>
                              </div>
                           </Card.Header>
                           <Card.Body>
                              <div className="user-bio">
                                 <p>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer.</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Joined:</h6>
                              <p>Feb 15, 2021</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Lives:</h6>
                              <p>United States of America</p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Email:</h6>
                              <p><Link to="#" className="text-body"> austin@gmail.com</Link></p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Url:</h6>
                              <p><Link to="#" className="text-body" target="_blank"> www.bootstrap.com </Link></p>
                              </div>
                              <div className="mt-2">
                              <h6 className="mb-1">Contact:</h6>
                              <p><Link to="#" className="text-body">(001) 4544 565 456</Link></p>
                              </div>
                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                  </Tab.Content>
               </Col>
               <Col lg="3">
                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">About</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p></p>
                        <div className="mb-1">Email: 
               {data.map((item) => (
                       
                        <Link to="#" className="ms-3">{item.to}</Link>
                        ))}
                        
                                    
                        </div>
               {data.map((item) => (

                        <div className="mb-1">Phone: <Link to="#" className="ms-3">{item.Work_Phone}</Link></div>
                      
                        ))}
                        <div>Location: <span className="ms-3">USA</span></div>
                     </Card.Body>
                  </Card>
               
               
               </Col>
               
            </Row>
         </Tab.Container>
      </>
  )

}

export default UserProfile;












































const Container = styled.div`
  
 
 
.chat-header {
  display: flex;
  background-color: white;


  justify-content: space-between;
  align-items: center;
  padding: 0 rem;
  .user-details {
    display: flex;
    align-items: center;
    gap: 1rem;
    .avatar {
      img {
        height: 3rem;
      }
    }
    .username {
      h3 ,h4{
        color: black;
      }
    }
  }
}
.chat-messages {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.4rem;
    &-thumb {
      background-color: #3944bc;
      width: 0.1rem;
      border-radius: 0.1rem;
    }
  }
  .message {
    display: flex;
    align-items: center;
    .content {
      max-width: 40%;
      overflow-wrap: break-word;
      padding: 1rem;
      font-size: 0.9rem;
      border-radius: 1rem;
      color: #d1d1d1;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        max-width: 70%;
      }
    }
  }
  .sended {
    justify-content: flex-end;
    .content {
      background-color: #3a57e8;
    }
  }
  .recieved {
    justify-content: flex-start;
    .content {
      background-color: #3a57e8;
    }
  }
}
`;







const FinalChat = styled.div`

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
   width: 670px;
   height: 400px;
 }
 
 .chat-window p {
   margin: 0;
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
   border: 1px solid #263238;
   border-top: none;
   display: flex;
 }
 
 .chat-window .chat-footer input {
   height: 100%;
   flex: 85%;
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
 }
 
 .chat-window .chat-footer button:hover {
   color: #43a047;
 }
 .hide {
   opacity: 0 !important;
 }
 


`





























// import React, { useEffect, useState, useRef } from "react";
// import FsLightbox from "fslightbox-react";
// import { allUsersRoute, host } from "../../../utils/APIRoutes";
// import axios from "axios";
// import { io } from "socket.io-client";
// import styled from "styled-components";
// import CommentForm from "../../Form/CommentForm";
// import { Row, Col, Image, Form, Nav, Dropdown, Tab } from "react-bootstrap";
// import Card from "../../../Card";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch, useSelector } from "react-redux";
// import Comment from "../Components/Comment";
// import { useHistory, Link, useParams, useLocation } from "react-router-dom";
// import { BsFillArrowRightSquareFill } from "react-icons/bs";
// import Button from 'react-bootstrap/Button';
// import ChatContainer from "../../ChatContainer";
// import Contacts from "../../Contacts";
// import Welcome from "../../Welcome";
// import { v4 as uuidv4 } from "uuid";
// import avatars11 from "../../../assets/images/avatars/01.png";
// import avatars22 from "../../../assets/images/avatars/avtar_1.png";
// import avatars33 from "../../../assets/images/avatars/avtar_2.png";
// import avatars44 from "../../../assets/images/avatars/avtar_3.png";
// import avatars55 from "../../../assets/images/avatars/avtar_4.png";
// import avatars66 from "../../../assets/images/avatars/avtar_5.png";
// import avatars2 from "../../../assets/images/avatars/02.png";
// import avatars3 from "../../../assets/images/avatars/03.png";
// import avatars4 from "../../../assets/images/avatars/04.png";
// import FileBase from "react-file-base64";
// import avatars5 from "../../../assets/images/avatars/05.png";

// import icon1 from "../../../assets/images/icons/01.png";
// import icon2 from "../../../assets/images/icons/02.png";
// import icon3 from "../../../assets/images/icons/03.png";
// import icon4 from "../../../assets/images/icons/04.png";
// import icon8 from "../../../assets/images/icons/08.png";
// import icon6 from "../../../assets/images/icons/06.png";
// import icon7 from "../../../assets/images/icons/07.png";

// import icon5 from "../../../assets/images/icons/05.png";
// import shap2 from "../../../assets/images/shapes/02.png";
// import shap4 from "../../../assets/images/shapes/04.png";
// import shap6 from "../../../assets/images/shapes/06.png";
// import pages2 from "../../../assets/images/pages/02-page.png";

// const UserProfile = () => {
//   const dispatch = useDispatch();
//   const scrollRef = useRef();
//   const navigate = useHistory();
//   const socket = useRef();
//   const params = useParams();
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
//   const location = useLocation();
//   const [currentUser, setCurrentUser] = useState(user);
//   const [data, setData] = useState([]);
//   const [com, setcom] = useState([]);
//   const [data1, setData1] = useState([]);
//   const [comment, setcomment] = useState("");
//   const [userid, setuserid] = useState(params.id);
//   const [vendorid, setvendorid] = useState(params.id);
//   const [files, setfiles] = useState("");
//   const [contacts, setContacts] = useState([]);
//   const [currentChat, setCurrentChat] = useState(contacts);
//   const [currentaUser, setCurrentaUser] = useState(undefined);
//   const [postData, setPostData] = useState({
//     files:'',
//     userid:params.id,
//   title:''})

//   console.log("current_chat",contacts)
//   console.log("i love to UUUUUUUUUUUUPER",data.map((tn) => tn.rfq_id));

 
//   // const AddComment = async () => {
//   //   const result = await fetch(`${Api}/CommentRouter`, {
//   //     method: "post",
//   //     body: JSON.stringify({ postData }),
//   //     headers: { "Content-Type": "application/json" },
//   //   });
//   //   result = await result.json();
//   //   if (result) {
//   //     setcomment("");
//   //   }
//   //   console.warn(result);
//   // };
//   // const SendAttachments = async () => {
//   //   const result = await fetch(`${Api}/userattachments`, {
//   //     method: "post",
//   //     body: JSON.stringify({ userattachments,vendorid }),
//   //     headers: { "Content-Type": "application/json" },
//   //   });
//   //   // result = await result.json();
//   //   if (result) {
//   //     setuserattachments(" ");
//   //   }
//   //   console.warn(result);
//   // };

//   useEffect(async () => {
//     if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       navigate("/authv");
//     } else {
//       setCurrentaUser(
//         await JSON.parse(
//           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//         )
//       );
//     }
//   }, []);
//   useEffect(() => {
//     if (currentaUser) {
//       socket.current = io(host);
//       socket.current.emit("add-user", currentaUser._id);
//     }
//   }, [currentaUser]);
//   useEffect(async () => {
//     if (currentaUser) {
//       if (currentaUser.isAvatarImageSet) {
//         const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
//         setContacts(data.data);
//       } else {
     
//         const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
//         setContacts(data.data);
//       }
//     }
//   }, [currentUser]);
//   useEffect(() => {
//     getproducts();
//     getcomments();
//     console.log("clclclclclcclcl",params.id)


//     // getrfqdetail();
//   }, []);

//   const handleChatChange = (chat) => {
//     setCurrentChat(chat);
//     console.log("current_chat",chat);
//   };

//   console.log("clclclclclcclcl",params.id)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await fetch(`${Api}/attachments`, {
//       method: "post",
//       body: JSON.stringify(postData),
//       headers: { "Content-Type": "application/json" },
//     });
//     // result = await result.json();
    
//     if (result) {
//       toast.info("Attachment added Succesfully!");

//       setPostData({
//       files: '',
//       title:''})
//     }
//     console.warn(result);
//   };
//   const getproducts = async () => {
//     let result = await fetch(`${Api}/userRFQ/view/${params.id}`);
//     result = await result.json();
//     setData(result);
//     console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", result._id);

//     let result1 = await fetch(
//       `${Api}/rfqmanagers/${data.map((tn) => tn.rfq_id)}`
//     );
//     result1 = await result1.json();
//     setData1(result1);
//     console.log(data1);
//     console.log("clclclclclcclcl",params.id)
//   };
//   console.log("i love to work",data.map((tn) => tn.rfq_id));
//   const getcomments = async () => {
//     console.log("clclclclclcclcl",params.id)
//     let result = await fetch(`${Api}/commentrouter/search/${params.id}`);
//     result = await result.json();
//     setcom(result);
//   };
//   // setuserid(data.map((tn) => tn.rfq_id));
//   // console.log(
//   //   "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//   //   data.map((tn) => tn.rfq_id)
//   // );

//   // console.log(data1.map((df) => df._id));

//   // const getrfqdetail = async () => {
//   //   let result1 = await fetch(
//   //     `${Api}/rfqmanagers/6359625314acd9c45ba7afbb`
//   //   );

//   //   result1 = await result1.json();
//   //   setData1(result1);
//   //   console.log("this is from second", result1);
//   //   console.log("this is from second", data1);
//   // };
//   const [toggler, setToggler] = useState(false);
//   return (
//     <>
//       <FsLightbox toggler={toggler}
//         sources={[
//           icon4,
//           shap2,
//           icon8,
//           shap4,
//           icon2,
//           shap6,
//           icon5,
//           shap4,
//           icon1,
//         ]}
//       />

//       <Tab.Container defaultActiveKey="first">
//         <Row>
//           <Col lg="12">
//             <Card>
//               <Card.Body>
//                 <div className="d-flex flex-wrap align-items-center justify-content-between">
//                   <div className="d-flex flex-wrap align-items-center">
//                     <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
//                       <Image
//                         className="theme-color-default-img  img-fluid rounded-pill avatar-100"
//                         src={avatars11}
//                         alt="profile-pic"
//                       />
//                       <Image
//                         className="theme-color-purple-img img-fluid rounded-pill avatar-100"
//                         src={avatars22}
//                         alt="profile-pic"
//                       />
//                       <Image
//                         className="theme-color-blue-img img-fluid rounded-pill avatar-100"
//                         src={avatars33}
//                         alt="profile-pic"
//                       />
//                       <Image
//                         className="theme-color-green-img img-fluid rounded-pill avatar-100"
//                         src={avatars55}
//                         alt="profile-pic"
//                       />
//                       <Image
//                         className="theme-color-yellow-img img-fluid rounded-pill avatar-100"
//                         src={avatars66}
//                         alt="profile-pic"
//                       />
//                       <Image
//                         className="theme-color-pink-img img-fluid rounded-pill avatar-100"
//                         src={avatars44}
//                         alt="profile-pic"
//                       />
//                     </div>
//                     <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
//                       {data.map((item) => (
//                         <h4 className="me-2 h4">{item.rfq_name}</h4>
//                       ))}
//                       {data.map((item) => (
//                         <span> - {item.Name}</span>
//                       ))}
//                     </div>
//                   </div>
//                   <Nav
//                     as="ul"
//                     className="d-flex nav-pills mb-0 text-center profile-tab"
//                     data-toggle="slider-tab"
//                     id="profile-pills-tab"
//                     role="tablist"
//                   >
//                     <Nav.Item as="li">
//                       <Nav.Link eventKey="first">Feed</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item as="li">
//                       {/* <Nav.Link eventKey="second">Activity</Nav.Link> */}
//                     </Nav.Item>
//                     <Nav.Item as="li">
//                     </Nav.Item>
//                     <Nav.Item as="li">
//                       {/* <Nav.Link eventKey="fourth">P.O</Nav.Link> */}
//                     </Nav.Item>
//                   </Nav>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col lg="3" className="col-lg-3">
//             {/* comment ayega */}
//             <Card>
//               <Card.Header>
//                 <div className="header-title">
//                   <h4 className="card-title">Announcement</h4>
//                 </div>
//               </Card.Header>
//               <Card.Body>
//                 <ul className="list-inline m-0p-0">
//                   <li className="d-flex mb-2">
//                     <div className="news-icon me-3"></div>
//                     <table
//                     id="user-list-table"
//                     className="table table-striped"
//                     role="grid"
//                     data-toggle="data-table"
//                   >
                
//                     <tbody>
//                     {com.map((item)=>(
                 
                  
//                         <tr>
//                           <td>{item.comment}</td>
                      
//                         </tr>
                                 


//                       ))}

//                     </tbody>
//                   </table>






// {/* {com.map((item)=>(
//   <h3> {item.comment}</h3>
// ))} */}
                 
//                   </li>{" "}
//                   {/* <Form
//                         className="comment-text d-flex align-items-center mt-3"
//                         action=""
//                       >
//                         <textarea 
//                           type="text"
//                           className="rounded"
//                           placeholder="Leave a Comment here!"
//                         />
//                         <div className="comment-attagement d-flex">
                         
                     
                          
//                         </div>
//                             <Button variant="primary" size="sm" onClick={AddComment}>   <BsFillArrowRightSquareFill  size="25px"/></Button>{' '}
//                       </Form>  */}
//                   {/* <input
//                     type="text"
//                     className="rounded"
//                     placeholder="Place a Comment here!"
//                     value={comment}
//                     onChange={(e) => {
//                       setcomment(e.target.value);
//                     }}
//                   /> */}
//                   <div className="comment-attagement d-flex">
//                     <li className="me-2 text-body" >
//                       {/* <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="512"
//                         height="512"
//                         viewBox="0 0 512 512"
//                       >
//                         <path
//                           d="M470.3,271.15,43.16,447.31a7.83,7.83,0,0,1-11.16-7V327a8,8,0,0,1,6.51-7.86l247.62-47c17.36-3.29,17.36-28.15,0-31.44l-247.63-47a8,8,0,0,1-6.5-7.85V72.59c0-5.74,5.88-10.26,11.16-8L470.3,241.76A16,16,0,0,1,470.3,271.15Z"
//                           style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
//                         />
//                       </svg> */}
                     
//                     </li>
//                   </div>
//                   <li className="d-flex">
//                     <div className="news-icon me-3"></div>
//                   </li>
//                 </ul>
//               </Card.Body>
//             </Card>
//             <Card>
//               <Card.Header>
//                 <div className="header-title">
//                   <h4 className="card-title">Documents!</h4>
//                 </div>
//               </Card.Header>
//               <Card.Body>
//                 <ul className="list-inline m-0p-0">
//                   <li className="d-flex mb-2">
//                     <div className="news-icon me-3"></div>

                 
//                   </li>{" "}
              
                           
                //    <Form
                //         className="comment-text d-flex align-items-center mt-3"
                //         onSubmit={handleSubmit}
//                       >
                     
//                          {/* <FileBase
//                                 type="file"
//                                 multiple={""}
//                                 onDone={({ base64 }) =>
//                                 setfiles(
                                    
//                                   base64
//                                   )
//                                 }
//                               /> */}
//                               <input
//                                      type="text"
//                                      className="rounded"
//                                      placeholder="Title"
                                //      value={postData.title}
                                //      onChange={(e) =>
                                //        setPostData({
                                //          ...postData,
                                //          title: e.target.value,
                                //        })
                                //      }
                                //    /> 
                    //   <FileBase type="file"   className="rounded" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, files: base64 })} />
//                         <div className="comment-attagement d-flex">
                         
                     
                          
//                         </div>
//                         <div className="comment-attagement d-flex">
//                                 <Button variant="primary" size="sm" type='submit'>   <BsFillArrowRightSquareFill  size="25px"/></Button>{' '}
//                         </div>

//                       </Form> 
   
//                   <div className="comment-attagement d-flex">
//                     <li className="me-2 text-body" >
                
//                       {/* <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="512"
//                         height="512"
//                         viewBox="0 0 512 512"
//                       >
//                         <path
//                           d="M470.3,271.15,43.16,447.31a7.83,7.83,0,0,1-11.16-7V327a8,8,0,0,1,6.51-7.86l247.62-47c17.36-3.29,17.36-28.15,0-31.44l-247.63-47a8,8,0,0,1-6.5-7.85V72.59c0-5.74,5.88-10.26,11.16-8L470.3,241.76A16,16,0,0,1,470.3,271.15Z"
//                           style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
//                         />
//                       </svg> */}
                     
//                     </li>
//                   </div>
//                   <li className="d-flex">
//                     <div className="news-icon me-3"></div>
//                   </li>
//                 </ul>
//               </Card.Body>
//             </Card>
//             {/* <Card>
//                      <Card.Header className="d-flex align-items-center justify-content-between">
//                         <div className="header-title">
//                            <h4 className="card-title">Gallery</h4>
//                         </div>
//                         <span>132 pics</span>
//                      </Card.Header>
//                      <Card.Body>
//                         <div className="d-grid gap-card grid-cols-3">
//                            <Link onClick={ () => setToggler(!toggler) }  to="#">
//                            <Image  src={icon4} className="img-fluid bg-soft-info rounded" alt="profile-image"/>
//                            </Link>
//                            <Link onClick={ () => setToggler(!toggler) } to="#">
//                            <Image   src={shap2} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
//                            </Link>
//                            <Link onClick={ () => setToggler(!toggler) } to="#">
//                            <Image   src={icon8} className="img-fluid bg-soft-info rounded" alt="profile-image"/>
//                            </Link>
//                            <Link onClick={ () => setToggler(!toggler) } to="#">
//                            <Image   src={shap4} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
//                            </Link>
//                            <Link onClick={ () => setToggler(!toggler) } to="#">
//                            <Image   src={icon2} className="img-fluid bg-soft-warning rounded" alt="profile-image"/>
//                            </Link>
//                            <Link  onClick={ () => setToggler(!toggler) }  to="#">
//                            <Image src={shap6} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
//                            </Link>
//                            <Link to="#">
//                               <Image  onClick={ () => setToggler(!toggler) } src={icon5} className="img-fluid bg-soft-danger rounded" alt="profile-image"/>
//                            </Link>
//                            <Link onClick={ () => setToggler(!toggler) }  to="#">
//                               <Image  src={shap4} className="img-fluid bg-soft-primary rounded" alt="profile-image"/>
//                            </Link>
//                            <Link onClick={ () => setToggler(!toggler) } to="#">
//                               <Image src={icon1} className="img-fluid bg-soft-success rounded" alt="profile-image"/>
//                            </Link>
//                         </div>
//                      </Card.Body>
//                   </Card> */}
//             {/* <Card>
//               <Card.Header>
//                 <div className="header-title">
//                   <h4 className="card-title">Twitter Feeds</h4>
//                 </div>
//               </Card.Header>
//               <Card.Body>
//                 <div className="twit-feed">
//                   <div className="d-flex align-items-center mb-2">
//                     <Image
//                       className="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-danger ps-2"
//                       src={icon3}
//                       alt=""
//                     />
//                     <div className="media-support-info">
//                       <h6 className="mb-0">Figma Community</h6>
//                       <p className="mb-0">
//                         @figma20
//                         <span className="text-primary">
//                           <svg width="15" viewBox="0 0 24 24">
//                             <path
//                               fill="currentColor"
//                               d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
//                             />
//                           </svg>
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="media-support-body">
//                     <p className="mb-0">
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry
//                     </p>
//                     <div className="d-flex flex-wrap">
//                       <Link to="#" className="twit-meta-tag pe-2">
//                         #Html
//                       </Link>
//                       <Link to="#" className="twit-meta-tag pe-2">
//                         #Bootstrap
//                       </Link>
//                     </div>
//                     <div className="twit-date">07 Jan 2021</div>
//                   </div>
//                 </div>
//                 <hr className="my-4" />
//                 <div className="twit-feed">
//                   <div className="d-flex align-items-center mb-2">
//                     <Image
//                       className="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-primary"
//                       src={icon4}
//                       alt=""
//                     />
//                     <div className="media-support-info">
//                       <h6 className="mb-0">Flutter</h6>
//                       <p className="mb-0">
//                         @jane59
//                         <span className="text-primary">
//                           <svg width="15" viewBox="0 0 24 24">
//                             <path
//                               fill="currentColor"
//                               d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
//                             />
//                           </svg>
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="media-support-body">
//                     <p className="mb-0">
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry
//                     </p>
//                     <div className="d-flex flex-wrap">
//                       <Link to="#" className="twit-meta-tag pe-2">
//                         #Js
//                       </Link>
//                       <Link to="#" className="twit-meta-tag pe-2">
//                         #Bootstrap
//                       </Link>
//                     </div>
//                     <div className="twit-date">18 Feb 2021</div>
//                   </div>
//                 </div>
//                 <hr className="my-4" />
//                 <div className="twit-feed">
//                   <div className="d-flex align-items-center mb-2">
//                     <Image
//                       className="rounded-pill img-fluid avatar-50 me-3 p-1 bg-soft-warning pt-2"
//                       src={icon2}
//                       alt=""
//                     />
//                     <div className="mt-2">
//                       <h6 className="mb-0">Blender</h6>
//                       <p className="mb-0">
//                         @blender59
//                         <span className="text-primary">
//                           <svg width="15" viewBox="0 0 24 24">
//                             <path
//                               fill="currentColor"
//                               d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
//                             />
//                           </svg>
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="media-support-body">
//                     <p className="mb-0">
//                       Lorem Ipsum is simply dummy text of the printing and
//                       typesetting industry
//                     </p>
//                     <div className="d-flex flex-wrap">
//                       <Link to="#" className="twit-meta-tag pe-2">
//                         #Html
//                       </Link>
//                       <Link to="#" className="twit-meta-tag pe-2">
//                         #CSS
//                       </Link>
//                     </div>
//                     <div className="twit-date">15 Mar 2021</div>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card> */}
//           </Col>
//           <Col lg="6">
//             <Tab.Content className="profile-content">
//               <Tab.Pane eventKey="first" id="profile-feed">
//                 <Card>
//                   <Card.Body className="p-0">
//                     <div className="user-post"></div>
//                     <div className="comment-area p-3">
//                       <div className="d-flex flex-wrap justify-content-between align-items-center">
//                         <div className="d-flex align-items-center">
//                           <div className="d-flex align-items-center message-icon me-3">
//                             <h6 className="ms-1">Description</h6>
//                           </div>
//                           <div className="d-flex align-items-center feather-icon"></div>
//                         </div>
//                         <div className="share-block d-flex align-items-center feather-icon">
//                           {/* <ShareOffcanvas /> */}
//                         </div>
//                       </div>
//                       <hr />
//                       {data.map((item) => (
//                         <p>{item.description}</p>
//                       ))}
//                       <p></p>

//                       {/* <Form
//                         className="comment-text d-flex align-items-center mt-3"
//                         action=""
//                       >
//                         <Form.Control
//                           type="text"
//                           className="rounded"
//                           placeholder="Lovely!"
//                         />
//                         <div className="comment-attagement d-flex">
//                           <Link to="#" className="me-2 text-body">
//                             <svg width="20" height="20" viewBox="0 0 24 24">
//                               <path
//                                 fill="currentColor"
//                                 d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
//                               />
//                             </svg>
//                           </Link>
//                           <Link to="#" className="text-body">
//                             <svg width="20" height="20" viewBox="0 0 24 24">
//                               <path
//                                 fill="currentColor"
//                                 d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z"
//                               />
//                             </svg>
//                           </Link>
//                         </div>
//                       </Form> */}
//                     </div>
//                   </Card.Body>
//                 </Card>
    // <Container>
              
    //             <div className="container">
    //       <Contacts contacts={contacts} changeChat={handleChatChange} />
    //       {currentChat === undefined ? (
    //         <Welcome />
    //       ) : (
    //         <ChatContainer currentChat={currentChat} socket={socket} />
    //       )}
    //     </div>
    // </Container>

//               </Tab.Pane>
//               <Tab.Pane eventKey="second" id="profile-activity">
//                 <Card>
//                   <Card.Header className="d-flex justify-content-between">
//                     <div className="header-title">
//                       <h4 className="card-title">Activity</h4>
//                     </div>
//                   </Card.Header>
//                   <Card.Body>
//                     <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
//                       <ul className="list-inline p-0 m-0">
//                         <li>
//                           <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
//                           <h6 className="float-left mb-1">Client Login</h6>
//                           <small className="float-right mt-1">
//                             24 November 2019
//                           </small>
//                           <div className="d-inline-block w-100">
//                             <p>
//                               Bonbon macaroon jelly beans gummi bears jelly
//                               lollipop apple
//                             </p>
//                           </div>
//                         </li>
//                         <li>
//                           <div className="timeline-dots timeline-dot1 border-success text-success"></div>
//                           <h6 className="float-left mb-1">
//                             Scheduled Maintenance
//                           </h6>
//                           <small className="float-right mt-1">
//                             23 November 2019
//                           </small>
//                           <div className="d-inline-block w-100">
//                             <p>
//                               Bonbon macaroon jelly beans gummi bears jelly
//                               lollipop apple
//                             </p>
//                           </div>
//                         </li>
//                         <li>
//                           <div className="timeline-dots timeline-dot1 border-danger text-danger"></div>
//                           <h6 className="float-left mb-1">Dev Meetup</h6>
//                           <small className="float-right mt-1">
//                             20 November 2019
//                           </small>
//                           <div className="d-inline-block w-100">
//                             <p>
//                               Bonbon macaroon jelly beans{" "}
//                               <Link to="#">gummi bears</Link>gummi bears jelly
//                               lollipop apple
//                             </p>
//                             <div className="iq-media-group iq-media-group-1">
//                               <Link to="#" className="iq-media-1">
//                                 <div className="icon iq-icon-box-3 rounded-pill">
//                                   SP
//                                 </div>
//                               </Link>
//                               <Link to="#" className="iq-media-1">
//                                 <div className="icon iq-icon-box-3 rounded-pill">
//                                   PP
//                                 </div>
//                               </Link>
//                               <Link to="#" className="iq-media-1">
//                                 <div className="icon iq-icon-box-3 rounded-pill">
//                                   MM
//                                 </div>
//                               </Link>
//                             </div>
//                           </div>
//                         </li>
//                         <li>
//                           <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
//                           <h6 className="float-left mb-1">Client Call</h6>
//                           <small className="float-right mt-1">
//                             19 November 2019
//                           </small>
//                           <div className="d-inline-block w-100">
//                             <p>
//                               Bonbon macaroon jelly beans gummi bears jelly
//                               lollipop apple
//                             </p>
//                           </div>
//                         </li>
//                         <li>
//                           <div className="timeline-dots timeline-dot1 border-warning text-warning"></div>
//                           <h6 className="float-left mb-1">Mega event</h6>
//                           <small className="float-right mt-1">
//                             15 November 2019
//                           </small>
//                           <div className="d-inline-block w-100">
//                             <p>
//                               Bonbon macaroon jelly beans gummi bears jelly
//                               lollipop apple
//                             </p>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Tab.Pane>
//               <Tab.Pane eventKey="third" id="profile-friends">
//                 <Card>
//                   <Card.Header>
//                     <div className="header-title">
//                       <h4 className="card-title">Friends</h4>
//                     </div>
//                   </Card.Header>
//                   <Card.Body>
//                     <ul className="list-inline m-0 p-0">
//                       <li className="d-flex mb-4 align-items-center">
//                         <Image
//                           className="theme-color-default-img  rounded-pill avatar-40"
//                           src={avatars11}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-purple-img rounded-pill avatar-40"
//                           src={avatars22}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-blue-img rounded-pill avatar-40"
//                           src={avatars33}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-green-img rounded-pill avatar-40"
//                           src={avatars55}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-yellow-img rounded-pill avatar-40"
//                           src={avatars66}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-pink-img rounded-pill avatar-40"
//                           src={avatars44}
//                           alt="profile-pic"
//                         />
//                         <div className="ms-3 flex-grow-1">
//                           <h6>Paul Molive</h6>
//                           <p className="mb-0">Web Designer</p>
//                         </div>
//                         <Dropdown>
//                           <Dropdown.Toggle
//                             as="span"
//                             id="dropdownMenuButton9"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             role="button"
//                           ></Dropdown.Toggle>
//                           <Dropdown.Menu
//                             className="dropdown-menu-end"
//                             aria-labelledby="dropdownMenuButton9"
//                           >
//                             <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                             <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                             <Dropdown.Item href="#">block</Dropdown.Item>
//                           </Dropdown.Menu>
//                         </Dropdown>
//                       </li>
//                       <li className="d-flex mb-4 align-items-center">
//                         <Image
//                           src={avatars5}
//                           alt="story-img"
//                           className="rounded-pill avatar-40"
//                         />
//                         <div className="ms-3 flex-grow-1">
//                           <h6>Paul Molive</h6>
//                           <p className="mb-0">trainee</p>
//                         </div>
//                         <Dropdown>
//                           <Dropdown.Toggle
//                             as="span"
//                             id="dropdownMenuButton9"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             role="button"
//                           ></Dropdown.Toggle>
//                           <Dropdown.Menu
//                             className="dropdown-menu-end"
//                             aria-labelledby="dropdownMenuButton9"
//                           >
//                             <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                             <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                             <Dropdown.Item href="#">block</Dropdown.Item>
//                           </Dropdown.Menu>
//                         </Dropdown>
//                       </li>
//                       <li className="d-flex mb-4 align-items-center">
//                         <Image
//                           src={avatars2}
//                           alt="story-img"
//                           className="rounded-pill avatar-40"
//                         />
//                         <div className="ms-3 flex-grow-1">
//                           <h6>Anna Mull</h6>
//                           <p className="mb-0">Web Developer</p>
//                         </div>
//                         <Dropdown>
//                           <Dropdown.Toggle
//                             as="span"
//                             id="dropdownMenuButton9"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             role="button"
//                           ></Dropdown.Toggle>
//                           <Dropdown.Menu
//                             className="dropdown-menu-end"
//                             aria-labelledby="dropdownMenuButton9"
//                           >
//                             <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                             <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                             <Dropdown.Item href="#">block</Dropdown.Item>
//                           </Dropdown.Menu>
//                         </Dropdown>
//                       </li>
//                       <li className="d-flex mb-4 align-items-center">
//                         <Image
//                           src={avatars3}
//                           alt="story-img"
//                           className="rounded-pill avatar-40"
//                         />
//                         <div className="ms-3 flex-grow-1">
//                           <h6>Paige Turner</h6>
//                           <p className="mb-0">trainee</p>
//                         </div>
//                         <Dropdown>
//                           <Dropdown.Toggle
//                             as="span"
//                             id="dropdownMenuButton9"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             role="button"
//                           ></Dropdown.Toggle>
//                           <Dropdown.Menu
//                             className="dropdown-menu-end"
//                             aria-labelledby="dropdownMenuButton9"
//                           >
//                             <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                             <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                             <Dropdown.Item href="#">block</Dropdown.Item>
//                           </Dropdown.Menu>
//                         </Dropdown>
//                       </li>
//                       <li className="d-flex mb-4 align-items-center">
//                         <Image
//                           src={avatars4}
//                           alt="story-img"
//                           className="rounded-pill avatar-40"
//                         />
//                         <div className="ms-3 flex-grow-1">
//                           <h6>Barb Ackue</h6>
//                           <p className="mb-0">Web Designer</p>
//                         </div>
//                         <Dropdown>
//                           <Dropdown.Toggle
//                             as="span"
//                             id="dropdownMenuButton9"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             role="button"
//                           ></Dropdown.Toggle>
//                           <Dropdown.Menu
//                             className="dropdown-menu-end"
//                             aria-labelledby="dropdownMenuButton9"
//                           >
//                             <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                             <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                             <Dropdown.Item href="#">block</Dropdown.Item>
//                           </Dropdown.Menu>
//                         </Dropdown>
//                       </li>
//                       <li className="d-flex mb-4 align-items-center">
//                         <Image
//                           src={avatars5}
//                           alt="story-img"
//                           className="rounded-pill avatar-40"
//                         />
//                         <div className="ms-3 flex-grow-1">
//                           <h6>Greta Life</h6>
//                           <p className="mb-0">Tester</p>
//                         </div>
//                         <Dropdown>
//                           <Dropdown.Toggle
//                             as="span"
//                             id="dropdownMenuButton9"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             role="button"
//                           ></Dropdown.Toggle>
//                           <Dropdown.Menu
//                             className="dropdown-menu-end"
//                             aria-labelledby="dropdownMenuButton9"
//                           >
//                             <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                             <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                             <Dropdown.Item href="#">block</Dropdown.Item>
//                           </Dropdown.Menu>
//                         </Dropdown>
//                       </li>
//                       <li className="d-flex mb-4 align-items-center">
//                         <Image
//                           src={avatars3}
//                           alt="story-img"
//                           className="rounded-pill avatar-40"
//                         />{" "}
//                         <div className="ms-3 flex-grow-1">
//                           <h6>Ira Membrit</h6>
//                           <p className="mb-0">Android Developer</p>
//                         </div>
//                         <Dropdown>
//                           <Dropdown.Toggle
//                             as="span"
//                             id="dropdownMenuButton9"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             role="button"
//                           ></Dropdown.Toggle>
//                           <Dropdown.Menu
//                             className="dropdown-menu-end"
//                             aria-labelledby="dropdownMenuButton9"
//                           >
//                             <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                             <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                             <Dropdown.Item href="#">block</Dropdown.Item>
//                           </Dropdown.Menu>
//                         </Dropdown>
//                       </li>
//                       <li className="d-flex mb-4 align-items-center">
//                         <Image
//                           src={avatars2}
//                           alt="story-img"
//                           className="rounded-pill avatar-40"
//                         />
//                         <div className="ms-3 flex-grow-1">
//                           <h6>Pete Sariya</h6>
//                           <p className="mb-0">Web Designer</p>
//                         </div>
//                         <Dropdown>
//                           <Dropdown.Toggle
//                             as="span"
//                             id="dropdownMenuButton9"
//                             data-bs-toggle="dropdown"
//                             aria-expanded="false"
//                             role="button"
//                           ></Dropdown.Toggle>
//                           <Dropdown.Menu
//                             className="dropdown-menu-end"
//                             aria-labelledby="dropdownMenuButton9"
//                           >
//                             <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                             <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                             <Dropdown.Item href="#">block</Dropdown.Item>
//                           </Dropdown.Menu>
//                         </Dropdown>
//                       </li>
//                     </ul>
//                   </Card.Body>
//                 </Card>
//               </Tab.Pane>
//               <Tab.Pane eventKey="fourth" id="profile-profile">
//                 <Card>
//                   <Card.Header>
//                     <div className="header-title">
//                       <h4 className="card-title">Profile</h4>
//                     </div>
//                   </Card.Header>
//                   <Card.Body>
//                     <div className="text-center">
//                       <div className="user-profile">
//                         <Image
//                           className="theme-color-default-img  rounded-pill avatar-130 img-fluid"
//                           src={avatars11}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-purple-img rounded-pill avatar-130 img-fluid"
//                           src={avatars22}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-blue-img rounded-pill avatar-130 img-fluid"
//                           src={avatars33}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-green-img rounded-pill avatar-130 img-fluid"
//                           src={avatars55}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-yellow-img rounded-pill avatar-130 img-fluid"
//                           src={avatars66}
//                           alt="profile-pic"
//                         />
//                         <Image
//                           className="theme-color-pink-img rounded-pill avatar-130 img-fluid"
//                           src={avatars44}
//                           alt="profile-pic"
//                         />
//                       </div>
//                       <div className="mt-3">
//                         {/* {data1.map((iten) => (
//                           <h3 className="d-inline-block">{iten.name}</h3>
//                         ))} */}

//                         <p className="d-inline-block pl-3"> - Web developer</p>
//                         <p className="mb-0">
//                           Lorem Ipsum is simply dummy text of the printing and
//                           typesetting industry. Lorem Ipsum has been the
//                           industry's standard dummy text ever since the 1500s
//                         </p>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//                 <Card>
//                   <Card.Header>
//                     <div className="header-title">
//                       <h4 className="card-title">About User</h4>
//                     </div>
//                   </Card.Header>
//                   <Card.Body>
//                     <tbody>
//                       {data.map((item) => (
//                         <tr>
//                           <td>
//                             <div className="flex align-items-center list-user-action">
//                               <div className="mt-2">
//                                 <h6 className="mb-1">Url:</h6>
//                                 <p>
//                                   <Link
//                                     to="#"
//                                     className="text-body"
//                                     target="_blank"
//                                   ></Link>
//                                 </p>
//                               </div>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>

//                     <div className="user-bio">
//                       <p>
//                         Tart I love sugar plum I love oat cake. Sweet roll
//                         caramels I love jujubes. Topping cake wafer.
//                       </p>
//                     </div>
//                     <div className="mt-2">
//                       <h6 className="mb-1">Joined:</h6>
//                       <p>Feb 15, 2021</p>
//                     </div>
//                     <div className="mt-2">
//                       <h6 className="mb-1">Lives:</h6>
//                       <p>United States of America</p>
//                     </div>
//                     <div className="mt-2">
//                       <h6 className="mb-1">Email:</h6>
//                     </div>

//                     <div className="mt-2">
//                       <h6 className="mb-1">Contact:</h6>
//                       <p>
//                         <Link to="#" className="text-body">
//                           (001) 4544 565 456
//                         </Link>
//                       </p>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Tab.Pane>
//             </Tab.Content>
//           </Col>
//           {data.map((item) => (
//             <Col lg="3">
//               <Card>
//                 <Card.Header>
//                   <div className="header-title">
//                     <h4 className="card-title">About</h4>
//                   </div>
//                 </Card.Header>
//                 <Card.Body>
//                   {/* <p>Lorem ipsum dolor sit amet, contur adipiscing elit.</p> */}
//                   <div className="mb-1">
//                     Email:{" "}
//                     <Link to="#" className="ms-3">
//                       {item.to}
//                     </Link>
//                   </div>
//                   <div className="mb-1">
//                     Phone:{" "}
//                     <Link to="#" className="ms-3">
//                       {item.Work_Phone}
//                     </Link>
//                   </div>
//                   <div>
//                     Location: <span className="ms-3">USA</span>
//                   </div>
//                 </Card.Body>
//               </Card>

//               {/* <Card>
//                      <Card.Header>
//                         <div className="header-title">
//                            <h4 className="card-title">Suggestions</h4>
//                         </div>
//                      </Card.Header>
//                      <Card.Body>
//                         <ul className="list-inline m-0 p-0">
//                            <li className="d-flex mb-4 align-items-center">
//                               <div className="img-fluid bg-soft-warning rounded-pill"><Image src={icon5} alt="story-img" className="rounded-pill avatar-40"/></div>
//                               <div className="ms-3 flex-grow-1">
//                                  <h6>Paul Molive</h6>
//                                  <p className="mb-0">4 mutual friends</p>
//                               </div>
//                               <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
//                                  <span className="btn-inner">
//                                     <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
//                                     </svg> 
//                                  </span>                            
//                               </Link>
//                            </li>
//                            <li className="d-flex mb-4 align-items-center">
//                               <div className="img-fluid bg-soft-danger rounded-pill"><Image src={icon3} alt="story-img" className="rounded-pill avatar-40"/></div>
//                               <div className="ms-3 flex-grow-1">
//                                  <h6>Robert Fox</h6>
//                                  <p className="mb-0">4 mutual friends</p>
//                               </div>
//                               <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
//                                  <span className="btn-inner">
//                                     <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
//                                     </svg> 
//                                  </span>                            
//                               </Link>
//                            </li>
//                            <li className="d-flex mb-4 align-items-center">
//                               <div className="img-fluid bg-soft-dark rounded-pill"><Image src={icon6} alt="story-img" className="rounded-pill avatar-40"/></div>
//                               <div className="ms-3 flex-grow-1">
//                                  <h6>Jenny Wilson</h6>
//                                  <p className="mb-0">6 mutual friends</p>
//                               </div>
//                               <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
//                                  <span className="btn-inner">
//                                     <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
//                                     </svg> 
//                                  </span>                            
//                               </Link>
//                            </li>
//                            <li className="d-flex mb-4 align-items-center">
//                               <div className="img-fluid bg-soft-primary rounded-pill"><Image src={icon7} alt="story-img" className="rounded-pill avatar-40"/></div>
//                               <div className="ms-3 flex-grow-1">
//                                  <h6>Cody Fisher</h6>
//                                  <p className="mb-0">8 mutual friends</p>
//                               </div>
//                               <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
//                                  <span className="btn-inner">
//                                     <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
//                                     </svg> 
//                                  </span>                            
//                               </Link>
//                            </li>
//                            <li className="d-flex mb-4 align-items-center">
//                               <div className="img-fluid bg-soft-info rounded-pill"><Image src={icon4} alt="story-img" className="rounded-pill avatar-40"/></div>
//                               <div className="ms-3 flex-grow-1">
//                                  <h6>Bessie Cooper</h6>
//                                  <p className="mb-0">1 mutual friends</p>
//                               </div>
//                               <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
//                                  <span className="btn-inner">
//                                     <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
//                                     </svg> 
//                                  </span>                            
//                               </Link>
//                            </li>
//                            <li className="d-flex mb-4 align-items-center">
//                               <div className="img-fluid bg-soft-warning rounded-pill"><Image src={icon2} alt="story-img" className="rounded-pill avatar-40"/></div>
//                               <div className="ms-3 flex-grow-1">
//                                  <h6>Wade Warren</h6>
//                                  <p className="mb-0">3 mutual friends</p>
//                               </div>
//                               <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
//                                  <span className="btn-inner">
//                                     <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
//                                     </svg> 
//                                  </span>                            
//                               </Link>
//                            </li>
//                            <li className="d-flex mb-4 align-items-center">
//                               <div className="img-fluid bg-soft-success rounded-pill"><Image src={icon1} alt="story-img" className="rounded-pill avatar-40"/></div>
//                               <div className="ms-3 flex-grow-1">
//                                  <h6>Guy Hawkins</h6>
//                                  <p className="mb-0">12 mutual friends</p>
//                               </div>                        
//                               <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
//                                  <span className="btn-inner">
//                                     <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
//                                     </svg> 
//                                  </span>                            
//                               </Link>
//                            </li>
//                            <li className="d-flex align-items-center">
//                               <div className="img-fluid bg-soft-info rounded-pill"><Image src={icon8} alt="story-img" className="rounded-pill avatar-40"/></div>
//                               <div className="ms-3 flex-grow-1">
//                                  <h6>Floyd Miles</h6>
//                                  <p className="mb-0">2 mutual friends</p>
//                               </div>
//                               <Link to="#" className="btn btn-outline-primary rounded-circle btn-icon btn-sm p-2">
//                                  <span className="btn-inner">
//                                     <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" currentcolor="#3a57e8">
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                                    
//                                        <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>                 
//                                     </svg> 
//                                  </span>                            
//                               </Link>
//                            </li>
//                         </ul>
//                      </Card.Body>
//                   </Card> */}
//             </Col>
//           ))}
//         </Row>
//       </Tab.Container>
//       <ToastContainer />

//     </>
//   );
// };

// export default UserProfile;


// const Container = styled.div`
//   height: 70vh;
//   width: 35vw;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   gap: 0.1rem;
//   align-items: center;
//   background-color:  white;
//   .container {
//     height: 65vh;
//     width: 40vw;
//     background-color: ;
//     display: grid;
//     grid-template-columns: 96%;
//     @media screen and (min-width: 720px) and (max-width: 1080px) {
//       grid-template-columns: 35% 65%;
//     }
//   }
// `;












