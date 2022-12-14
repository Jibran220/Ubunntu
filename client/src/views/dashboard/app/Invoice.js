
// import React, { useEffect, useState, useRef } from "react";
// import FileBase from "react-file-base64";
// import Card from '../../../components/Card'
// import avatars11 from '../../../assets/images/avatars/01.png'
// import avatars22 from '../../../assets/images/avatars/avtar_1.png'
// import avatars33 from '../../../assets/images/avatars/avtar_2.png'
// import avatars44 from '../../../assets/images/avatars/avtar_3.png'
// import avatars55 from '../../../assets/images/avatars/avtar_4.png'
// import { Row, Col, Image, Form, Nav, Dropdown, Tab, Table, FormControl, InputGroup, NavDropdown } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import { useHistory, useParams } from "react-router-dom";
// import { jsPDF } from "jspdf";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const Billing = () => {
//     const params = useParams()
//     const navigate = useHistory()

//     const [product, setproduct] = useState("");
//     const [product1, setproduct1] = useState("");
//     const [price, setprice] = useState('');
//     const [result, setresult] = useState('')
//     const [quantity, setquantity] = useState('');
//     const [vendorid, setvendorid] = useState(params.id);
//     const [heading, setHeading] = useState('')
//     const [pdf1, setPdf1] = useState('')
//     const [datapo, setDatapo] = useState([]);
//     const [data, setData] = useState([]);
// const [showbottom, setShowbottom] = useState(false)


//     const handleSubmitforpo = async () => {
//         const result = await fetch("http://localhost:5005/poattachments", {
//             method: "post",
//             body: JSON.stringify({
//                 pdf1,
//                 heading,
//                 product,
//                 price,
//                 quantity,
//                 vendorid,
//             }),
//             headers: { "Content-Type": "application/json" },
//         });
//         if (result) { getpo(); getpo(); getpo(); getpo(); getpo(); getpo(); setHeading(''); setproduct(''); setprice(''); setquantity(''); toast.info("Added") }
//     };
//     const [postemail, setpostemail] = useState({
//         id: '',
//         file: '',
//     })
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
//      });
//     const handleemail = async (e) => {
//         e.preventDefault();
//         const result =  await fetch(`http://localhost:5005/po/sendapprover`, {
//             method: "post",
//             body: JSON.stringify(postemail),
//             headers: { "Content-Type": "application/json" },
//         });
//         // result = await result.json();

//         if (result) {
//             alert("Attachment added Succesfully!");


//         }
//         console.warn(result);
//     };
//     useEffect(() => {
//         getpo()
//         getpo()
//         getpo()
//         getpo()
//         getproducts()
//     }, []);

//     const pdfGenerator = () => {
//         const doc = new jsPDF()
//         doc.html(document.querySelector("#print"), {
//             callback: function (pdf) {
//                 setPdf1(pdf)
//                 console.warn("asasa", pdf);
//                 console.log("asasa", pdf1);
//                 setPdf1(pdf.save("mypdf"))
//                 console.log("asasa", pdf1);


//                 setPdf1(doc.output())
//                 console.warn("asasa", pdf);
//                setShowbottom(!showbottom ) 


//             },
//             x: 28,
//             y: 5,
//             width: 180,
//             windowWidth: 1000
//         });
//         // navigate.push(`/dashboard/app/UserProfile2/${params.id}`)
//     }

//     const getpo = async () => {
//         let result = await fetch(`http://localhost:5005/poattachments/search/${params.id}`);
//         result = await result.json();
//         setDatapo(result);
//         console.log(result)
//     };

//     const getproducts = async () => {
//         let result = await fetch(`http://localhost:5005/userRFQ/view/${params.id}`);
//         result = await result.json();
//         setData(result);
//     };
//     const hell = () => {
//         navigate.push(`/dashboard/app/user-profile/${params.id}`)
//     }

//     return (
//         <>
//             <Row className="">
//                 <Col lg="12" className="">
//                     <Card>
//                         <Card.Body>
//                             <div className="d-flex flex-wrap align-items-center justify-content-between">
//                                 <div className="d-flex flex-wrap align-items-center">
//                                     <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
//                                         <Image className="theme-color-default-img  img-fluid rounded-pill avatar-100" src={avatars11} alt="profile-pic" />
//                                         <Image className="theme-color-purple-img img-fluid rounded-pill avatar-100" src={avatars22} alt="profile-pic" />
//                                         <Image className="theme-color-blue-img img-fluid rounded-pill avatar-100" src={avatars33} alt="profile-pic" />
//                                         <Image className="theme-color-green-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
//                                         <Image className="theme-color-yellow-img img-fluid rounded-pill avatar-100" src={avatars55} alt="profile-pic" />
//                                         <Image className="theme-color-pink-img img-fluid rounded-pill avatar-100" src={avatars44} alt="profile-pic" />
//                                     </div>
//                                     <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
//                                         {data.map((item) => (
//                                             <h4 className="me-2 h4">{item.rfq_name}</h4>
//                                         ))}


//                                         {data.map((item) => (
//                                             <span> - {item.Name}</span>
//                                         ))}                                 </div>
//                                 </div>
//                                 <Nav as="ul" className="d-flex nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab" id="profile-pills-tab" role="tablist">
//                                     <Nav.Item as="li">
//                                         <Nav.Link eventKey="first" onClick={hell}>back</Nav.Link>
//                                     </Nav.Item>

//                                 </Nav>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                     <Card>
//                         <Card.Header className="d-flex justify-content-between">
//                             <div className="header-title">
//                                 <h4 className="card-title"> Add Items</h4>
//                             </div>
//                         </Card.Header>
//                         <Card.Body>
//                             <Form>
//                                 <Row>
//                                     <Col>
//                                         <Form.Control type="text" placeholder="Heading" value={heading} onChange={(e) => { setHeading(e.target.value) }} />
//                                     </Col>
//                                     <Col>
//                                         <Form.Control type="text" placeholder="Item" value={product} onChange={(e) => { setproduct(e.target.value) }} />
//                                     </Col>
//                                     <Col>
//                                         <Form.Control type="number" placeholder="Quantity" value={quantity} onChange={(e) => { setquantity(e.target.value) }} />
//                                     </Col>
//                                     <Col>
//                                         <Form.Control type="number" placeholder="Price" value={price} onChange={(e) => { setprice(e.target.value) }} />
//                                     </Col>
//                                 </Row>

//                                 <br />
//                                 <Row>
//                                     <Button size="25px" onClick={handleSubmitforpo} variant="btn btn-primary">Add</Button>{' '}

//                                 </Row>
//                             </Form>
//                         </Card.Body>
//                     </Card>
//                     <Card className="rounded">
//                         <Card.Body className="">
//                             <div className="row d-flex align-items-baseline" id="print">
//                                 <div className="row">
//                                     <div className="col-x-12">
//                                         <br />
//                                         <br />

//                                         <div className="row">
//                                             <div className="col-xl">
//                                                 <Image className="theme-color-default-img  img-fluid rounded-pill avatar-80" src={avatars11} alt="profile-pic" />
//                                                 <br />
//                                                 <br />
//                                                 <h5>  <b> INTERTEK TESTING SERVICES INC</b> </h5><span style={{ color: "#5d9fc5" }}></span>
//                                                 <ul className="list-unstyled">
//                                                     <i>
//                                                         <li contenteditable="true" className="text-muted">
//                                                             399 US ROUTE 11 INDUSTRIAL PARK  <span style={{ color: "#5d9fc5" }}></span>
//                                                         </li>
//                                                         <li contenteditable="true" className="text-muted">
//                                                             CORTLAND<span style={{ color: "#5d9fc5" }}> </span>
//                                                         </li>
//                                                         <li contenteditable="true" className="text-muted">
//                                                             CORTLAND, NY 13045 <span style={{ color: "#5d9fc5" }}></span>
//                                                         </li>
//                                                     </i>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         Attn: BD Supplier <span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         Phone: +1(800) 967-5352 <span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         Fax: +1 (650) 463-2910 <span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         <br />


//                                                         <h5 className="card-title">Ship To:</h5>
//                                                         <p className="card-text">    <ul className="list-unstyled">
//                                                             <i>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     Becton, Dickinson and Company  <span style={{ color: "#5d9fc5" }}></span>
//                                                                 </li>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     2350 Qume Drive<span style={{ color: "#5d9fc5" }}> </span>
//                                                                 </li>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     SAN JOSE, CA 95131-1812 <span style={{ color: "#5d9fc5" }}></span>
//                                                                 </li>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     23402 <span style={{ color: "#5d9fc5" }}></span>
//                                                                 </li>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     Attn <span style={{ color: "#5d9fc5" }}></span>
//                                                                 </li>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     United States  <span style={{ color: "#5d9fc5" }}></span>
//                                                                 </li>
//                                                             </i>



//                                                         </ul>
//                                                         </p>

//                                                         <span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>
//                                                     <br />


//                                                 </ul></div>
//                                             <div className="col-xl"></div>
//                                             <div className="col-xl"></div>
//                                             <div className="col-xl">
//                                                 <br />
//                                                 <br />
//                                                 <h5>   Becton, Dickinson and Company  </h5><span style={{ color: "#5d9fc5" }}></span>

//                                                 <br />
//                                                 <ul className="list-unstyled">

//                                                     <li contenteditable="true" className="text-muted">
//                                                         PO NUMBER:  6900921615 <span style={{ color: "#5d9fc5" }}></span>
//                                                     </li>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         DATE: 11/02/22<span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         PAYMENT TERMS: 1061 Net 90 Days<span style={{ color: "#5d9fc5" }}></span>
//                                                     </li>

//                                                     <li contenteditable="true" className="text-muted">
//                                                         SHIPPING TERMS: FCA <span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         CURRENCY: USD<span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         CONTRACT:<span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         CONTACT:<span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>
//                                                     <li contenteditable="true" className="text-muted">
//                                                         <br />

//                                                         <h5 className="card-title">Bill To:</h5>
//                                                         <p className="card-text">    <ul className="list-unstyled">
//                                                             <i>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     Becton, Dickinson, and Company <span style={{ color: "#5d9fc5" }}></span>
//                                                                 </li>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     PO Box 5200<span style={{ color: "#5d9fc5" }}> </span>
//                                                                 </li>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     Rantoul, IL 61866-5200 <span style={{ color: "#5d9fc5" }}></span>
//                                                                 </li>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     Attn: Accounts Payable <span style={{ color: "#5d9fc5" }}></span>
//                                                                 </li>
//                                                                 <li contenteditable="true" className="text-muted">
//                                                                     United States <span style={{ color: "#5d9fc5" }}></span>
//                                                                 </li>

//                                                             </i>
//                                                         </ul>
//                                                         </p>

//                                                         <span style={{ color: "#5d9fc5" }}> </span>
//                                                     </li>




//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <h5 className='text-center text-light'>-----------------------------------------------------------------------------------------------------------------------------------------</h5>
//                                 <div className="row">
//                                     <div className="col-xl-15">
//                                         <ul className="list-unstyled">

//                                             <li contenteditable="true" className="text-muted">
//                                                 <b><i><u>Note: </u></i> </b>Price as per attached quote # Qu-01308416-0 <span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li contenteditable="true" className="text-muted">
//                                                 <b><i><u>Note: </u></i> </b>FCA - CORTLAND, NY <span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li contenteditable="true" className="text-muted">
//                                                 <b><i><u>Note: </u></i> </b>FedEx# 140212393 ABF<span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li contenteditable="true" className="text-muted">
//                                                 <b>Shipping instructions:</b><span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li contenteditable="true" className="text-muted">
//                                                 Small parcels less than 150 Ibs/70 kg - use BD FedEx acct<span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li contenteditable="true" className="text-muted">
//                                                 Parcels Over 150 Ibs/70kg — Use designated LTL carrier to schedule pick up else contact buyer for shipping instructions - Mohammed.zeeshan@bd.com<span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li contenteditable="true" className="text-muted">
//                                                 <b><i><u>Note: </u></i> </b>***Please confirm by selecting Acknowledge Order or Email- Mohammed.zeeshan@bd.com<span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li contenteditable="true" className="text-muted">
//                                                 *** Please see attached for Instructions on acknowledgements, invoicing and international Shipment.</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <h5 className='text-center text-light'>------------------------------------------------------------------------------------------------------------------------------------------------------------</h5>

//                                 <div class="row">
//                                     <div class="col-md-12">
//                                         <div class="row">
//                                             <div class="col-md-3">

//                                                 <table class="table">
//                                                     <b>Description</b>                </table>
//                                             </div>
//                                             <div class="col-md-3">

//                                                 <table class="table">
//                                                     <b> DATE  </b>              </table>
//                                             </div>
//                                             <div class="col-md-2">

//                                                 <table class="table">
//                                                     <b>  QTY  </b>              </table>
//                                             </div>
//                                             <div class="col-md-2">

//                                                 <table class="table">
//                                                     <b>  PRICE</b>
//                                                 </table>
//                                             </div>
//                                             <div class="col-md-2">

//                                                 <table class="table">
//                                                     <b>  Total</b>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div class="row">
//                                     <div class="col-md-12">
//                                         {datapo.map((item) => (
//                                             <div class="row">
//                                                 <div class="col-md-3">
//                                                     <h6>{item.heading}</h6>
//                                                     <Form.Group className="mb-3 form-group">

//                                                         {item.product}
//                                                     </Form.Group>


//                                                 </div>

//                                                 <div class="col-md-3">

//                                                     <table class="table">
//                                                         23-59-5959
//                                                     </table>
//                                                 </div>
//                                                 <div class="col-md-2">

//                                                     <table class="table">
//                                                         {item.quantity}
//                                                     </table>
//                                                 </div>
//                                                 <div class="col-md-2">

//                                                     <table class="table">
//                                                         {item.price}
//                                                     </table>
//                                                 </div>
//                                                 <div class="col-md-2">

//                                                     <table class="table">
//                                                         {item.price * item.quantity}
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         ))}

//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-xl-12">
//                                         <p class="text-center text-danger ">As of <u>January 4, 2021</u>, BD will no longer accept paper or PDF invoices.</p>
//                                         <ul className="list-unstyled">

//                                             <li className="text-center ">
//                                                 <b>Need help with invoice or you want to make a payment inquiry?</b><span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li className="text-center">
//                                                 <b>Req to Pay Customer Service:</b><span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>

//                                             <li className="text-center">
//                                                 Monday through Friday<span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li className="text-center">
//                                                 <b>Phone:</b><span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li className="text-center">
//                                                 855-4BD-Help (855-423-4357)<span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li className="text-center">
//                                                 <b>Online:</b><span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li className="text-center">
//                                                 <a >BD.com/Services</a><span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li className="text-center">
//                                                 <b>For Terms & Condition, visit: :</b><span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>
//                                             <li className="text-center">
//                                                 North America: <a>PO Terms and Conditions</a><span style={{ color: "#5d9fc5" }}> </span>
//                                             </li>

//                                         </ul>








//                                         <p > This document isa Purchase Order from Becton, Dickinson and Company issued from our new BD BuySmart solution, powered by Coupa. Please process this order the same as you would any other PO from BD. If you have any questions or concems about thi order, please visit our BD Services Store at ww.hs.com/services (registration may be
//                                             required) oc cll the Reqo-Pay customer servic team a 385-425-4957
//                                         </p>
//                                     </div>
//                                     <div className="col-xl-3">

//                                         <p className="text-black float-start">
//                                             {/* <span className="text-black me-3"> Total</span> */}
//                                             {/* <span style={{ fontSize: 25 }}>$1221</span> */}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-xl-12">
//                                         <p>The purchases on this Purchase Order are assumed tobe Taxable for Sales Tax unless an exemption cerfiate hs been provided sepaatly or this transaction
//                                         </p>
//                                     </div>

//                                     <div className="col-xl-2">

//                                     </div>
//                                 </div>
//                             </div>
//                             <Button size="25px" onClick={pdfGenerator} variant="btn btn-primary">GO </Button>{' '}

//                         </Card.Body>
//                     </Card>
//                     {showbottom?
//                     <>
//                     <div class="file-upload-wrapper">

//                         {/* <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" /> */}
//                         <FileBase type="file" multiple={''} onDone={({ base64 }) => setpostemail({ ...postemail, file: base64 })} />
//                         <FileBase type="file" multiple={''} onDone={({ base64 }) => setpostemail({ ...postData, file: base64 })} />


//                     </div>
//                     <br />

//                     <button
//                         type="button"
//                         name="next"
//                         className="btn btn-primary next action-button float-end"
//                         onClick={handleemail}

//                     >
//                         Send For Approval
//                     </button></>:null
//                     }
                   
//                 </Col>
//             </Row>
//             <ToastContainer />
//         </>
//     )
// }

// export default Billing











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

function App() {
  const [ship_to__state, setShip_to__state] = useState('')
  const [ship_to__address, setShip_to__address] = useState('')
  const [ship_to__attn, setShip_to__attn] = useState('')
  const [name, setName] = useState("")
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
const navigate=useHistory()
const params=useParams()
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
  status:'Not Approved',
  color:'bg-warning'
})
const handleemail = async (e) => {
  e.preventDefault();
  const result =  await fetch(`http://localhost:5005/attachmentforapprover/sendapprover`, {
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
            <Col lg="12">
              <Card>
{show1?

<>
                <br/>
              <div className="col-md-12">
                        <label htmlFor="name">Send for the Approver  </label>
                      
                        </div>
                
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setpostemail({ ...postemail, file: base64 })} />
                        <button      onClick={handleemail} className="bg-blue-500 ml-5 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                             Send 
                            </button>
                      
                        </>:null}
              </Card>
            </Col>
            {show2?
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
                          <div className="bg-white p-5 rounded shadow">
                            {/* name, address, email, phone, bank name, bank account number, website client name, client address, invoice number, invoice date, due date, notes */}
                            <div className="flex flex-col justify-center">
                            <div className="row">
                            <div className="col-md-12">
                        <label htmlFor="name">Add Logo </label>
                        <Form.Group>
                                        
                                        <Form.Control  type="file" id="customFile1"  onChange={handleChange} />
                                    </Form.Group>
                        </div>
                        <div className="col-md-4">
                        <label htmlFor="name">Company </label>
                                  <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder=" "
                                    autoComplete="off"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                  />
                        </div>
                        <div className="col-md-4">
                        <label htmlFor="name">Address</label>
                                  <input
                                    type="text"
                                    name="text"
                                    id="name"
                                    placeholder=" "
                                    autoComplete="off"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                  />
                        </div>
                        <div className="col-md-4">
                        <label htmlFor="address">Attn</label>
                                  <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder=" "
                                    autoComplete="off"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                  />
                        </div>
                        <div className="col-md-4">
                        <label htmlFor="website">Phone</label>
                                  <input
                                    type="number"
                                    name="website"
                                    id="phone"
                                    placeholder=" "
                                    autoComplete="off"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                  />
                        </div>
                            <div className="col-md-4">
                            <label htmlFor="phone"> Payment Terms:</label>
                                    <input
                                      type="text"
                                      name="ship_to__state"
                                      id="ship_to__state"
                                      placeholder=" "
                                      autoComplete="off"
                                      value={l_payment_terms}
                                      onChange={(e) => setL_payment_terms(e.target.value)}
                                    />
                        </div>
                         <div className="col-md-4">
                         <label htmlFor="phone"> Fax</label>
                                  <input
                                    type="number"
                                    name="fax"
                                    id="fax"
                                    placeholder=" "
                                    autoComplete="off"
                                    value={fax}
                                    onChange={(e) => setfax(e.target.value)}
                                  />
                        </div>

                        <div className="col-md-4">
                        <label htmlFor="phone"> Shipping Terms:</label>
                                    <input
                                      type="text"
                                      name="ship_to__state"
                                      id="ship_to__state"
                                      placeholder=" "
                                      autoComplete="off"
                                      value={l_shipping_terms}
                                      onChange={(e) => setL_shipping_terms(e.target.value)}
                                    />
                        </div> <div className="col-md-4">
                        <label htmlFor="phone"> Currency:</label>
                                    <input
                                      type="text"
                                      name="ship_to__state"
                                      id="ship_to__state"
                                      placeholder=" "
                                      autoComplete="off"
                                      value={l_currency}
                                      onChange={(e) => setL_currency(e.target.value)}
                                    />
                        </div> <div className="col-md-4">
                        <label htmlFor="phone"> Contract:</label>
                                    <input
                                      type="text"
                                      name="ship_to__state"
                                      id="ship_to__state"
                                      placeholder=" "
                                      autoComplete="off"
                                      value={l_contract}
                                      onChange={(e) => setL_contract(e.target.value)}
                                    />
                        </div> <div className="col-md-4">
                        <label htmlFor="phone"> Contact:</label>
                                    <input
                                      type="text"
                                      name="ship_to__state"
                                      id="ship_to__state"
                                      placeholder=" "
                                      autoComplete="off"
                                      value={l_contact}
                                      onChange={(e) => setL_contact(e.target.value)}
                                    />
                        </div> <div className="col-md-4">
                        <label htmlFor="invoiceDate">Invoice Date</label>
                                  <input
                                    type="date"
                                    name="invoiceDate"
                                    id="invoiceDate"
                                    placeholder="Invoice Date"
                                    autoComplete="off"
                                    value={invoiceDate}
                                    onChange={(e) => setInvoiceDate(e.target.value)}
                                  />
                                  
                        </div> <div className="col-md-4">
                        <label htmlFor="dueDate">Due Date</label>
                                  <input
                                    type="date"
                                    name="dueDate"
                                    id="dueDate"
                                    placeholder="Invoice Date"
                                    autoComplete="off"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                  />
                        </div> 
                        <div className="col-md-4">
                        <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="60"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>   
              </div> 
                        
                        <u>    <h3>Ship to</h3></u>
                        <div className="col-md-4">
                        <label htmlFor="phone"> Ship to Address</label>
                                  <input
                                    type="text"
                                    name="ship_to__address"
                                    id="ship_to__address"
                                    placeholder=" "
                                    autoComplete="off"
                                    value={ship_to__address}
                                    onChange={(e) => setShip_to__address(e.target.value)}
                                  />
                        </div>
                        <div className="col-md-4">
                        <label htmlFor="phone"> Ship to Attn</label>
                                  <input
                                    type="text"
                                    name="ship_to__attn"
                                    id="ship_to__attn"
                                    placeholder=" "
                                    autoComplete="off"
                                    value={ship_to__attn}
                                    onChange={(e) => setShip_to__attn(e.target.value)}
                                  />
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="phone"> Ship to State</label>
                                  <input
                                    type="text"
                                    name="ship_to__state"
                                    id="ship_to__state"
                                    placeholder=" "
                                    autoComplete="off"
                                    value={ship_to__state}
                                    onChange={(e) => setShip_to__state(e.target.value)}
                                  />
                        </div>

                      <u>  <h3>Bill to:</h3></u>

                        <div className="col-md-4">
                        <label htmlFor="phone"> Address:</label>
                                    <input
                                      type="text"
                                      name="ship_to__state"
                                      id="ship_to__state"
                                      placeholder=" "
                                      autoComplete="off"
                                      value={l_bill_to_address}
                                      onChange={(e) => setL_bill_to_address(e.target.value)}
                                    />
                        </div>
                        <div className="col-md-4">
                        <label htmlFor="phone"> Attn:</label>
                                    <input
                                      type="text"
                                      name="ship_to__state"
                                      id="ship_to__state"
                                      placeholder=" "
                                      autoComplete="off"
                                      value={l_bill_to_attn}
                                      onChange={(e) => setL_bill_to_attn(e.target.value)}
                                    />
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="phone"> State:</label>
                                    <input
                                      type="text"
                                      name="ship_to__state"
                                      id="ship_to__state"
                                      placeholder=" "
                                      autoComplete="off"
                                      value={l__bill_to_state}
                                      onChange={(e) => setL__bill_to_state(e.target.value)}
                                    />
                        </div>

                        
                        
                        
                      </div>
                              

                            

                        

                              <article className="md:grid grid-cols-3 gap-10">
                               

                              
                              </article>

                              {/* This is our table form */}
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





                      <div className="invoice__preview bg-white   rounded">
                       
                    
                     
                            <button onClick={pdfGenerator} className="bg-blue-500 ml-5 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                              Print / Download
                            </button>
                      
                  
                   
                        <div ref={componentRef} className="p-5"id="print">

                          <div className="row">
                            <div className="col-x-12">
                              <br />
                              <br />

                              <div className="row">
                                <div className="col-xl">
                               
                                  <Image className=" img-fluid  rounded-pill avatar-80"src={file}  alt="profile-pic" />
                                  <br />
                                  <br />
                                  <h5>  <b>  <MainDetails company={company} /></b> </h5><span style={{ color: "#5d9fc5" }}></span>
                                  <br />
                                  <ul className="list-unstyled">
                                    <i>
                                      <li contenteditable="true" className="text-muted">
                                        <MainDetails name={name} />
                                        <span style={{ color: "#5d9fc5" }}></span>
                                      </li>
                                      <li contenteditable="true" className="text-muted">
                                        {/* address */}
                                        <h5><u>Attn: </u></h5> <MainDetails address={address} /><span style={{ color: "#5d9fc5" }}> </span>
                                      </li>
                                      <li contenteditable="true" className="text-muted">
                                        <h5><u>Phone: </u></h5> <MainDetails website={website} /><span style={{ color: "#5d9fc5" }}></span>
                                      </li>
                                    </i>
                                    <li contenteditable="true" className="text-muted">
                                      <h5><u>Fax: </u></h5> <MainDetails fax={fax} /><span style={{ color: "#5d9fc5" }}> </span>
                                    </li>


                                    <li contenteditable="true" className="text-muted">
                                      <br />


                                      <h5 className="card-title">Ship To:</h5>
                                      <p className="card-text">    <ul className="list-unstyled">
                                        <i>
                                          <li contenteditable="true" className="text-muted">
                                            <MainDetails ship_to__address={ship_to__address} /> <span style={{ color: "#5d9fc5" }}></span>
                                          </li>
                                          <li contenteditable="true" className="text-muted">
                                            <h5><u>Attn: </u></h5> <MainDetails ship_to__attn={ship_to__attn} /><span style={{ color: "#5d9fc5" }}> </span>
                                          </li>
                                          <li contenteditable="true" className="text-muted">
                                            <MainDetails ship_to__state={ship_to__state} /><span style={{ color: "#5d9fc5" }}></span>
                                          </li>



                                        </i>



                                      </ul>
                                      </p>

                                      <span style={{ color: "#5d9fc5" }}> </span>
                                    </li>
                                    <br />


                                  </ul></div>
                                <div className="col-xl"></div>
                                <div className="col-xl"></div>
                                <div className="col-xl">
                                  <br />
                                  <br />
                                  <h5>   


Becton, Dickinson and Company </h5><span style={{ color: "#5d9fc5" }}></span>

                                  <br />
                                  <ul className="list-unstyled">


                                    <li contenteditable="true" className="text-muted">
                                      <h5><u>Date : </u></h5>    <MainDetails invoiceDate={invoiceDate} /><span style={{ color: "#5d9fc5" }}> </span>
                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                      <h5><u>Due Date: </u></h5>  <MainDetails dueDate={dueDate} /><span style={{ color: "#5d9fc5" }}> </span>
                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                      <h5><u>Payment Terms: </u></h5> <MainDetails l_payment_terms={l_payment_terms} /><span style={{ color: "#5d9fc5" }}></span>
                                    </li>

                                    <li contenteditable="true" className="text-muted">
                                      <h5><u>Shipping Terms: </u></h5> <MainDetails SHIPPING l_shopping_terms={l_shipping_terms} /> <span style={{ color: "#5d9fc5" }}> </span>
                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                      <h5><u>Currency: </u></h5> <MainDetails l_currency={l_currency} /><span style={{ color: "#5d9fc5" }}> </span>
                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                      <h5><u>CONTRACT: </u></h5> <MainDetails l_contract={l_contract} /><span style={{ color: "#5d9fc5" }}> </span>
                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                      <h5><u>CONTACT: </u></h5> <MainDetails l_contact={l_contact} /><span style={{ color: "#5d9fc5" }}> </span>
                                    </li>
                                    <li contenteditable="true" className="text-muted">
                                      <br />

                                      <h5 className="card-title">Bill To:</h5>
                                      <p className="card-text">    <ul className="list-unstyled">
                                        <i>
                                          <li contenteditable="true" className="text-muted">
                                            <MainDetails l_bill_to_address={l_bill_to_address} /> <span style={{ color: "#5d9fc5" }}></span>
                                          </li>


                                          <li contenteditable="true" className="text-muted">
                                            <h5><u>Attn: </u></h5>     <MainDetails l_bill_to_attn={l_bill_to_attn} /><span style={{ color: "#5d9fc5" }}></span>
                                          </li>
                                      
                                              <li contenteditable="true" className="text-muted">
                                             <span style={{ color: "#5d9fc5" }}></span>
                                          </li>
                                         
                                        </i>
                                      </ul>
                                      </p>

                                      <span style={{ color: "#5d9fc5" }}> </span>
                                    </li>




                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                            <Notes notes={notes}   />
                      

                          
 
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

<hr />
                        <div className="row">
                                    <div className="col-xl-12">
                                        <p contenteditable="true"  class="text-center text-danger " id="asd">As of <u>January 4, 2021</u>, BD will no longer accept paper or PDF invoices.</p>
                                        <ul className="list-unstyled">

 
                                            <li contenteditable="true"  className="text-center">
                                                <b>Req to Pay Customer Service:</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>

                                            <li className="text-center"contenteditable="true" >
                                                Monday through Friday<span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center"contenteditable="true" >
                                                <b>Phone:</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center"contenteditable="true" >
                                                855-4BD-Help (855-423-4357)<span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center"contenteditable="true" >
                                                <b>Online:</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center"contenteditable="true" >
                                                <a >BD.com/Services</a><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center">
                                                <b>For Terms & Condition, visit: :</b><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>
                                            <li className="text-center" contenteditable="true" >
                                                North America: <a>PO Terms and Conditions</a><span style={{ color: "#5d9fc5" }}> </span>
                                            </li>

                                        </ul>








                                        <p contenteditable="true" > This document isa Purchase Order from Becton, Dickinson and Company issued from our new BD BuySmart solution, powered by Coupa. Please process this order the same as you would any other PO from BD. If you have any questions or concems about thi order, please visit our BD Services Store at ww.hs.com/services (registration may be
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
                                        <p contenteditable="true" >The purchases on this Purchase Order are assumed tobe Taxable for Sales Tax unless an exemption cerfiate hs been provided sepaatly or this transaction
                                        </p>
                                    </div>

                                    <div className="col-xl-2">

                                    </div>
                                </div>
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
            </Col></>:null}


          </Row>
        </Tab.Container>
        <ToastContainer/>
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
