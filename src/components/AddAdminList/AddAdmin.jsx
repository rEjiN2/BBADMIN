"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import Radio from '@mui/material/Radio';

const AddAdmin = () => {
   const [name,setName] = useState('')
   const [email,setEmail]= useState('')
   const [role,setRole]= useState('admin')
   const [password,setPassword] =useState('')
   const [confirmPassword,setConfirmPassword] =useState('')
   const [error,setError]= useState('')

   

  const handleChange = (event) => {
    setRole(event.target.value);
  };

   const handleAddAdmin = async()=>{
            
    if(confirmPassword == password ){
     console.log(name,email,role,password,"this");
      
      // const formData = new FormData()
      // formData.append('name',JSON.stringify(name))
      // formData.append('email',JSON.stringify(email))
      // formData.append('role',JSON.stringify(role))
      // formData.append('password',JSON.stringify(password))
      // console.log(formData,"formData");
   
   try{
    const res= await fetch('/api/addadmin',{
      method:'POST',
      body: JSON.stringify({
        name,
        email,
        role,password
      }),
    })
    if(res.ok){
      const result = await res.json()
      console.log(result);
      window.location.reload()
    }

   }catch(err){
    console.log(err.message);
   }
       
   
       
    }else{
setError('Password not Match')
    }
   

   }





  return (
    <Box sx={{display:'grid',placeItems:'center',height:'70dvh',margin:'3rem'}}>
                 <Paper sx={{width:'50%',padding:'2rem'}}>
                  <Typography fontSize='25px' align='center' fontWeight='500'>Add Admins</Typography>
                 
                  <Box >
                           <Typography fontSize='15px' fontWeight='500'>Name</Typography>
                           <TextField value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter the name of the admin'  sx={{width:'100%'}} InputProps={{style:{height:'40px'}}}/>
                  </Box>

                  <Box  sx={{marginTop:'1rem'}}>
                           <Typography fontSize='15px' fontWeight='500'>Email</Typography>
                           <TextField type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter the email of the admin'  sx={{width:'100%'}} InputProps={{style:{height:'40px'}}}/>
                  </Box>

                  <Box  sx={{marginTop:'1rem'}}>
                           <Typography fontSize='15px' fontWeight='500'>Role</Typography>
                           <Box sx={{height:'40px', width:'100%',border:'1px solid #000',display:'flex',gap:'1rem',alignItems:'center'}}>
                            <Box sx={{display:'flex',alignItems:'center',gap:'0.5rem',paddingLeft:'1rem'}}>
                              <Radio
                                checked={role === 'admin'}
                                      onChange={handleChange}
                                       value="admin"
                                   name="radio-buttons"
                                    inputProps={{ 'aria-label': 'Admin' }}
                                    sx={{
                                      '&, &.Mui-checked': {
                                          color: '#F3904F',
                                      },
                                      '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                                      {
                                        color: '#dddfe1',
                                      },
                                      '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                                        color: '#F3904F',
                                      },
                                    }}
                                />
                                    <Typography fontSize='14px' fontWeight='500' >Admin</Typography>
                            </Box>

                            <Box sx={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                              <Radio
                                checked={role === 'sadmin'}
                                      onChange={handleChange}
                                       value="sadmin"
                                   name="radio-buttons"
                                    inputProps={{ 'aria-label': 'Sadmin' }}
                                    sx={{
                                      '&, &.Mui-checked': {
                                        color: '#F3904F',
                                      },
                                      '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                                      {
                                        color: '#dddfe1',
                                      },
                                      '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                                        color: '#F3904F',
                                      },
                                    }}
                                />
                                    <Typography fontSize='14px' fontWeight='500' >Super Admin</Typography>
                            </Box>
                             </Box>
                  </Box>
                  <Box  sx={{marginTop:'1rem'}}>
                           <Typography fontSize='15px' fontWeight='500'>Password</Typography>
                           <TextField type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter the password'  sx={{width:'100%'}} InputProps={{style:{height:'40px'}}}/>
                  </Box>

                  <Box  sx={{marginTop:'1rem'}}>
                           <Typography fontSize='15px' fontWeight='500'>Confirm Password</Typography>
                           <TextField type='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Confirm the password'  sx={{width:'100%'}} InputProps={{style:{height:'40px'}}}/>
                  </Box>
                  {error && (
                    <Typography fontSize='13px' fontWeight='400' align='right' color='red'>{error}*</Typography>
                  )}
                   
                     <Box sx={{display:'grid',placeItems:'center'}}>                 
                       <Button onClick={handleAddAdmin} sx={{marginTop:'1rem',background:'#141517',color:'#fff',width:'150px',textTransform:'none','&:hover':{background:'#141517',color:'#fff'}}}> Add Admin </Button>
                     </Box>


                 </Paper>
    </Box>
  );
};

export default AddAdmin;
