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
import { Button } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'




const ClientList = () => {
  const [subscribers,setSubscriber] = useState([])
  const router = useRouter()

  useEffect(()=>{
const fetchSubscribers = async()=>{
const res = await fetch('/api/fetchSubscriber',{
  method:'GET',
  headers:{
    'Content-type':'application/json'
  }
})
const response = await res.json()
console.log(response);
setSubscriber(response)
}
fetchSubscribers()
  },[])


const handleEdit = async(clientId)=>{
  // const res = await fetch(`/api/editClient/${clientId}`,{
  //   method:'POST',
  //   headers:{
  //     'Content-type':'application/json'
  //   }
  // })
  //  if(res.ok){
  //   alert('Client Updated')
  //  }else{
  //   alert('error occured')
  //  }
 router.push(`/editclient/${clientId}`)
}



  return (
    <Box sx={{display:'grid',placeItems:'center'}}>
    <Card sx={{margin:'1rem',width:'90%',height:'80dvh'}}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem'}}>
        <Typography padding='1rem' fontFamily='Rubik' fontSize='25px'>Client List</Typography>
        <Link href='./addclients'><Button  variant='outlined' sx={{ width:'200px',height:'40px', border:'2px solid #f3f3f3',background:'#f9d423',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#f9d423'}}}>  Add Client</Button></Link>
        </Box>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Subscription type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Package</TableCell>
              <TableCell>Action</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
            {subscribers.map(row => (
              <TableRow hover key={row._id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    {/* <Typography variant='caption'>{row.booking}</Typography> */}
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                    {row.subscriptionType == 'monthly' && (
                        <Chip
                        label={row.subscriptionType}
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
                {row.subscriptionType == 'yearly' && (
                        <Chip
                        label={row.subscriptionType}
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
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.package}</TableCell>
                <TableCell>
                 
                 
                  <Button onClick={()=> handleEdit(row._id)} variant='outlined' sx={{ width:'100px',marginRight:'0.5rem', border:'2px solid #f3f3f3',background:'#11ffbd',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#11ffbd'}}} >Edit</Button>
                  <Button variant='outlined' sx={{ width:'100px',border:'2px solid #f3f3f3',background:'#f9d423',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#f9d423'}}} >Delete</Button>

                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
    </Box>
  )
}

export default ClientList