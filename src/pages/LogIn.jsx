import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function LogIn() {
    let navigate = useNavigate();
    const emailRef = useRef()
    const passwordRef = useRef()
    const { currentUser, signin } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false) 

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)

            navigate("/home")
        }
        catch {
            setError("failed to sign in, check email and password.")
        }
        setLoading(false)
    }

    return(
        <Container 
        className="d-flex align-items-center justify-content-center "
        style={{minHeight: "100vh"}}>
            <div className='w-100' style={{maxWidth:"400px"}}>
              <Card>
                  <Card.Body>
                      <h2 className='text-center'>Sign in!</h2>
                      {error && <Alert variant='danger'>{error}</Alert>} 
                      <Form onSubmit={handleSubmit}>
                          <Form.Group>
                              <Form.Label id="email">Email ID</Form.Label>
                              <Form.Control type="email" ref={emailRef} required />
                          </Form.Group>
                          <Form.Group>
                              <Form.Label id="password">Password</Form.Label>
                              <Form.Control type="password" ref={passwordRef}  required />
                          </Form.Group>
                          <Form.Group className='text-center'>
                              <Button disabled={loading} className='mt-4' type="submit">
                                  Submit
                              </Button>
                          </Form.Group>
                      </Form>
                  </Card.Body>
              </Card>
              <div className='text-center mt-2 w-100'>
                  Bypass <Link to='/home'>here</Link>  
              </div> 
            </div>
        </Container>
    ) 
}
