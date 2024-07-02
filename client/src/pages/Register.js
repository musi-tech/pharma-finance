import React from 'react';
import '../styles/RegisterStyle.css';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

// import Register from './Register';
const Register = () => {

      
    //form handler
    const onfinishHandler = (values) => {
      console.log(values);
    };

  return (
    <>
      <div className='form-container'>
        <Form layout = 'vertical' onFinish={onfinishHandler} className='register-form' >
          <h3 className='text-center'>Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type='text' required/>
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type='email' required/>
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type='password' required/>
          </Form.Item>

          <button className='btn btn-primary' type='submit'>
            Register
          </button>
          
          <Link to='/login' className='m-2'>Already User Login Here</Link>
        </Form>
      </div>
    </>
  );
};

export default Register