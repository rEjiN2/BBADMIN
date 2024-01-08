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

const rows = [
  {
    name:'rejin',
    email:'rejin@gmail.com',
    subtype:'monthly',
    price:'600AED',
    package:'Stock learning',
  },
  {
    name:'rohith',
    email:'rejin@gmail.com',
    subtype:'monthly',
    price:'600AED',
    package:'Investing in Stock',
  },
  {
    name:'janish',
    email:'rejin@gmail.com',
    subtype:'yearly',
    price:'600AED',
    package:'Stock learning',
  },
  {
    name:'rejin',
    email:'rejin@gmail.com',
    subtype:'monthly',
    price:'600AED',
    package:'Stock learning',
  },
  {
    name:'arshad',
    email:'rejin@gmail.com',
    subtype:'monthly',
    price:'600AED',
    package:'Select value Companies',
  },
  {
    name:'rejin',
    email:'rejin@gmail.com',
    subtype:'monthly',
    price:'600AED',
    package:'Select value Companies',
  },
  {
    name:'rejin',
    email:'rejin@gmail.com',
    subtype:'monthly',
    price:'600AED',
    package:'Select value Companies',
  },
  {
    name:'rohith',
    email:'rohith@gmail.com',
    subtype:'yearly',
    price:'600AED',
    package:'Investing in Stock',
  }
]



const ClientList = () => {
  return (
    <Card sx={{margin:'1rem'}}>
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
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    {/* <Typography variant='caption'>{row.booking}</Typography> */}
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                    {row.subtype == 'monthly' && (
                        <Chip
                        label={row.subtype}
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
                {row.subtype == 'yearly' && (
                        <Chip
                        label={row.subtype}
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
                 
                  <Button variant='outlined' sx={{ width:'200px',marginRight:'0.5rem', border:'2px solid #f3f3f3',background:'#11ffbd',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#11ffbd'}}} >Send ZoomLink</Button>
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

export default ClientList