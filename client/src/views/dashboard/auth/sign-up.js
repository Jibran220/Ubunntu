import {Row,Col,Image,Form,Button,ListGroup} from 'react-bootstrap'
import Card from '../../../components/Card'

// img
import facebook    from     '../../../assets/images/brands/fb.svg'
import google    from     '../../../assets/images/brands/gm.svg'
import instagram    from     '../../../assets/images/brands/im.svg'
import linkedin  from     '../../../assets/images/brands/li.svg'
import auth5 from     '../../../assets/images/auth/05.png'


import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";


const SignUp = () => {

   const navigate = useHistory();
   const toastOptions = {
     position: "bottom-right",
     autoClose: 8000,
     pauseOnHover: true,
     draggable: true,
     theme: "dark",
   };
   const [values, setValues] = useState({
     username: "",
     email: "",
     password: "",
     confirmPassword: "",
   });
 
   useEffect(() => {
     if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
    
      navigate.push("/ath");
         
     
 
     }
   }, []);
 
   const handleChange = (event) => {
     setValues({ ...values, [event.target.name]: event.target.value });
   };
 
   const handleValidation = () => {
     const { password, confirmPassword, username, email } = values;
     if (password !== confirmPassword) {
       toast.error(
         "Password and confirm password should be same.",
         toastOptions
       );
       return false;
     } else if (username.length < 3) {
       toast.error(
         "Username should be greater than 3 characters.",
         toastOptions
       );
       return false;
     } else if (password.length < 8) {
       toast.error(
         "Password should be equal or greater than 8 characters.",
         toastOptions
       );
       return false;
     } else if (email === "") {
       toast.error("Email is required.", toastOptions);
       return false;
     }
 
     return true;
   };
 
   const handleSubmit = async (event) => {
     event.preventDefault();
     if (handleValidation()) {
       const { email, username, password } = values;
       const { data } = await axios.post(registerRoute, {
         username,
         email,
         password,
       });
 
       if (data.status === false) {
         toast.error(data.msg, toastOptions);
       }
       if (data.status === true) {
         localStorage.setItem(
           process.env.REACT_APP_LOCALHOST_KEY,
           JSON.stringify(data.user)
         );
         navigate.push("/ath");
       }
     }
   };


   let history =useHistory()
   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">            
               <div className="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={auth5} className="Image-fluid gradient-main animated-scaleX" alt="images"/>
               </div>
               <Col md="6">               
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                           <Card.Body>
                              <Link to="/dashboard" className="navbar-brand d-flex align-items-center mb-3">
                                 <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                                 </svg>
                                 <h4 className="logo-title ms-3">Alchimistic</h4>
                              </Link>
                              <h2 className="mb-2 text-center">Sign Up</h2>
                              <p className="text-center">Create your Hope UI account.</p>
                              <Form  onSubmit={(event) => handleSubmit(event)}>
                                 <Row>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="full-name" className="">Full Name</Form.Label>
                                          <Form.Control type="text" className="" id="full-name"  placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}/>
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="last-name" className="">Email</Form.Label>
                                          <Form.Control type="text" className="" id="last-name"     placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}/>
                                       </Form.Group>
                                       </Col>
                                   
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Password</Form.Label>
                                          <Form.Control type="password" className="" id="password"    placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}/>
                                       </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="confirm-password" className="">Confirm Password</Form.Label>
                                          <Form.Control type="password" className="" id="confirm-password"      placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}/>
                                       </Form.Group>
                                    </Col>
                               
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button type="submit" variant="primary">Sign Up</Button>
                                 </div>
                                 <div className="d-flex justify-content-center">
                                
                                 </div>
                                 <p className="mt-3 text-center">
                                    Already have an Account <Link to="/auth/sign-in" className="text-underline">Sign In</Link>
                                 </p>
                              </Form>
                           </Card.Body>
                        </Card>    
                     </Col>
                  </Row>           
                  <div className="sign-bg sign-bg-right">
                     <svg width="280" height="230" viewBox="0 0 421 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.05">
                           <rect x="-15.0845" y="154.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -15.0845 154.773)" fill="#3A57E8"/>
                           <rect x="149.47" y="319.328" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 149.47 319.328)" fill="#3A57E8"/>
                           <rect x="203.936" y="99.543" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 203.936 99.543)" fill="#3A57E8"/>
                           <rect x="204.316" y="-229.172" width="543" height="77.5714" rx="38.7857" transform="rotate(45 204.316 -229.172)" fill="#3A57E8"/>
                        </g>
                     </svg>
                  </div>
               </Col>   
            </Row>
         </section>
      </>
   )
}

export default SignUp









































// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { useHistory, Link } from "react-router-dom";
// import Logo from "../assets/logo.svg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { registerRoute } from "../utils/APIRoutes";

// export default function Register() {
//   const navigate = useHistory();
//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 8000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   useEffect(() => {
//     if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       navigate("/homev");
//     }
//   }, []);

//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   const handleValidation = () => {
//     const { password, confirmPassword, username, email } = values;
//     if (password !== confirmPassword) {
//       toast.error(
//         "Password and confirm password should be same.",
//         toastOptions
//       );
//       return false;
//     } else if (username.length < 3) {
//       toast.error(
//         "Username should be greater than 3 characters.",
//         toastOptions
//       );
//       return false;
//     } else if (password.length < 8) {
//       toast.error(
//         "Password should be equal or greater than 8 characters.",
//         toastOptions
//       );
//       return false;
//     } else if (email === "") {
//       toast.error("Email is required.", toastOptions);
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (handleValidation()) {
//       const { email, username, password } = values;
//       const { data } = await axios.post(registerRoute, {
//         username,
//         email,
//         password,
//       });

//       if (data.status === false) {
//         toast.error(data.msg, toastOptions);
//       }
//       if (data.status === true) {
//         localStorage.setItem(
//           process.env.REACT_APP_LOCALHOST_KEY,
//           JSON.stringify(data.user)
//         );
//         navigate("/homev");
//       }
//     }
//   };

//   return (
//     <>
//       <FormContainer>
//         <form action="" onSubmit={(event) => handleSubmit(event)}>
//           <div className="brand">
//             <img src={Logo} alt="logo" />
//             <h1>Alchimist</h1>
//           </div>
//           <input
//             type="text"
            // placeholder="Username"
            // name="username"
            // onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="email"
            // placeholder="Email"
            // name="email"
            // onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="password"
            // placeholder="Password"
            // name="password"
            // onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="password"
            // placeholder="Confirm Password"
            // name="confirmPassword"
            // onChange={(e) => handleChange(e)}
//           />
//           <button type="submit">Create User</button>
//           <span>
//             Already have an account ? <Link to="/login">Login.</Link>
//           </span>
//         </form>
//       </FormContainer>
//       <ToastContainer />
//     </>
//   );
// }

// const FormContainer = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .brand {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     justify-content: center;
//     img {
//       height: 5rem;
//     }
//     h1 {
//       color: white;
//       text-transform: uppercase;
//     }
//   }

//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     background-color: #00000076;
//     border-radius: 2rem;
//     padding: 3rem 5rem;
//   }
//   input {
//     background-color: transparent;
//     padding: 1rem;
//     border: 0.1rem solid #4e0eff;
//     border-radius: 0.4rem;
//     color: white;
//     width: 100%;
//     font-size: 1rem;
//     &:focus {
//       border: 0.1rem solid #997af0;
//       outline: none;
//     }
//   }
//   button {
//     background-color: #4e0eff;
//     color: white;
//     padding: 1rem 2rem;
//     border: none;
//     font-weight: bold;
//     cursor: pointer;
//     border-radius: 0.4rem;
//     font-size: 1rem;
//     text-transform: uppercase;
//     &:hover {
//       background-color: #4e0eff;
//     }
//   }
//   span {
//     color: white;
//     text-transform: uppercase;
//     a {
//       color: #4e0eff;
//       text-decoration: none;
//       font-weight: bold;
//     }
//   }
// `;
