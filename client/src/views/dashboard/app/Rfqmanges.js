import Card from '../../../components/Card'
import React, { useEffect, useState } from "react";
import {
  useHistory,
  Link,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { Row, Col, Image } from "react-bootstrap";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Api } from '../constant/constant';

// img
import shap1 from '../../../assets/images/shapes/01.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap3 from '../../../assets/images/shapes/03.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap5 from '../../../assets/images/shapes/05.png'
import shap6 from '../../../assets/images/shapes/06.png'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiOutlineFileExcel}from 'react-icons/ai'
import {MdPersonAddAlt1}from 'react-icons/md'
import Button from 'react-bootstrap/Button';
const UserList =() =>{
   
  
    const [data, setData] = useState([]);
    useEffect(() => {
      getproducts();
    }, []);
    let history =useHistory()
  
    const getproducts = async () => {
      let result = await fetch(`${Api}/rfqmanagers`);
      result = await result.json();
      setData(result);
    };
    console.warn("results", data);
  
    const goto = async (id) => {};
    const deleteproduct = async (id) => {
      let result = await fetch(`${Api}/rfqmanagers/${id} `, {
        method: "Delete",
      });
      result = await result.json();
      if (result) {
        getproducts();
      }
    };
    
    const asd=()=>{
      history.push("/dashboard/form/Rfqform")
   }
   const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
   const navigate = useHistory();
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
       <div>
         <Row>
            <Col sm="12">
               <Card>
                 
                  <Card.Header className="d-flex justify-content-between">
                     <div className="header-title">
                     <Button    onClick={asd}       variant="btn btn-primary">Add New <BsArrowRightShort size="25px"/></Button>{' '}
                     </div>
                  </Card.Header>
                  <Card.Body className="px-0">
                     <div className="table-responsive">
                        <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
                           <thead>

                              <tr className="ligth">
                              <th>Name</th>
                        <th>Description</th>
                        <th></th>
                     
                                 <th min-width= "100px">Action</th>
                              </tr>
                           </thead>
                           <tbody>
                          
                           { 
                               data.map((item) => (
                              <tr>
                                
                                <td>
                            <Link to={"/dashboard/app/Userrfq/" + item._id}>
                              {item.name}
                            </Link>
                          </td>

                          <td>{item.description}</td>
                       <Link   to={"/dashboard/form/Userrfq/" + item._id}>   <td>   < MdPersonAddAlt1 size="30px"/> </td>
                       </Link>
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
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </div>
     </>
  )

}

export default UserList;



















