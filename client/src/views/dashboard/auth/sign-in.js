import {Row,Col,Image,Form,Button,ListGroup,} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import Card from '../../../components/Card'

// img
import facebook    from     '../../../assets/images/brands/fb.svg'
import google    from     '../../../assets/images/brands/gm.svg'
import instagram    from     '../../../assets/images/brands/im.svg'
import linkedin  from     '../../../assets/images/brands/li.svg'
import auth1 from     '../../../assets/images/auth/01.png'



import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";
const SignIn = () => {
   let history =useHistory()
   const [user, setUser] = useState(
      JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
    );
   const [values, setValues] = useState({ username: "", password: "" });
   const toastOptions = {
     position: "bottom-right",
     autoClose: 8000,
     pauseOnHover: true,
     draggable: true,
     theme: "dark",
   };
   useEffect(() => {
      
  if( localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) 
       
      toast.info("you are already login")
    }, []);
 
   const handleChange = (event) => {
     setValues({ ...values, [event.target.name]: event.target.value });
   };
 
   const validateForm = () => {
     const { username, password } = values;
     if (username === "") {
       toast.error("Email and Password is required.", toastOptions);
       return false;
     } else if (password === "") {
       toast.error("Email and Password is required.", toastOptions);
       return false;
     }
     return true;
   };
 
   const handleSubmit = async (event) => {
      event.preventDefault();
      if (validateForm()) {
        const { username, password } = values;
        const { data } = await axios.post(loginRoute, {
          username,
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
  if(username==="Admin")
  {
     history.push("/");
  }
  if(username==="Admin1")
  {
     history.push("/approver");
  }
  if(username!=="Admin" &&username!=="Admin1")
  {
     history.push("/ath");
  }
   
        }
      }
    };



   return (
      <>
         <section className="login-content">
            <Row className="m-0 align-items-center bg-white vh-100">            
               <Col md="6">
                  <Row className="justify-content-center">
                     <Col md="10">
                        <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                           <Card.Body>
                              <Link to="/dashboard" className="navbar-brand d-flex align-items-center mb-3">
                                 <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                                 </svg>
                                 <h4 className="logo-title ms-3">Hope UI</h4>
                              </Link>
                              <h2 className="mb-2 text-center">Sign In</h2>
                              <p className="text-center">Login to stay connected.</p>
                              <Form  onSubmit={(event) => handleSubmit(event)}>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="email" className="">Username</Form.Label>
                                          <Form.Control type="text" className="" id="email"   placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"/>
                                       </Form.Group >
                                    </Col>
                                    <Col lg="12" className="">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">Password</Form.Label>
                                          <Form.Control type="password" className="" id="password"    
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}/>
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="d-flex justify-content-between">
                                     
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button type="submit" variant="btn btn-primary">Sign In</Button>
                                 </div>
                                
                                 <p className="mt-3 text-center">
                                    Don’t have an account? <Link to="/auth/sign-up" className="text-underline">Click here to sign up.</Link>
                                 </p>
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                  <div className="sign-bg">
                     <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.05">
                        <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF"/>
                        <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF"/>
                        <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF"/>
                        <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF"/>
                        </g>
                     </svg>
                  </div>
               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={auth1} className="Image-fluid gradient-main animated-scaleX" alt="images"/>
               </Col>
            </Row>
         </section>
         <ToastContainer/>
        </>
    )
}

export default SignIn


























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { useNavigate, Link } from "react-router-dom";
// import Logo from "../assets/logo.svg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { loginRoute } from "../utils/APIRoutes";

// export default function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({ username: "", password: "" });
//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 8000,
//     pauseOnHover: true,
//     draggable: true,
//     theme: "dark",
//   };
//   useEffect(() => {
//     if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       navigate("/homev");
//     }
//   }, []);

//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   const validateForm = () => {
//     const { username, password } = values;
//     if (username === "") {
//       toast.error("Email and Password is required.", toastOptions);
//       return false;
//     } else if (password === "") {
//       toast.error("Email and Password is required.", toastOptions);
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       const { username, password } = values;
//       const { data } = await axios.post(loginRoute, {
//         username,
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
//             <h1>Alchimistic</h1>
//           </div>
//           <input
//             type="text"
            // placeholder="Username"
            // name="username"
            // onChange={(e) => handleChange(e)}
            // min="3"
//           />
//           <input
            // type="password"
            // placeholder="Password"
            // name="password"
            // onChange={(e) => handleChange(e)}
//           />
//           <button type="submit">Log In</button>
//           <span>
//             Don't have an account ? <Link to="/register">Create One.</Link>
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
//     padding: 5rem;
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
