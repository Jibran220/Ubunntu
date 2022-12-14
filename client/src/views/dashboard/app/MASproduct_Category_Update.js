import Card from '../../../components/Card'
import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import { Api } from '../constant/constant';

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
import { Row, Col, Image, Form, Nav, Dropdown, Tab } from "react-bootstrap";
import { useHistory, Link, useParams, useLocation } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import ChatContainer from "../MessagesForAdmin.js/ComponentsForAdmin";
import Contacts from "../MessagesForAdmin.js/Contacts";
import Welcome from "../MessagesForAdmin.js/Welcome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {

    useEffect(() => {
        updateproduct()
        getproducts()

    },  [] )

    const scrollRef = useRef();
    const navigate = useHistory();
    const socket = useRef();
    const params = useParams();
    const [name, setname] = useState('')
    const [data, setdata] = useState([])
    const [toggler, setToggler] = useState(false);

    const deleteproduct = async (id) => {
        let result = await fetch(`${Api}MASproductCategory/${id} `, {
          method: "Delete",});
        result = await result.json();
        if (result) { getproducts(); }
      };

      const updateproduct = async ( ) => {
        console.warn(params);
    let result = await fetch(`${Api}MASproductCategory/${params.id}`);
    result = await result.json();
    setname( result.name );
      };

    const getproducts = async () => {
        let result = await fetch(`${Api}MASproductCategory`);
        result = await result.json();
        setdata(result)
    };

    const handleSubmit = async () => {
        const result = fetch(`${Api}MASproductCategory/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ name }),
            headers: { "Content-Type": "Application/json" },
        });
        if (result) {
            setname('')
            toast.info("Updated Succesfully!");
            navigate.push('/dashboard/app/MASproduct_Category')
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

                                            <h4 className="me-2 h4"> </h4>



                                            <span> -  </span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="3" className="col-lg-3">
                        <Card>
                            <Card.Header>
                                <div className="header-title">
                                    <h4 className="card-title">Form</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-inline m-0 p-0">
                                    <li className="d-flex mb-2">
                                    </li>
                                </ul>
                                <Form.Group className="form-group">
                                    <Form.Label className="custom-file-input">Name</Form.Label>
                                    <Form.Control type="text" id="customFile" value={name} onChange={(e) => { setname(e.target.value); }}/>
                                </Form.Group>
                                <Button variant="btn btn-primary" onClick={handleSubmit}>Update</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>

                    {data.map((item) => (
                          <Col lg="3">
                          <Card>
                              <Card.Header>
                                  <div className="header-title">
                        <h4 className="card-title">{item.name}</h4>
                                  </div>
                              </Card.Header>
                              <Card.Body>
                                  <ul className="list-inline m-0 p-0">
                                      <li className="d-flex mb-2">
                                          <div className="news-icon me-3">
                                          <div style={{float:"right"}}>
                                                <Link className="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip" title="Edit User" to="#"    onClick={() => updateproduct(item._id)} >
                                                    <span className="btn-inner">
                                                        <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                            <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </Link>
                                                <Link className="btn btn-sm btn-icon text-danger"  data-bs-toggle="tooltip" title="Delete User" to="#"    onClick={() => deleteproduct(item._id)} >
                                                    <span className="btn-inner">
                                                        <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                            <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                            <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </Link>
                                                </div>
                                          </div>
                                          <p className="news-detail mb-0"> </p>
                                      </li>
  
                                  </ul>
                              </Card.Body>
                          </Card>
                      </Col>
                                  ))}
                  
                </Row>
            </Tab.Container>
            <ToastContainer/>
        </>
    )
}

export default UserProfile;


const Container = styled.div`
  height: 70vh;
  width: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.1rem;
  align-items: center;
  background-color:  white;
  .container {
    height: 65vh;
    width: 40vw;
    background-color: ;
    display: grid;
    grid-template-columns: 96%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;



