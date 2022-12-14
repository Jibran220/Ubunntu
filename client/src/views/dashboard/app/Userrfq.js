// // import Card from '../../../components/Card'
// // import React, { useEffect, useState } from "react";
// // import {
// //   useHistory,
// //   Link,
// //   BrowserRouter,
// //   Route,
// //   Routes,
// //   useParams
// // } from "react-router-dom";
// // import { ExternalLink } from "react-external-link";
// // import { Row, Col, Image } from "react-bootstrap";

// // // img
// // import shap1 from '../../../assets/images/shapes/01.png'
// // import shap2 from '../../../assets/images/shapes/02.png'
// // import shap3 from '../../../assets/images/shapes/03.png'
// // import shap4 from '../../../assets/images/shapes/04.png'
// // import shap5 from '../../../assets/images/shapes/05.png'
// // import shap6 from '../../../assets/images/shapes/06.png'



// // const UserList =() =>{
   
  
    
//   // useEffect(() => {
//   //   getproductdetail();
//   // }, []);

//   // const getproductdetail = async () => {
//   //   console.warn(params);
//   //   let result = await fetch(`${Api}userRFQ/${params.id}`);
//   //   result = await result.json();
//   //   setData(result);
//   //   console.warn(result);
//   //   if (data.status == "Draft") {
//   //     setcolor("badge-danger");
//   //   }
//   // };

//   // const navigate = useHistory();
//   // const params = useParams();
//   // const [data, setData] = useState([]);
//   // const [color, setcolor] = useState("");
//   //   const [postData, setPostData] = useState({
//   //       to: "",
//   //       from: "",
//   //       Dates: "",
//   //       vendordetails: "",
    
//   //       approver: "",
//   //       description: "",
//   //       any_other_instructions_for_quoting: "",
//   //       statement_for_qualification: "",
//   //       status: "Published",
//   //     });
  
//   //   const getproducts = async () => {
//   //     let result = await fetch("${Api}rfqmanagers");
//   //     result = await result.json();
//   //     setData(result);
//   //   };
//   //   console.warn("results", data);
  
//   //   const goto = async (id) => {};
//   //   const deleteproduct = async (id) => {
//   //     let result = await fetch(`${Api}rfqmanagers/${id} `, {
//   //       method: "Delete",
//   //     });
//   //     result = await result.json();
//   //     if (result) {
//   //       getproducts();
//   //     }
//   //   };
// //   return(
// //     <>
// //     <div>
// //       <Row>
// //         <Col sm="12">
// //           <Card>
// //             <Card.Header className="d-flex justify-content-between">
// //               <div className="header-title">
// //                 {/* <Link
// //                   type="submit"
// //                   name="next"
// //                   className="btn btn-primary next action-button float-end"
// //                   to={"/rfqform"}
// //                 >
// //                   Add New RFQ
// //                 </Link> */}
// //               </div>
// //             </Card.Header>
// //             <Card.Body className="px-0">
// //               <div className="table-responsive">
// //                 <table
// //                   id="user-list-table"
// //                   className="table table-striped"
// //                   role="grid"
// //                   data-toggle="data-table"
// //                 >
// //                   <thead>
// //                     <tr className="ligth">
//                       // <th>Name</th>
//                       // <th>Company Name</th>
//                       // <th>Email</th>
//                       // <th>Status</th>
//                       // <th>Work Phone</th>
//                       // <th>Join Date</th>

// //                       {/* <th>Status</th> */}

// //                       <th min-width="100px">Action</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {data.map((item) => (
// //                       <tr>
//                         // <td>
//                         //   <Link to={"/Userprofile/" + item._id}>
//                         //     {item.Name}
//                         //   </Link>
//                         // </td>
//                         // <td>{item.Company_Name}</td>
//                         // <Link to={"/Userprofile/" + item._id}>
//                         //   <td>{item.to}</td>
//                         // </Link>

//                         // {/* if({item.status}==="Draft")
//                         // { */}
//                         // <td>
//                         //   <span className="bade badge-danger">
//                         //     {item.status}
//                         //   </span>
//                         // </td>
//                         // {/* } */}
//                         // {/* <td>{item.status}</td> */}
//                         // <td>{item.Work_Phone}</td>
//                         // <td>{item.Dates}</td>
//                         // <td>
// //                           <div className="flex align-items-center list-user-action">
// //                             <Link
// //                               className="btn btn-sm btn-icon btn-success"
// //                               data-toggle="tooltip"
// //                               data-placement="top"
// //                               title=""
// //                               data-original-title="Add"
// //                               to={"/HomeRFQView/" + item._id}
// //                             >
// //                               <span className="btn-inner">
// //                                 <svg
// //                                   width="32"
// //                                   viewBox="0 0 24 24"
// //                                   fill="none"
// //                                   xmlns="http://www.w3.org/2000/svg"
// //                                 >
// //                                   <path
// //                                     fillRule="evenodd"
// //                                     clipRule="evenodd"
// //                                     d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                   <path
// //                                     fillRule="evenodd"
// //                                     clipRule="evenodd"
// //                                     d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                   <path
// //                                     d="M19.2036 8.66919V12.6792"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                   <path
// //                                     d="M21.2497 10.6741H17.1597"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                 </svg>
// //                               </span>
// //                             </Link>{" "}
// //                             <Link
// //                               className="btn btn-sm btn-icon btn-warning"
// //                               data-toggle="tooltip"
// //                               data-placement="top"
// //                               title=""
// //                               data-original-title="Edit"
// //                               to={"/HomeRFQUpdate/" + item._id}
// //                             >
// //                               <span className="btn-inner">
// //                                 <svg
// //                                   width="20"
// //                                   viewBox="0 0 24 24"
// //                                   fill="none"
// //                                   xmlns="http://www.w3.org/2000/svg"
// //                                 >
// //                                   <path
// //                                     d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                   <path
// //                                     fillRule="evenodd"
// //                                     clipRule="evenodd"
// //                                     d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                   <path
// //                                     d="M15.1655 4.60254L19.7315 9.16854"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                 </svg>
// //                               </span>
// //                             </Link>{" "}
// //                             <Link
// //                               className="btn btn-sm btn-icon btn-danger"
// //                               data-toggle="tooltip"
// //                               data-placement="top"
// //                               title=""
// //                               data-original-title="Delete"
// //                               // onClick={() => deleteproduct(item._id)}
// //                             >
// //                               <span className="btn-inner">
// //                                 <svg
// //                                   width="20"
// //                                   viewBox="0 0 24 24"
// //                                   fill="none"
// //                                   xmlns="http://www.w3.org/2000/svg"
// //                                   stroke="currentColor"
// //                                 >
// //                                   <path
// //                                     d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                   <path
// //                                     d="M20.708 6.23975H3.75"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                   <path
// //                                     d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
// //                                     stroke="currentColor"
// //                                     strokeWidth="1.5"
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                   ></path>
// //                                 </svg>
// //                               </span>
// //                             </Link>{" "}
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </div>
// //   </>
// //   )

// // }

// // export default UserList;


























// import Card from '../../../components/Card'
// import React, { useEffect, useState } from "react";
// import {
//   useHistory,
//   Link,
//   BrowserRouter,
//   Route,
//   Routes,
//   useParams
// } from "react-router-dom";
// import { ExternalLink } from "react-external-link";
// import { Row, Col, Image } from "react-bootstrap";

// // img
// import shap1 from '../../../assets/images/shapes/01.png'
// import shap2 from '../../../assets/images/shapes/02.png'
// import shap3 from '../../../assets/images/shapes/03.png'
// import shap4 from '../../../assets/images/shapes/04.png'
// import shap5 from '../../../assets/images/shapes/05.png'
// import shap6 from '../../../assets/images/shapes/06.png'

// import styled from 'styled-components';
// import AOS from 'aos'

// import 'swiper/swiper-bundle.min.css'
// import 'swiper/components/navigation/navigation.scss';
// import { Scrollbars } from 'react-custom-scrollbars';
// const Userrfq =() =>{
  
//   const navigate = useHistory();
//   const params = useParams();
//   const [data, setData] = useState([]);
//   const [color, setcolor] = useState("");
   
    
//   useEffect(() => {
//     getproductdetail();
//   }, []);
//   useEffect(() => {
//     AOS.init();
//  }, [])
//   const getproductdetail = async () => {
//     console.warn(params);
//     let result = await fetch(`${Api}userRFQ/${params.id}`);
//     result = await result.json();
//     setData(result);
//     console.warn(result);
//     if (data.status == "Draft") {
//       setcolor("badge-danger");
//     }
//   };

//     const [postData, setPostData] = useState({
//         to: "",
//         from: "",
//         Dates: "",
//         vendordetails: "",
    
//         approver: "",
//         description: "",
//         any_other_instructions_for_quoting: "",
//         statement_for_qualification: "",
//         status: "Published",
//       });
  
//     const getproducts = async () => {
//       let result = await fetch("${Api}rfqmanagers");
//       result = await result.json();
//       setData(result);
//     };
//     console.warn("results", data);
  
//     const goto = async (id) => {};
//     const deleteproduct = async (id) => {
//       let result = await fetch(`${Api}rfqmanagers/${id} `, {
//         method: "Delete",
//       });
//       result = await result.json();
//       if (result) {
//         getproducts();
//       }
//     };
//     const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
//      useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
//     useEffect(() => {
//       if(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)){
//           if (user.username==="Admin1") {navigate.push('/approver')}
//           else if(user.username!=="Admin"){navigate.push('/ath')}
//       }
//       else{
//         navigate.push('/auth/sign-in')}},[])
//   return(
//      <>
//        <div className='table-wrapper-scroll-y my-custom-scrollbar'>
//          <Row>
//             <Col sm="12">'
//                <Card>
//                   <Card.Header className="d-flex justify-content-between">
//                      <div className="header-title">
//                         <h4 className="card-title">Vendors List</h4>
//                      </div>
//                   </Card.Header>
//                   <Card.Body className="px-0">
//                      <div className="table-responsive">
//                         <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
//                            <thead>
//                               <tr className="ligth">
//                               <th>Name</th>
//                       <th>Company Name</th>
//                       <th>Email</th>
//                       <th>Status</th>
//                       <th>Work Phone</th>
//                       <th>Join Date</th>
//                                  <th min-width= "100px">Action</th>
//                               </tr>
//                            </thead>
//                            <tbody>
//                            { 
//                                data.map((item) => (
//                               <tr>
//                                    <td>
//                           <Link to={"/dashboard/app/user-profile/" + item._id}>
//                             {item.Name}
//                           </Link>
//                         </td>
//                         <td>{item.Company_Name}</td>
                
//                           <td>{item.to}</td>
                        
//                         <td>
//                           <span className="bade badge-danger">
//                             {item.status}
//                           </span>
//                         </td>
//                         <td>{item.Work_Phone}</td>
//                         <td>{item.Dates}</td>
                               
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
//                      </div>
//                   </Card.Body>
//                </Card>
//             </Col>
//          </Row>
//       </div>
//      </>
//   )

// }

// export default Userrfq;
// import Card from '../../../components/Card'
// import React, { useEffect, useState } from "react";
// import {
//   useHistory,
//   Link,
//   BrowserRouter,
//   Route,
//   Routes,
//   useParams
// } from "react-router-dom";
// import { ExternalLink } from "react-external-link";
// import { Row, Col, Image } from "react-bootstrap";

// // img
// import shap1 from '../../../assets/images/shapes/01.png'
// import shap2 from '../../../assets/images/shapes/02.png'
// import shap3 from '../../../assets/images/shapes/03.png'
// import shap4 from '../../../assets/images/shapes/04.png'
// import shap5 from '../../../assets/images/shapes/05.png'
// import shap6 from '../../../assets/images/shapes/06.png'



// const UserList =() =>{
   
  
    
  // useEffect(() => {
  //   getproductdetail();
  // }, []);

  // const getproductdetail = async () => {
  //   console.warn(params);
  //   let result = await fetch(`${Api}userRFQ/${params.id}`);
  //   result = await result.json();
  //   setData(result);
  //   console.warn(result);
  //   if (data.status == "Draft") {
  //     setcolor("badge-danger");
  //   }
  // };

  // const navigate = useHistory();
  // const params = useParams();
  // const [data, setData] = useState([]);
  // const [color, setcolor] = useState("");
  //   const [postData, setPostData] = useState({
  //       to: "",
  //       from: "",
  //       Dates: "",
  //       vendordetails: "",
    
  //       approver: "",
  //       description: "",
  //       any_other_instructions_for_quoting: "",
  //       statement_for_qualification: "",
  //       status: "Published",
  //     });
  
  //   const getproducts = async () => {
  //     let result = await fetch("${Api}rfqmanagers");
  //     result = await result.json();
  //     setData(result);
  //   };
  //   console.warn("results", data);
  
  //   const goto = async (id) => {};
  //   const deleteproduct = async (id) => {
  //     let result = await fetch(`${Api}rfqmanagers/${id} `, {
  //       method: "Delete",
  //     });
  //     result = await result.json();
  //     if (result) {
  //       getproducts();
  //     }
  //   };
//   return(
//     <>
//     <div>
//       <Row>
//         <Col sm="12">
//           <Card>
//             <Card.Header className="d-flex justify-content-between">
//               <div className="header-title">
//                 {/* <Link
//                   type="submit"
//                   name="next"
//                   className="btn btn-primary next action-button float-end"
//                   to={"/rfqform"}
//                 >
//                   Add New RFQ
//                 </Link> */}
//               </div>
//             </Card.Header>
//             <Card.Body className="px-0">
//               <div className="table-responsive">
//                 <table
//                   id="user-list-table"
//                   className="table table-striped"
//                   role="grid"
//                   data-toggle="data-table"
//                 >
//                   <thead>
//                     <tr className="ligth">
                      // <th>Name</th>
                      // <th>Company Name</th>
                      // <th>Email</th>
                      // <th>Status</th>
                      // <th>Work Phone</th>
                      // <th>Join Date</th>

//                       {/* <th>Status</th> */}

//                       <th min-width="100px">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.map((item) => (
//                       <tr>
                        // <td>
                        //   <Link to={"/Userprofile/" + item._id}>
                        //     {item.Name}
                        //   </Link>
                        // </td>
                        // <td>{item.Company_Name}</td>
                        // <Link to={"/Userprofile/" + item._id}>
                        //   <td>{item.to}</td>
                        // </Link>

                        // {/* if({item.status}==="Draft")
                        // { */}
                        // <td>
                        //   <span className="bade badge-danger">
                        //     {item.status}
                        //   </span>
                        // </td>
                        // {/* } */}
                        // {/* <td>{item.status}</td> */}
                        // <td>{item.Work_Phone}</td>
                        // <td>{item.Dates}</td>
                        // <td>
//                           <div className="flex align-items-center list-user-action">
//                             <Link
//                               className="btn btn-sm btn-icon btn-success"
//                               data-toggle="tooltip"
//                               data-placement="top"
//                               title=""
//                               data-original-title="Add"
//                               to={"/HomeRFQView/" + item._id}
//                             >
//                               <span className="btn-inner">
//                                 <svg
//                                   width="32"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path
//                                     fillRule="evenodd"
//                                     clipRule="evenodd"
//                                     d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                   <path
//                                     fillRule="evenodd"
//                                     clipRule="evenodd"
//                                     d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                   <path
//                                     d="M19.2036 8.66919V12.6792"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                   <path
//                                     d="M21.2497 10.6741H17.1597"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </Link>{" "}
//                             <Link
//                               className="btn btn-sm btn-icon btn-warning"
//                               data-toggle="tooltip"
//                               data-placement="top"
//                               title=""
//                               data-original-title="Edit"
//                               to={"/HomeRFQUpdate/" + item._id}
//                             >
//                               <span className="btn-inner">
//                                 <svg
//                                   width="20"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path
//                                     d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                   <path
//                                     fillRule="evenodd"
//                                     clipRule="evenodd"
//                                     d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                   <path
//                                     d="M15.1655 4.60254L19.7315 9.16854"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </Link>{" "}
//                             <Link
//                               className="btn btn-sm btn-icon btn-danger"
//                               data-toggle="tooltip"
//                               data-placement="top"
//                               title=""
//                               data-original-title="Delete"
//                               // onClick={() => deleteproduct(item._id)}
//                             >
//                               <span className="btn-inner">
//                                 <svg
//                                   width="20"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   stroke="currentColor"
//                                 >
//                                   <path
//                                     d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                   <path
//                                     d="M20.708 6.23975H3.75"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                   <path
//                                     d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </Link>{" "}
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   </>
//   )

// }

// export default UserList;























import styled from 'styled-components';


import Card from '../../../components/Card'
import React, { useEffect, useState } from "react";
import {
  useHistory,
  Link,
  BrowserRouter,
  Route,
  Routes,
  useParams
} from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { Row, Col, Image } from "react-bootstrap";
import { Api } from '../constant/constant';


// img
import shap1 from '../../../assets/images/shapes/01.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap3 from '../../../assets/images/shapes/03.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap5 from '../../../assets/images/shapes/05.png'
import shap6 from '../../../assets/images/shapes/06.png'
import AOS from 'aos'
 
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.scss';
import { Scrollbars } from 'react-custom-scrollbars';

const Userrfq =() =>{
  
  const navigate = useHistory();
  const params = useParams();
  const [data, setData] = useState([]);
  const [color, setcolor] = useState("");
  useEffect(() => {
    AOS.init();
 }, [])
    
  useEffect(() => {
    getproductdetail();
  }, []);

  const getproductdetail = async () => {
    console.warn(params);
    let result = await fetch(`${Api}/userRFQ/${params.id}`);
    result = await result.json();
    setData(result);
    console.warn(result);
    if (data.status == "Draft") {
      setcolor("badge-danger");
    }
  };

    const [postData, setPostData] = useState({
        to: "",
        from: "",
        Dates: "",
        vendordetails: "",
    
        approver: "",
        description: "",
        any_other_instructions_for_quoting: "",
        statement_for_qualification: "",
        status: "Published",
      });
  
    const getproducts = async () => {
      let result = await fetch(`${Api}/rfqmanagers`);
      result = await result.json();
      setData(result);
    };
    console.warn("results", data);
   
    const deleteproduct = async (id) => {
      let result = await fetch(`${Api}/fqmanagers/${id} `, {
        method: "Delete",
      });
      result = await result.json();
      if (result) {
        getproducts();
      }
    };
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
     useEffect(async () => {if(! localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);
    useEffect(() => {
      if(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)){
          if (user.username==="Admin1") {navigate.push('/approver')}
          else if(user.username!=="Admin"){navigate.push('/ath')}
      }
      else{
        navigate.push('/auth/sign-in')}},[])
  return(
     <>
       <div className=' ' data-aos="fade-up"
            data-aos-duration="2000" >
         <Row>
            <Col sm="12">'
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Vendors List</h4>
                     </div>
                  </Card.Header>
                  <Card.Body className="px-0">
                  <ScrollBar>
                                       <div className="table-responsive">
                     <Scrollbars style={{ width: 1530, height: 600 }}  >

                        <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                           <thead>
                              <tr className="ligth">
                              <th>Name</th>
                      <th>Company Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Work Phone</th>
                      <th>Join Date</th>
                                 <th min-width= "100px">Action</th>
                              </tr>
                           </thead>
                           <tbody>
                           { 
                               data.map((item) => (
                              <tr>
                                   <td>
                          <Link to={"/dashboard/app/user-profile/" + item._id}>
                            {item.Name}
                          </Link>
                        </td>
                        <td>{item.Company_Name}</td>
                
                          <td>{item.to}</td>
                        
                        <td>
                          <span className="bade badge-danger">
                            {item.status}
                          </span>
                        </td>
                        <td>{item.Work_Phone}</td>
                        <td>{item.Dates}</td>
                               
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
                                                <Link className="btn btn-sm btn-icon text-danger"  data-bs-toggle="tooltip" title="Delete User" to="#"      >
                                                    <span className="btn-inner">
                                                        <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                            <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <Link className="btn btn-sm btn-icon text-secondary flex-end"  data-bs-toggle="tooltip" title="Delete User" to="#"      >

                                          <span className="btn-inner">
                                          <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule  ="evenodd" clipRule="evenodd"
                                                d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
                                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path fillRule  ="evenodd" clipRule="evenodd"
                                                d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
                                                stroke="currentColor" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                          </span>
                                       </Link>{' '}
                                    </div>
                                 </td>
                              </tr>))}
                           </tbody>
                        </table>
                        </Scrollbars>
                     </div>
                     </ScrollBar>

                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </div>
     </>
  )

}

export default Userrfq;

const ScrollBar = styled.div`

#style-2::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
.box{

    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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