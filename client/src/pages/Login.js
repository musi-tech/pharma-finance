import React from 'react';
import '../styles/RegisterStyle.css';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const login = () => {

  //form handler
  const onfinishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className='form-container'>
        <Form layout = 'vertical' onFinish={onfinishHandler} className='register-form' >
          <h3 className='text-center'>Login Form</h3>

          <Form.Item label="Email" name="email">
            <Input type='email' required/>
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type='password' required/>
          </Form.Item>

          <button className='btn btn-primary' type='submit'>
            Login
          </button>
          
          <Link to='/register' className='m-2'>New User Register Here</Link>
        </Form>
      </div>
    </>
  )
}

export default login