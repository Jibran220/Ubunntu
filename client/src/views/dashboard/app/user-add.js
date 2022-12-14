import React, { useState } from 'react'
import { Row, Col, Image, Form, Button } from 'react-bootstrap'
import Card from '../../../components/Card'

import { Link } from 'react-router-dom'
// img
import avatars1 from '../../../assets/images/avatars/01.png'
import avatars2 from '../../../assets/images/avatars/avtar_1.png'
import avatars3 from '../../../assets/images/avatars/avtar_2.png'
import avatars4 from '../../../assets/images/avatars/avtar_3.png'
import avatars5 from '../../../assets/images/avatars/avtar_4.png'
import avatars6 from '../../../assets/images/avatars/avtar_5.png'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Api } from '../constant/constant';

const UserAdd = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [ConfirmPassword, setConfirmPassword] = useState('')

   const navigate=useHistory()
   const update = async () => {
      if(password!=ConfirmPassword)
      {toast.error('password and confirm paaword not match')}
      else{

         let result = await fetch(`http://localhost:5005/api/auth/update`, {
            method: "Put",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "Application/json" },
         })
         if (result) {
            toast.info("Updated!");
            navigate.push('/')
         }
      }
     
   }

   return (
      <>
         <div>
            <Row>
               <Col xl="3" lg="4" className="">

               </Col>
               <Col xl="12" lg="12">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                           {/* <h4 className="card-title">  </h4> */}
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="new-user-info">
                           <form>

                              <hr />

                              <div className="row">
                                 <Form.Group className="col-md-6 form-group "autoComplete="nope">
                                    <Form.Label htmlFor="uname">User Name:</Form.Label>
                                    <Form.Control type="text"   disabled defaultValue='Admin' placeholder="User Name" />
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group" autoComplete="nope">
                                    <Form.Label htmlFor="uname">Email:</Form.Label>
                                    <Form.Control type="email"  placeholder="Email"  autoComplete="nope"  value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group" autoComplete="off">
                                    <Form.Label htmlFor="pass">Password:</Form.Label>
                                    <Form.Control type="password"   placeholder="Password"  autoComplete="off" value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                                 </Form.Group>
                                 <Form.Group className="col-md-6 form-group" autoComplete="off">
                                    <Form.Label htmlFor="rpass">Repeat Password:</Form.Label>
                                    <Form.Control type="password"   placeholder="Repeat Password "  autoComplete="nope"  value={ConfirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}/>
                                 </Form.Group>
                              </div>

                              <Button type="button" variant="btn btn-primary" onClick={update}>Add User</Button>
                           </form>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </div>
         <ToastContainer />
      </>
   )

}

export default UserAdd;