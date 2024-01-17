"use client"
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import LockIcon from '@mui/icons-material/Lock';

const page = () => {
  return (
     <Box sx={{height:'90dvh',display:'grid',placeItems:'center'}}>
          <Paper sx={{width:'40%'}}>
                <Typography fontSize='25px' fontWeight='500' align='center' >Login</Typography>
                 
                 <Box sx={{margin:'1rem'}}>
                    <Typography fontSize='14px' fontWeight='400'>Email*</Typography>
                    <TextField sx={{width:'100%'}} InputProps={{style:{height:'40px',fontSize:'13px'}}} />
                 </Box>
                  
                 <Box sx={{margin:'1rem'}}>
                    <Typography fontSize='14px' fontWeight='400'>Password*</Typography>
                    <TextField type='password' sx={{width:'100%'}} InputProps={{style:{height:'40px',fontSize:'13px'}}} />
                 </Box>

                 <Box sx={{margin:'2rem',display:'grid',placeItems:'center'}}>
                        <Button startIcon={<LockIcon style={{color:'#fff'}}/>} sx={{background:'#F3904F',width:'20%',lineHeight: 0,color:'#fff','&:hover':{background:'#F3904F',color:'#fff'}}}>Login</Button>
                 </Box>


          </Paper>
     </Box>
  )
}

export default page