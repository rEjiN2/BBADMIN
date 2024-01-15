// ** MUI Imports
"use client"
import React,{useState,useEffect} from 'react'
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


const rows = [
  {
    link : 'https://zoom.us/j/5551112222.',
    status: 'pending',
    date: '09/27/2018',
    name: 'Sally Quinn',
    Price: '$19586.23',
    email: 'eebsworth2m@sbwire.com',
    booking: 'Human Resources Assistant'
  },
  {
    link : 'https://zoom.us/j/5551112222.',
    date: '09/23/2016',
    Price: '$23896.35',
    status: 'pending',
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    booking: 'Nuclear Power Engineer'
  },
  {
    link : 'https://zoom.us/j/5551112222.',
    date: '10/15/2017',
    name: 'Minnie Roy',
    status: 'pending',
    Price: '$18991.67',
    email: 'ediehn6@163.com',
    booking: 'Environmental Specialist'
  },
  {
    link : 'https://zoom.us/j/5551112222.',
    date: '06/12/2018',
    status: 'pending',
    Price: '$19252.12',
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
    booking: 'Sales Representative'
  },
  {
    link : 'https://zoom.us/j/5551112222.',
    status: 'finished',
    date: '03/24/2018',
    Price: '$13076.28',
    name: 'Annie Martin',
    booking: 'Operator',
    email: 'sganderton2@tuttocitta.it'
  },
  {
    link : 'https://zoom.us/j/5551112222.',
    date: '08/25/2017',
    Price: '$10909.52',
    name: 'Adeline Day',
    status: 'finished',
    email: 'hnisius4@gnu.org',
    booking: 'Senior Cost Accountant'
  },
  {
    link : 'https://zoom.us/j/5551112222.',
    status: 'finished',
    date: '06/01/2017',
    Price: '$17803.80',
    name: 'Lora Jackson',
    booking: 'Geologist',
    email: 'ghoneywood5@narod.ru'
  },
  {
    link : 'https://zoom.us/j/5551112222.',
    date: '12/03/2017',
    Price: '$12336.17',
    name: 'Rodney Sharp',
    status: 'finished',
    booking: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp'
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
 const [bookings,setBookings] = useState([])


 useEffect(()=>{
  const fetchBookings = async()=>{
    const booking = await fetch('/api/fetchBooking',{
      method:'GET',
      headers:{
        'Content-type':'application/json'
      },

    })

    const bookings = await booking.json()
    setBookings(bookings)

    console.log(bookings,"bookings");
    
    
  }


  fetchBookings()
 },[])

 const handleApprove = async(bookingId,bookingLink)=>{
        // e.preventDefault()
        console.log(bookingLink,"link");
        const approveBooking = await fetch(`api/approveBooking/${bookingId}`,{
          method:'POST',
          body:JSON.stringify({bookingLink}),
          headers:{
            'Content-type':'application/json'
          }
        })

        const approved = await approveBooking.json()
 }

    




  return (
    <Card>
        <Typography padding='1rem' fontFamily='Rubik' fontSize='25px'>Booking List</Typography>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date and Time</TableCell>
              <TableCell>Package</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Action</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    {/* <Typography variant='caption'>{row.booking}</Typography> */}
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}<br/>
                {row.time}
                </TableCell>
                <TableCell> {row.package}</TableCell>
                <TableCell> 
    <a href={row.link} target="_blank" rel="noopener noreferrer">Join Meeting</a> 
</TableCell>

                <TableCell>
                  {/* <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  /> */}
                  {row.aprroved ==true  ? (
      <Button disabled  variant='outlined' sx={{ width:'100px', border:'2px solid #f3f3f3',background:'#11ffbd',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#11ffbd'}}} >Aprroved</Button>
                   )
                  :
                  <>
                  <Button onClick={()=>handleApprove(row._id,row.link)}  variant='outlined' sx={{ width:'100px', border:'2px solid #f3f3f3',background:'#11ffbd',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#11ffbd'}}} >Aprrove</Button>
                  <Button variant='outlined' sx={{ width:'100px',border:'2px solid #f3f3f3',background:'#f9d423',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#f9d423'}}} >Delete</Button>
                  </>
                  }
                

                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable