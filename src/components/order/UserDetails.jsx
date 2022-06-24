import React, {useState, useEffect} from "react";
import {Form, Container, Button} from "react-bootstrap";


function UserDetails(props){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobNumber, setMobNumber] = useState("");
    const [userAddress, setUserAddress] = useState("");

    function handleFirstName(e){
        setFirstName(e.target.value);
    }
    function handleLastName(e){
        setLastName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handleMobNumber(e){
        setMobNumber(e.target.value);
    }
    function handleUserAddress(e){
        setUserAddress(e.target.value);
    }
    async function submitDetails(){
        const userData = {
            first_name: firstName,
            last_name: lastName,
            contact_no: mobNumber,
            email: email,
            password: "0021312312", // uncomment address property once implemented on backend
            //address: userAddress
        }
        
        let res = await fetch("http://localhost:3001/api/user/create", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        }); 

        res = await res.json();

        console.log(res); 

        if(res.message === "success"){
            props.setUserID(3); // change it to the user ID fetched from response of above request.
            alert("User Fetched Successfully");
        }else{
            console.log(res);
        }
    }

    
    return (
        <div className="items-div">
            <div className="row">
                <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center" style={{borderRadius:"10px", marginTop:"100px",marginBottom:"0px", padding:"40px", backgroundColor:"#F8F9FC"}}>
                    <Container className="flex form-heading"><h1>Enter User Details</h1><hr></hr></Container>  
                     <Form>
                        <Form.Group className="mb-3" controlId="pass">
                            <Form.Label className="form-label">First Name</Form.Label>
                            <Form.Control value={firstName} onChange={handleFirstName} type="text" name="userName" placeholder="Enter User Name" className="form-control"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pass">
                            <Form.Label className="form-label">Last Name</Form.Label>
                            <Form.Control value={lastName} onChange={handleLastName} type="text" name="userName" placeholder="Enter User Name" className="form-control"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pass">
                            <Form.Label className="form-label">E-mail</Form.Label>
                            <Form.Control value={email} type="email" onChange={handleEmail} name="userName" placeholder="Enter E-mail address" className="form-control"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pass">
                            <Form.Label className="form-label">Mobile Number</Form.Label>
                            <Form.Control value={mobNumber} onChange={handleMobNumber} type="number" name="userName" placeholder="Enter Mobile Number" className="form-control"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pass">
                            <Form.Label className="form-label">Address</Form.Label>
                            <Form.Control value={userAddress} onChange={handleUserAddress} type="text" name="userName" placeholder="Enter Address" className="form-control"/>
                        </Form.Group>
                        <Button onClick={submitDetails} variant="primary">
                            Submit Details
                        </Button>
                    </Form>
                </Container>
            </div>
            
        </div>
    );
}

export default UserDetails;