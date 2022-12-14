import Card from '../../../components/Card'
import React, { useEffect, useState } from "react";
// AOS
import { MdPersonAddAlt1 } from 'react-icons/md'

import { BsEye } from 'react-icons/bs'
import { BsPlusCircle } from 'react-icons/bs' 
import { BiMailSend } from 'react-icons/bi'
import '../../../../node_modules/aos/dist/aos'
import '../../../../node_modules/aos/dist/aos.css'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Row, Col, Image, Form   ,  Dropdown,   OverlayTrigger, Tooltip } from 'react-bootstrap'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import {
   useHistory,
   Link,
   BrowserRouter,
   Route,
   Routes,
   useParams,
} from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineFileExcel } from 'react-icons/ai'
// img
import { Api } from '../constant/constant';

import shap1 from '../../../assets/images/shapes/01.png'
import shap2 from '../../../assets/images/shapes/02.png'
import shap3 from '../../../assets/images/shapes/03.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap5 from '../../../assets/images/shapes/05.png'
import shap6 from '../../../assets/images/shapes/06.png'
import axios from "axios";

import Button from 'react-bootstrap/Button';
import { Scrollbar } from 'swiper';

const UserList = () => {
   let history = useHistory()
   let params =useParams()
   const navigate = useHistory();


   const [data, setData] = useState([]);
   useEffect(() => {
      getproducts();
   }, []);
   useEffect(() => {
      AOS.init();
   }, [])
   const getproducts = async () => {
      let result = await fetch(`${Api}/attachmentforapprover/search/${params.id}`);
      result = await result.json();
      setData(result);
      console.log(result)
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
const sendtothepo=()=>{navigate.push(`/dashboard/special-pages/billing/${params.id}`)}
   const sendEmail = async () => {

      const formdata = new FormData()
      formdata.append('file', sendpo.file, sendpo.file.name)
      const result = await axios.post(`${Api}/uploadfile`, formdata)

      if (result.status == 200) { alert("Email sent to the Vendor!"); }

      console.warn(result);
   };

   const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));


   useEffect(async () => { if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) navigate.push('/auth/sign-in') }, []);

   useEffect(() => {
    console.log(params.id)
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
         <Col md="12"  >
                    <Row>
                        <Col md="12">

                        </Col>
                        <Col md="12"  >

                        </Col>
                        <Col md="12"  >


                        </Col>
                        <Col md="12" lg="12">
                            <div className="overflow-hidden card" data-aos="fade-up" data-aos-delay="600">
                                <div className="flex-wrap card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        {/* <h4 className="mb-2 card-title">Purchase Order List</h4> */}

                                        <p className="mb-0">
                                            

                                          
                                        </p>

                                    </div>
                                    {/* <button type="button" name="next" className="outline-light next action-button float-end" value="Next" id='bttn' > <BsPlusCircle  size="30px"/> </button> */}


                                    <OverlayTrigger placement="left" overlay={
                                        <Tooltip >
                                            Add new P.O
                                        </Tooltip>
                                    }>
                                        <Button variant="icon primary float-end"  onClick={sendtothepo}>
                                            <span className="  ">
                                                <BsPlusCircle size="35px" /> Generate PO
                                            </span>
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                                <div className="p-0 card-body">


                                    <div className="col-xl"></div>
                                    <div className="col-xl"></div>
                                    <ScrollBar>
                                        <div className="mt-4 box table-responsive  ">
                        <Scrollbars style={{ width: 1400, height: 600 }} thumbMinSize={200}>

                                            <table id="style-2" className="table box mb-0 table-striped  force-overflow" role="grid">
                                                <thead  >
                                                    <tr>
                                                        <th>PO number</th>
                                                        <th>Status</th>
                                                         
                                                        <th>Action</th>
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
                                                                <td><span className={`badge ${item.color}`}>{item.status}</span></td>
                                                                   
                                                                </td>
                                                                
                                                           
                                                                <td>
                                                                {/* <Link className="btn btn-sm btn-icon text-secondary flex-end" data-bs-toggle="tooltip" title="Add Vendor" to={"/dashboard/form/Userrfq/" + item._id}      >

< BiMailSend size="30px" />

</Link>{' '} */}
                                                                    <a href={item.file} download>    
                                                        
                                                        <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule  ="evenodd" clipRule="evenodd"
                                                            d="M7.666 21.25H16.335C19.355 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.365 2.75 16.335 2.75H7.666C4.636 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.636 21.25 7.666 21.25Z"
                                                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 16.0861V7.91406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.748 12.3223L12 16.0863L8.25195 12.3223" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                    </svg>
                                                    </a>
                                                                    <Link className="btn btn-sm btn-icon text-danger" data-bs-toggle="tooltip" title="Delete" to="#"      >
                                                                        <span className="btn-inner">
                                                                            <svg width="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                                                <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                            </svg>
                                                                        </span>
                                                                    </Link>
                                                                  
                                                                  


                                                                </td>

                                                                {/* <td>$14,000</td>// no of vendors in this rfq */}

                                                            </tr>
                                                        ))}


                                                </tbody>
                                            </table>
                                            </Scrollbars>
                                        </div>
                                    </ScrollBar>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
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