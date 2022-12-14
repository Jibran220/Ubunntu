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
// import icon6 from '../../../assets/images/icons/06.png'
// import icon7 from '../../../assets/images/icons/07.png'
// import icon5 from '../../../assets/images/icons/05.png'
// import shap2 from '../../../assets/images/shapes/02.png'
// import shap4 from '../../../assets/images/shapes/04.png'
// import shap6 from '../../../assets/images/shapes/06.png'
// import pages2 from '../../../assets/images/pages/02-page.png'
// import Flatpickr from "react-flatpickr";

// import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'
// import React, { useEffect, useState, useRef } from "react";
// import FileBase from "react-file-base64";

// import FsLightbox from "fslightbox-react";
// import { allUsersRoute, host } from "../utils/APIRoutes";
// import axios from "axios";
// import { jsPDF } from "jspdf";
// import Base64Downloader from 'react-base64-downloader';
// import { io } from "socket.io-client";

// import styled from "styled-components";
// import { Row, Col, Image, Form, Nav, Dropdown, Tab } from "react-bootstrap";
// import { useHistory, Link, useParams, useLocation } from "react-router-dom";
// import { BsFillArrowRightSquareFill } from "react-icons/bs";
// import Button from 'react-bootstrap/Button';
// import ChatContainer from "../MessagesForAdmin.js/ComponentsForAdmin";
// import Contacts from "../MessagesForAdmin.js/Contacts";
// import Welcome from "../MessagesForAdmin.js/Welcome";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UserProfile = () => {

//     const scrollRef = useRef();
//     const navigate = useHistory();
//     const socket = useRef();
//     const params = useParams();
//     const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
// const location = useLocation();
// const [product, setProduct] = useState('')
// const [heading, setheading] = useState('')
// const [qty, setqty] = useState('')
// const [price, setprice] = useState('')
// const [currentUser, setCurrentUser] = useState(user);
// const [data, setData] = useState([]);
// const [com, setcom] = useState([]);
// const [data1, setData1] = useState([]);
// const [comment, setcomment] = useState("");
// const [userid, setuserid] = useState(params.id);
// const [rfq_id, setrfq_id] = useState(params.id);
// const [vendorid, setvendorid] = useState(params.id);
// const [files, setfiles] = useState("");
// const [name, setname] = useState("");
// const [status, setstatus] = useState("");
// const [note, setnote] = useState("");
// const [date, setdate] = useState(  new Date(Date.now()).getDate() +
// ":" +
// new Date(Date.now()).getMonth()+
// ":" +
// new Date(Date.now()).getFullYear()); 
// const [expirydate, setexpirydate] = useState("");
// const [contacts, setContacts] = useState([]);
// const [currentChat, setCurrentChat] = useState(contacts);
// const [currentaUser, setCurrentaUser] = useState(undefined);
// const [postData, setPostData] = useState({
//     files: '',
//     userid: params.id,
//     title: ''
// })
//     const handleSubmitforpo = async () => {
//         const result = fetch("${Api}/clientQuoteproduct", {
//            method: "post",
//            body: JSON.stringify({
//             heading,
//               product,
//               price,
//               qty,
//               vendorid,
//            }),
//            headers: { "Content-Type": "application/json" },
//         });
//         if (result) {
//            getpo()
//            getpo()
//            getpo()
//            getpo()
//            getpo()
//            getpo()
//            toast.info("Added")
//            setProduct('')
//            setprice('')
//   setqty('')
// setprice('')
// setheading('')
// }

//      };
//      const vendorquote = async () => {
//         const result = fetch("${Api}/clientQuote", {
//            method: "post",
//            body: JSON.stringify({
//             name,
//               status,
//               note,
//               date,
//               expirydate,
//               vendorid,
//            }),
//            headers: { "Content-Type": "application/json" },
//         });
//         if (result) {
//            getpo()
//            getpo()
//            getpo()
//            getpo()
//            getpo()
//            getpo()
//            toast.info("Added")
//            navigate.push(`/VendorQuoteLIst/${params.id}`)
//            setname('')
//            setnote('')
//   setstatus('')
// setdate('')
// setexpirydate('')
// }

//      };

//     console.log("current_chat", contacts)
//     console.log("i love to UUUUUUUUUUUUPER", data.map((tn) => tn.rfq_id));







//     const sendfeed=()=>{
//     navigate.push(`/athpro/${params.id}`)

//     }
//     const sendQuote=()=>{}
//     useEffect(() => {
//         getproducts();
//         getcomments();
//         console.log('this is from use eeeeeeeeeeeee', user.username)

//         console.log("clclclclclcclcl", params.id)


//         // getrfqdetail();
//     }, []);
//     const [datapo, setDatapo] = useState([])
//     useEffect(() => {

//         getpo()

//      }, []);
//     const getpo = async () => {
//         let result = await fetch(`${Api}/clientQuoteproduct/search/${params.id}`);
//         result = await result.json();
//         setDatapo(result);
//         console.log(result)
//      };

//     const handleChatChange = (chat) => {
//         setCurrentChat(chat);
//         console.log("current_chat", chat);
//     };

//     console.log("clclclclclcclcl", params.id)
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const result = await fetch(`${Api}/attachments`, {
//             method: "post",
//             body: JSON.stringify(postData),
//             headers: { "Content-Type": "application/json" },
//         });
//         // result = await result.json();

//         if (result) {
//             toast.info("Attachment added Succesfully!");

//             setPostData({
//                 files: '',
//                 title: ''
//             })
//         }
//         console.warn(result);
//     };
//     const getproducts = async () => {
//         let result = await fetch(`${Api}/userRFQ/view/${params.id}`);
//         result = await result.json();
//         setData(result);
//         console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", result._id);

//         let result1 = await fetch(
//             `${Api}/rfqmanagers/${data.map((tn) => tn.rfq_id)}`
//         );
//         result1 = await result1.json();
//         setData1(result1);
//         console.log(data1);
//         console.log("clclclclclcclcl", params.id)
//     };
//     console.log("i love to work", data.map((tn) => tn.rfq_id));
//     const getcomments = async () => {
//         console.log("clclclclclcclcl", params.id)
//         let result = await fetch(`${Api}/commentrouter/search/${params.id}`);
//         result = await result.json();
//         setcom(result);
//     };


//     const [toggler, setToggler] = useState(false);

// //     return (
// //         <>
// //             <FsLightbox
// //                 toggler={toggler}
// //                 sources={[icon4, shap2, icon8, shap4, icon2, shap6, icon5, shap4, icon1]}
// //             />
// //             <Tab.Container defaultActiveKey="first">
// //                 <Row>
// //                     <Col lg="12">
// //                         <Card>
// //                             <Card.Body>
// //                                 <div className="d-flex flex-wrap align-items-center justify-content-between">
// //                                     <div className="d-flex flex-wrap align-items-center">
// //                                         <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
// //                                             <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
// //                                             <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic" />
// //                                             <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic" />
// //                                             <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
// //                                             <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars66} alt="profile-pic" />
// //                                             <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic" />
// //                                         </div>
// //                                         <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
// //                                             {data.map((item) => (
// //                                                 <h4 className="me-2 h4">{item.rfq_name}</h4>
// //                                             ))}


// //                                             {data.map((item) => (
// //                                                 <span> - {item.Name}</span>
// //                                             ))}                                 </div>
// //                                     </div>
// //                                     <Nav as="ul" className="d-flex nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">
// //                                         <Nav.Item as="li">
// //                                         <Button variant="primary rounded-pill"  onClick={sendfeed}>feed</Button>

// //                                         </Nav.Item> <Nav.Item as="li">
// //                                         <Button variant="primary rounded-pill"   >Quote</Button>

// //                                         </Nav.Item>
// //                                     </Nav>
// //                                 </div>
// //                             </Card.Body>
// //                         </Card>
// //                     </Col>

// //                     <Col lg="12">
// //                         <Tab.Content className="profile-content">
// //                             <Tab.Pane eventKey="first" id="profile-feed">
// //                                 <Card>
// //                                     <Card.Header className="d-flex align-items-center justify-content-between pb-4">
// //                                         <div className="header-title">
// //                                             <div className="d-flex flex-wrap">
// //                                                 <div className="media-support-user-img me-3">
// //                                                     <Image className="rounded-pill img-fluid avatar-60 bg-soft-danger p-1 ps-2" src={avatars2} alt="" />
// //                                                 </div>
// //                                                 <div className="media-support-info mt-2">
// //                                                     <h5 className="mb-0">Send Quote</h5>
// //                                                     <p className="mb-0 text-primary"></p>
// //                                                 </div>
// //                                             </div>
// //                                         </div>

// //                                     </Card.Header>
// //                                     <Card.Body className="p-0">

// //                                         <div className="comment-area p-3">




// //                                             <fieldset  >
// //                                                 <div className="form-card text-start">
// //                                                     <div className="row">
// //                                                         <div className="col-7">
// //                                                             <h3 className="mb-4"> </h3>
// //                                                         </div>
// //                                                         <div className="col-3"></div>
// //                                                     </div>
// //                                                     <div className="row">
// //                                                         <div className="col-md-6">
// //                                                             <div className="form-group">
// //                                                                 <label className="form-label">Name: </label>

// //                                                                 <input
// //                                                                     type="text"
// //                                                                     className="form-control"
// //                                                                     name="tovendor"
// //                                                                     value={name} onChange={(e) => { setname(e.target.value) }}


// //                                                                 />
// //                                                             </div>
// //                                                         </div>
// //                                                         <div className="col-md-6">
// //                                                             <div className="form-group">
// //                                                                 <label className="form-label">Status: </label>
// //                                                                 <Form.Group className="form-group">
// //                                                                     <select 
// //                                                                     value={status} onChange={(e) => { setstatus(e.target.value) }}
// //                                                                         className="form-select mb-3 shadow-none"

// //                                                                     >
// //                                                                         <option value=" Published">Published</option>
// //                                                                         <option value=" Draft">Draft</option>
// //                                                                         <option value=" In Progress">In Progress</option>
// //                                                                         <option value=" Finished">Finished</option>
// //                                                                     </select>
// //                                                                 </Form.Group>{" "}
// //                                                             </div>
// //                                                         </div>
// //                                                         <div className="col-md-6">
// //                                                             <div className="form-group">
// //                                                                 <label className="form-label">Note: </label>
// //                                                                 <Form.Control as="textarea" 
// //                                                                     value={note} onChange={(e) => { setnote(e.target.value) }}

// //                                                                 id="exampleFormControlTextarea1" rows="5" />

// //                                                             </div>
// //                                                         </div>

// //                                                         <div className="col-md-6">
// //                                                         <Form.Group className="form-group">
// //                                         <Form.Label  htmlFor="exampleInputdate">Date </Form.Label>
// //                                         <Form.Control type="date"  
// //                                                                     value={date} onChange={(e) => { setdate(e.target.value) }}

// //                                         id="exampleInputdate" defaultValue="2019-12-18"/>
// //                                     </Form.Group>
// //                                     <Form.Group className="form-group">
// //                                         <Form.Label  htmlFor="exampleInputdate">Expiry Date  </Form.Label>
// //                                         <Form.Control type="date" 
// //                                                                     value={expirydate} onChange={(e) => { setexpirydate(e.target.value) }}

// //                                         id="exampleInputdate" defaultValue="2019-12-18"/>
// //                                     </Form.Group>
// //                                                    </div>



// //                                               <h5 className='text-center text-light'>---------------------------------------------------------------------------------------------------------------------------------------------------------</h5>

// //                                               <div className="col-md-3">
// //                                                             <div className="form-group">
// //                                                                 <label className="form-label">Item: </label>

// //                                                                 <input
// //                                                                     type="text"
// //                                                                     className="form-control"
// //                                                                     name="tovendor"
// //                                                                     value={heading} onChange={(e) => { setheading(e.target.value) }}
// //                                                                 />
// //                                                             </div>
// //                                                         </div>
// //                                                         <div className="col-md-3">
// //                                                             <div className="form-group">
// //                                                                 <label className="form-label">Description: </label>

// //                                                                 <input
// //                                                                     type="text"
// //                                                                     className="form-control"
// //                                                                     name="tovendor"
// //                                                                     value={product} onChange={(e) => { setProduct(e.target.value) }}

// //                                                                 />
// //                                                             </div>
// //                                                         </div>
// //                                                         <div className="col-md-3">
// //                                                             <div className="form-group">
// //                                                                 <label className="form-label">QTY: </label>

// //                                                                 <input
// //                                                                     type="number"
// //                                                                     className="form-control"
// //                                                                     name="tovendor"
// //                                                                     value={qty} onChange={(e) => { setqty(e.target.value) }}

// //                                                                 />
// //                                                             </div>
// //                                                         </div>
// //                                                         <div className="col-md-3">
// //                                                             <div className="form-group">
// //                                                                 <label className="form-label">Price: </label>

// //                                                                 <input
// //                                                                     type="number"
// //                                                                     className="form-control"
// //                                                                     name="tovendor"
// //                                                                     value={price} onChange={(e) => { setprice(e.target.value) }}

// //                                                                 />
// //                                                             </div>

// //                                                         </div>
// //                                                         <div className="col-md-3">
// //                                                             <div className="form-group">

// //                                                                 <Button size="25px" onClick={handleSubmitforpo} variant="btn btn-primary">Add</Button>{' '}

// //                                                             </div>

// //                                                         </div>


// //                                                         <h5 className='text-center text-light'>---------------------------------------------------------------------------------------------------------------------------------------------------------</h5>
// // <br/>
// // <div class="row">
// //     <div class="col-md-12">
// //         <div class="row">
// //             <div class="col-md-3">

// //                 <table class="table">
// // <b>Description</b>                </table>
// //             </div> 
// //             <div class="col-md-3">

// //                 <table class="table">
// //                <b> DATE  </b>              </table>
// //             </div> 
// //             <div class="col-md-2">

// //                 <table class="table">
// //               <b>  QTY  </b>              </table>
// //             </div> 
// //             <div class="col-md-2">

// //                 <table class="table">
// //               <b>  PRICE</b>
// //                 </table>
// //             </div>       
// //             <div class="col-md-2">

// //            <table class="table">
// //          <b>  Total</b>
// //            </table>
// //        </div>      
// //         </div>
// //     </div>
// // </div>
// // {datapo.map((item)=>(
// //     <div class="row">
// //     <div class="col-md-12">

// //         <div class="row">
// //             <div class="col-md-3">
// //                 <h5>{item.heading}</h5>
// //                      <Form.Group className="mb-3 form-group">

// //                  {item.product}
// //                  </Form.Group>


// //           </div> 

// //             <div class="col-md-3">

// //                 <table class="table">
// //                 {item.Dates}
// //                 </table>
// //             </div> 
// //             <div class="col-md-2">

// //                 <table class="table">
// //               {item.qty}
// //                 </table>
// //             </div> 
// //             <div class="col-md-2">

// //                 <table class="table">
// //               {item.price}
// //                 </table>
// //             </div>  
// //             <div class="col-md-2">

// //            <table class="table">
// //         {item.price*item.qty}
// //            </table>
// //        </div> 
// //         </div>


// //     </div>
// // </div>

// // ))}




// //                                                     </div>
// //                                                 </div>
// //                                                 <button onClick={vendorquote} 
// //                                                     className="btn btn-primary next action-button float-end"

// //                                                 >
// //                                                     Submit
// //                                                 </button>
// //                                             </fieldset>

// //                                             <ToastContainer />

// //                                             <hr />

// //                                         </div>
// //                                     </Card.Body>
// //                                 </Card>





// //                             </Tab.Pane>



// //                         </Tab.Content>
// //                     </Col>

// //                 </Row>
// //             </Tab.Container>
// //             <ToastContainer/>
// //         </>
// //     )

// }

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




















import { Api } from '../constant/constant';




import { useState, useRef, useEffect } from "react"
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"
import Footer from "./Footer"
import avatars2 from '../../../assets/images/avatars/02.png'
import FileBase from "react-file-base64";
import { useHistory, useParams } from "react-router-dom"
import { Row, Col, Image, Form, Nav, Dropdown, Tab, FormControl, InputGroup, NavDropdown } from "react-bootstrap";
import Card from '../../../components/Card'
import FsLightbox from "fslightbox-react";


import Header from "./Header"
import MainDetails from "./MainDetails"
import Notes from "./Notes"
import Table from "./Table"
import TableForm from "./TableForm"
import ReactToPrint from "react-to-print"
import styled from 'styled-components';
import Profile_Picture from "./Profile_Picture";
import jsPDF from "jspdf"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';


function App() {
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

  const [quantity, setQuantity] = useState("")

  const [company, setCompany] = useState('')
  const navigate = useHistory()
  const params = useParams()
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
  const [name, setname] = useState('')
  const [product, setProduct] = useState('')
  const [heading, setHeading] = useState('')
  const [qty, setqty] = useState('')
  const [price, setPrice] = useState('')
  const [data, setData] = useState([]);
  const [com, setcom] = useState([]);
  const [data1, setData1] = useState([]);
  const [comment, setcomment] = useState("");
  const [userid, setuserid] = useState(params.id);
  const [rfq_id, setrfq_id] = useState(params.id);
  const [vendorid, setvendorid] = useState(params.id);
  const [files, setfiles] = useState("");
// const [Qoute_Name, setQoute_Name] = useState('')
const [Qoute_status, setQoute_status] = useState('')
const [Qoute_Note, setQoute_Note] = useState('')
const [Qoute_Date, setQoute_Date] = useState('')
const [Qoute_ExpiryDate, setQoute_ExpiryDate] = useState('')
  const [status, setstatus] = useState("");
  const [note, setnote] = useState("");
  const [date, setdate] = useState(new Date(Date.now()).getDate() +
    ":" +
    new Date(Date.now()).getMonth() +
    ":" +
    new Date(Date.now()).getFullYear());
  const [expirydate, setexpirydate] = useState("");
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(contacts);
  const [currentaUser, setCurrentaUser] = useState(undefined);
  const [postData, setPostData] = useState({
    files: '',
    userid: params.id,
    title: ''
  })
  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
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
    Qoute_Name:'',
    Qoute_ExpiryDate:''
    // status: 'Not Approved',
    // color: 'bg-warning'
  })
  const handleemail = async (e) => {
    e.preventDefault();
    const result = await fetch(`${Api}/clientquote`, {
      method: "post",
      body: JSON.stringify(postemail),
      headers: { "Content-Type": "application/json" },
    });


    if (result) {
      toast.info("Attachment added Succesfully!");
      navigate.push(`/athpro/${params.id}`)

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
          <Col lg="12">
              <Card>
{show1?

<>
                <br/>
              <div className="col-md-12">
                        <label htmlFor="name">Send Your Quote  </label>
                      
                        </div>
                
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setpostemail({ ...postemail, file: base64 })} />
                        <button      onClick={handleemail} className="bg-blue-500 ml-5 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                             Send 
                            </button>
                      
                        </>:null}
              </Card>
            </Col>
            {show2 ?
              <>
                <Col lg="6" className="col-lg-3">
                  <Card>
                    <Card.Header className="d-flex align-items-center justify-content-between pb-4">
                      <div className="header-title">
                        <div className="d-flex flex-wrap">
                          <div className="media-support-user-img me-3">
                          </div>
                          <div className="media-support-info mt-2">
                            <section>
                              <div className="form-card text-start">
                                <div className="row">
                                  <div className="col-7">
                                    <h3 className="mb-4"> </h3>
                                  </div>
                                  <div className="col-3"></div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Name: </label>

                                      <input
                                        type="text"
                                        className="form-control"
                                        name="tovendor"
                                        value={postemail.Qoute_Name}  

                                        onChange={(e) =>
                                          setpostemail({
                                            ...postemail,
                                            Qoute_Name: e.target.value,
                                          })
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Status: </label>
                                      <Form.Group className="form-group">
                                        <select
                                          value={Qoute_status} onChange={(e) => { setQoute_status(e.target.value) }}
                                          className="form-select mb-3 shadow-none"

                                        >
                                          <option value=" Published">Published</option>
                                          <option value=" Draft">Draft</option>
                                          <option value=" In Progress">In Progress</option>
                                          <option value=" Finished">Finished</option>
                                        </select>
                                      </Form.Group>{" "}
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="form-label">Note: </label>
                                      <Form.Control as="textarea"
                                        value={Qoute_Note} onChange={(e) => { setQoute_Note(e.target.value) }}

                                        id="exampleFormControlTextarea1" rows="5" />

                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <Form.Group className="form-group">
                                      <Form.Label htmlFor="exampleInputdate">Date </Form.Label>
                                      <Form.Control type="date"
                                        value={Qoute_Date} onChange={(e) => { setQoute_Date(e.target.value) }}

                                        id="exampleInputdate" defaultValue="2019-12-18" />
                                    </Form.Group>
                                    <Form.Group className="form-group">
                                      <Form.Label htmlFor="exampleInputdate">Expiry Date  </Form.Label>
                                      <Form.Control type="date"

                                      
                                        value={postemail. Qoute_ExpiryDate}  onChange={(e) =>
                                          setpostemail({
                                            ...postemail,
                                            Qoute_ExpiryDate: e.target.value,
                                          })
                                        }

                                        id="exampleInputdate" defaultValue="2019-12-18" />
                                    </Form.Group>
                                  </div>



                                
                              

                                  <article>
                                    <TableForm
                                      heading={heading}
                                      setHeading={setHeading}
                                      description={description}
                                      setDescription={setDescription}
                                      quantity={quantity}
                                      setQuantity={setQuantity}
                                      price={price}
                                      setPrice={setPrice}
                                      amount={amount}
                                      setAmount={setAmount}
                                      list={list}
                                      setList={setList}
                                      total={total}
                                      setTotal={setTotal}
                                    />
                                  </article>



                                </div>
                              </div>
                              <div className="bg-white p-5 rounded shadow">
                                {/* name, address, email, phone, bank name, bank account number, website client name, client address, invoice number, invoice date, due date, notes */}
                                <div className="flex flex-col justify-center">










                                




                                </div>
                              </div>
                              <article className="mt-5">
                              </article>
                            </section>
                          </div>
                        </div>
                      </div>

                    </Card.Header>
                    <Card.Body className="p-0">

                      <div className="comment-area p-3">





                        <hr />

                      </div>
                    </Card.Body>
                  </Card>



                </Col>
                <Col lg="6">
                  <Tab.Content className="profile-content">
                    <Tab.Pane eventKey="first" id="profile-feed">
                      <Card>

                        <Card.Body className=" ">



<br/>
<br/>
<br/>


                          <div className="invoice__preview bg-white   rounded">


                            <button onClick={pdfGenerator} className="bg-blue-500 ml-5 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                              Print / Download
                            </button>



                            <div ref={componentRef} className="p-5" id="print">

                              <div className="row">
                                <div className="col-x-12">
                                  <br />
                                  <br />

                                  <div className="row">
                                    <div className="col-xl">

                                 
                                    
                                      <h5>  <b>  <MainDetails company={postemail.Qoute_Name} /></b> </h5><span style={{ color: "#5d9fc5" }}></span>
                                      <br />
                                      <ul className="list-unstyled">
                                        <i>
                                          <li contenteditable="true" className="text-muted">
                                          <h5><u>Staus: </u></h5>   <MainDetails name={Qoute_status} />
                                            <span style={{ color: "#5d9fc5" }}></span>
                                          </li>
                                          <li contenteditable="true" className="text-muted">
                                            {/* address */}
                                            <h5><u>Date: </u></h5> <MainDetails address={Qoute_Date} /><span style={{ color: "#5d9fc5" }}> </span>
                                          </li>
                                          <li contenteditable="true" className="text-muted">
                                            <h5><u>Expiry Date: </u></h5> <MainDetails website={postemail. Qoute_ExpiryDate} /><span style={{ color: "#5d9fc5" }}></span>
                                          </li>
                                        </i>
                                       


                                        <li contenteditable="true" className="text-muted">
                                          <br />


                                     

                                          <span style={{ color: "#5d9fc5" }}> </span>
                                        </li>
                                        <br />


                                      </ul></div>
                                    <div className="col-xl"></div>
                                    <div className="col-xl"></div>
                                    <div className="col-xl">
                                     
                                 
 



                                  
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Notes notes={Qoute_Note} />




                              <Table
                                heading={heading}
                                description={description}
                                quantity={quantity}
                                price={price}
                                amount={amount}
                                list={list}
                                setList={setList}
                                total={total}
                                setTotal={setTotal}
                              />
                              <div>



                              </div>
                            </div>

                          </div>
                          {/* <button
            onClick={() => setShowInvoice(false)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Edit Information
          </button> */}




                        </Card.Body>

                      </Card>





                    </Tab.Pane>



                  </Tab.Content>
                </Col></> : null}


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
