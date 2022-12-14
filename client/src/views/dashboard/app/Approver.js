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
// import { Row, Col, Image, Form, Nav, Dropdown, Tab, Table } from "react-bootstrap";
// import { useHistory, Link, useParams, useLocation } from "react-router-dom";
// import { BsFillArrowRightSquareFill } from "react-icons/bs";
// import Button from 'react-bootstrap/Button';
// import ChatContainer from "../MessagesForAdmin.js/ComponentsForAdmin";
// import Contacts from "../MessagesForAdmin.js/Contacts";
// import Welcome from "../MessagesForAdmin.js/Welcome";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { ScrollArea } from 'react-scrollbar'
// const UserProfile = () => {
//     const [postData, setPostData] = useState({
//         Regulatory_Model_Name: "",
//         Product_Name: "",
//         Regulatory_Family: "",
//         Product_Category: "BATT",
//         Product_Description: "",
//         Model_Difference: "",
//         Household: "",
//         Commercial: "",
//         Clinical: "",
//         Applicable_Standards: "IEC 60086-1:2015",
//         Applicant_Name_and_Address: "",
//         Manufacturer_Name_and_Address: "",
//         TradeMark: "",
//         Family: "",
//         Market: "Africa",

//         Overall_Size_of_Equipment: "",
//         WebGLShader: "mm",
//         Voltage: "",
//         Phase: "",
//         Frequency: "",
//         Power: "",
//         Current: "",
//         Operation_Mode: "",
//         Ordinary_person: "",
//         Children_likely_present: "",
//         Instructed_person: "",
//         Skilled_person: "",
//         AC_mains: "",
//         DC_mains: "",
//         Battery_Powered: "",
//         Skilled_person: "",

//         Non_detachable_Supply_Cord: "",
//         Appliance_Coupler: "",
//         Direct_plug_in: "",
//         Non_detachable_Supply_Cord_B: "",
//         Appliance_Coupler_B: "",

//         Permanent_connection: "",
//         Mating_connector: "",
//         Movable: "",
//         Transportable: "",
//         Stationary_for_building_in: "",
//         Wall_ceiling_mounted_SRME_rack_mounted: "",
//         Hand_held: "",
//         Other: "",

//         Pollution_Degree: "",
//         Manufacturer_Specific_Max_Operating_Ambient: "",
//         Ingree_Protection_Classification: "",
//         Altitude_During_Operation: "",
//         Mass_Of_Equipment: "",
//         Relative_Humidity: "",
//         Atmospheric_Pressure: "",
//         Indoor: "",
//         Outdoor: "",

//         Copy_of_Marking_Plate: "",
//         WarningOrCautionary_Marking: "",
//         Fuse_Type: "",
//         Fuse_Marking: "",

//         //complaince report
//         Report_Number: "No Option",
//     });
//     const navigate = useHistory();
//     const socket = useRef();
//     const params = useParams();
//     const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
//     const location = useLocation();
//     const [show, AccountShow] = useState('A');

//     const [currentUser, setCurrentUser] = useState(user);
//     const [data, setData] = useState([]);
//     const [datapo, setDatapo] = useState([]);
//     const [com, setcom] = useState([]);
//     const [att, setatt] = useState([]);
//     const [data1, setData1] = useState([]);
//     const [comment, setcomment] = useState("");
//     const [attchdfile, setattchdfile] = useState("");
//     // const [userid, setuserid] = useState(params.id);
//     const [vendorid, setvendorid] = useState(params.id);
//     const [userattachments, setuserattachments] = useState("");
//     const [contacts, setContacts] = useState([]);
//     const [currentChat, setCurrentChat] = useState(contacts);
//     const [currentaUser, setCurrentaUser] = useState(undefined);
//     const [product, setproduct] = useState("");
//     const [product1, setproduct1] = useState("");
//     const [price, setprice] = useState("");
//     const [quantity, setquantity] = useState("");
//     const [sendpo, setsendpo] = useState({
//         file: '',
//         body: '',
//         to: '',
//         subject: '',
//     })
//     const [title, settitle] = useState('PO is rejected')
//     const [userid, setuserid] = useState('')
//     const [rejectPO, setrejectPO] = useState({
//         files:'',
//         userid:'',
//       title:'PO is rejected'})

//     const inputhandeler = (e) => { setsendpo({ ...sendpo, [e.target.name]: e.target.value }) }


//     const handleattachments = (e) => {
//         console.log(e.target.files[0])
//         setsendpo({ ...sendpo, file: e.target.files[0] })
//         console.log("==", sendpo.file, "===", sendpo.file.name)
//     };




//     const [clickhere, setclickhere] = useState('')
    
//         const getcomments = async () => {
//         console.log("clclclclclcclcl", params.id)
//         let result = await fetch(`${Api}CommentForApprover`);
//         result = await result.json();
//         setcom(result);
//     };

//     const pdfGenerator = () => {
//         AccountShow("Account")
//         const doc = new jsPDF()
//         doc.html(document.querySelector("#heo"), {
//             callback: function (pdf) {

//                 pdf.save("mypdf")
//             },
//             x: 10,
//             y: 15,
//             width: 190,
//             windowWidth: 650

//         });

//     }



//     const sendEmail = async () => {
//         const formdata = new FormData()
//         formdata.append('file', sendpo.file, sendpo.file.name)


//         const result = await axios.post(`${Api}po`, formdata)


//         if (result.status == 200) { alert("Email sent For the Approval!"); }

//         console.warn(result);
//     };
//     const [name, setname] = useState('')
//     const AddComment = async () => {
//         const result = await fetch(` ${Api}CommentForApprover`, {
//             method: "post",
//             body: JSON.stringify({ comment, name }),
//             headers: { "Content-Type": "application/json" },
//         });
//         if (result) {
//             toast.info("Comment added Succesfully!");
//             setcomment("");
//             getcomments()
//         }
//         console.warn(result);
//     };
//     const SendAttachments = async () => {
//         const result = await fetch(`${Api}attachments`, {
//             method: "post",
//             body: JSON.stringify({ userattachments, vendorid }),
//             headers: { "Content-Type": "application/json" },
//         });
//         // result = await result.json();
//         if (result) {
//             setuserattachments(" ");
//         }
//         console.warn(result);
//     };
//     useEffect(async () => {
//         if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//           navigate.push("/auth/sign-in");
//         } 

//           if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY).name=="Admin1") {
//             navigate.push("/approver");
//            }
//            if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY).name=="Admin") {
//             navigate.push("/ath");
//            }

//         }, []);
//     // useEffect(async () => {
//     //   if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//     //     navigate("/authv");
//     //   } else {
//     //     setCurrentaUser(
//     //       await JSON.parse(
//     //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//     //       )
//     //     );
//     //   }
//     // }, []);
//     useEffect(() => {
//         if (currentaUser) {
//             socket.current = io(host);
//             socket.current.emit("add-user", currentaUser._id);
//         }
//     }, [currentaUser]);
//     useEffect(async () => {
//         if (currentaUser) {
//             if (currentaUser.isAvatarImageSet) {
//                 const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
//                 setContacts(data.data);
//             } else {

//                 const data = await axios.get(`${allUsersRoute}/${currentaUser._id}`);
//                 setContacts(data.data);
//             }
//         }
//     }, [currentUser]);
//     useEffect(() => {
//         getproducts();
//         getcomments();
//         getattacments()
//         getpo()
//         // getrfqdetail();
//     }, []);

//     const handleChatChange = (chat) => {
//         setCurrentChat(chat);
//         console.log("current_chat", chat);
//     };
//     const handleSubmit = async () => {
//         const result = fetch("${Api}commentrouter", {
//             method: "post",
//             body: JSON.stringify({ comment, userid }),
//             headers: { "Content-Type": "application/json" },
//         });
//         setcomment("");

//         result = await result.json();
//         if (result) {
//             setcomment("");

//         }
//     };

//     const yu = async (id) => {
//         navigate.push(`/ApproverAhead/${id}`)
//     }
//         const getproducts = async () => {
//         let result = await fetch(`${Api}attachmentforapprover/`);
//         result = await result.json();
//         setData(result);
//         console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", data._id);



//     };
//     console.log(data.map((tn) => tn.rfq_id));
//     console.log("i love to work", data.map((tn) => tn.rfq_id));
//     const getattacments = async () => {
//         console.log("clclclclclcclcl", params.id)
//         let result = await fetch(`${Api}attachments/search/${params.id}`);
//         result = await result.json();
//         setatt(result);
//         console.log(att)
//     };
//     const getpo = async () => {
//         let result = await fetch(`${Api}poattachments/search/${params.id}`);
//         result = await result.json();
//         setDatapo(result);
//     };

//     const handleSubmitforpo = async () => {
//         const result = fetch("${Api}poattachments", {
//             method: "post",
//             body: JSON.stringify({
//                 product,
//                 price,
//                 quantity,
//                 vendorid,
//             }),
//             headers: { "Content-Type": "application/json" },
//         });
//         if (result) {
//             setproduct('')
//             setprice('')
//             setquantity('')

//             // navigate("/");
//         }

//     };
//     const [toggler, setToggler] = useState(false);
//     useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
//         useEffect(() => {
//           if(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)){
//               if (user.username==="Admin1") {navigate.push('/approver')}
//               else if(user.username!=="Admin"){navigate.push('/ath')}
//               else if(user.username=="Admin"){navigate.push('/')}
//           }
//           else{
//             navigate.push('/auth/sign-in')}},[])
//     return (
//         <>
//             <FsLightbox
//                 toggler={toggler}
//                 sources={[icon4, shap2, icon8, shap4, icon2, shap6, icon5, shap4, icon1]}
//             />
//             <Tab.Container defaultActiveKey="first">
//                 <Row>
//                     <Col lg="12">
//                         <Card>
//                             <Card.Body>
//                                 <div className="d-flex flex-wrap align-items-center justify-content-between">
//                                     <div className="d-flex flex-wrap align-items-center">
//                                         <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
//                                             <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
//                                             <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic" />
//                                             <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic" />
//                                             <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
//                                             <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic" />
//                                             <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic" />
//                                         </div>

//                                     </div>
//                                     <Nav as="ul" className="d-flex nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">


//                                     </Nav>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col lg="5" className="col-lg-3">
//                   <Card>
//                      <Card.Header>
//                         <div className="header-title">
//                            <h4 className="card-title">Messages</h4>
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
//                                  <p className="news-detail mb-0"><i><b>{item.name}</b></i> : {item.comment}</p>
//                               </li>

//                            </ul>
//                         ))}
//                         <Form className="comment-text d-flex align-items-center mt-3" >
//                         <Form.Control type="text" className="rounded" placeholder="Enter Name" value={name}
//                               onChange={(e) => {
//                                  setname(e.target.value);
//                               }} />
//                                 <Form.Control type="text" className="rounded" placeholder="Type here!" value={comment}
//                               onChange={(e) => {
//                                  setcomment(e.target.value);
//                               }} />
//                            <div className="comment-attagement d-flex">
//                            <Button type="button" variant="    "   >
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
//                               </Button>

//                            </div>
//                         </Form>
//                      </Card.Body>

//                   </Card>

//                </Col>

//                     <Col lg="6">
//                         <Tab.Content className="profile-content">
//                             <Tab.Pane eventKey="first" id="profile-feed">
//                             <Card>

// <Card.Body>




//                      </Card.Body>
//                   </Card>
//                                  </div>




// </Card>
//                             </Tab.Pane>
//                             <Tab.Pane eventKey="second" id="profile-activity">
//                                 <Card>
//                                     <Card.Header className="d-flex justify-content-between">
//                                         <div className="header-title">
//                                             <h4 className="card-title">Activity</h4>
//                                         </div>
//                                     </Card.Header>
//                                     <Card.Body>

//                                         <div className="iq-timeline0 m-0 d-flex align-items-center justify-content-between position-relative">
//                                             <ul className="list-inline p-0 m-0">
//                                                 <li>

//                                                     <div className="timeline-dots timeline-dot1 border-primary text-primary"></div>
//                                                     <h6 className="float-left mb-1">Approval</h6>


//                                                     <small className="float-right mt-1">3-2-2022</small>
//                                                     <div className="d-inline-block w-100">
//                                                         <p>hghjghjgjh</p>
//                                                     </div>
//                                                 </li>

//                                             </ul>
//                                         </div>

//                                     </Card.Body>
//                                 </Card>
//                             </Tab.Pane >
//                             <Tab.Pane eventKey="third" id="profile-friends">
//                                 <Card>
//                                     <Card.Header>
//                                         <div className="header-title">
//                                             <h4 className="card-title">Friends</h4>
//                                         </div>
//                                     </Card.Header>
//                                     <Card.Body>
//                                         <ul className="list-inline m-0 p-0">
//                                             <li className="d-flex mb-4 align-items-center">
//                                                 <Image className="theme-color-default-img  rounded-pill avatar-40" src={avatars11} alt="profile-pic" />
//                                                 <Image className="theme-color-purple-img rounded-pill avatar-40" src={avatars22} alt="profile-pic" />
//                                                 <Image className="theme-color-blue-img rounded-pill avatar-40" src={avatars33} alt="profile-pic" />
//                                                 <Image className="theme-color-green-img rounded-pill avatar-40" src={avatars55} alt="profile-pic" />
//                                                 <Image className="theme-color-yellow-img rounded-pill avatar-40" src={avatars66} alt="profile-pic" />
//                                                 <Image className="theme-color-pink-img rounded-pill avatar-40" src={avatars44} alt="profile-pic" />
//                                                 <div className="ms-3 flex-grow-1">
//                                                     <h6>Paul Molive</h6>
//                                                     <p className="mb-0">Web Designer</p>
//                                                 </div>
//                                                 <Dropdown>
//                                                     <Dropdown.Toggle as="span" id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
//                                                     </Dropdown.Toggle>
//                                                     <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
//                                                         <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                                                         <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                                                         <Dropdown.Item href="#">block</Dropdown.Item>
//                                                     </Dropdown.Menu>
//                                                 </Dropdown>
//                                             </li>
//                                             <li className="d-flex mb-4 align-items-center">
//                                                 <Image src={avatars5} alt="story-img" className="rounded-pill avatar-40" />
//                                                 <div className="ms-3 flex-grow-1">
//                                                     <h6>Paul Molive</h6>
//                                                     <p className="mb-0">trainee</p>
//                                                 </div>
//                                                 <Dropdown>
//                                                     <Dropdown.Toggle as="span" id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
//                                                     </Dropdown.Toggle>
//                                                     <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
//                                                         <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                                                         <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                                                         <Dropdown.Item href="#">block</Dropdown.Item>
//                                                     </Dropdown.Menu>
//                                                 </Dropdown>
//                                             </li>
//                                             <li className="d-flex mb-4 align-items-center">
//                                                 <Image src={avatars2} alt="story-img" className="rounded-pill avatar-40" />
//                                                 <div className="ms-3 flex-grow-1">
//                                                     <h6>Anna Mull</h6>
//                                                     <p className="mb-0">Web Developer</p>
//                                                 </div>
//                                                 <Dropdown>
//                                                     <Dropdown.Toggle as="span" id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
//                                                     </Dropdown.Toggle>
//                                                     <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
//                                                         <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                                                         <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                                                         <Dropdown.Item href="#">block</Dropdown.Item>
//                                                     </Dropdown.Menu>
//                                                 </Dropdown>
//                                             </li>
//                                             <li className="d-flex mb-4 align-items-center">
//                                                 <Image src={avatars3} alt="story-img" className="rounded-pill avatar-40" />
//                                                 <div className="ms-3 flex-grow-1">
//                                                     <h6>Paige Turner</h6>
//                                                     <p className="mb-0">trainee</p>
//                                                 </div>
//                                                 <Dropdown>
//                                                     <Dropdown.Toggle as="span" id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
//                                                     </Dropdown.Toggle>
//                                                     <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
//                                                         <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                                                         <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                                                         <Dropdown.Item href="#">block</Dropdown.Item>
//                                                     </Dropdown.Menu>
//                                                 </Dropdown>
//                                             </li>
//                                             <li className="d-flex mb-4 align-items-center">
//                                                 <Image src={avatars4} alt="story-img" className="rounded-pill avatar-40" />
//                                                 <div className="ms-3 flex-grow-1">
//                                                     <h6>Barb Ackue</h6>
//                                                     <p className="mb-0">Web Designer</p>
//                                                 </div>
//                                                 <Dropdown>
//                                                     <Dropdown.Toggle as="span" id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
//                                                     </Dropdown.Toggle>
//                                                     <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
//                                                         <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                                                         <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                                                         <Dropdown.Item href="#">block</Dropdown.Item>
//                                                     </Dropdown.Menu>
//                                                 </Dropdown>
//                                             </li>
//                                             <li className="d-flex mb-4 align-items-center">
//                                                 <Image src={avatars5} alt="story-img" className="rounded-pill avatar-40" />
//                                                 <div className="ms-3 flex-grow-1">
//                                                     <h6>Greta Life</h6>
//                                                     <p className="mb-0">Tester</p>
//                                                 </div>
//                                                 <Dropdown>
//                                                     <Dropdown.Toggle as="span" id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
//                                                     </Dropdown.Toggle>
//                                                     <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
//                                                         <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                                                         <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                                                         <Dropdown.Item href="#">block</Dropdown.Item>
//                                                     </Dropdown.Menu>
//                                                 </Dropdown>
//                                             </li>
//                                             <li className="d-flex mb-4 align-items-center">
//                                                 <Image src={avatars3} alt="story-img" className="rounded-pill avatar-40" />                              <div className="ms-3 flex-grow-1">
//                                                     <h6>Ira Membrit</h6>
//                                                     <p className="mb-0">Android Developer</p>
//                                                 </div>
//                                                 <Dropdown>
//                                                     <Dropdown.Toggle as="span" id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
//                                                     </Dropdown.Toggle>
//                                                     <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
//                                                         <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                                                         <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                                                         <Dropdown.Item href="#">block</Dropdown.Item>
//                                                     </Dropdown.Menu>
//                                                 </Dropdown>
//                                             </li>
//                                             <li className="d-flex mb-4 align-items-center">
//                                                 <Image src={avatars2} alt="story-img" className="rounded-pill avatar-40" />
//                                                 <div className="ms-3 flex-grow-1">
//                                                     <h6>Pete Sariya</h6>
//                                                     <p className="mb-0">Web Designer</p>
//                                                 </div>
//                                                 <Dropdown>
//                                                     <Dropdown.Toggle as="span" id="dropdownMenuButton9" data-bs-toggle="dropdown" aria-expanded="false" role="button">
//                                                     </Dropdown.Toggle>
//                                                     <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
//                                                         <Dropdown.Item href="#">Unfollow</Dropdown.Item>
//                                                         <Dropdown.Item href="#">Unfriend</Dropdown.Item>
//                                                         <Dropdown.Item href="#">block</Dropdown.Item>
//                                                     </Dropdown.Menu>
//                                                 </Dropdown>
//                                             </li>
//                                         </ul>
//                                     </Card.Body>
//                                 </Card>
//                             </Tab.Pane >
//                             <Tab.Pane eventKey="fourth" id="profile-profile">
//                                 {/* <Card className="rounded" id="hellobhi">
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




//                                 <Card>

//                                     <Card.Body>


//                                         <fieldset
//                                             className={`${show === "A" ? "d-block" : "d-none"}`}
//                                         >







//                                             <Card.Header className="d-flex justify-content-between">

//                                                 <Card>
//                                                     <Card.Header className="d-flex justify-content-between">
//                                                         <div className="header-title">
//                                                             <h4 className="card-title"> Add Items</h4>
//                                                         </div>
//                                                     </Card.Header>
//                                                     <Card.Body>
//                                                         <Form>
//                                                             <Row>
//                                                                 <Col>
//                                                                     <Form.Control type="text" placeholder="Item" value={product} onChange={(e) => { setproduct(e.target.value) }} />
//                                                                 </Col>
//                                                                 <Col>
//                                                                     <Form.Control type="text" placeholder="Quantity" value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
//                                                                 </Col>
//                                                                 <Col>
//                                                                     <Form.Control type="text" placeholder="Price" value={price} onChange={(e) => { setprice(e.target.value) }} />
//                                                                 </Col>
//                                                             </Row>

//                                                             <br />
//                                                             <Row>
//                                                                 <Button size="25px" onClick={handleSubmitforpo} variant="btn btn-primary">Add</Button>{' '}

//                                                             </Row>
//                                                         </Form>
//                                                     </Card.Body>
//                                                 </Card>
//                                                 <hr />
//                                             </Card.Header>
//                                             <div className="card">
//                                                 <div className="card-body">
//                                                     <div className="container mb-5 mt-3" id="heo">
//                                                         <div className="row d-flex align-items-baseline">
//                                                             <div className="col-xl-9">
//                                                                 <p style={{ color: "#7e8d9f", fontSize: 20 }}>
//                                                                     Invoice &gt;&gt; <strong>ID: #123-123</strong>
//                                                                 </p>
//                                                             </div>

//                                                             <hr />
//                                                         </div>
//                                                         <div className="container">
//                                                             <div className="col-md-12">
//                                                                 <div className="text-center">
//                                                                     <br />
//                                                                     {/* <p className="pt-0">MDBootstrap.com</p> */}
//                                                                 </div>
//                                                             </div>
//                                                             <div className="row">
//                                                                 <div className="col-xl-8">
//                                                                     <ul className="list-unstyled">
//                                                                         <li className="text-muted">
//                                                                             To: <span style={{ color: "#5d9fc5" }}>John Lorem</span>
//                                                                         </li>
//                                                                         <li className="text-muted">
//                                                                             Email: <span style={{ color: "#5d9fc5" }}>John@gmail.com</span>
//                                                                         </li>
//                                                                         <li className="text-muted">
//                                                                             Issue Date: <span style={{ color: "#5d9fc5" }}>3-5-2022</span>
//                                                                         </li>
//                                                                         <li className="text-muted">
//                                                                             Phone: <span style={{ color: "#5d9fc5" }}>352022</span>
//                                                                         </li>


//                                                                     </ul>
//                                                                 </div>
//                                                                 <div className="col-xl-4">
//                                                                     <p className="text-muted">Invoice</p>
//                                                                     <ul className="list-unstyled">
//                                                                         <li className="text-muted">
//                                                                             <i className="fas " style={{ color: "#84B0CA" }} />{" "}
//                                                                             <span className="fw-bold">ID:</span>#123-456
//                                                                         </li>
//                                                                         <li className="text-muted">
//                                                                             <i className="fas " style={{ color: "#84B0CA" }} />{" "}
//                                                                             <span className="fw-bold">Creation Date: </span>Jun 23,2021
//                                                                         </li>
//                                                                         <li className="text-muted">
//                                                                             <i className="fas " style={{ color: "#84B0CA" }} />{" "}
//                                                                             <span className="me-1 ">Status:</span>
//                                                                             <span className="badge bg-warning text-black ">
//                                                                                 Unpaid
//                                                                             </span>
//                                                                         </li>
//                                                                     </ul>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="row my-2 mx-1 justify-content-center">
//                                                                 <table className="table table-striped table-borderless">
//                                                                     <thead
//                                                                         style={{ backgroundColor: "#84B0CA" }}
//                                                                         className="text-black"
//                                                                     >
//                                                                         <tr>

//                                                                             <th scope="col">Description</th>
//                                                                             <th scope="col">Qty</th>
//                                                                             <th scope="col">Price</th>
//                                                                             <th scope="col">Total</th>
//                                                                         </tr>
//                                                                     </thead>

//                                                                     {datapo.map((item) => (
//                                                                         <tbody>
//                                                                             <tr>
//                                                                                 <td>{item.product}</td>
//                                                                                 <td>{item.quantity}</td>
//                                                                                 <td>{item.price}</td>
//                                                                                 <td>$10</td>

//                                                                             </tr>

//                                                                         </tbody>
//                                                                     ))}
//                                                                 </table>
//                                                             </div>
//                                                             <div className="row">
//                                                                 <div className="col-xl-8">
//                                                                     <p className="ms-3">Add additional notes and payment information</p>
//                                                                 </div>
//                                                                 <div className="col-xl-3">

//                                                                     <p className="text-black float-start">
//                                                                         <span className="text-black me-3"> Total</span>
//                                                                         <span style={{ fontSize: 25 }}>$1221</span>
//                                                                     </p>
//                                                                 </div>
//                                                             </div>
//                                                             <hr />
//                                                             <div className="row">
//                                                                 <div className="col-xl-10">
//                                                                     <p>Thank you for your purchase</p>
//                                                                 </div>

//                                                                 <div className="col-xl-2">

//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <Button size="25px" onClick={pdfGenerator} variant="btn btn-primary">GO </Button>{' '}
//                                                 </div>
//                                             </div>




//                                         </fieldset>
//                                         <fieldset
//                                             className={`${show === "Account" ? "d-block" : "d-none"}`}
//                                         >
//                                             <div class="file-upload-wrapper">
//                                                 <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" />

//                                             </div>

//                                             <button
//                                                 type="button"
//                                                 name="next"
//                                                 className="btn btn-primary next action-button float-end"
//                                                 onClick={sendEmail}

//                                             >
//                                                 Send For Approval
//                                             </button>
//                                             <button
//                                                 type="button"
//                                                 name="previous"
//                                                 className="btn btn-dark previous action-button-previous float-end me-1"
//                                                 value="Previous"
//                                                 onClick={() => AccountShow("A")}
//                                             >
//                                                 Previous
//                                             </button>
//                                         </fieldset>


//                                     </Card.Body>
//                                 </Card>
//                             </Tab.Pane >
//                         </Tab.Content>
//                     </Col>
//                     <Col lg="3">



//                     </Col>

//                 </Row>
//             </Tab.Container>
//         </>
//     )

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








































































import { useState, useRef, useEffect } from "react"
import Chat from "./ChatApprover";
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"
import Footer from "./Footer"
import avatars2 from '../../../assets/images/avatars/02.png'
import FileBase from "react-file-base64";
import { useHistory, useParams, Link } from "react-router-dom"
import { Row, Col, Image, Form, Nav, Dropdown, Tab, FormControl, InputGroup, NavDropdown } from "react-bootstrap";
import Card from '../../../components/Card'
import FsLightbox from "fslightbox-react";
import { Scrollbars } from 'react-custom-scrollbars';
import io from "socket.io-client";
import Button from 'react-bootstrap/Button';

import Header from "./Header"
import MainDetails from "./MainDetails"
import Notes from "./Notes"
import Table from "./Table"
import TableForm from "./TableForm"

import ReactToPrint from "react-to-print"
import styled from 'styled-components';
import Profile_Picture from "./Profile_Picture";
import jsPDF from "jspdf"
import { Api } from '../constant/constant';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
const socket = io.connect(`${Api}`);
const [username, setUsername] = useState("hello");
const [room, setRoom] = useState(22);
const [showChat, setShowChat] = useState(false);

const joinRoom = () => {
  if (username !== "" && room !== "") {
    socket.emit("join_room", room);
    setShowChat(true);
  }
};

    const [ship_to__state, setShip_to__state] = useState('')
    const [ship_to__address, setShip_to__address] = useState('')
    const [ship_to__attn, setShip_to__attn] = useState('')
 
    const [fax, setfax] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [bankName, setBankName] = useState("")
    const [bankAccount, setBankAccount] = useState("")
    const [website, setWebsite] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientAddress, setClientAddress] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [notes, setNotes] = useState("")
    const [description, setDescription] = useState("")
    const [heading, setHeading] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState('')
    const navigate = useHistory()
    const params = useParams()
    const [com, setcom] = useState([]);
    const [l_address, setL_address] = useState('')
    const [l_payment_terms, setL_payment_terms] = useState('')
    const [l_shipping_terms, setL_shipping_terms] = useState('')
    const [l_currency, setL_currency] = useState('')
    const [l_contract, setL_contract] = useState('')
    const [l_contact, setL_contact] = useState('')
    const [l_bill_to_address, setL_bill_to_address] = useState('')
    const [l_bill_to_attn, setL_bill_to_attn] = useState('')
    const [l__bill_to_state, setL__bill_to_state] = useState('')
    const [amount, setAmount] = useState("")
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    const [width] = useState(641)
    const [comment, setcomment] = useState("");
    const componentRef = useRef()
    const [name, setname] = useState('')
    useEffect(() => {
      getcomments ()
    
    }, [])
    const AddComment = async () => {
        const result = await fetch(` ${Api}/CommentForApprover`, {
            method: "post",
            body: JSON.stringify({ comment, name }),
            headers: { "Content-Type": "application/json" },
        });
        if (result) {
            toast.info("Comment added Succesfully!");
            setcomment("");
            getcomments()
        }
        console.warn(result);
    };
const [status, setStatus] = useState( "Approved")
const [color, setColor] = useState('bg-primary')


 const update = async (id) => {
  let result = await fetch(`${Api}/attachmentforapprover/g/${id}`, {
    method: "Put",
    body: JSON.stringify( {status,color}),
    headers: { "Content-Type": "Application/json" },

  })
  if(result)
  {

    toast.info("Updated!");
getproducts()

  }}

    const getcomments = async () => {
        console.log("clclclclclcclcl", params.id)
        let result = await fetch(`${Api}/CommentForApprover`);
        result = await result.json();
        setcom(result);
    };
    const deletepo = async (id,useid) => {

        let result = await fetch(`${Api}/attachmentforapprover/${id} `, {
          method: "Delete",
        });
console.log('thisssssssssssssss',useid)

          const result12 = await fetch(`${Api}/attachments`, {
            method: "post",
            body: JSON.stringify({
                title:"PO is Rejected!!!!!!!!",
                userid:useid,
            }),
            headers: { "Content-Type": "application/json" },
          });


        result = await result.json();
        if (result) {
          getproducts();
        }
      };
    
    const approvDeletepo = async (id,useid) => {

        let result = await fetch(`${Api}/attachmentforapprover/${id} `, {
          method: "Delete",
        });
console.log('thisssssssssssssss',useid)

          const result12 = await fetch(`${Api}/attachments`, {
            method: "post",
            body: JSON.stringify({
                title:"PO is Rejected!!!",
                clickhere:"click here",
                userid:useid,
            }),
            headers: { "Content-Type": "application/json" },
          });


        result = await result.json();
        if (result) {
          getproducts();
        }
      };
    const handlePrint = () => {
        window.print()
    }
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    const [data, setData] = useState([]);
    useEffect(() => {
        getproducts();
    }, []);

    const getproducts = async () => {
        let result = await fetch(`${Api}/attachmentforapprover/searchapprover/bg-warning`);
        result = await result.json();
        setData(result);
        console.log(result)
    };
    console.warn("results", data);
    useEffect(() => {
        if (window.innerWidth < width) {
            alert("Place your phone in landscape mode for the best experience")
        }
    }, [width])
    const pdfGenerator = () => {
        setShow1(true)
        setShow2(false)
        const doc = new jsPDF()
        doc.html(document.querySelector("#print"), {
            callback: function (pdf) {

                pdf.save("mypdf")






            },
            x: 28,
            y: 5,
            width: 180,
            windowWidth: 1000
        });
        // navigate.push(`/dashboard/app/UserProfile2/${params.id}`)
    }
    const [postemail, setpostemail] = useState({
        id: params.id,
        file: '',
        status: 'Not Approved',
        color: 'bg-warning'
    })
    const handleemail = async (e) => {
        e.preventDefault();
        const result = await fetch(`${Api}/attachmentforapprover/sendapprover`, {
            method: "post",
            body: JSON.stringify(postemail),
            headers: { "Content-Type": "application/json" },
        });


        if (result) {
            toast.info("Attachment added Succesfully!");
            navigate.push(`/dashboard/app/user-profile/${params.id}`)

        }
        console.warn(result);
    };
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(true)

    const [toggler, setToggler] = useState(false);
    return (
        <>

            <>
                <FsLightbox
                    toggler={toggler}
                />
                <Tab.Container defaultActiveKey="first">
                    <Row>


                        <>
                            <Col lg="8" className="col-lg-3">
                                <Card>
                                    <Card.Header className="d-flex align-items-center justify-content-between pb-4">
                                    <Scrollbars style={{ width: 1000, height: 700 }}>  
                                                                            <table id="style-2" className="table box mb-0 table-striped  force-overflow" role="grid">
                                            <thead  >
                                                <tr>
                                                    <th>Name</th>
                                                    <th>PO number</th>

                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map((item) => (
                                                        <tr>
                                                            <td>

                                                            <a href={item.file} download>   <h6 className="float-left mb-1"> {item._id}</h6></a>

                                                             

                                                            </td>
                                                            <td>


                                                                {item.id}


                                                            </td>
                                                            <td>
                                                          
                                                            <Form.Group className="form-group">
                                                            <a href={item.file} download>    
                                                        
                                                        <svg width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule  ="evenodd" clipRule="evenodd"
                                                            d="M7.666 21.25H16.335C19.355 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.365 2.75 16.335 2.75H7.666C4.636 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.636 21.25 7.666 21.25Z"
                                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 16.0861V7.91406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.748 12.3223L12 16.0863L8.25195 12.3223" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                    </svg>
                                                    </a>
                                        <Button type="button" variant="btn btn-primary"  onClick={() => update(item._id)}>Approve</Button>{' '}
                                        <Button type="button" variant="btn btn-danger"  onClick={() => deletepo(item._id,item.id)}>Reject</Button>
                                    </Form.Group>


                                                            </td>

                                                            {/* <td>$14,000</td>// no of vendors in this rfq */}

                                                        </tr>
                                                    ))}


                                            </tbody>
                                        </table>
                                        </Scrollbars>


                                    </Card.Header>

                                </Card>



                            </Col>
                            <Col lg="4">
                          
                   
                       
                    
                
                 
                  
               


                  
                     <Chat socket={socket} username={username} room={room} />
                    
                        {/* {com.map((item) => (
                           <ul className="list-inline m-0 p-0">
                              <li className="d-flex mb-2">
                                 <div className="news-icon me-3">
                                    <svg width="20" viewBox="0 0 24 24">
                                       <path fill="currentColor" d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" />
                                    </svg>
                                 </div>
                                 <p className="news-detail mb-0"><i><b>{item.name}</b></i> : {item.comment}</p>
                              </li>

                           </ul>
                        ))}
                 
                
                        <Form className="comment-text d-flex align-items-center mt-3" >
                        <Form.Control type="text" className="rounded" placeholder="Enter Name" value={name}
                              onChange={(e) => {
                                 setname(e.target.value);
                              }} />
                                <Form.Control type="text" className="rounded" placeholder="Type here!" value={comment}
                              onChange={(e) => {
                                 setcomment(e.target.value);
                              }} />
                           <div className="comment-attagement d-flex">
                           <Button type="button" variant="    "   >
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
                              </Button>

                           </div>
                        </Form> */}
                   
                

              
                            </Col></>


                    </Row>
                </Tab.Container>
                <ToastContainer />
            </>


        </>
    )
}

export default App


const CSS = styled.div`
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;700&display=swap");

:root {
  --blue-card: #12036f;
  --red-card: #f12711;
  --yellow-card: #f5af19;
}

::selection,
::-moz-selection {
  @apply bg-teal-500 text-white;
}

::-webkit-scrollbar {
  @apply w-3;
}

::-webkit-scrollbar-track {
  @apply shadow rounded-lg bg-teal-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-teal-400 rounded-lg hover:bg-teal-500 transition-all duration-200;
}

.beta__tag {
  position: absolute;
  left: -6rem;
  top: 2rem;
  background-color: #f12711;
  width: 300px;
  transform: rotate(-45deg);
  padding: 0.5rem;
  text-align: center;
}

body {
  margin: 0;
  font-family: "Reem Kufi", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  @apply bg-teal-50 overflow-x-hidden;
}

.max-width {
  @apply px-5 xl:max-w-7xl xl:mx-auto 2xl:px-0;
}

.slant {
  border-right: 100vw solid #99f6e4;
  border-top: 150px solid transparent;
}

.slant-left {
  border-right: 100vw solid;
  @apply border-r-teal-200;
  border-bottom: 150px solid transparent;
}

.slant-footer {
  border-left: 100vw solid;
  @apply border-l-teal-900;
  border-top: 150px solid transparent;
  @apply absolute;
  top: -150px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #112827;
}

label {
  margin-bottom: 0.3rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #383838;
}

input,
textarea {
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  color: #616161;
  border: 2px solid hsl(217, 91%, 60%, 30%);
  outline: none;
}

input:focus,
textarea:focus {
  border: 2px solid hsl(217, 91%, 60%);
}

button {
  user-select: none;
}

.footer li {
  margin: 0.5rem 0.2rem;
}

.navbar {
  position: absolute;
  left: 20px;
  top: -100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: calc(100vw - 45px);
  transition: top 0.4s ease-in-out;
  @apply shadow shadow-teal-500;
}

.navbar.open {
  top: 80px;
}

.navbar ul li {
  margin: 1rem 0;
}

.home {
  background-image: linear-gradient(90deg, #f12711 0%, #f5af19 100%);
}

.video {
  width: calc(100vw - 40px);
  margin: auto;
  height: 200px;
}

.testimonials .article:first-child {
  border-color: var(--red-card);
}

.testimonials .article:first-child .content {
  background-color: var(--red-card);
  padding: 1rem;
}

.testimonials .article:nth-child(2) {
  border-color: var(--yellow-card);
}

.testimonials .article:nth-child(2) .content {
  background-color: var(--yellow-card);
  padding: 1rem;
}

.testimonials .article:nth-child(3) {
  border-color: var(--blue-card);
}

.testimonials .article:nth-child(3) .content {
  background-color: var(--blue-card);
  padding: 1rem;
}

.call__to__action {
  background-image: linear-gradient(90deg, #f5af19 0%, #f12711 100%);
}

.about {
  background-image: linear-gradient(90deg, #f12711 0%, #f5af19 100%);
  padding: 2rem 0;
}

.contact__form input,
.contact__form textarea,
.contact__form button {
  width: calc(100vw - 40px);
}

.invoice__preview {
  margin-top: 1.25rem;
}

@media (min-width: 500px) {
  .video {
    height: 300px;
    width: calc(100vw - 60px);
  }
}

@media (min-width: 640px) {
  .video {
    height: 400px;
  }
}

@media (min-width: 768px) {
  .about .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .contact__form input,
  .contact__form textarea,
  .contact__form button {
    width: calc(50vw - 40px);
  }
}

@media (min-width: 1024px) {
  .navbar {
    position: relative;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }

  .navbar ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar ul li {
    margin: 0 10px;
  }

  .home .overlay {
    height: calc(80vh - 10px);
  }

  .video {
    width: calc(80vw - 100px);
    height: 600px;
  }

  .slant {
    border-top-width: 200px;
  }

  .slant-left {
    border-bottom-width: 200px;
  }

  .slant-footer {
    border-top-width: 200px;
    top: -200px;
  }
}

@media (min-width: 1280px) {
  .invoice__preview {
    transform: scale(0.8);
    position: sticky;
    right: 0;
    top: 0;
    margin-top: -6rem;
    margin-bottom: 2rem;
  }
}

`




const ScrollBar = styled.div`

#style-2::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
.box{

    box-shadow: 0 50px 50px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .force-overflow
}
{
	min-height: 430px;
}
.scrollbar
{
	margin-left: 30px;
	float: left;
	height: 380px;
	width: 910px;
 
	overflow-y: scroll;
	overflow-x: auto;
    overflow-x:auto;
	margin-bottom: 35px;
}


`
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
   width: 420px;
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