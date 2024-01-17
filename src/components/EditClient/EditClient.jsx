"use client"

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import { useParams } from 'next/navigation';
import Radio from '@mui/material/Radio';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const EditClient = () => {
 const [subscriptionType,setSubscriptionType] = useState('monthly')
 const [name ,setName] = useState('')
 const [email ,setEmail] = useState('')
 const [price,setPrice] = useState(50)
 const [epackage,setPackage] = useState('')
 const [courses,setCourses]= useState([])
 const param = useParams()
 const [client,setClient] = useState({})


useEffect(()=>{
const fetchClient = async()=>{
const res = await fetch(`/api/fetchClient/${param.id}`,{
    method:'GET',
    headers:{
        'Content-type':'application/json'
    }
})





const response = await res.json()
setName(response.name)
setEmail(response.email)
setSubscriptionType(response.subscriptionType)
setPrice(response.price)
setPackage(response.package)
}
fetchClient()
},[])



useEffect(()=>{
  const fetchCourse = async()=>{
  const res = await fetch('/api/getCourse',{
    method:'GET',
    headers:{
      'Content-type':'application/json'
    }
  })
  
  const response = await res.json()
  
  setCourses(response)
  }
  fetchCourse()
  },[])

 const handleChange = (event) => {
  setSubscriptionType(event.target.value)
     } 


      const handleEditClient = async()=>{
            const res = await fetch(`/api/editClient/${param.id}`,{
              method:'POST',
              body:JSON.stringify({
                name,
                email,
                subscriptionType,
                price,
               package: epackage
              })
            })
            const client = await res.json()
            if(res.ok){
              alert("Client Updated")
              window.location.reload()
            }
          }

  return (
    <Box sx={{display:'grid',placeItems:'center',height:'70dvh',margin:'3rem'}}>
                 <Paper sx={{width:'50%',padding:'2rem'}}>
                  <Typography fontSize='25px' align='center' fontWeight='500'>Add Subscribed Clients</Typography>
                 
                  <Box >
                           <Typography fontSize='15px' fontWeight='500'>Name</Typography>
                           <TextField value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter the name of the Client'  sx={{width:'100%'}} InputProps={{style:{height:'40px'}}}/>
                  </Box>

                  <Box  sx={{marginTop:'1rem'}}>
                           <Typography fontSize='15px' fontWeight='500'>Email</Typography>
                           <TextField type='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter the email of the Client'  sx={{width:'100%'}} InputProps={{style:{height:'40px'}}}/>
                  </Box>

                  <Box  sx={{marginTop:'1rem'}}>
                           <Typography fontSize='15px' fontWeight='500'>Subscription Type</Typography>
                           <Box sx={{height:'40px', width:'100%',border:'1px solid #000',display:'flex',gap:'1rem',alignItems:'center'}}>
                            <Box sx={{display:'flex',alignItems:'center',gap:'0.5rem',paddingLeft:'1rem'}}>
                              <Radio
                                checked={subscriptionType === 'monthly'}
                                       onChange={handleChange}
                                       value="monthly"
                                   name="radio-buttons"
                                    inputProps={{ 'aria-label': 'Monthly' }}
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
                                    <Typography fontSize='14px' fontWeight='500' >Monthly</Typography>
                            </Box>

                            <Box sx={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                              <Radio
                                checked={subscriptionType === 'yearly'}
                                      onChange={handleChange}
                                       value="yearly"
                                   name="radio-buttons"
                                    inputProps={{ 'aria-label': 'Yearly' }}
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
                                    <Typography fontSize='14px' fontWeight='500' >Yearly</Typography>
                            </Box>
                             </Box>
                  </Box>
                  <Box  sx={{marginTop:'1rem'}}>
                           <Typography fontSize='15px' fontWeight='500'>Price</Typography>
                           <TextField type='number'value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder='Enter the Price'  sx={{width:'100%'}} InputProps={{style:{height:'40px'}}}/>
                  </Box>

                  <Box  sx={{marginTop:'1rem'}}>
                           <Typography fontSize='15px' fontWeight='500'>Package</Typography>
                           <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={epackage}
          
          sx={{width:'100%',height:'40px'}}
          onChange={(e)=>setPackage(e.target.value)}
        >
          {courses.map((item)=>(
            <MenuItem value={item.title} sx={{fontSize:'13px', fontWeight:500}}>{item.title}</MenuItem>
          ))}
          
         
        </Select>
                  </Box>
                  
                   
                     <Box sx={{display:'grid',placeItems:'center'}}>                 
                       <Button onClick={handleEditClient}  sx={{marginTop:'1rem',background:'#141517',color:'#fff',width:'150px',textTransform:'none','&:hover':{background:'#141517',color:'#fff'}}}> Edit Client </Button>
                     </Box>


                 </Paper>
    </Box>
  )
}

export default EditClient