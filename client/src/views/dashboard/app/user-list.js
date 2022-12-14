// import Card from '../../../components/Card'
// import React, { useEffect, useState } from "react";
// import Scrollbar from 'react-smooth-scrollbar';
// import styled from 'styled-components';
// import { Row,Col,Dropdown,OverlayTrigger,Tooltip,Form} from 'react-bootstrap'
// import {BsPlusCircle}from 'react-icons/bs'
// import {
//   useHistory,
//   Link,
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";
// import { ExternalLink } from "react-external-link";
 
// import {BsArrowRightShort} from 'react-icons/bs'
// import {AiOutlineFileExcel}from 'react-icons/ai'
// // img
// import shap1 from '../../../assets/images/shapes/01.png'
// import shap2 from '../../../assets/images/shapes/02.png'
// import shap3 from '../../../assets/images/shapes/03.png'
// import shap4 from '../../../assets/images/shapes/04.png'
// import shap5 from '../../../assets/images/shapes/05.png'
// import shap6 from '../../../assets/images/shapes/06.png'
// import axios from "axios";

// import Button from 'react-bootstrap/Button';

// const UserList =() =>{
//    let history =useHistory()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     getproducts();
//   }, []);

//   const getproducts = async () => {
//     let result = await fetch("${Api}/products");
//     result = await result.json();
//     setData(result);
//   };
//   console.warn("results", data);

//   const deleteproduct = async (id) => {
//     let result = await fetch(`${Api}/products/${id} `, {
//       method: "Delete",
//     });
//     result = await result.json();
//     if (result) {
//       getproducts();
//     }
//   };

//    const asd=()=>{
//       history.push("/dashboard/form/form-wizard")
//    }

//    const [sendpo, setsendpo] = useState({
//       file: '',
//    })

//    const [name, setname] = useState('')

//    const handleattachments = (e) => {
//       console.log(e.target.files[0])
//       setsendpo({ ...sendpo, file: e.target.files[0] })
//       console.log("==", sendpo.file, "===", sendpo.file.name)
//    };

//    const sendEmail = async () => {

//       const formdata = new FormData()
//       formdata.append('file', sendpo.file, sendpo.file.name)
//       const result = await axios.post(`${Api}/uploadfile`, formdata)

//       if (result.status == 200) { alert("Email sent to the Vendor!"); }

//       console.warn(result);
//    };
   
//    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));

//    const navigate = useHistory();

//    useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);

//    useEffect(() => {
//      if(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)){
//          if (user.username==="Admin1") {navigate.push('/approver')}
//          else if(user.username!=="Admin"){navigate.push('/ath')}
//      }
//      else{
//        navigate.push('/auth/sign-in')}},[])

//   return(
//      <>
      
//        <div>
//          <Row>
//             <Col sm="12">
          
//                <Card className=' '>
//                   <Card.Header className="d-flex justify-content-between  ">
//                      <div className="header-title  " >
//                     <Button    onClick={asd}       variant="btn btn-primary">Add New <BsArrowRightShort size="25px"/></Button>{' '}
//                          </div>
//                          <div className="header-title">
//                          <Form>
//                                     <Row>
//                                         <Col>
//                                         <Form.Group>
//                                           <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" /> 
//                                        </Form.Group>
//                                         </Col>
//                                         <Col>
//                      <Button variant="btn btn-primary" type="button" onClick={sendEmail}>Attach<AiOutlineFileExcel size="25px"/></Button>{' '}

//                                         </Col>
                                         

                                         
                                       
//                                     </Row>
//                                 </Form>
//                                 <button
//                       type="button"
//                       name="next"
//                       className="btn btn-primary next action-button float-end"
//                       value="Next"
                
//                     >
//                       Next
//                     </button>
//                                 <OverlayTrigger  placement="left" overlay={
//         <Tooltip >
//             Add new RFQ
//         </Tooltip>
//         }>
//           <Button variant="icon primary float-end"  >
//         <span className="  ">
//         <BsPlusCircle  size="35px"/> 
//         </span>
//     </Button>
//     </OverlayTrigger>
                        
//                          </div>
//                          <div className="header-title  ">
//                          </div>
//                   </Card.Header>
              
//                   <Card.Body className="px-0">
//                      <div className="table-responsive    "  >
//                   <Scrollbar>
//                         <table id="user-list-table" className="table box table-striped" role="grid" data-toggle="data-table">
//                            <thead>
//                               <tr className="ligth">
//                               <th>Product Name</th>
//                         <th>Product Family</th>
//                         <th>Category</th>
//                         <th>Category Standard</th>
//                         <th>Start Date</th>
//                                  <th min-width= "100px">Action</th>
//                               </tr>
//                            </thead>
//                            <tbody>
//                            { 
//                                data.map((item) => (
//                               <tr>
                                
                               
//                                 <td>{item.Product_Name}</td>
//                           <td>-</td>
//                           <td>{item.Product_Category}</td>
//                           <td>{item.Applicable_Standards}</td>
//                           <td>Date</td>
//                                  <td>
//                                     <div className="flex align-items-center list-user-action">
                                       
//                                     <Link className="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip" title="Edit User" to="#"    >
//                                                     <span className="btn-inner">
//                                                         <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
//                                                             <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//                                                             <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//                                                             <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//                                                         </svg>
//                                                     </span>
//                                                 </Link>
//                                                 <Link className="btn btn-sm btn-icon text-danger"  data-bs-toggle="tooltip" title="Delete User" to="#"      >
//                                                     <span className="btn-inner">
//                                                         <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
//                                                             <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//                                                             <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//                                                             <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//                                                         </svg>
//                                                     </span>
//                                                 </Link>
//                                                 <Link className="btn btn-sm btn-icon text-secondary flex-end"  data-bs-toggle="tooltip" title="Delete User" to="#"      >

//                                           <span className="btn-inner">
//                                           <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path fillRule  ="evenodd" clipRule="evenodd"
//                                                 d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
//                                                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path fillRule  ="evenodd" clipRule="evenodd"
//                                                 d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
//                                                 stroke="currentColor" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                           </span>
//                                        </Link>{' '}
//                                     </div>
//                                  </td>
//                               </tr>))}
//                            </tbody>
//                         </table>
//                      </Scrollbar>
//                      </div>
                       
//                   </Card.Body>
//                </Card>
             
//             </Col>
//          </Row>
//       </div>
//      </>
//   )

// }

// export default UserList;


// const ScrollBfdgdr = styled.div`

// #style-2::-webkit-scrollbar-track
// {
// 	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
// 	border-radius: 10px;
// 	background-color: #F5F5F5;
// }
// .box{

//     box-shadow: 0 50px 50px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//     .force-overflow
// }
// {
// 	min-height: 430px;
// }
// .scrollbar
// {
// 	margin-left: 30px;
// 	float: left;
// 	height: 600px;
// 	width: 1400px;
 
// 	overflow-y: scroll;
// 	overflow-x: auto;
//     overflow-x:auto;
// 	margin-bottom: 35px;
// }


// `



import Card from '../../../components/Card'
import React, { useEffect, useState } from "react";
// AOS

import '../../../../node_modules/aos/dist/aos'
import '../../../../node_modules/aos/dist/aos.css'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import { Api } from '../constant/constant';
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import {
   useHistory,
   Link,
   BrowserRouter,
   Route,
   Routes,
} from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { Row, Col, Image, Form } from "react-bootstrap";
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineFileExcel } from 'react-icons/ai'
// img
import shap1 from '../../../assets/images/shapes/01.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap3 from '../../../assets/images/shapes/03.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap5 from '../../../assets/images/shapes/05.png'
import shap6 from '../../../assets/images/shapes/06.png'
import axios from "axios";
import { io } from "socket.io-client";

import Button from 'react-bootstrap/Button';
import { Scrollbar } from 'swiper';

const UserList = () => {
   let history = useHistory()
   const socket1 =io.connect(`${Api}/`)
   const sendMessage=()=>{
      // socket1.emit("send_Message",{message:"shdsahdkjas"})

    }
 
   const [data, setData] = useState([]);
   useEffect(() => {
      getproducts();
   }, []);
   useEffect(() => {
      AOS.init();
   }, [])
   const getproducts = async () => {
      let result = await fetch(`${Api}/products`);
      result = await result.json();
      setData(result);
   };
   console.warn("results", data);

   const deleteproduct = async (id) => {
      let result = await fetch(`${Api}/products/${id} `, {
         method: "Delete",
      });
      result = await result.json();
      if (result) {
         getproducts();
      }
   };

   const asd = () => {
      history.push("/dashboard/form/form-wizard")
   }

   const [sendpo, setsendpo] = useState({
      file: '',
   })

   const [name, setname] = useState('')

   const handleattachments = (e) => {
      console.log(e.target.files[0])
      setsendpo({ ...sendpo, file: e.target.files[0] })
      console.log("==", sendpo.file, "===", sendpo.file.name)
   };

   const sendEmail = async () => {

      const formdata = new FormData()
      formdata.append('file', sendpo.file, sendpo.file.name)
      const result = await axios.post(`${Api}/uploadfile`, formdata)

      if (result.status == 200) { alert("Email sent to the Vendor!"); }

      console.warn(result);
   };

   const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));

   const navigate = useHistory();

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
         <div data-aos="fade-up"
            data-aos-duration="2000"  >
            <Row>
               <Col sm="12">
                  <ScrollBar>
                     <Card className=' '  >
                        <Card.Header className="d-flex justify-content-between  " data-aos="fade-left" >
                           <div className="header-title  " >
                              <Button className="text-center btn-primary btn-icon mt-lg-0 mt-md-0 mt-3" onClick={asd}>
                                 <i className="btn-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                 </i>
                                 <span>New</span>
                              </Button>   </div>
                           <div className="header-title">
                              <Form>
                                 <Row>
                                    <Col>
                                       <Form.Group>
                                          <Form.Control type="file" id="customFile1" onChange={handleattachments} name="file" />
                                       </Form.Group>
                                    </Col>
                                    <Col>
                                       {/* <Button variant="btn btn-primary" type="button" onClick={sendEmail}>Attach<AiOutlineFileExcel size="25px"/></Button>{' '} */}
                                       <Button className="text-center btn-primary btn-icon mt-lg-0 mt-md-0 mt-3" onClick={sendMessage}>
                                          <i className="btn-inner">
                                             <AiOutlineFileExcel size="25px" />
                                          </i>
                                          <span>Attach</span>
                                       </Button>
                                    </Col>
                                 </Row>
                              </Form>

                           </div>
                           <div className="header-title box">
                           </div>
                        </Card.Header>
                        <Card.Body className="px-0 box">
                           <div className="table-responsive  "   >
                        <Scrollbars style={{ width: 1500, height: 600 }}>
                              <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                                 <thead>
                                    <tr className="ligth">
                                       <th>Product Name</th>
                                       <th>Product Family</th>
                                       <th>Category</th>
                                       <th>Category Standard</th>
                                       <th>Start Date</th>
                                       <th min-width="100px">Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {
                                       data.map((item) => (
                                          <tr>


                                             <td>{item.Product_Name}</td>
                                             <td>-</td>
                                             <td>{item.Product_Category}</td>
                                             <td>{item.Applicable_Standards}</td>
                                             <td>Date</td>
                                             <td>
                                                <div className="flex align-items-center list-user-action">

                                                   <Link className="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip" title="Edit User" to="#"    >
                                                      <span className="btn-inner">
                                                         <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                            <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                         </svg>
                                                      </span>
                                                   </Link>
                                                   <Link className="btn btn-sm btn-icon text-danger" data-bs-toggle="tooltip" title="Delete User" to="#"      >
                                                      <span className="btn-inner">
                                                         <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                            <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                         </svg>
                                                      </span>
                                                   </Link>
                                                   <Link className="btn btn-sm btn-icon text-secondary flex-end" data-bs-toggle="tooltip" title="Delete User" to="#"      >

                                                      <span className="btn-inner">
                                                         <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                               d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
                                                               stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                               d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
                                                               stroke="currentColor" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                                                         </svg>
                                                      </span>
                                                   </Link>{' '}
                                                </div>
                                             </td>
                                          </tr>
                                          
                                          ))}
                                 </tbody>
 
                              </table>
                                          </Scrollbars>
                           </div>
                        </Card.Body>
                     </Card>
                  </ScrollBar>
               </Col>
            </Row>
         </div>
      </>
   )

}

export default UserList;


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