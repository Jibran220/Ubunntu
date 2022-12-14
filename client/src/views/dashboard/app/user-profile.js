// import Card from '../../../components/Card'
// import avatars11 from '../../../assets/images/avatars/01.png'
// import avatars22 from '../../../assets/images/avatars/avtar_1.png'
// import avatars33 from '../../../assets/images/avatars/avtar_2.png'
// import avatars44 from '../../../assets/images/avatars/avtar_3.png'
// import avatars55 from '../../../assets/images/avatars/avtar_4.png'
// import avatars66 from '../../../assets/images/avatars/avtar_5.png'
// import avatars2 from '../../../assets/images/avatars/02.png'
// import avatars3 from '../../../assets/images/avatars/03.png'
// import avatars4 from '../../../assets/images/avatars/04.png'
// import avatars5 from '../../../assets/images/avatars/05.png'
// import chopp from '../../../assets/images/avatars/av.jpg'
// import icon1 from '../../../assets/images/icons/01.png'
// import icon2 from '../../../assets/images/icons/02.png'
// import icon3 from '../../../assets/images/icons/03.png'
// import icon4 from '../../../assets/images/icons/04.png'
// import icon8 from '../../../assets/images/icons/08.png'
// import { BsArrowRightShort } from 'react-icons/bs'
// import FileBase from "react-file-base64";
// import { v4 as uuidv4 } from "uuid";

// import icon6 from '../../../assets/images/icons/06.png'
// import icon7 from '../../../assets/images/icons/07.png'
// import icon5 from '../../../assets/images/icons/05.png'
// import shap2 from '../../../assets/images/shapes/02.png'
// import shap4 from '../../../assets/images/shapes/04.png'
// import shap6 from '../../../assets/images/shapes/06.png'
// import pages2 from '../../../assets/images/pages/02-page.png'
// import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'
// import React, { useEffect, useState, useRef } from "react";
// import FsLightbox from "fslightbox-react";
// import { allUsersRoute, host } from "../utils/APIRoutes";
// import axios from "axios";
// import { jsPDF } from "jspdf";
// import Base64Downloader from 'react-base64-downloader';
// import { io } from "socket.io-client";
// import styled from "styled-components";
// // import {Row,Col,Image,Form,Button,InputGroup,FormControl} from 'react-bootstrap'

// import { Row, Col, Image, Form, Nav, Dropdown, Tab, Table, FormControl, InputGroup ,NavDropdown} from "react-bootstrap";
// import { useHistory, Link, useParams, useLocation } from "react-router-dom";
// import { BsFillArrowRightSquareFill } from "react-icons/bs";
// import Button from 'react-bootstrap/Button';
// import ChatContainer from "../MessagesForAdmin.js/ComponentsForAdmin";
// import Contacts from "../MessagesForAdmin.js/Contacts";
// import Welcome from "../MessagesForAdmin.js/Welcome";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UserProfile = () => {
//    const scrollRef = useRef();
//    const [postData, setPostData] = useState({
//       Regulatory_Model_Name: "",
//       Product_Name: "",
//       Regulatory_Family: "",
//       Product_Category: "BATT",
//       Product_Description: "",
//       Model_Difference: "",
//       Household: "",
//       Commercial: "",
//       Clinical: "",
//       Applicable_Standards: "IEC 60086-1:2015",
//       Applicant_Name_and_Address: "",
//       Manufacturer_Name_and_Address: "",
//       TradeMark: "",
//       Family: "",
//       Market: "Africa",

//       Overall_Size_of_Equipment: "",
//       WebGLShader: "mm",
//       Voltage: "",
//       Phase: "",
//       Frequency: "",
//       Power: "",
//       Current: "",
//       Operation_Mode: "",
//       Ordinary_person: "",
//       Children_likely_present: "",
//       Instructed_person: "",
//       Skilled_person: "",
//       AC_mains: "",
//       DC_mains: "",
//       Battery_Powered: "",
//       Skilled_person: "",

//       Non_detachable_Supply_Cord: "",
//       Appliance_Coupler: "",
//       Direct_plug_in: "",
//       Non_detachable_Supply_Cord_B: "",
//       Appliance_Coupler_B: "",

//       Permanent_connection: "",
//       Mating_connector: "",
//       Movable: "",
//       Transportable: "",
//       Stationary_for_building_in: "",
//       Wall_ceiling_mounted_SRME_rack_mounted: "",
//       Hand_held: "",
//       Other: "",

//       Pollution_Degree: "",
//       Manufacturer_Specific_Max_Operating_Ambient: "",
//       Ingree_Protection_Classification: "",
//       Altitude_During_Operation: "",
//       Mass_Of_Equipment: "",
//       Relative_Humidity: "",
//       Atmospheric_Pressure: "",
//       Indoor: "",
//       Outdoor: "",

//       Copy_of_Marking_Plate: "",
//       WarningOrCautionary_Marking: "",
//       Fuse_Type: "",
//       Fuse_Marking: "",

//       //complaince report
//       Report_Number: "No Option",
//    });
//    const navigate = useHistory();
//    const socket = useRef();
//    const params = useParams();
//    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
//    const location = useLocation();
//    const [show, AccountShow] = useState('A');

//    const [currentUser, setCurrentUser] = useState(user);
//    const [data, setData] = useState([]);
//    const [datapo, setDatapo] = useState([]);
//    const [com, setcom] = useState([]);
//    const [att, setatt] = useState([]);
//    const [data1, setData1] = useState([]);
//    const [comment, setcomment] = useState("");
//    const [attchdfile, setattchdfile] = useState("");
//    const [userid, setuserid] = useState(params.id);
//    const [vendorid, setvendorid] = useState(params.id);
//    const [userattachments, setuserattachments] = useState("");
//    const [contacts, setContacts] = useState([]);
//    const [currentChat, setCurrentChat] = useState(contacts);
//    const [currentaUser, setCurrentaUser] = useState(undefined);
//    const [product, setproduct] = useState("");
//    const [product1, setproduct1] = useState("");
//    const [price, setprice] = useState('');
//    const [result, setresult] = useState('')
//    const [quantity, setquantity] = useState('');
//    /////////////////////////////
//    const [datamessage, setdatamessage] = useState([])
//    const [namem, setnamem] = useState('admin');
//    const [sender, setsender] = useState('admin_id');
//    const [receiver, setreceiver] = useState('vendor_id');
//    const [message, setmessage] = useState('');
// const [showf, setshowf] = useState(true)
//    const [rfqID, setrfqID] = useState('rfqid');

   
//    //////////////////////////
//    const [sendpo, setsendpo] = useState({
//       file: '',
//       body: '',
//       to: '',
//       subject: '',
//       userid: params.id,
//    })
  
//    const [postemail, setpostemail] = useState({
//       id: '',
//       file: '',
//    })

//    //////////////////////

//    const inputhandeler = (e) => { setsendpo({ ...sendpo, [e.target.name]: e.target.value }) }


//    const handleattachments = (e) => {
//       console.log(e.target.files[0])
//       setsendpo({ ...sendpo, file: e.target.files[0] })
//       console.log("==", sendpo.file, "===", sendpo.file.name)
//    };

//    const getcomments = async () => {
//       console.log("clclclclclcclcl", params.id)
//       let result = await fetch(`${Api}/commentrouter/search/${params.id}`);
//       result = await result.json();
//       setcom(result);
//    };
//    const [pdf, setPdf] = useState('')

//    const goback = () => { navigate.push(`/dashboard/app/UserProfile3/${params.id}`) }
//    const pdfGenerator = () => {
//       // AccountShow("Account")
//       const doc = new jsPDF()
//       doc.html(document.querySelector("#jibran"), {
//          callback: function (pdf) {
// setPdf(pdf)
//             pdf.save("mypdf")
//          },
//          x: 10,
//          y: 15,
//          width: 190,
//          windowWidth: 650
         
//       });
//       navigate.push(`/dashboard/app/UserProfile2/${params.id}`)
      
      
//    }
//    const pdfGenerator4 = () => {
//       AccountShow("Personal")
//       const doc = new jsPDF()
//       doc.html(document.querySelector("#jibran"), {
//          callback: function (pdf) {

//             pdf.save("mypdf")
//          },
//          x: 10,
//          y: 15,
//          width: 190,
//          windowWidth: 650

//       });

//    }
//    postemail.id = params.id
//    const handleemail = async (e) => {
//       e.preventDefault();
//       const result = await fetch(`${Api}/po/sendapprover`, {
//          method: "post",
//          body: JSON.stringify(postemail),
//          headers: { "Content-Type": "application/json" },
//       });
//       // result = await result.json();

//       if (result) {
//          alert("Attachment added Succesfully!");


//       }
//       console.warn(result);
//    };



//    const sendEmail = async () => {

//       const formdata = new FormData()
//       formdata.append('file', sendpo.file, sendpo.file.name)
//       formdata.append('to', sendpo.to)

//       const result = await axios.post(`${Api}/pofinal`, formdata)


//       if (result.status == 200) { alert("Email sent to the Vendor!"); }

//       console.warn(result);
//    };
//    const AddComment = async () => {
//       const result = await fetch(`${Api}/CommentRouter`, {
//          method: "post",
//          body: JSON.stringify({ comment, userid }),
//          headers: { "Content-Type": "application/json" },
//       });
//       // result = await result.json();
//       if (result) {
//          toast.info("Comment added Succesfully!");
//          setcomment("");
//       }
//       console.warn(result);
//    };
//    const SendAttachments = async () => {
//       const result = await fetch(`${Api}/attachments`, {
//          method: "post",
//          body: JSON.stringify({ userattachments, vendorid }),
//          headers: { "Content-Type": "application/json" },
//       });
//       // result = await result.json();
//       if (result) {
//          setuserattachments(" ");
//       }
//       console.warn(result);
//    };

//    useEffect(() => {
//       if (currentaUser) {
//          socket.current = io(host);
//          socket.current.emit("add-user", currentaUser._id);
//       }
//    }, [currentaUser]);
//    useEffect(async () => {
//       if (currentaUser) {
//          if (currentaUser.isAvatarImageSet) {
//             const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
//             setContacts(data.data);
//          } else {

//             const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
//             setContacts(data.data);
//          }
//       }
//    }, [currentUser]);
//    useEffect(() => {
//       getproducts();
//       getcomments();
//       getattacments()
//       getpo()
//       getmessage()

//       // getrfqdetail();
//    }, []);

//    const handleChatChange = (chat) => {
//       setCurrentChat(chat);
//       console.log("current_chat", chat);
//    };
//    const handleSubmit = async () => {
//       const result = fetch("${Api}/commentrouter", {
//          method: "post",
//          body: JSON.stringify({ comment, userid }),
//          headers: { "Content-Type": "application/json" },
//       });
//       setcomment("");

//       result = await result.json();
//       if (result) {
//          setcomment("");

//       }
//    };
// const hell=()=>{
//    navigate.push(`/dashboard/special-pages/billing/${params.id}`)
  
// }
//    const getproducts = async () => {
//       let result = await fetch(`${Api}/userRFQ/view/${params.id}`);
//       result = await result.json();

//       console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", result);
//       console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", result._id);
//       console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", result.to);
//       console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", namem);
//       setnamem(result.name)
//       console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", result.status);

//       setsendpo({ to: result.to });
//       setData(result);
//       console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", result._id);
//       console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", result._id);

//       let result1 = await fetch(
//          `${Api}/rfqmanagers/${data.map((tn) => tn.rfq_id)}`
//       );
//       result1 = await result1.json();
//       setData1(result1);
//       console.log(data1);
//    };
//    console.log("kasaslkslasklaklalksjlajsljaslkjasjlkajs", datapo.map((tn) => tn.price * tn.quantity));
//    console.log("mmmmmmmmmmmmmmmmmmkkkkkkkkkkkkkkkkkkkkm", data._id);

//    console.log("i love to work", data.map((tn) => tn.rfq_id));
//    const getattacments = async () => {
//       console.log("clclclclclcclcl", params.id)
//       let result = await fetch(`${Api}/attachments/search/${params.id}`);
//       result = await result.json();
//       setatt(result);
//       console.log(att)
//    };
//    console.log("kasaslkslasklaklalksjlajsljaslkjasjlkajs", datapo.map((tn) => tn.price * tn.quantity));

//    console.log('ccccccccdacassssssssss', result)
//    console.log('ccccccccdacassssssssss', result)
//    console.log('ccccccccdacassssssssss', result)
//    console.log('ccccccccdacassssssssss', result)

//    const getpo = async () => {
//       let result = await fetch(`${Api}/poattachments/search/${params.id}`);
//       result = await result.json();
//       console.log("kasaslkslasklaklalksjlajsljaslkjasjlkajs", datapo.map((tn) => tn.price * tn.quantity));

//       setDatapo(result);
//    };
//    const Addmessage = async () => {
//       const result = await fetch(`${Api}/message`, {
//          method: "post",
//          body: JSON.stringify({ namem, sender, receiver, message, rfqID }),
//          headers: { "Content-Type": "application/json" },
//       });
//       // result = await result.json();
//       if (result) {
//          toast.info("Message Sent Succesfully!");

//       }
//       console.warn(result);
//    };

//    const getmessage = async () => {
//       let result = await fetch(`${Api}/message/search/rfqid`);
//       result = await result.json();
//       setdatamessage(result);
//    };

//    const handleSubmitforpo = async () => {
//       console.log("kasaslkslasklaklalksjlajsljaslkjasjlkajs", datapo.map((tn) => tn.price * tn.quantity));

//       const result = fetch("${Api}/poattachments", {
//          method: "post",
//          body: JSON.stringify({
//             product,
//             price,
//             quantity,
//             vendorid,
//          }),
//          headers: { "Content-Type": "application/json" },
//       });
//       if (result) {
//          getpo()
//          getpo()
//          getpo()
//          getpo()
//          getpo()
//          getpo()
//          setproduct('')
//          setprice('')
//          setquantity('')

//          // navigate("/");
//       }

//    };
//    const [toggler, setToggler] = useState(false);
//    useEffect(async () => { if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
//    useEffect(() => {
//       if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//          if (user.username === "Admin1") { navigate.push('/approver') }
//          else if (user.username !== "Admin") { navigate.push('/ath') }
//       }
//       else {
//          navigate.push('/auth/sign-in')
//       }
//    }, [])
//    return (
//       <>
//          <FsLightbox
//             toggler={toggler}
//             sources={[icon4, shap2, icon8, shap4, icon2, shap6, icon5, shap4, icon1]}
//          />
//          <Tab.Container defaultActiveKey="first">
//             <Row>
//                <Col lg="12">
//                   <Card>
//                      <Card.Body>
//                         <div className="d-flex flex-wrap align-items-center justify-content-between">
//                            <div className="d-flex flex-wrap align-items-center">
//                               <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
//                                  <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
//                                  <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic" />
//                                  <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic" />
//                                  <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
//                                  <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic" />
//                                  <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic" />
//                               </div>
//                               <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
//                                  {data.map((item) => (
//                                     <h4 className="me-2 h4">{item.rfq_name}</h4>
//                                  ))}


//                                  {data.map((item) => (
//                                     <span> - {item.Name}</span>
//                                  ))}                                 </div>
//                            </div>
//                            <Nav as="ul" className="d-flex nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">
//                               <Nav.Item as="li">
//                                  <Nav.Link eventKey="first"  >Feed</Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item as="li">
//                                  <Nav.Link eventKey="second"  >Activity</Nav.Link>
//                               </Nav.Item>

//                               <Nav.Item as="li">
//                                  <Nav.Link eventKey="fourth" onClick={hell}>P.O</Nav.Link>
//                               </Nav.Item>
//                               <Nav.Item as="li">
//                                  <Nav.Link eventKey="fifth">Quote</Nav.Link>
//                               </Nav.Item>
//                            </Nav>
//                         </div>
//                      </Card.Body>
//                   </Card>
//                </Col>
//                <Col lg="3" className="col-lg-3">
//                   <Card>
//                      <Card.Header>
//                         <div className="header-title">
//                            <h4 className="card-title">Announcments</h4>
//                         </div>
//                      </Card.Header>
//                      <Card.Body>
//                         {com.map((item) => (
//                            <ul className="list-inline m-0 p-0">
//                               <li className="d-flex mb-2">
//                                  <div className="news-icon me-3">
//                                     <svg width="20" viewBox="0 0 24 24">
//                                        <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
//                                     </svg>
//                                  </div>
//                                  <p className="news-detail mb-0">{item.comment}</p>
//                               </li>

//                            </ul>
//                         ))}
//                         <Form className="comment-text d-flex align-items-center mt-3" >
//                            <Form.Control type="text" className="rounded" placeholder="Type here!" value={comment}
//                               onChange={(e) => {
//                                  setcomment(e.target.value);
//                               }} />
//                            <div className="comment-attagement d-flex">
//                               <Link to="#" className="me-2 text-body" onClick={AddComment}>
//                                  <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path fillRule="evenodd" clipRule="evenodd"
//                                        d="M21.25 16.334V7.665C21.25 4.645 19.111 2.75 16.084 2.75H7.916C4.889 2.75 2.75 4.635 2.75 7.665L2.75 16.334C2.75 19.364 4.889 21.25 7.916 21.25H16.084C19.111 21.25 21.25 19.364 21.25 16.334Z"
//                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M16.0861 12H7.91406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M12.3223 8.25205L16.0863 12L12.3223 15.748" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
//                                        strokeLinejoin="round" />
//                                  </svg>
//                               </Link>

//                            </div>
//                         </Form>
//                      </Card.Body>
//                   </Card>

//                </Col>
//                <Col lg="6">
//                   <Tab.Content className="profile-content">
//                      <Tab.Pane eventKey="first" id="profile-feed">
//                         <Card>
//                            <Card.Header className="d-flex align-items-center justify-content-between pb-4">
//                               <div className="header-title">
//                                  <div className="d-flex flex-wrap">
//                                     <div className="media-support-user-img me-3">
//                                        <Image className="rounded-pill img-fluid avatar-60 bg-soft-danger p-1 ps-2" src={avatars2} alt="" />
//                                     </div>
//                                     <div className="media-support-info mt-2">
//                                        <h5 className="mb-0">Description</h5>
//                                        <p className="mb-0 text-primary"></p>
//                                     </div>
//                                  </div>
//                               </div>

//                            </Card.Header>
//                            <Card.Body className="p-0">

//                               <div className="comment-area p-3">


//                                  {data.map((item) => (
//                                     <p>{item.description}</p>
//                                  ))}
//                                  <hr />

//                               </div>
//                            </Card.Body>
//                         </Card>
//                         <Card>
//                            <Card.Header className="d-flex align-items-center justify-content-between pb-4">
//                               <div className="header-title">
//                                  <div className="d-flex flex-wrap">
//                                     <div className="media-support-user-img me-3">
//                                        <Image className="rounded-pill img-fluid avatar-60 bg-soft-danger p-1 ps-2" src={chopp} alt="" />
//                                     </div>
//                                     <div className="media-support-info mt-2">
//                                        <h5 className="mb-0">Chat</h5>
//                                        <p className="mb-0 text-primary"></p>
//                                     </div>
//                                  </div>
//                               </div>

//                            </Card.Header>
//                            <Card.Body>
                          
//                            <Container>  
//                            <div className="chat-messages">   {datamessage.map((item) => {
//           return (
//             <div ref={scrollRef} key={uuidv4()}>
           
//               <div
//                 className={`message ${
//                   item.sender == "admin_id" ? "sended" : "recieved"
//                 }`}
//               >
//                 <div className="content ">
//                   <p>{item.message}</p>
               
             
//               </div>
//             </div>
//             </div>
//           );
//         })}
//         </div>  </Container>
                            
       
//                               {/* <Form className="comment-text d-flex align-items-center mt-3" >
//                            <Form.Control type="text" className="rounded" placeholder="Type here!" value={message}
//                               onChange={(e) => {
//                                  setmessage(e.target.value);
//                               }} />
//                            <div className="comment-attagement d-flex">
//                               <Link to="#" className="me-2 text-body" onClick={Addmessage}>
//                                  <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path fillRule="evenodd" clipRule="evenodd"
//                                        d="M21.25 16.334V7.665C21.25 4.645 19.111 2.75 16.084 2.75H7.916C4.889 2.75 2.75 4.635 2.75 7.665L2.75 16.334C2.75 19.364 4.889 21.25 7.916 21.25H16.084C19.111 21.25 21.25 19.364 21.25 16.334Z"
//                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M16.0861 12H7.91406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                     <path d="M12.3223 8.25205L16.0863 12L12.3223 15.748" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
//                                        strokeLinejoin="round" />
//                                  </svg>
//                               </Link>

//                            </div>
//                         </Form> */}
//                               <Form action="#">
//                                  <InputGroup className="mb-3">
//                                     <FormControl type="text" placeholder="Type here..." aria-label="Type here..." aria-describedby="basic-addon2" value={message}
//                                        onChange={(e) => {
//                                           setmessage(e.target.value);
//                                        }} />
//                                     <Button type="button" onClick={Addmessage} className="input-group-text btn-primary" id="basic-addon2">
//                                        <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                           <path d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z" fill="currentColor"></path>
//                                           <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079ZM6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003ZM7.02539 21.5683C7.17139 21.7153 7.36339 21.7883 7.55539 21.7883C7.74739 21.7883 7.93939 21.7153 8.08539 21.5683L9.45139 20.2033C9.74339 19.9103 9.74339 19.4353 9.45139 19.1423C9.15839 18.8503 8.68339 18.8503 8.39039 19.1423L7.02539 20.5083C6.73239 20.8013 6.73239 21.2753 7.02539 21.5683Z" fill="currentColor"></path>
//                                        </svg>
//                                     </Button>
//                                  </InputGroup>
//                               </Form>
//                            </Card.Body>
//                         </Card>
//                         {/* <Container>

//                            <div className="container">
//                               <Contacts contacts={contacts} changeChat={handleChatChange} />
//                               {currentChat === undefined ? (
//                                  <Welcome />
//                               ) : (
//                                  <ChatContainer currentChat={currentChat} socket={socket} />
//                               )}
//                            </div>
//                         </Container> */}


//                      </Tab.Pane>
//                      <Tab.Pane eventKey="second" id="profile-activity">

//                         <Card>

//                            <fieldset className={`${show === "A" ? "d-block" : "d-none"}`}>


//                               <Card>
//                                  <Card.Header className="d-flex justify-content-between">
//                                     <div className="header-title">
//                                        <h4 className="card-title">Activity</h4>
//                                     </div>
//                                  </Card.Header>
//                                  <Card.Body>
//                                     {att.map((asd) => (
//                                        <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
//                                           <ul className="list-inline p-0 m-0">
//                                              <li>

//                                                 <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>

//                                                 <a href={asd.files} download>   <h6 className="float-left mb-1">{asd.title}</h6></a>


//                                                 <small className="float-right mt-1">{asd.Dates}</small>

//                                                 <div className="d-inline-block w-100">
//                                                    <p> <b><i><u><Link onClick={goback} className="ms-3">{asd.clickhere} </Link></u></i></b></p>


//                                                 </div>
//                                              </li>

//                                           </ul>
//                                        </div>
//                                     ))}

//                                  </Card.Body>
//                               </Card>

//                            </fieldset>
//                            <fieldset className={`${show === "Account" ? "d-block" : "d-none"}`}>
//                               <Card.Header className="d-flex justify-content-between">


//                               </Card.Header>
//                               <div className="card">
//                                  <div className="card-body">
//                                     <div className="container mb-5 mt-3" id="heo">
//                                        <div className="row d-flex align-items-baseline">
//                                           <div className="col-xl-9">
//                                              <p style={{ color: "#7e8d9f", fontSize: 20 }}>
//                                                 Invoice #<strong>  {params.id}</strong>
//                                              </p>
//                                           </div>

//                                           <hr />
//                                        </div>
//                                        <div className="container">
//                                           <div className="col-md-12">
//                                              <div className="text-center">
//                                                 <br />
//                                                 {/* <p className="pt-0">MDBootstrap.com</p> */}
//                                              </div>
//                                           </div>
//                                           {data.map((item) => (

//                                              <div className="row">
//                                                 <div className="col-xl-8">
//                                                    <ul className="list-unstyled">
//                                                       <li contenteditable="true" className="text-muted">
//                                                          To: <span style={{ color: "#5d9fc5" }}>{item.to}</span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          Name: <span style={{ color: "#5d9fc5" }}>{item.Name}</span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          Issue Date: <span style={{ color: "#5d9fc5" }}>{item.Dates}</span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          Phone: <span style={{ color: "#5d9fc5" }}>{item.Work_Phone}</span>
//                                                       </li>


//                                                    </ul>
//                                                 </div>
//                                                 <div className="col-xl-4">
//                                                    <p contenteditable="true" className="text-muted">Invoice</p>
//                                                    <ul className="list-unstyled">


//                                                       <li contenteditable="true" className="text-muted">
//                                                          <i className="fas " style={{ color: "#84B0CA" }} />{" "}
//                                                          <span className="me-1 ">Status:</span>
//                                                          <span className="badge bg-warning text-black ">
//                                                             {item.status}
//                                                          </span>
//                                                       </li>
//                                                    </ul>
//                                                 </div>
//                                              </div>
//                                           ))}
//                                           <div className="row my-2 mx-1 justify-content-center">
//                                           <Row className="">
//                 <Col lg="12" className="">
//                     <Card className="rounded">
//                         <Card.Body className="">
//                         <div class="row">
//     <div class="col-md-12">
//         <div class="row">
//             <div class="col-md-3">
            
//                 <table class="table">
// Description                </table>
//             </div> 
//             <div class="col-md-3">
           
//                 <table class="table">
//                 DATE                </table>
//             </div> 
//             <div class="col-md-3">
         
//                 <table class="table">
//                 QTY                </table>
//             </div> 
//             <div class="col-md-3">
           
//                 <table class="table">
//                 PRICE
//                 </table>
//             </div>          
//         </div>
//     </div>
// </div>
 
// <div class="row">
//     <div class="col-md-12">
//             {datapo.map((item)=>(
//         <div class="row">
//             <div class="col-md-3">
//                      <Form.Group className="mb-3 form-group">
                     
//                      {item.product}
//                  </Form.Group>
               
       
//           </div> 
               
//             <div class="col-md-3">
           
//                 <table class="table">
//                 23-59-5959
//                 </table>
//             </div> 
//             <div class="col-md-3">
         
//                 <table class="table">
//                 {item.quantity}
//                 </table>
//             </div> 
//             <div class="col-md-3">
           
//                 <table class="table">
//                 {item.price}
//                 </table>
//             </div>  
//         </div>
//                 ))}
                       
//     </div>
// </div>
                             
//                             <Row>
//                                 <Col sm="12">
//                                     <p className="mb-0 mt-4">
//                                         <svg width="30" className="text-primary mb-3 me-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
//                                             <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
//                                             <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
//                                             <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
//                                         </svg>
//                                         It is a long established fact that a reader will be distracted by the readable content of a page
//                                         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
//                                         as opposed to using 'Content here, content here', making it look like readable English.
//                                     </p>
//                                     <div className="d-flex justify-content-center mt-4">
//                                         <button type="button" className="btn btn-primary">Print</button>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//                                           </div>
//                                           <div className="row">
//                                              <div className="col-xl-8">
//                                                 <p className="ms-3">Add additional notes and payment information</p>
//                                              </div>
//                                              <div className="col-xl-3">

//                                                 <p className="text-black float-start">
//                                                    {/* <span className="text-black me-3"> Total</span> */}
//                                                    {/* <span style={{ fontSize: 25 }}>$1221</span> */}
//                                                 </p>
//                                              </div>
//                                           </div>
//                                           <hr />
//                                           <div className="row">
//                                              <div className="col-xl-10">
//                                                 <p>Thank you for your purchase</p>
//                                              </div>

//                                              <div className="col-xl-2">

//                                              </div>
//                                           </div>
//                                        </div>
//                                     </div>
//                                     <Button size="25px" onClick={() => AccountShow("A")} variant="btn btn-primary">back </Button>{' '}
//                                     <Button size="25px" onClick={pdfGenerator4} variant="btn btn-primary">GO </Button>{' '}
//                                  </div>
//                               </div>

//                            </fieldset>
//                            <fieldset
//                               className={`${show === "Personal" ? "d-block" : "d-none"}`}
//                            >
//                               <Card>
//                                  <Card.Body>
//                                     <div class="file-upload-wrapper">

//                                        {/* <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" /> */}

//                                        {data.map((item) => (
//                                           <Form.Group className="form-group">
//                                              <Form.Label htmlFor="exampleInputText1">Email: </Form.Label>
//                                              <Form.Control type="text" id="exampleInputText1" name="to" value={sendpo.to} defaultValue={item.to} onChange={(e) => setsendpo({ ...sendpo, to: e.target.value })} />
//                                           </Form.Group>
//                                        ))}

//                                        <Form.Group>
//                                           <Form.Label className="custom-file-input"> Add file</Form.Label>
//                                           <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" />
//                                        </Form.Group>

//                                     </div>
//                                     <br />

//                                     <Button variant="btn btn-primary" type="button" onClick={sendEmail}>Send to Vendor</Button>{' '}


//                                     <button
//                                        type="button"
//                                        name="previous"
//                                        className="btn btn-dark previous action-button-previous float-end me-1"
//                                        value="Previous"
//                                        onClick={() => AccountShow("Account")}
//                                     >
//                                        Back
//                                     </button>
//                                  </Card.Body>
//                               </Card>
//                            </fieldset>
//                         </Card>
//                      </Tab.Pane >
//                      <Tab.Pane eventKey="third" id="profile-friends">
                      
//                      </Tab.Pane >
//                      <Tab.Pane eventKey="fourth" id="profile-profile">
//                         {/* <Card className="rounded" id="hellobhi">
//                            <Card.Body className="">
//                               <Row className="">
//                                  <Col sm="12" className="">
//                                     <h4 className="mb-2">Invoice  #215462</h4>
//                                     <br />
//                                     <br />
//                                     <h5 className="mb-3">Name: Devon Lane </h5>
//                                     <h5 className="mb-3">Company Name: Devon Lane </h5>
//                                     <h5 className="mb-3">RFQ: Devon Lane </h5>
//                                     <br />
//                                     <h5 className="mb-3">Join Date: Devon Lane </h5>
//                                     <hr />

//                                  </Col>
//                               </Row>
//                               <Row className="">
//                                  <Col sm="12" className=" mt-4">
//                                     <div className="table-responsive-lg">
//                                        <Table className="">
//                                           <thead>
//                                              <tr>
//                                                 <th scope="col">Item</th>
//                                                 <th className="text-center" scope="col">Quantity</th>
//                                                 <th className="text-center" scope="col">Price</th>
//                                                 <th className="text-center" scope="col">Totals</th>
//                                              </tr>
//                                           </thead>
//                                           <tbody>
//                                              <tr>
//                                                 <td>
                                                  
//                                                    <div className="col-md-8">
//                                                       <div className="form-group">

//                                                          <input
//                                                             type="text"
//                                                             name="Product_Name"
//                                                             placeholder='Item'
//                                                             className="form-control"
//                                                             value={product}onChange={(e) => {setproduct(e.target.value)}}
//                                                          />
//                                                       </div>
//                                                    </div>
//                                                 </td>
//                                                 <td className="text-center"> 
//                                                 <div className="col-md-8">
//                                                       <div className="form-group">

//                                                          <input
//                                                             type="number"
//                                                             name="Product_Name"
//                                                             placeholder='Quantity'
//                                                             className="form-control"
//                                                             value={quantity}onChange={(e) => {setquantity(e.target.value)}}

//                                                          />
//                                                       </div>
//                                                    </div></td>
//                                                 <td className="text-center"> <div className="col-md-7">
//                                                       <div className="form-group">

//                                                       <input
//                                                             type="number"
//                                                             name="Product_Name"
//                                                             placeholder='Price'
//                                                             className="form-control"
//                                                             value={price}onChange={(e) => {setprice(e.target.value)}}
//                                                          />
//                                                       </div>
//                                                    </div></td>
//                                                 <td className="text-center"><input className='btn btn-primary' type='button' value='Add' onClick={handleSubmitforpo} /></td>
//                                              </tr>
//                                              {datapo.map((item) => (
//                                              <tr>
//                                                 <td>
                                                  
//                                                    <div className="col-md-8">
//                                                       <div className="form-group">

//                                                       {item.product}
//                                                       </div>
//                                                    </div>
//                                                 </td>
//                                                 <td className="text-center"> 
//                                                 <div className="col-md-8">
//                                                       <div className="form-group">

//                                                       {item.quantity}
//                                                       </div>
//                                                    </div></td>
//                                                 <td className="text-center"> <div className="col-md-7">
//                                                       <div className="form-group">
//                                                       {item.price} 
//                                                       </div>
//                                                    </div></td>
//                                                 <td className="text-center">  300$</td>
//                                              </tr>
//                                              ))}

//                                              <tr>
//                                                 <td>
//                                                    <h6 className="mb-0">Total</h6>
//                                                 </td>
//                                                 <td className="text-center"></td>
//                                                 <td className="text-center"></td>
//                                                 <td className="text-center">$2,880.00</td>
//                                              </tr>
//                                              <tr>
//                                                 <td>
//                                                    <h6 className="mb-0">Taxs</h6>
//                                                 </td>
//                                                 <td className="text-center"></td>
//                                                 <td className="text-center"></td>
//                                                 <td className="text-center">$2,880.00</td>
//                                              </tr>
//                                              <tr>
//                                                 <td>
//                                                    <h6 className="mb-0">Discount</h6>
//                                                 </td>
//                                                 <td className="text-center"></td>
//                                                 <td className="text-center"></td>
//                                                 <td className="text-center">$2,880.00</td>
//                                              </tr>
//                                              <tr>
//                                                 <td>
//                                                    <h6 className="mb-0">Net Amount</h6>
//                                                 </td>
//                                                 <td className="text-center"></td>
//                                                 <td className="text-center"></td>
//                                                 <td className="text-center"><b>$2,880.00</b></td>
//                                              </tr>
//                                           </tbody>
//                                        </Table>
//                                     </div>
//                                  </Col>
//                               </Row>
//                               <Row>
//                                  <Col sm="12">
//                                     <p className="mb-0 mt-4">
//                                        <svg width="30" className="text-primary mb-3 me-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                           <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
//                                           <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
//                                           <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
//                                           <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
//                                        </svg>
//                                        It is a long established fact that a reader will be distracted by the readable content of a page
//                                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
//                                        as opposed to using 'Content here, content here', making it look like readable English.
//                                     </p>
//                                     <div className="d-flex justify-content-center mt-4">
//                                        <button type="button" className="btn btn-primary" onClick={pdfGenerator} >Print</button>
//                                     </div>
//                                  </Col>
//                               </Row>
//                            </Card.Body>
//                         </Card> */}




//                         <Card>

//                            <Card.Body>


//                               <fieldset
//                                  className={`${show === "A" ? "d-block" : "d-none"}`}
//                               >







//                                  <Card.Header className="d-flex justify-content-between">

//                                     <Card>
//                                        <Card.Header className="d-flex justify-content-between">
//                                           <div className="header-title">
//                                              <h4 className="card-title"> Add Items</h4>
//                                           </div>
//                                        </Card.Header>
//                                        <Card.Body>
//                                           <Form>
//                                              <Row>
//                                                 <Col>
//                                                    <Form.Control type="text" placeholder="Item" value={product} onChange={(e) => { setproduct(e.target.value) }} />
//                                                 </Col>
//                                                 <Col>
//                                                    <Form.Control type="text" placeholder="Quantity" value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
//                                                 </Col>
//                                                 <Col>
//                                                    <Form.Control type="text" placeholder="Price" value={price} onChange={(e) => { setprice(e.target.value) }} />
//                                                 </Col>
//                                              </Row>

//                                              <br />
//                                              <Row>
//                                                 <Button size="25px" onClick={handleSubmitforpo} variant="btn btn-primary">Add</Button>{' '}

//                                              </Row>
//                                           </Form>
//                                        </Card.Body>
//                                     </Card>
//                                     <hr />
//                                  </Card.Header>
//                                  <div className="card">
//                                     <div className="card-body">
//                                        <div className="container mb-5 mt-3" id="jibran">
//                                           <div className="row d-flex align-items-baseline">
//                                              <div className="row">
//                                                 <div className="col-xl-6">
//                                                    <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
//                                                    <br />
//                                                    <br />

//                                                    {/* <h4 style={{ color: "#7e8d9f", fontSize: 20 }}>
//                                                   <b> INTERTEK TESTING SERVICES INC</b>
//                                                 </h4> */}
//                                                    <ul className="list-unstyled">

//                                                       <li contenteditable="true" className="text-muted">
//                                                          <h4>  <b> INTERTEK TESTING SERVICES INC</b> </h4><span style={{ color: "#5d9fc5" }}></span>
//                                                       </li>
//                                                    </ul>
//                                                 </div>
//                                                 <div className="col-xl-6">
//                                                    <br />

//                                                    <br />
//                                                    <br />
//                                                    <br />
//                                                    <br />

//                                                    <ul className="list-unstyled">

//                                                       <li contenteditable="true" className="text-muted">
//                                                          <h5>   Becton, Dickinson and Company  </h5><span style={{ color: "#5d9fc5" }}></span>
//                                                       </li>
//                                                    </ul>
//                                                 </div>
//                                              </div>

//                                              <div className="row">
//                                                 <div className="col-xl-7">
//                                                    <ul className="list-unstyled">
//                                                       <i>
//                                                          <li contenteditable="true" className="text-muted">
//                                                             399 US ROUTE 11 INDUSTRIAL PARK  <span style={{ color: "#5d9fc5" }}></span>
//                                                          </li>
//                                                          <li contenteditable="true" className="text-muted">
//                                                             CORTLAND<span style={{ color: "#5d9fc5" }}> </span>
//                                                          </li>
//                                                          <li contenteditable="true" className="text-muted">
//                                                             CORTLAND, NY 13045 <span style={{ color: "#5d9fc5" }}></span>
//                                                          </li>
//                                                       </i>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          Attn: BD Supplier <span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          Phone: +1(800) 967-5352 <span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          Fax: +1 (650) 463-2910 <span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          <br />

//                                                          <Card className="mb-0">
//                                                             <Card.Body>
//                                                                <h5 className="card-title">Ship To:</h5>
//                                                                <p className="card-text">    <ul className="list-unstyled">
//                                                                   <i>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         Becton, Dickinson and Company  <span style={{ color: "#5d9fc5" }}></span>
//                                                                      </li>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         2350 Qume Drive<span style={{ color: "#5d9fc5" }}> </span>
//                                                                      </li>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         SAN JOSE, CA 95131-1812 <span style={{ color: "#5d9fc5" }}></span>
//                                                                      </li>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         23402 <span style={{ color: "#5d9fc5" }}></span>
//                                                                      </li>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         Attn <span style={{ color: "#5d9fc5" }}></span>
//                                                                      </li>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         United States  <span style={{ color: "#5d9fc5" }}></span>
//                                                                      </li>
//                                                                   </i>



//                                                                </ul>
//                                                                </p>
//                                                             </Card.Body>
//                                                          </Card><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <br />


//                                                    </ul>
//                                                 </div>
//                                                 <div className="col-xl-5">
//                                                    <ul className="list-unstyled">

//                                                       <li contenteditable="true" className="text-muted">
//                                                          PO NUMBER:  6900921615 <span style={{ color: "#5d9fc5" }}></span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          DATE: 11/02/22<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          PAYMENT TERMS: 1061 Net 90 Days<span style={{ color: "#5d9fc5" }}></span>
//                                                       </li>

//                                                       <li contenteditable="true" className="text-muted">
//                                                          SHIPPING TERMS: FCA <span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          CURRENCY: USD<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          CONTRACT:<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          CONTACT:<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          <br />
//                                                          <Card className="mb-0">
//                                                             <Card.Body>
//                                                                <h5 className="card-title">Bill To:</h5>
//                                                                <p className="card-text">    <ul className="list-unstyled">
//                                                                   <i>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         Becton, Dickinson, and Company <span style={{ color: "#5d9fc5" }}></span>
//                                                                      </li>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         PO Box 5200<span style={{ color: "#5d9fc5" }}> </span>
//                                                                      </li>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         Rantoul, IL 61866-5200 <span style={{ color: "#5d9fc5" }}></span>
//                                                                      </li>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         Attn: Accounts Payable <span style={{ color: "#5d9fc5" }}></span>
//                                                                      </li>
//                                                                      <li contenteditable="true" className="text-muted">
//                                                                         United States <span style={{ color: "#5d9fc5" }}></span>
//                                                                      </li>

//                                                                   </i>
//                                                                </ul>
//                                                                </p>
//                                                             </Card.Body>
//                                                          </Card><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>




//                                                    </ul>
//                                                 </div>
//                                              </div>


//                                              <div className="row">
//                                                 <div className="col-xl-15">
//                                                    <ul className="list-unstyled">

//                                                       <li contenteditable="true" className="text-muted">
//                                                          <b><i><u>Note: </u></i> </b>Price as per attached quote # Qu-01308416-0 <span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          <b><i><u>Note: </u></i> </b>FCA - CORTLAND, NY <span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          <b><i><u>Note: </u></i> </b>FedEx# 140212393 ABF<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          <b>Shipping instructions:</b><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          Small parcels less than 150 Ibs/70 kg - use BD FedEx acct<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          Parcels Over 150 Ibs/70kg — Use designated LTL carrier to schedule pick up else contact buyer for shipping instructions - Mohammed.zeeshan@bd.com<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          <b><i><u>Note: </u></i> </b>***Please confirm by selecting Acknowledge Order or Email- Mohammed.zeeshan@bd.com<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li contenteditable="true" className="text-muted">
//                                                          *** Please see attached for Instructions on acknowledgements, invoicing and international Shipment.</li>
//                                                    </ul>
//                                                 </div>
//                                              </div>



//                                              <hr />
//                                           </div>
                                         

 
// <hr/>
// <Row className="">
//                 <Col lg="12" className="">
//                     <Card className="rounded">
//                         <Card.Body className="">
//                         <div class="row">
//     <div class="col-md-12">
//         <div class="row">
//             <div class="col-md-3">
            
//                 <table class="table">
// <b>Description</b>                </table>
//             </div> 
//             <div class="col-md-3">
           
//                 <table class="table">
//                <b> DATE  </b>              </table>
//             </div> 
//             <div class="col-md-2">
         
//                 <table class="table">
//               <b>  QTY  </b>              </table>
//             </div> 
//             <div class="col-md-2">
           
//                 <table class="table">
//               <b>  PRICE</b>
//                 </table>
//             </div>       
//             <div class="col-md-2">
           
//            <table class="table">
//          <b>  Total</b>
//            </table>
//        </div>      
//         </div>
//     </div>
// </div>
 
// <div class="row">
//     <div class="col-md-12">
//             {datapo.map((item)=>(
//         <div class="row">
//             <div class="col-md-3">
//                      <Form.Group className="mb-3 form-group">
                     
//                      {item.product}
//                  </Form.Group>
               
       
//           </div> 
               
//             <div class="col-md-3">
           
//                 <table class="table">
//                 23-59-5959
//                 </table>
//             </div> 
//             <div class="col-md-2">
         
//                 <table class="table">
//                 {item.quantity}
//                 </table>
//             </div> 
//             <div class="col-md-2">
           
//                 <table class="table">
//                 {item.price}
//                 </table>
//             </div>  
//             <div class="col-md-2">
           
//            <table class="table">
//            {item.price*item.quantity}
//            </table>
//        </div> 
//         </div>
//                 ))}
                       
//     </div>
// </div>
                             
//                             <Row>
//                                 <Col sm="12">
//                                     <p className="mb-0 mt-4">
//                                         <svg width="30" className="text-primary mb-3 me-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
//                                             <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
//                                             <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
//                                             <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
//                                         </svg>
//                                         It is a long established fact that a reader will be distracted by the readable content of a page
//                                         when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
//                                         as opposed to using 'Content here, content here', making it look like readable English.
//                                     </p>
//                                     <div className="d-flex justify-content-center mt-4">
//                                         <button type="button" className="btn btn-primary">Print</button>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

                                                
                                          
//                                              <hr />
//                                              <div className="row">
//                                                 <div className="col-xl-12">
//                                                    <p class="text-center text-danger ">As of <u>January 4, 2021</u>, BD will no longer accept paper or PDF invoices.</p>
//                                                    <ul className="list-unstyled">

//                                                       <li className="text-center ">
//                                                          <b>Need help with invoice or you want to make a payment inquiry?</b><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li className="text-center">
//                                                          <b>Req to Pay Customer Service:</b><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>

//                                                       <li className="text-center">
//                                                          Monday through Friday<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li className="text-center">
//                                                          <b>Phone:</b><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li className="text-center">
//                                                          855-4BD-Help (855-423-4357)<span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li className="text-center">
//                                                          <b>Online:</b><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li className="text-center">
//                                                          <a >BD.com/Services</a><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li className="text-center">
//                                                          <b>For Terms & Condition, visit: :</b><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>
//                                                       <li className="text-center">
//                                                          North America: <a>PO Terms and Conditions</a><span style={{ color: "#5d9fc5" }}> </span>
//                                                       </li>

//                                                    </ul>








//                                                    <p > This document isa Purchase Order from Becton, Dickinson and Company issued from our new BD BuySmart solution, powered by Coupa. Please process this order the same as you would any other PO from BD. If you have any questions or concems about thi order, please visit our BD Services Store at ww.hs.com/services (registration may be
//                                                       required) oc cll the Reqo-Pay customer servic team a 385-425-4957
//                                                    </p>
//                                                 </div>
//                                                 <div className="col-xl-3">

//                                                    <p className="text-black float-start">
//                                                       {/* <span className="text-black me-3"> Total</span> */}
//                                                       {/* <span style={{ fontSize: 25 }}>$1221</span> */}
//                                                    </p>
//                                                 </div>
//                                              </div>
//                                              <hr />
//                                              <div className="row">
//                                                 <div className="col-xl-12">
//                                                    <p>The purchases on this Purchase Order are assumed tobe Taxable for Sales Tax unless an exemption cerfiate hs been provided sepaatly or this transaction
//                                                    </p>
//                                                 </div>

//                                                 <div className="col-xl-2">

//                                                 </div>
//                                              </div>
                                       
//                                        </div>
//                                        <Button size="25px" onClick={pdfGenerator} variant="btn btn-primary">GO </Button>{' '}
//                                     </div>
//                                  </div>





//                               </fieldset>
//                               <fieldset
//                                  className={`${show === "Account" ? "d-block" : "d-none"}`}
//                               >
//                                  <div class="file-upload-wrapper">

//                                     {/* <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" /> */}
//                                     <FileBase type="file" multiple={''} onDone={({ base64 }) => setpostemail({ ...postData, file: base64 })} />


//                                  </div>
//                                  <br />

//                                  <button
//                                     type="button"
//                                     name="next"
//                                     className="btn btn-primary next action-button float-end"
//                                     onClick={handleemail}

//                                  >
//                                     Send For Approval
//                                  </button>
//                                  <button
//                                     type="button"
//                                     name="previous"
//                                     className="btn btn-dark previous action-button-previous float-end me-1"
//                                     value="Previous"
//                                     onClick={() => AccountShow("A")}
//                                  >
//                                     Previous
//                                  </button>
//                               </fieldset>


//                            </Card.Body>
//                         </Card>
//                      </Tab.Pane >
//                      <Tab.Pane eventKey="fifth" id="profile-profile">

                     
//                      <Row>
//             <Col sm="12">
//                <Card>
                
//                   <Card.Body className="px-0">
//                      <div className="table-responsive">
//                         <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
//                            <thead>
//                               <tr className="ligth">
//                               <th>Name</th>
//                         <th>Status</th>
//                         <th>Date</th>
//                         <th>Expiry Date</th>
//                         <th> </th>
                                
//                               </tr>
//                            </thead>
//                            <tbody>
                          
//                               <tr>
//                               <td> Gohan</td>
//                           <td>Active</td>
//                           <td>2-3-2022 </td>
//                           <td>1-5-2022 </td>
//                           <td><NavDropdown title=" " id="collasible-nav-dropdown">
//                                                             <NavDropdown.Item href="#">View</NavDropdown.Item>
//                                                             <NavDropdown.Item href="#">Download</NavDropdown.Item>
//                                                             <NavDropdown.Item href="#">Update</NavDropdown.Item>
//                                                             <NavDropdown.Item href="#">Delete</NavDropdown.Item>
                                                         
//                                                         </NavDropdown></td>
                               
//                               </tr>
//                               <tr>
//                               <td> Goku</td>
//                           <td>Draft</td>
//                           <td>2-3-2022 </td>
//                           <td>1-5-2022 </td>
//                           <td><NavDropdown title="  " id="collasible-nav-dropdown">
//                                                             <NavDropdown.Item href="#">Action</NavDropdown.Item>
//                                                             <NavDropdown.Item href="#">Another action</NavDropdown.Item>
//                                                             <NavDropdown.Item href="#">Something</NavDropdown.Item>
//                                                             <NavDropdown.Divider />
//                                                             <NavDropdown.Item href="#action/3.4">Something else ehere</NavDropdown.Item>
//                                                         </NavDropdown></td>
                               
//                               </tr> 
//                               <tr>
//                               <td> Jhon</td>
//                           <td>Pending</td>
//                           <td>2-3-2022 </td>
//                           <td>1-5-2022 </td>
//                           <td><NavDropdown title=" " id="collasible-nav-dropdown">
//                                                             <NavDropdown.Item href="#">Action</NavDropdown.Item>
//                                                             <NavDropdown.Item href="#">Another action</NavDropdown.Item>
//                                                             <NavDropdown.Item href="#">Something</NavDropdown.Item>
//                                                             <NavDropdown.Divider />
//                                                             <NavDropdown.Item href="#action/3.4">Something else ehere</NavDropdown.Item>
//                                                         </NavDropdown></td>
                                
                               
//                               </tr>  
//                            </tbody>
//                         </table>
//                      </div>
//                   </Card.Body>
//                </Card>
//             </Col>
//          </Row>
//                      </Tab.Pane>
                     
//                   </Tab.Content>
//                </Col>
//                {
//     showf?
//                <Col lg="3">
//                   <Card>
//                      <Card.Header>
//                         <div className="header-title">
//                            <h4 className="card-title">About</h4>
//                         </div>
//                      </Card.Header>
//                      <Card.Body>
//                         <p></p>
//                         <div className="mb-1">Email:
//                            {data.map((item) => (

//                               <Link to="#" className="ms-3">{item.to}</Link>
//                            ))}


//                         </div>
//                         {data.map((item) => (

//                            <div className="mb-1">Phone: <Link to="#" className="ms-3">{item.Work_Phone}</Link></div>

//                         ))}
//                         <div>Location: <span className="ms-3">USA</span></div>
//                      </Card.Body>
//                   </Card>


//                </Col>
//                :null}

//             </Row>
//          </Tab.Container>
//       </>
//    )

// }

// export default UserProfile;














































// const hello = styled.div`
// .receipt-content .logo a:hover {
//    text-decoration: none;
//    color: #7793C4; 
//  }
 
//  .receipt-content .invoice-wrapper {
//    background: #FFF;
//    border: 1px solid #CDD3E2;
//    box-shadow: 0px 0px 1px #CCC;
//    padding: 40px 40px 60px;
//    margin-top: 40px;
//    border-radius: 4px; 
//  }
 
//  .receipt-content .invoice-wrapper .payment-details span {
//    color: #A9B0BB;
//    display: block; 
//  }
//  .receipt-content .invoice-wrapper .payment-details a {
//    display: inline-block;
//    margin-top: 5px; 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .print a {
//    display: inline-block;
//    border: 1px solid #9CB5D6;
//    padding: 13px 13px;
//    border-radius: 5px;
//    color: #708DC0;
//    font-size: 13px;
//    -webkit-transition: all 0.2s linear;
//    -moz-transition: all 0.2s linear;
//    -ms-transition: all 0.2s linear;
//    -o-transition: all 0.2s linear;
//    transition: all 0.2s linear; 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .print a:hover {
//    text-decoration: none;
//    border-color: #333;
//    color: #333; 
//  }
 
//  .receipt-content {
//    background: #ECEEF4; 
//  }
//  @media (min-width: 1200px) {
//    .receipt-content .container {width: 900px; } 
//  }
 
//  .receipt-content .logo {
//    text-align: center;
//    margin-top: 50px; 
//  }
 
//  .receipt-content .logo a {
//    font-family: Myriad Pro, Lato, Helvetica Neue, Arial;
//    font-size: 36px;
//    letter-spacing: .1px;
//    color: #555;
//    font-weight: 300;
//    -webkit-transition: all 0.2s linear;
//    -moz-transition: all 0.2s linear;
//    -ms-transition: all 0.2s linear;
//    -o-transition: all 0.2s linear;
//    transition: all 0.2s linear; 
//  }
 
//  .receipt-content .invoice-wrapper .intro {
//    line-height: 25px;
//    color: #444; 
//  }
 
//  .receipt-content .invoice-wrapper .payment-info {
//    margin-top: 25px;
//    padding-top: 15px; 
//  }
 
//  .receipt-content .invoice-wrapper .payment-info span {
//    color: #A9B0BB; 
//  }
 
//  .receipt-content .invoice-wrapper .payment-info strong {
//    display: block;
//    color: #444;
//    margin-top: 3px; 
//  }
 
//  @media (max-width: 767px) {
//    .receipt-content .invoice-wrapper .payment-info .text-right {
//    text-align: left;
//    margin-top: 20px; } 
//  }
//  .receipt-content .invoice-wrapper .payment-details {
//    border-top: 2px solid #EBECEE;
//    margin-top: 30px;
//    padding-top: 20px;
//    line-height: 22px; 
//  }
 
 
//  @media (max-width: 767px) {
//    .receipt-content .invoice-wrapper .payment-details .text-right {
//    text-align: left;
//    margin-top: 20px; } 
//  }
//  .receipt-content .invoice-wrapper .line-items {
//    margin-top: 40px; 
//  }
//  .receipt-content .invoice-wrapper .line-items .headers {
//    color: #A9B0BB;
//    font-size: 13px;
//    letter-spacing: .3px;
//    border-bottom: 2px solid #EBECEE;
//    padding-bottom: 4px; 
//  }
//  .receipt-content .invoice-wrapper .line-items .items {
//    margin-top: 8px;
//    border-bottom: 2px solid #EBECEE;
//    padding-bottom: 8px; 
//  }
//  .receipt-content .invoice-wrapper .line-items .items .item {
//    padding: 10px 0;
//    color: #696969;
//    font-size: 15px; 
//  }
//  @media (max-width: 767px) {
//    .receipt-content .invoice-wrapper .line-items .items .item {
//    font-size: 13px; } 
//  }
//  .receipt-content .invoice-wrapper .line-items .items .item .amount {
//    letter-spacing: 0.1px;
//    color: #84868A;
//    font-size: 16px;
//   }
//  @media (max-width: 767px) {
//    .receipt-content .invoice-wrapper .line-items .items .item .amount {
//    font-size: 13px; } 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .total {
//    margin-top: 30px; 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .total .extra-notes {
//    float: left;
//    width: 40%;
//    text-align: left;
//    font-size: 13px;
//    color: #7A7A7A;
//    line-height: 20px; 
//  }
 
//  @media (max-width: 767px) {
//    .receipt-content .invoice-wrapper .line-items .total .extra-notes {
//    width: 100%;
//    margin-bottom: 30px;
//    float: none; } 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .total .extra-notes strong {
//    display: block;
//    margin-bottom: 5px;
//    color: #454545; 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .total .field {
//    margin-bottom: 7px;
//    font-size: 14px;
//    color: #555; 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .total .field.grand-total {
//    margin-top: 10px;
//    font-size: 16px;
//    font-weight: 500; 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .total .field.grand-total span {
//    color: #20A720;
//    font-size: 16px; 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .total .field span {
//    display: inline-block;
//    margin-left: 20px;
//    min-width: 85px;
//    color: #84868A;
//    font-size: 15px; 
//  }
 
//  .receipt-content .invoice-wrapper .line-items .print {
//    margin-top: 50px;
//    text-align: center; 
//  }
 
 
 
//  .receipt-content .invoice-wrapper .line-items .print a i {
//    margin-right: 3px;
//    font-size: 14px; 
//  }
 
//  .receipt-content .footer {
//    margin-top: 40px;
//    margin-bottom: 110px;
//    text-align: center;
//    font-size: 12px;
//    color: #969CAD; 
//  }                    
// `
// const bn =styled.div`

// .chat-messages {
//    padding: 1rem 2rem;
//    display: flex;
//    flex-direction: column;
//    gap: 1rem;
//    overflow: auto;
//    &::-webkit-scrollbar {
//      width: 0.4rem;
//      &-thumb {
//        background-color: #3944bc;
//        width: 0.1rem;
//        border-radius: 0.1rem;
//      }
//    }
//    .message {
//      display: flex;
//      align-items: center;
//      .content {
//        max-width: 40%;
//        overflow-wrap: break-word;
//        padding: 1rem;
//        font-size: 0.9rem;
//        border-radius: 1rem;
//        color: #d1d1d1;
//        @media screen and (min-width: 720px) and (max-width: 1080px) {
//          max-width: 70%;
//        }
//      }
//    }
//    .sended {
//      justify-content: flex-end;
//      .content {
//        background-color: #3a57e8;
//      }
//    }
//    .recieved {
//      justify-content: flex-start;
//      .content {
//        background-color: #3a57e8;
//      }
//    }
// `
// const Container = styled.div`
  
// display: grid;
// grid-template-rows: 10% 80% 10%;
// color:black;
// gap: 0.1rem;
// overflow: hidden;
// @media screen and (min-width: 720px) and (max-width: 1080px) {
//   grid-template-rows: 15% 70% 15%;
// }
// .chat-header {
//   display: flex;
//   background-color: white;


//   justify-content: space-between;
//   align-items: center;
//   padding: 0 rem;
//   .user-details {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     .avatar {
//       img {
//         height: 3rem;
//       }
//     }
//     .username {
//       h3 ,h4{
//         color: black;
//       }
//     }
//   }
// }
// .chat-messages {
//   padding: 1rem 2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   overflow: auto;
//   &::-webkit-scrollbar {
//     width: 0.4rem;
//     &-thumb {
//       background-color: #3944bc;
//       width: 0.1rem;
//       border-radius: 0.1rem;
//     }
//   }
//   .message {
//     display: flex;
//     align-items: center;
//     .content {
//       max-width: 40%;
//       overflow-wrap: break-word;
//       padding: 1rem;
//       font-size: 0.9rem;
//       border-radius: 1rem;
//       color: #d1d1d1;
//       @media screen and (min-width: 720px) and (max-width: 1080px) {
//         max-width: 70%;
//       }
//     }
//   }
//   .sended {
//     justify-content: flex-end;
//     .content {
//       background-color: #3a57e8;
//     }
//   }
//   .recieved {
//     justify-content: flex-start;
//     .content {
//       background-color: #3a57e8;
//     }
//   }
// }
// `;

// //separte tab for vendor
// //add toggle
import Card from '../../../components/Card'
import { Scrollbars } from 'react-custom-scrollbars';

import avatars11 from '../../../assets/images/avatars/01.png'
import { Api } from '../constant/constant';

import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
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
import { BsArrowRightShort } from 'react-icons/bs'
import FileBase from "react-file-base64";
import { v4 as uuidv4 } from "uuid";
import Chat from "./Chat";
import icon6 from '../../../assets/images/icons/06.png'
import icon7 from '../../../assets/images/icons/07.png'
import icon5 from '../../../assets/images/icons/05.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap6 from '../../../assets/images/shapes/06.png'
import pages2 from '../../../assets/images/pages/02-page.png'
import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'
import React, { useEffect, useState, useRef } from "react";
import FsLightbox from "fslightbox-react";
import { allUsersRoute, host } from "../utils/APIRoutes";
import axios from "axios";
import { jsPDF } from "jspdf";
import Base64Downloader from 'react-base64-downloader';
import { io } from "socket.io-client";
import styled from "styled-components";
// import {Row,Col,Image,Form,Button,InputGroup,FormControl} from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Row, Col, Image, Form, Nav, Dropdown, Tab, Table, FormControl, InputGroup ,NavDropdown} from "react-bootstrap";
import { useHistory, Link, useParams, useLocation } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ChatContainer from "../MessagesForAdmin.js/ComponentsForAdmin";
import Contacts from "../MessagesForAdmin.js/Contacts";
import Welcome from "../MessagesForAdmin.js/Welcome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
   const socket =io.connect(`${Api}/`)
   useEffect(() => {
      AOS.init();
   }, [])
   const scrollRef = useRef();
   const [postData, setPostData] = useState({
      Regulatory_Model_Name: "",
      Product_Name: "",
      Regulatory_Family: "",
      Product_Category: "BATT",
      Product_Description: "",
      Model_Difference: "",
      Household: "",
      Commercial: "",
      Clinical: "",
      Applicable_Standards: "IEC 60086-1:2015",
      Applicant_Name_and_Address: "",
      Manufacturer_Name_and_Address: "",
      TradeMark: "",
      Family: "",
      Market: "Africa",

      Overall_Size_of_Equipment: "",
      WebGLShader: "mm",
      Voltage: "",
      Phase: "",
      Frequency: "",
      Power: "",
      Current: "",
      Operation_Mode: "",
      Ordinary_person: "",
      Children_likely_present: "",
      Instructed_person: "",
      Skilled_person: "",
      AC_mains: "",
      DC_mains: "",
      Battery_Powered: "",
      Skilled_person: "",

      Non_detachable_Supply_Cord: "",
      Appliance_Coupler: "",
      Direct_plug_in: "",
      Non_detachable_Supply_Cord_B: "",
      Appliance_Coupler_B: "",

      Permanent_connection: "",
      Mating_connector: "",
      Movable: "",
      Transportable: "",
      Stationary_for_building_in: "",
      Wall_ceiling_mounted_SRME_rack_mounted: "",
      Hand_held: "",
      Other: "",

      Pollution_Degree: "",
      Manufacturer_Specific_Max_Operating_Ambient: "",
      Ingree_Protection_Classification: "",
      Altitude_During_Operation: "",
      Mass_Of_Equipment: "",
      Relative_Humidity: "",
      Atmospheric_Pressure: "",
      Indoor: "",
      Outdoor: "",

      Copy_of_Marking_Plate: "",
      WarningOrCautionary_Marking: "",
      Fuse_Type: "",
      Fuse_Marking: "",

      //complaince report
      Report_Number: "No Option",
   });
   const navigate = useHistory();
   const params = useParams();
   const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
   const location = useLocation();
   const [show, AccountShow] = useState('A');

   const [currentUser, setCurrentUser] = useState(user);
   const [data, setData] = useState([]);
   const [datapo, setDatapo] = useState([]);
   const [com, setcom] = useState([]);
   const [att, setatt] = useState([]);
   const [data1, setData1] = useState([]);
   const [comment, setcomment] = useState("");
   const [attchdfile, setattchdfile] = useState("");
   const [userid, setuserid] = useState(params.id);
   const [vendorid, setvendorid] = useState(params.id);
   const [userattachments, setuserattachments] = useState("");
   const [contacts, setContacts] = useState([]);
   const [currentChat, setCurrentChat] = useState(contacts);
   const [currentaUser, setCurrentaUser] = useState(undefined);
   const [product, setproduct] = useState("");
   const [product1, setproduct1] = useState("");
   const [price, setprice] = useState('');
   const [result, setresult] = useState('')
   const [quantity, setquantity] = useState('');
   /////////////////////////////
   const [datamessage, setdatamessage] = useState([])
   const [namem, setnamem] = useState('admin');
   const [sender, setsender] = useState('admin_id');
   const [receiver, setreceiver] = useState('vendor_id');
   const [message, setmessage] = useState('');
const [showf, setshowf] = useState(true)


//////////////////////////
const [sendpo, setsendpo] = useState({
   file: '',
      body: '',
      to: '',
      subject: '',
      userid: params.id,
   })
   const [rfqID, setrfqID] = useState( params.id);
  
   const [postemail, setpostemail] = useState({
      id: '',
      file: '',
   })

   //////////////////////

   const inputhandeler = (e) => { setsendpo({ ...sendpo, [e.target.name]: e.target.value }) }

   const getproducts = async () => {
      let result = await fetch(`${Api}/userRFQ/view/${params.id}`);
      result = await result.json();

      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", result);
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", result._id);
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", result.to);
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", namem);
      setnamem(result.name)
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", result.status);

      setsendpo({ to: result.to });
      setData(result);
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", result._id);
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", result._id);

      let result1 = await fetch(
         `${Api}/rfqmanagers/${data.map((tn) => tn.rfq_id)}`
      );
      result1 = await result1.json();
      setData1(result1);
      console.log(data1);
   };
   const handleattachments = (e) => {
      console.log(e.target.files[0])
      setsendpo({ ...sendpo, file: e.target.files[0] })
      console.log("==", sendpo.file, "===", sendpo.file.name)
   };

   const [username, setUsername] = useState('other');
   const [room, setRoom] = useState(params.id);
  
   const [showChat, setShowChat] = useState(true);
  
     useEffect(() => {
      if (username !== "" && room !== "") {
         socket.emit("join_room", room);
      }
     }, [])
   const getcomments = async () => {
      console.log("clclclclclcclcl", params.id)
      let result = await fetch(`${Api}/commentrouter/search/${params.id}`);
      result = await result.json();
      setcom(result);
   };
   useEffect(() => {
 console.log("q22222222222222222222222222222222qwwwwwwwwwwwwwwwwwwwwwdddddddccccccccccccccccccccccaaaaaaaaaaaaaaaaaasssssssssssssssdddddddddd",  data.map((item)=>(item._id)))
   }, [])
   const [pdf, setPdf] = useState('')
   useEffect(() => {
      socket.on('receive_Message',(data)=>{
        getmessage(data.message)
         
      })
      }, [socket])
      const sendMessage=()=>{
        socket.emit("send_Message",{message:"Bello"})
   
      }
   const goback = () => { navigate.push(`/dashboard/app/UserProfile3/${params.id}`) }
   const pdfGenerator = () => {
      // AccountShow("Account")
      const doc = new jsPDF()
      doc.html(document.querySelector("#jibran"), {
         callback: function (pdf) {
setPdf(pdf)
            pdf.save("mypdf")
         },
         x: 10,
         y: 15,
         width: 190,
         windowWidth: 650
         
      });
      navigate.push(`/dashboard/app/UserProfile2/${params.id}`)
      
      
   }
   const pdfGenerator4 = () => {
      AccountShow("Personal")
      const doc = new jsPDF()
      doc.html(document.querySelector("#jibran"), {
         callback: function (pdf) {

            pdf.save("mypdf")
         },
         x: 10,
         y: 15,
         width: 190,
         windowWidth: 650

      });

   }
   postemail.id = params.id
   const handleemail = async (e) => {
      e.preventDefault();
      const result = await fetch(`${Api}/po/sendapprover`, {
         method: "post",
         body: JSON.stringify(postemail),
         headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();

      if (result) {
         alert("Attachment added Succesfully!");


      }
      console.warn(result);
   };



   const sendEmail = async () => {

      const formdata = new FormData()
      formdata.append('file', sendpo.file, sendpo.file.name)
      formdata.append('to', sendpo.to)

      const result = await axios.post(`${Api}/pofinal`, formdata)


      if (result.status == 200) { alert("Email sent to the Vendor!"); }

      console.warn(result);
   };
   const AddComment = async () => {
      const result = await fetch(`${Api}/CommentRouter`, {
         method: "post",
         body: JSON.stringify({ comment, userid }),
         headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
         toast.info("Comment added Succesfully!");
         setcomment("");
      }
      console.warn(result);
   };
   const SendAttachments = async () => {
      const result = await fetch(`${Api}/attachments`, {
         method: "post",
         body: JSON.stringify({ userattachments, vendorid }),
         headers: { "Content-Type": "application/json" },
      });
      // result = await result.json();
      if (result) {
         setuserattachments(" ");
      }
      console.warn(result);
   };

  
   useEffect(async () => {
      if (currentaUser) {
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
      getattacments()
      getpo()
      getmessage()
 
      // getrfqdetail();
   }, []);

   const handleChatChange = (chat) => {
      setCurrentChat(chat);
      console.log("current_chat", chat);
   };
   const handleSubmit = async () => {
      const result = fetch(`${Api}/commentrouter`, {
         method: "post",
         body: JSON.stringify({ comment, userid }),
         headers: { "Content-Type": "application/json" },
      });
      setcomment("");

      result = await result.json();
      if (result) {
         setcomment("");

      }
   };
const hell=()=>{
   navigate.push(`/dashboard/app/POTable/${params.id}`)
  
}
const hell1=()=>{
   navigate.push(`/dashboard/app/QuoteTable/${params.id}`)
  
}
  
 
   console.log("kasaslkslasklaklalksjlajsljaslkjasjlkajs", datapo.map((tn) => tn.price * tn.quantity));
   console.log("mmmmmmmmmmmmmmmmmmkkkkkkkkkkkkkkkkkkkkm", data._id);

   console.log("i love to work", data.map((tn) => tn.rfq_id));
   const getattacments = async () => {
      console.log("clclclclclcclcl", params.id)
      let result = await fetch(`${Api}/attachments/search/${params.id}`);
      result = await result.json();
      setatt(result);
      console.log(att)
   };
   const HideLeftRight=()=>{
      
      // setshowf(!showf) 
   }
   console.log("kasaslkslasklaklalksjlajsljaslkjasjlkajs", datapo.map((tn) => tn.price * tn.quantity));

   console.log('ccccccccdacassssssssss', result)
   console.log('ccccccccdacassssssssss', result)
   console.log('ccccccccdacassssssssss', result)
   console.log('ccccccccdacassssssssss', result)

   const getpo = async () => {
      let result = await fetch(`${Api}/poattachments/search/${params.id}`);
      result = await result.json();
      console.log("kasaslkslasklaklalksjlajsljaslkjasjlkajs", datapo.map((tn) => tn.price * tn.quantity));

      setDatapo(result);
   };
   const Addmessage = async () => {
      socket.emit("send_Message",{message })
      const result = await fetch(`${Api}/message`, {
         method: "post",
         body: JSON.stringify({ namem, sender, receiver, message, rfqID }),
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

   const handleSubmitforpo = async () => {
      console.log("kasaslkslasklaklalksjlajsljaslkjasjlkajs", datapo.map((tn) => tn.price * tn.quantity));

      const result = fetch(`${Api}/poattachments`, {
         method: "post",
         body: JSON.stringify({
            product,
            price,
            quantity,
            vendorid,
         }),
         headers: { "Content-Type": "application/json" },
      });
      if (result) {
         getpo()
         getpo()
         getpo()
         getpo()
         getpo()
         getpo()
         setproduct('')
         setprice('')
         setquantity('')

         // navigate("/");
      }

   };
   const [toggler, setToggler] = useState(false);
   useEffect(async () => { if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
   useEffect(() => {
      if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
         if (user.username === "Admin1") { navigate.push('/approver') }
         else if (user.username !== "Admin") { navigate.push('/ath') }
      }
      else {
         navigate.push('/auth/sign-in')
      }
   }, [])
   return (
      <>
         <FsLightbox
            toggler={toggler}
            sources={[icon4, shap2, icon8, shap4, icon2, shap6, icon5, shap4, icon1]}
         />
         <Tab.Container defaultActiveKey="first">
            <Row>
               <Col lg="12">
                  <Card>
                     <Card.Body>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                           <div className="d-flex flex-wrap align-items-center">
                              <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                                 <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
                                 <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic" />
                                 <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic" />
                                 <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
                                 <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic" />
                                 <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic" />
                              </div>
                              <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                                 {data.map((item) => (
                                    <h4 className="me-2 h4">{item.rfq_name}</h4>
                                 ))}


                                 {data.map((item) => (
                                    <span> - {item.Name}</span>
                                 ))}                                 </div>
                           </div>
                           <Nav as="ul" className="d-flex nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">
                              <Nav.Item as="li">
                                 <Nav.Link eventKey="first"  >Feed</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                 <Nav.Link eventKey="second"  >Activity</Nav.Link>
                              </Nav.Item>

                              <Nav.Item as="li">
                                 <Nav.Link eventKey="fourth" onClick={hell}>P.O</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                 <Nav.Link eventKey="seventh" onClick={ hell1}>Quote</Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="3" className="col-lg-3" data-aos="fade-right"
            data-aos-duration="800" >
                  <Card>
                     <Card.Header>
                        <div className="header-title">
                           <h4 className="card-title">Announcments</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        {com.map((item) => (
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
                        <Form className="comment-text d-flex align-items-center mt-3" >
                           <Form.Control type="text" className="rounded" placeholder="Type here!" value={comment}
                              onChange={(e) => {
                                 setcomment(e.target.value);
                              }} />
                           <div className="comment-attagement d-flex">
                              <Link to="#" className="me-2 text-body" onClick={AddComment}>
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
                        </Form>
                     </Card.Body>
                  </Card>

               </Col> 


               


               <Col lg="6" data-aos="fade-up"
            data-aos-duration="800">
                  <Tab.Content className="profile-content">
                     <Tab.Pane eventKey="first" id="profile-feed">
                        <Card>
                           <Card.Header className="d-flex align-items-center justify-content-between pb-4">
                              <div className="header-title">
                                 <div className="d-flex flex-wrap">
                                    <div className="media-support-user-img me-3">
                                       <Image className="rounded-pill img-fluid avatar-60 bg-soft-danger p-1 ps-2" src={avatars2} alt="" />
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
                                 <hr />

                              </div>
                           </Card.Body>
                        </Card>
                         

                      
                           {/* <Scrollbars style={{ width: 600, height: 500 }}> 
                           <Container>  
                           <div className="chat-messages">   {datamessage.map((item) => {
          return (
           
              <div
                className={`message ${
                  item.sender == "admin_id" ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{item.message}</p>
               
             
              </div>
           
            </div>
          );
        })}
        </div>  </Container>
        </Scrollbars> */}
        <Chat socket={socket} username={username} room={room} />
       
                            
       
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
                       
                           
                  
                        {/* <Container>

                           <div className="container">
                              <Contacts contacts={contacts} changeChat={handleChatChange} />
                              {currentChat === undefined ? (
                                 <Welcome />
                              ) : (
                                 <ChatContainer currentChat={currentChat} socket={socket} />
                              )}
                           </div>
                        </Container> */}


                     </Tab.Pane>

                     <Tab.Pane eventKey="second" id="profile-activity">

                        <Card>

                           <fieldset className={`${show === "A" ? "d-block" : "d-none"}`}>
                     <div  data-aos="fade-up"
            data-aos-duration="800">


                              <Card>
                                 <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                       <h4 className="card-title">Activity</h4>
                                    </div>
                                 </Card.Header>
                                 <Card.Body>
                                    {att.map((asd) => (
                                       <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
                                          <ul className="list-inline p-0 m-0">
                                             <li>

                                                <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>

                                                <a href={asd.files} download>   <h6 className="float-left mb-1">{asd.title}</h6></a>


                                                <small className="float-right mt-1">{asd.Dates}</small>

                                                <div className="d-inline-block w-100">
                                                   <p> <b><i><u><Link onClick={goback} className="ms-3">{asd.clickhere} </Link></u></i></b></p>


                                                </div>
                                             </li>

                                          </ul>
                                       </div>
                                    ))}

                                 </Card.Body>
                              </Card>
</div>
                           </fieldset>
                           <fieldset className={`${show === "Account" ? "d-block" : "d-none"}`}>
                              <Card.Header className="d-flex justify-content-between">


                              </Card.Header>
                              <div className="card">
                                 <div className="card-body">
                                    <div className="container mb-5 mt-3" id="heo">
                                       <div className="row d-flex align-items-baseline">
                                          <div className="col-xl-9">
                                             <p style={{ color: "#7e8d9f", fontSize: 20 }}>
                                                Invoice #<strong>  {params.id}</strong>
                                             </p>
                                          </div>

                                          <hr />
                                       </div>
                                       <div className="container">
                                          <div className="col-md-12">
                                             <div className="text-center">
                                                <br />
                                                {/* <p className="pt-0">MDBootstrap.com</p> */}
                                             </div>
                                          </div>
                                          {data.map((item) => (

                                             <div className="row">
                                                <div className="col-xl-8">
                                                   <ul className="list-unstyled">
                                                      <li contenteditable="true" className="text-muted">
                                                         To: <span style={{ color: "#5d9fc5" }}>{item.to}</span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         Name: <span style={{ color: "#5d9fc5" }}>{item.Name}</span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         Issue Date: <span style={{ color: "#5d9fc5" }}>{item.Dates}</span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         Phone: <span style={{ color: "#5d9fc5" }}>{item.Work_Phone}</span>
                                                      </li>


                                                   </ul>
                                                </div>
                                                <div className="col-xl-4">
                                                   <p contenteditable="true" className="text-muted">Invoice</p>
                                                   <ul className="list-unstyled">


                                                      <li contenteditable="true" className="text-muted">
                                                         <i className="fas " style={{ color: "#84B0CA" }} />{" "}
                                                         <span className="me-1 ">Status:</span>
                                                         <span className="badge bg-warning text-black ">
                                                            {item.status}
                                                         </span>
                                                      </li>
                                                   </ul>
                                                </div>
                                             </div>
                                          ))}
                                          <div className="row my-2 mx-1 justify-content-center">
                                          <Row className="">
                <Col lg="12" className="">
                    <Card className="rounded">
                        <Card.Body className="">
                        <div class="row">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-3">
            
                <table class="table">
Description                </table>
            </div> 
            <div class="col-md-3">
           
                <table class="table">
                DATE                </table>
            </div> 
            <div class="col-md-3">
         
                <table class="table">
                QTY                </table>
            </div> 
            <div class="col-md-3">
           
                <table class="table">
                PRICE
                </table>
            </div>          
        </div>
    </div>
</div>
 
<div class="row">
    <div class="col-md-12">
            {datapo.map((item)=>(
        <div class="row">
            <div class="col-md-3">
                     <Form.Group className="mb-3 form-group">
                     
                     {item.product}
                 </Form.Group>
               
       
          </div> 
               
            <div class="col-md-3">
           
                <table class="table">
                23-59-5959
                </table>
            </div> 
            <div class="col-md-3">
         
                <table class="table">
                {item.quantity}
                </table>
            </div> 
            <div class="col-md-3">
           
                <table class="table">
                {item.price}
                </table>
            </div>  
        </div>
                ))}
                       
    </div>
</div>
                             
                            <Row>
                                <Col sm="12">
                                    <p className="mb-0 mt-4">
                                        <svg width="30" className="text-primary mb-3 me-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
                                            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
                                            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
                                            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
                                        </svg>
                                        It is a long established fact that a reader will be distracted by the readable content of a page
                                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                        as opposed to using 'Content here, content here', making it look like readable English.
                                    </p>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button type="button" className="btn btn-primary">Print</button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
                                          </div>
                                          <div className="row">
                                             <div className="col-xl-8">
                                                <p className="ms-3">Add additional notes and payment information</p>
                                             </div>
                                             <div className="col-xl-3">

                                                <p className="text-black float-start">
                                                   {/* <span className="text-black me-3"> Total</span> */}
                                                   {/* <span style={{ fontSize: 25 }}>$1221</span> */}
                                                </p>
                                             </div>
                                          </div>
                                          <hr />
                                          <div className="row">
                                             <div className="col-xl-10">
                                                <p>Thank you for your purchase</p>
                                             </div>

                                             <div className="col-xl-2">

                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <Button size="25px" onClick={() => AccountShow("A")} variant="btn btn-primary">back </Button>{' '}
                                    <Button size="25px" onClick={pdfGenerator4} variant="btn btn-primary">GO </Button>{' '}
                                 </div>
                              </div>

                           </fieldset>
                           <fieldset
                              className={`${show === "Personal" ? "d-block" : "d-none"}`}
                           >
                              <Card>
                                 <Card.Body>
                                    <div class="file-upload-wrapper">

                                       {/* <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" /> */}

                                       {data.map((item) => (
                                          <Form.Group className="form-group">
                                             <Form.Label htmlFor="exampleInputText1">Email: </Form.Label>
                                             <Form.Control type="text" id="exampleInputText1" name="to" value={sendpo.to} defaultValue={item.to} onChange={(e) => setsendpo({ ...sendpo, to: e.target.value })} />
                                          </Form.Group>
                                       ))}

                                       <Form.Group>
                                          <Form.Label className="custom-file-input"> Add file</Form.Label>
                                          <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" />
                                       </Form.Group>

                                    </div>
                                    <br />

                                    <Button variant="btn btn-primary" type="button" onClick={sendEmail}>Send to Vendor</Button>{' '}


                                    <button
                                       type="button"
                                       name="previous"
                                       className="btn btn-dark previous action-button-previous float-end me-1"
                                       value="Previous"
                                       onClick={() => AccountShow("Account")}
                                    >
                                       Back
                                    </button>
                                 </Card.Body>
                              </Card>
                           </fieldset>
                        </Card>
                  

                     </Tab.Pane >
                   
                     <Tab.Pane eventKey="third" id="profile-friends">
                      
                     </Tab.Pane >
                     <Tab.Pane eventKey="fourth" id="profile-profile">
                        {/* <Card className="rounded" id="hellobhi">
                           <Card.Body className="">
                              <Row className="">
                                 <Col sm="12" className="">
                                    <h4 className="mb-2">Invoice  #215462</h4>
                                    <br />
                                    <br />
                                    <h5 className="mb-3">Name: Devon Lane </h5>
                                    <h5 className="mb-3">Company Name: Devon Lane </h5>
                                    <h5 className="mb-3">RFQ: Devon Lane </h5>
                                    <br />
                                    <h5 className="mb-3">Join Date: Devon Lane </h5>
                                    <hr />

                                 </Col>
                              </Row>
                              <Row className="">
                                 <Col sm="12" className=" mt-4">
                                    <div className="table-responsive-lg">
                                       <Table className="">
                                          <thead>
                                             <tr>
                                                <th scope="col">Item</th>
                                                <th className="text-center" scope="col">Quantity</th>
                                                <th className="text-center" scope="col">Price</th>
                                                <th className="text-center" scope="col">Totals</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             <tr>
                                                <td>
                                                  
                                                   <div className="col-md-8">
                                                      <div className="form-group">

                                                         <input
                                                            type="text"
                                                            name="Product_Name"
                                                            placeholder='Item'
                                                            className="form-control"
                                                            value={product}onChange={(e) => {setproduct(e.target.value)}}
                                                         />
                                                      </div>
                                                   </div>
                                                </td>
                                                <td className="text-center"> 
                                                <div className="col-md-8">
                                                      <div className="form-group">

                                                         <input
                                                            type="number"
                                                            name="Product_Name"
                                                            placeholder='Quantity'
                                                            className="form-control"
                                                            value={quantity}onChange={(e) => {setquantity(e.target.value)}}

                                                         />
                                                      </div>
                                                   </div></td>
                                                <td className="text-center"> <div className="col-md-7">
                                                      <div className="form-group">

                                                      <input
                                                            type="number"
                                                            name="Product_Name"
                                                            placeholder='Price'
                                                            className="form-control"
                                                            value={price}onChange={(e) => {setprice(e.target.value)}}
                                                         />
                                                      </div>
                                                   </div></td>
                                                <td className="text-center"><input className='btn btn-primary' type='button' value='Add' onClick={handleSubmitforpo} /></td>
                                             </tr>
                                             {datapo.map((item) => (
                                             <tr>
                                                <td>
                                                  
                                                   <div className="col-md-8">
                                                      <div className="form-group">

                                                      {item.product}
                                                      </div>
                                                   </div>
                                                </td>
                                                <td className="text-center"> 
                                                <div className="col-md-8">
                                                      <div className="form-group">

                                                      {item.quantity}
                                                      </div>
                                                   </div></td>
                                                <td className="text-center"> <div className="col-md-7">
                                                      <div className="form-group">
                                                      {item.price} 
                                                      </div>
                                                   </div></td>
                                                <td className="text-center">  300$</td>
                                             </tr>
                                             ))}

                                             <tr>
                                                <td>
                                                   <h6 className="mb-0">Total</h6>
                                                </td>
                                                <td className="text-center"></td>
                                                <td className="text-center"></td>
                                                <td className="text-center">$2,880.00</td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h6 className="mb-0">Taxs</h6>
                                                </td>
                                                <td className="text-center"></td>
                                                <td className="text-center"></td>
                                                <td className="text-center">$2,880.00</td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h6 className="mb-0">Discount</h6>
                                                </td>
                                                <td className="text-center"></td>
                                                <td className="text-center"></td>
                                                <td className="text-center">$2,880.00</td>
                                             </tr>
                                             <tr>
                                                <td>
                                                   <h6 className="mb-0">Net Amount</h6>
                                                </td>
                                                <td className="text-center"></td>
                                                <td className="text-center"></td>
                                                <td className="text-center"><b>$2,880.00</b></td>
                                             </tr>
                                          </tbody>
                                       </Table>
                                    </div>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col sm="12">
                                    <p className="mb-0 mt-4">
                                       <svg width="30" className="text-primary mb-3 me-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
                                          <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
                                          <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
                                          <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
                                       </svg>
                                       It is a long established fact that a reader will be distracted by the readable content of a page
                                       when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                       as opposed to using 'Content here, content here', making it look like readable English.
                                    </p>
                                    <div className="d-flex justify-content-center mt-4">
                                       <button type="button" className="btn btn-primary" onClick={pdfGenerator} >Print</button>
                                    </div>
                                 </Col>
                              </Row>
                           </Card.Body>
                        </Card> */}




                        <Card>

                           <Card.Body>


                              <fieldset
                                 className={`${show === "A" ? "d-block" : "d-none"}`}
                              >







                                 <Card.Header className="d-flex justify-content-between">

                                    <Card>
                                       <Card.Header className="d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title"> Add Items</h4>
                                          </div>
                                       </Card.Header>
                                       <Card.Body>
                                          <Form>
                                             <Row>
                                                <Col>
                                                   <Form.Control type="text" placeholder="Item" value={product} onChange={(e) => { setproduct(e.target.value) }} />
                                                </Col>
                                                <Col>
                                                   <Form.Control type="text" placeholder="Quantity" value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
                                                </Col>
                                                <Col>
                                                   <Form.Control type="text" placeholder="Price" value={price} onChange={(e) => { setprice(e.target.value) }} />
                                                </Col>
                                             </Row>

                                             <br />
                                             <Row>
                                                <Button size="25px" onClick={handleSubmitforpo} variant="btn btn-primary">Add</Button>{' '}

                                             </Row>
                                          </Form>
                                       </Card.Body>
                                    </Card>
                                    <hr />
                                 </Card.Header>
                                 <div className="card">
                                    <div className="card-body">
                                       <div className="container mb-5 mt-3" id="jibran">
                                          <div className="row d-flex align-items-baseline">
                                             <div className="row">
                                                <div className="col-xl-6">
                                                   <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
                                                   <br />
                                                   <br />

                                                   {/* <h4 style={{ color: "#7e8d9f", fontSize: 20 }}>
                                                  <b> INTERTEK TESTING SERVICES INC</b>
                                                </h4> */}
                                                   <ul className="list-unstyled">

                                                      <li contenteditable="true" className="text-muted">
                                                         <h4>  <b> INTERTEK TESTING SERVICES INC</b> </h4><span style={{ color: "#5d9fc5" }}></span>
                                                      </li>
                                                   </ul>
                                                </div>
                                                <div className="col-xl-6">
                                                   <br />

                                                   <br />
                                                   <br />
                                                   <br />
                                                   <br />

                                                   <ul className="list-unstyled">

                                                      <li contenteditable="true" className="text-muted">
                                                         <h5>   Becton, Dickinson and Company  </h5><span style={{ color: "#5d9fc5" }}></span>
                                                      </li>
                                                   </ul>
                                                </div>
                                             </div>

                                             <div className="row">
                                                <div className="col-xl-7">
                                                   <ul className="list-unstyled">
                                                      <i>
                                                         <li contenteditable="true" className="text-muted">
                                                            399 US ROUTE 11 INDUSTRIAL PARK  <span style={{ color: "#5d9fc5" }}></span>
                                                         </li>
                                                         <li contenteditable="true" className="text-muted">
                                                            CORTLAND<span style={{ color: "#5d9fc5" }}> </span>
                                                         </li>
                                                         <li contenteditable="true" className="text-muted">
                                                            CORTLAND, NY 13045 <span style={{ color: "#5d9fc5" }}></span>
                                                         </li>
                                                      </i>
                                                      <li contenteditable="true" className="text-muted">
                                                         Attn: BD Supplier <span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         Phone: +1(800) 967-5352 <span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         Fax: +1 (650) 463-2910 <span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         <br />

                                                         <Card className="mb-0">
                                                            <Card.Body>
                                                               <h5 className="card-title">Ship To:</h5>
                                                               <p className="card-text">    <ul className="list-unstyled">
                                                                  <i>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        Becton, Dickinson and Company  <span style={{ color: "#5d9fc5" }}></span>
                                                                     </li>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        2350 Qume Drive<span style={{ color: "#5d9fc5" }}> </span>
                                                                     </li>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        SAN JOSE, CA 95131-1812 <span style={{ color: "#5d9fc5" }}></span>
                                                                     </li>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        23402 <span style={{ color: "#5d9fc5" }}></span>
                                                                     </li>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        Attn <span style={{ color: "#5d9fc5" }}></span>
                                                                     </li>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        United States  <span style={{ color: "#5d9fc5" }}></span>
                                                                     </li>
                                                                  </i>



                                                               </ul>
                                                               </p>
                                                            </Card.Body>
                                                         </Card><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <br />


                                                   </ul>
                                                </div>
                                                <div className="col-xl-5">
                                                   <ul className="list-unstyled">

                                                      <li contenteditable="true" className="text-muted">
                                                         PO NUMBER:  6900921615 <span style={{ color: "#5d9fc5" }}></span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         DATE: 11/02/22<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         PAYMENT TERMS: 1061 Net 90 Days<span style={{ color: "#5d9fc5" }}></span>
                                                      </li>

                                                      <li contenteditable="true" className="text-muted">
                                                         SHIPPING TERMS: FCA <span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         CURRENCY: USD<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         CONTRACT:<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         CONTACT:<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         <br />
                                                         <Card className="mb-0">
                                                            <Card.Body>
                                                               <h5 className="card-title">Bill To:</h5>
                                                               <p className="card-text">    <ul className="list-unstyled">
                                                                  <i>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        Becton, Dickinson, and Company <span style={{ color: "#5d9fc5" }}></span>
                                                                     </li>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        PO Box 5200<span style={{ color: "#5d9fc5" }}> </span>
                                                                     </li>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        Rantoul, IL 61866-5200 <span style={{ color: "#5d9fc5" }}></span>
                                                                     </li>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        Attn: Accounts Payable <span style={{ color: "#5d9fc5" }}></span>
                                                                     </li>
                                                                     <li contenteditable="true" className="text-muted">
                                                                        United States <span style={{ color: "#5d9fc5" }}></span>
                                                                     </li>

                                                                  </i>
                                                               </ul>
                                                               </p>
                                                            </Card.Body>
                                                         </Card><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>




                                                   </ul>
                                                </div>
                                             </div>


                                             <div className="row">
                                                <div className="col-xl-15">
                                                   <ul className="list-unstyled">

                                                      <li contenteditable="true" className="text-muted">
                                                         <b><i><u>Note: </u></i> </b>Price as per attached quote # Qu-01308416-0 <span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         <b><i><u>Note: </u></i> </b>FCA - CORTLAND, NY <span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         <b><i><u>Note: </u></i> </b>FedEx# 140212393 ABF<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         <b>Shipping instructions:</b><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         Small parcels less than 150 Ibs/70 kg - use BD FedEx acct<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         Parcels Over 150 Ibs/70kg — Use designated LTL carrier to schedule pick up else contact buyer for shipping instructions - Mohammed.zeeshan@bd.com<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         <b><i><u>Note: </u></i> </b>***Please confirm by selecting Acknowledge Order or Email- Mohammed.zeeshan@bd.com<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li contenteditable="true" className="text-muted">
                                                         *** Please see attached for Instructions on acknowledgements, invoicing and international Shipment.</li>
                                                   </ul>
                                                </div>
                                             </div>



                                             <hr />
                                          </div>
                                         

 
<hr/>
<Row className="">
                <Col lg="12" className="">
                    <Card className="rounded">
                        <Card.Body className="">
                        <div class="row">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-3">
            
                <table class="table">
<b>Description</b>                </table>
            </div> 
            <div class="col-md-3">
           
                <table class="table">
               <b> DATE  </b>              </table>
            </div> 
            <div class="col-md-2">
         
                <table class="table">
              <b>  QTY  </b>              </table>
            </div> 
            <div class="col-md-2">
           
                <table class="table">
              <b>  PRICE</b>
                </table>
            </div>       
            <div class="col-md-2">
           
           <table class="table">
         <b>  Total</b>
           </table>
       </div>      
        </div>
    </div>
</div>
 
<div class="row">
    <div class="col-md-12">
            {datapo.map((item)=>(
        <div class="row">
            <div class="col-md-3">
                     <Form.Group className="mb-3 form-group">
                     
                     {item.product}
                 </Form.Group>
               
       
          </div> 
               
            <div class="col-md-3">
           
                <table class="table">
                23-59-5959
                </table>
            </div> 
            <div class="col-md-2">
         
                <table class="table">
                {item.quantity}
                </table>
            </div> 
            <div class="col-md-2">
           
                <table class="table">
                {item.price}
                </table>
            </div>  
            <div class="col-md-2">
           
           <table class="table">
           {item.price*item.quantity}
           </table>
       </div> 
        </div>
                ))}
                       
    </div>
</div>
                             
                            <Row>
                                <Col sm="12">
                                    <p className="mb-0 mt-4">
                                        <svg width="30" className="text-primary mb-3 me-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
                                            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
                                            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
                                            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
                                        </svg>
                                        It is a long established fact that a reader will be distracted by the readable content of a page
                                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                        as opposed to using 'Content here, content here', making it look like readable English.
                                    </p>
                                    <div className="d-flex justify-content-center mt-4">
                                        <button type="button" className="btn btn-primary">Print</button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

                                                
                                          
                                             <hr />
                                             <div className="row">
                                                <div className="col-xl-12">
                                                   <p class="text-center text-danger ">As of <u>January 4, 2021</u>, BD will no longer accept paper or PDF invoices.</p>
                                                   <ul className="list-unstyled">

                                                      <li className="text-center ">
                                                         <b>Need help with invoice or you want to make a payment inquiry?</b><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li className="text-center">
                                                         <b>Req to Pay Customer Service:</b><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>

                                                      <li className="text-center">
                                                         Monday through Friday<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li className="text-center">
                                                         <b>Phone:</b><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li className="text-center">
                                                         855-4BD-Help (855-423-4357)<span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li className="text-center">
                                                         <b>Online:</b><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li className="text-center">
                                                         <a >BD.com/Services</a><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li className="text-center">
                                                         <b>For Terms & Condition, visit: :</b><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>
                                                      <li className="text-center">
                                                         North America: <a>PO Terms and Conditions</a><span style={{ color: "#5d9fc5" }}> </span>
                                                      </li>

                                                   </ul>








                                                   <p > This document isa Purchase Order from Becton, Dickinson and Company issued from our new BD BuySmart solution, powered by Coupa. Please process this order the same as you would any other PO from BD. If you have any questions or concems about thi order, please visit our BD Services Store at ww.hs.com/services (registration may be
                                                      required) oc cll the Reqo-Pay customer servic team a 385-425-4957
                                                   </p>
                                                </div>
                                                <div className="col-xl-3">

                                                   <p className="text-black float-start">
                                                      {/* <span className="text-black me-3"> Total</span> */}
                                                      {/* <span style={{ fontSize: 25 }}>$1221</span> */}
                                                   </p>
                                                </div>
                                             </div>
                                             <hr />
                                             <div className="row">
                                                <div className="col-xl-12">
                                                   <p>The purchases on this Purchase Order are assumed tobe Taxable for Sales Tax unless an exemption cerfiate hs been provided sepaatly or this transaction
                                                   </p>
                                                </div>

                                                <div className="col-xl-2">

                                                </div>
                                             </div>
                                       
                                       </div>
                                       <Button size="25px" onClick={pdfGenerator} variant="btn btn-primary">GO </Button>{' '}
                                    </div>
                                 </div>





                              </fieldset>
                              <fieldset
                                 className={`${show === "Account" ? "d-block" : "d-none"}`}
                              >
                                 <div class="file-upload-wrapper">

                                    {/* <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" /> */}
                                    <FileBase type="file" multiple={''} onDone={({ base64 }) => setpostemail({ ...postData, file: base64 })} />


                                 </div>
                                 <br />

                                 <button
                                    type="button"
                                    name="next"
                                    className="btn btn-primary next action-button float-end"
                                    onClick={handleemail}

                                 >
                                    Send For Approval
                                 </button>
                                 <button
                                    type="button"
                                    name="previous"
                                    className="btn btn-dark previous action-button-previous float-end me-1"
                                    value="Previous"
                                    onClick={() => AccountShow("A")}
                                 >
                                    Previous
                                 </button>
                              </fieldset>


                           </Card.Body>
                        </Card>
                     </Tab.Pane >
                     <Tab.Pane eventKey="fifth" id="profile-profile">

                     
                     <Row>
            <Col sm="12">
               <Card>
                
                  <Card.Body className="px-0">
                     <div className="table-responsive">
                        <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                           <thead>
                              <tr className="ligth">
                              <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Expiry Date</th>
                        <th> </th>
                                
                              </tr>
                           </thead>
                           <tbody>
                          
                              <tr>
                              <td> Gohan</td>
                          <td>Active</td>
                          <td>2-3-2022 </td>
                          <td>1-5-2022 </td>
                          <td><NavDropdown title=" " id="collasible-nav-dropdown">
                                                            <NavDropdown.Item href="#">View</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Download</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Update</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Delete</NavDropdown.Item>
                                                         
                                                        </NavDropdown></td>
                               
                              </tr>
                              <tr>
                              <td> Goku</td>
                          <td>Draft</td>
                          <td>2-3-2022 </td>
                          <td>1-5-2022 </td>
                          <td><NavDropdown title="  " id="collasible-nav-dropdown">
                                                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                                            <NavDropdown.Divider />
                                                            <NavDropdown.Item href="#action/3.4">Something else ehere</NavDropdown.Item>
                                                        </NavDropdown></td>
                               
                              </tr> 
                              <tr>
                              <td> Jhon</td>
                          <td>Pending</td>
                          <td>2-3-2022 </td>
                          <td>1-5-2022 </td>
                          <td><NavDropdown title=" " id="collasible-nav-dropdown">
                                                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                                                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                                            <NavDropdown.Divider />
                                                            <NavDropdown.Item href="#action/3.4">Something else ehere</NavDropdown.Item>
                                                        </NavDropdown></td>
                                
                               
                              </tr>  
                           </tbody>
                        </table>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
                     </Tab.Pane>
                     
                  </Tab.Content>
               </Col>
               
               {
    showf?
               <Col lg="3" data-aos="fade-left"
            data-aos-duration="800">
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
               :null}
             
            </Row>
         </Tab.Container>
     <ToastContainer/>
      </>
   )

}

export default UserProfile;














































 
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
   width: 600px;
   height: 420px;
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
   height: calc(500px - (45px + 70px));
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
const hello = styled.div`
.receipt-content .logo a:hover {
   text-decoration: none;
   color: #7793C4; 
 }
 
 .receipt-content .invoice-wrapper {
   background: #FFF;
   border: 1px solid #CDD3E2;
   box-shadow: 0px 0px 1px #CCC;
   padding: 40px 40px 60px;
   margin-top: 40px;
   border-radius: 4px; 
 }
 
 .receipt-content .invoice-wrapper .payment-details span {
   color: #A9B0BB;
   display: block; 
 }
 .receipt-content .invoice-wrapper .payment-details a {
   display: inline-block;
   margin-top: 5px; 
 }
 
 .receipt-content .invoice-wrapper .line-items .print a {
   display: inline-block;
   border: 1px solid #9CB5D6;
   padding: 13px 13px;
   border-radius: 5px;
   color: #708DC0;
   font-size: 13px;
   -webkit-transition: all 0.2s linear;
   -moz-transition: all 0.2s linear;
   -ms-transition: all 0.2s linear;
   -o-transition: all 0.2s linear;
   transition: all 0.2s linear; 
 }
 
 .receipt-content .invoice-wrapper .line-items .print a:hover {
   text-decoration: none;
   border-color: #333;
   color: #333; 
 }
 
 .receipt-content {
   background: #ECEEF4; 
 }
 @media (min-width: 1200px) {
   .receipt-content .container {width: 900px; } 
 }
 
 .receipt-content .logo {
   text-align: center;
   margin-top: 50px; 
 }
 
 .receipt-content .logo a {
   font-family: Myriad Pro, Lato, Helvetica Neue, Arial;
   font-size: 36px;
   letter-spacing: .1px;
   color: #555;
   font-weight: 300;
   -webkit-transition: all 0.2s linear;
   -moz-transition: all 0.2s linear;
   -ms-transition: all 0.2s linear;
   -o-transition: all 0.2s linear;
   transition: all 0.2s linear; 
 }
 
 .receipt-content .invoice-wrapper .intro {
   line-height: 25px;
   color: #444; 
 }
 
 .receipt-content .invoice-wrapper .payment-info {
   margin-top: 25px;
   padding-top: 15px; 
 }
 
 .receipt-content .invoice-wrapper .payment-info span {
   color: #A9B0BB; 
 }
 
 .receipt-content .invoice-wrapper .payment-info strong {
   display: block;
   color: #444;
   margin-top: 3px; 
 }
 
 @media (max-width: 767px) {
   .receipt-content .invoice-wrapper .payment-info .text-right {
   text-align: left;
   margin-top: 20px; } 
 }
 .receipt-content .invoice-wrapper .payment-details {
   border-top: 2px solid #EBECEE;
   margin-top: 30px;
   padding-top: 20px;
   line-height: 22px; 
 }
 
 
 @media (max-width: 767px) {
   .receipt-content .invoice-wrapper .payment-details .text-right {
   text-align: left;
   margin-top: 20px; } 
 }
 .receipt-content .invoice-wrapper .line-items {
   margin-top: 40px; 
 }
 .receipt-content .invoice-wrapper .line-items .headers {
   color: #A9B0BB;
   font-size: 13px;
   letter-spacing: .3px;
   border-bottom: 2px solid #EBECEE;
   padding-bottom: 4px; 
 }
 .receipt-content .invoice-wrapper .line-items .items {
   margin-top: 8px;
   border-bottom: 2px solid #EBECEE;
   padding-bottom: 8px; 
 }
 .receipt-content .invoice-wrapper .line-items .items .item {
   padding: 10px 0;
   color: #696969;
   font-size: 15px; 
 }
 @media (max-width: 767px) {
   .receipt-content .invoice-wrapper .line-items .items .item {
   font-size: 13px; } 
 }
 .receipt-content .invoice-wrapper .line-items .items .item .amount {
   letter-spacing: 0.1px;
   color: #84868A;
   font-size: 16px;
  }
 @media (max-width: 767px) {
   .receipt-content .invoice-wrapper .line-items .items .item .amount {
   font-size: 13px; } 
 }
 
 .receipt-content .invoice-wrapper .line-items .total {
   margin-top: 30px; 
 }
 
 .receipt-content .invoice-wrapper .line-items .total .extra-notes {
   float: left;
   width: 40%;
   text-align: left;
   font-size: 13px;
   color: #7A7A7A;
   line-height: 20px; 
 }
 
 @media (max-width: 767px) {
   .receipt-content .invoice-wrapper .line-items .total .extra-notes {
   width: 100%;
   margin-bottom: 30px;
   float: none; } 
 }
 
 .receipt-content .invoice-wrapper .line-items .total .extra-notes strong {
   display: block;
   margin-bottom: 5px;
   color: #454545; 
 }
 
 .receipt-content .invoice-wrapper .line-items .total .field {
   margin-bottom: 7px;
   font-size: 14px;
   color: #555; 
 }
 
 .receipt-content .invoice-wrapper .line-items .total .field.grand-total {
   margin-top: 10px;
   font-size: 16px;
   font-weight: 500; 
 }
 
 .receipt-content .invoice-wrapper .line-items .total .field.grand-total span {
   color: #20A720;
   font-size: 16px; 
 }
 
 .receipt-content .invoice-wrapper .line-items .total .field span {
   display: inline-block;
   margin-left: 20px;
   min-width: 85px;
   color: #84868A;
   font-size: 15px; 
 }
 
 .receipt-content .invoice-wrapper .line-items .print {
   margin-top: 50px;
   text-align: center; 
 }
 
 
 
 .receipt-content .invoice-wrapper .line-items .print a i {
   margin-right: 3px;
   font-size: 14px; 
 }
 
 .receipt-content .footer {
   margin-top: 40px;
   margin-bottom: 110px;
   text-align: center;
   font-size: 12px;
   color: #969CAD; 
 }                    
`
const bn =styled.div`

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
`
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

//separte tab for vendor
//add toggle