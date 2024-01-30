import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/slices/authSlide';


const Login = () => {
    const initialState = {
        name : '',
        password : '',
        image : '',
    };

    const dispatch = useDispatch();
    const [values , setValues] = useState(initialState);

    const onChange = (e) => {
        const {name , value} = e.target;
        setValues({...values , [name] : value});
    }
  return (
    <div className='grid grid-cols-1 items-center justify-items-center h-screen'>
      <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Sign in
        </Typography>
        <Input label='Email' size='lg' type='text' name='name' onChange={onChange} value={values.name}/>
        <Input label='Password' size='lg' type='password' name='password' onChange={onChange} value={values.password}/>
        <Input label='URL image' size='lg' type='text' name='image' onChange={onChange} value={values.image}/>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={()=>dispatch(login(values))}>Sign in</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Login;