import React,{useState} from 'react';
import {Form , Button} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Formm.css';

const Formm = () => {
  const [formdata , setFormData] = useState({
    name:'',
    email:'',
    pass:''
  })
  const history = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(formdata.pass);
    
    
    //console.log(formData);
    
    axios.post('http://localhost:5000/signup', formdata)
    .then(response => {
      console.log(response);
      history('image');
    })
    .catch(error => {
      console.log(error);
    });
    


  }
  return (
    <div>
      <Form className='container' onSubmit={handleSubmit} id="form">
        <h4>Signup</h4>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Label id='name-1'></Form.Label>
          <Form.Control className='inp' placeholder='name' id='name' value={formdata.name} onChange={(e) => setFormData({...formdata, name: e.target.value})}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Label id='email-1'></Form.Label>
          <Form.Control className='inp' placeholder='email' id='email' value={formdata.email}  onChange={(e) => setFormData({...formdata, email: e.target.value})}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Label id='pass-1'></Form.Label>
          <Form.Control className='inp' placeholder='password' id='pass' value={formdata.pass}type='password'  onChange={(e) => setFormData({...formdata, pass: e.target.value})}  />
        </Form.Group>
        
        <Button type='submit' >Submit</Button>
      </Form>
    </div>
  )
}

export default Formm;
