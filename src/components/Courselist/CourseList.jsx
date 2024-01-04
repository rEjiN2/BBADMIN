// ** MUI Imports
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

const rows = [
  {
    title : 'Stock Learning Beginer',
    desc: 'Lorem Ios doll lorek kosad jopas Lorem Ios doll lorek kosad jopas',
    image: 'Small Img',
    price: '$19586.23',
    dates: '09/23/2024 - 12/23/2024',
    times: '9am 10.30am 11am 3pm',
   
  },
  {
    title : 'Stock Learning Beginer',
    desc: 'Lorem Ios doll lorek kosad jopas Lorem Ios doll lorek kosad jopas',
    image: 'Small Img',
    price: '$19586.23',
    dates: '09/23/2024 - 12/23/2024',
    times: '9am 10.30am 11am 3pm',
  },
  {
    title : 'Stock Learning Beginer',
    desc: 'Lorem Ios doll lorek kosad jopas Lorem Ios doll lorek kosad jopas',
    image: 'Small Img',
    price: '$19586.23',
    dates: '09/23/2024 - 12/23/2024',
    times: '9am 10.30am 11am 3pm',
  },
  {
    title : 'Stock Learning Beginer',
    desc: 'Lorem Ios doll lorek kosad jopas Lorem Ios doll lorek kosad jopas',
    image: 'Small Img',
    price: '$19586.23',
    dates: '09/23/2024 - 12/23/2024',
    times: '9am 10.30am 11am 3pm',
  },
  {
    title : 'Stock Learning Beginer',
    desc: 'Lorem Ios doll lorek kosad jopas Lorem Ios doll lorek kosad jopas',
    image: 'Small Img',
    price: '$19586.23',
    dates: '09/23/2024 - 12/23/2024',
    times: '9am 10.30am 11am 3pm',
  },
  {
    title : 'Stock Learning Beginer',
    desc: 'Lorem Ios doll lorek kosad jopas Lorem Ios doll lorek kosad jopas',
    image: 'Small Img',
    price: '$19586.23',
    dates: '09/23/2024 - 12/23/2024',
    times: '9am 10.30am 11am 3pm',
  },
  {
    title : 'Stock Learning Beginer',
    desc: 'Lorem Ios doll lorek kosad jopas Lorem Ios doll lorek kosad jopas',
    image: 'Small Img',
    price: '$19586.23',
    dates: '09/23/2024 - 12/23/2024',
    times: '9am 10.30am 11am 3pm',
  },
  {
    title : 'Stock Learning Beginer',
    desc: 'Lorem Ios doll lorek kosad jopas Lorem Ios doll lorek kosad jopas',
    image: 'Small Img',
    price: '$19586.23',
    dates: '09/23/2024 - 12/23/2024',
    times: '9am 10.30am 11am 3pm',
  }
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const CourseList = () => {
  return (
    <Card sx={{margin:'1rem'}}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem'}}>
        <Typography padding='1rem' fontFamily='Rubik' fontSize='25px'>Course List</Typography>
        <Button  variant='outlined' sx={{ width:'200px',height:'40px', border:'2px solid #f3f3f3',background:'#f9d423',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#f9d423'}}}>  Add Course</Button>
        </Box>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Dates</TableCell>
              <TableCell>Available Times</TableCell>
              <TableCell>Options</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow hover key={index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.title}</Typography>
                    {/* <Typography variant='caption'>{row.booking}</Typography> */}
                  </Box>
                </TableCell>
                <TableCell>{row.desc}</TableCell>
                <TableCell>{row.image}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.dates}</TableCell>
                <TableCell>{row.times}</TableCell>
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
                  
                  <Button  variant='outlined' sx={{ width:'100px', border:'2px solid #f3f3f3',background:'#11ffbd',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#11ffbd'}}}>  Edit</Button>
                  <Button variant='outlined' sx={{ width:'100px',border:'2px solid #f3f3f3',background:'#ff4e50',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#ff4e50'}}}>            Delete</Button>

                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default CourseList