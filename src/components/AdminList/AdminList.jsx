// ** MUI Imports.
"use client"
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Button  } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'





const AdminList = () => {
const [adminList,setAdminList] = useState([])
const router = useRouter()

useEffect(()=>{
const fetchAdmins = async()=>{

  const admins = await fetch('/api/getAdmins',{
    method:'GET',
    headers:{
      'Content-type':'application/json'
    }
  })

  const sAdmins = await admins.json()
         setAdminList(sAdmins)
   } 

fetchAdmins()
},[])

console.log(adminList,"admin");

const handleUpdate=(adminId)=>{
     router.push(`/updateAdmin/${adminId}`)
}


  return (
    <Card sx={{margin:'1rem'}}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem'}}>
        <Typography padding='1rem' fontFamily='Rubik' fontSize='25px'>Admin List</Typography>
        <Link href='./addadmin'><Button  variant='outlined' sx={{ width:'200px',height:'40px', border:'2px solid #f3f3f3',background:'#f9d423',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#f9d423'}}}>  Add Admin</Button></Link>
        </Box>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Password</TableCell>
            
              <TableCell>Action</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
            {adminList.map((row,index) => (
              <TableRow hover key={index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    {/* <Typography variant='caption'>{row.booking}</Typography> */}
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                    {row.role == 'admin' && (
                        <Chip
                        label={row.role}
                        color='warning'
                        sx={{
                            width:'80px',
                          height: 24,
                          fontSize: '0.75rem',
                          textTransform: 'capitalize',
                          '& .MuiChip-label': { fontWeight: 500 }
                        }}
                      />
                    )}
                {row.role == 'sadmin' && (
                        <Chip
                        label="Super Admin+"
                        color='success'
                        sx={{
                            width:'80px',
                          height: 24,
                          fontSize: '0.75rem',
                          textTransform: 'capitalize',
                          '& .MuiChip-label': { fontWeight: 500 }
                        }}
                      />
                    )}
                    {/* {row.role == 'sales head' && (
                        <Chip
                        label={row.role}
                        color='info'
                        sx={{
                            width:'100px',
                          height: 24,
                          fontSize: '0.75rem',
                          textTransform: 'capitalize',
                          '& .MuiChip-label': { fontWeight: 500 }
                        }}
                      />
                    )} */}
                </TableCell>
                <TableCell >  xxxxxxxx</TableCell>
                
                <TableCell>
                  <Button onClick={()=>handleUpdate(row._id)} variant='outlined' sx={{ width:'100px',marginRight:'0.5rem', border:'2px solid #f3f3f3',background:'#11ffbd',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#11ffbd'}}} >Update</Button>
                  <Button variant='outlined' sx={{ width:'100px',border:'2px solid #f3f3f3',background:'#f9d423',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#f9d423'}}} >Delete</Button>

                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default AdminList