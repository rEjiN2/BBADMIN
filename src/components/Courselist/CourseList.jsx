// ** MUI Imports
"use client"
import React, { useEffect, useState } from 'react';
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
import Image from 'next/image';



const CourseList = () => {
  const [courseData, setCourseData] = useState([]);
  const [visibleMeetingId, setVisibleMeetingId] = useState(null);

const toggleMeetingLink = (id) => {
  if (visibleMeetingId === id) {
    setVisibleMeetingId(null); 
  } else {
    setVisibleMeetingId(id);
  }
};

  const handleEdit = (index) => {
    const updatedData = [...courseData];
    updatedData[index].title = 'Updated Course Title';
    setCourseData(updatedData);
  };


  useEffect(()=>{
  const fetchCourses = async()=>{
    const response   = await fetch('/api/getCourse',{
      method:'GET',
      headers:{
        'Content-type':'application/json'
      }
    })
    if(response.ok){
      const courses = await response.json()
      setCourseData(courses)
    }
   

  }

  fetchCourses()
  },[])



  const handleDelete = (index) => {
    const updatedData = courseData.filter((_, i) => i !== index);
    setCourseData(updatedData);
  };

  console.log(courseData);

  return (
    <Card sx={{margin:'1rem'}}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem'}}>
        <Typography padding='1rem' fontFamily='Rubik' fontSize='25px'>Course List</Typography>
       <Link href='./addcourse'><Button  variant='outlined' sx={{ width:'200px',height:'40px', border:'2px solid #f3f3f3',background:'#f9d423',textTransform:'none' , color:'#fff',borderRadius:'17px','&:hover':{border:'2px solid #f3f3f3',background:'#f9d423'}}}>  Add Course</Button></Link> 
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
              <TableCell>Links</TableCell>
              <TableCell>Options</TableCell>
         
            </TableRow>
          </TableHead>
          <TableBody>
        {courseData.map((row, index) => 
        
        (
          <TableRow hover key={index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
         <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.title}</Typography>
                    {/* <Typography variant='caption'>{row.booking}</Typography> */}
                  </Box>
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <>
                {
  (row.image && (row.image.startsWith('http://') || row.image.startsWith('https://') || row.image.startsWith('/'))) ? (
    <Image src={row.image} alt='img' width={50} height={50} />
  ) : (
    // Optional: Render a placeholder or nothing if the source is invalid
    <div>No valid image</div>
  )
}
</>
</TableCell>
                <TableCell> {row.price}</TableCell>
                <TableCell>
  <div>
    {row.dates ? (
      (() => {
        try {
          const datesArray = JSON.parse(row.dates);
          return (
            Array.isArray(datesArray) && datesArray.map((item, index) => (
              <div key={index}>
                <h3>Date: {item.date}</h3>
                <ul>
                  {item.time.map((time, timeIndex) => (
                    <li key={timeIndex}>Time: {time}</li>
                  ))}
                </ul>
              </div>
            ))
          );
        } catch (e) {
          console.error('Error parsing JSON:', e);
          return <div>Invalid date format</div>;
        }
      })()
    ) : <div>No dates available</div>}
  </div>
</TableCell>

               
<TableCell>
    {row.meetings.map((meeting, index) => (
      <div key={meeting._id}>
        <p>Date: {meeting.date}</p>
        <p>Time: {meeting.time}</p>
        <a href={meeting.link} target="_blank" rel="noopener noreferrer">Join Meeting</a>
        <p onClick={() => toggleMeetingLink(meeting._id)} style={{cursor:'pointer',padding:'0.5rem' ,background:'lightyellow',width:'50%',textAlign:"center",borderRadius:'25px',fontWeight:'bold',color:'#000'}}>
          View Link
        </p>
        {visibleMeetingId === meeting._id && (
          <a href={meeting.link} target="_blank" rel="noopener noreferrer">{meeting.link}</a>
        )}
      </div>
    ))}
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
                  
                  <Button
                variant='outlined'
                onClick={() => handleEdit(index)}
                sx={{
                  width: '100px',
                  border: '2px solid #f3f3f3',
                  background: '#11ffbd',
                  textTransform: 'none',
                  color: '#fff',
                  borderRadius: '17px',
                  '&:hover': { border: '2px solid #f3f3f3', background: '#11ffbd' },
                }}
              >
                Edit
              </Button>
              <Button
                variant='outlined'
                onClick={() => handleDelete(index)}
                sx={{
                  width: '100px',
                  border: '2px solid #f3f3f3',
                  background: '#ff4e50',
                  textTransform: 'none',
                  color: '#fff',
                  borderRadius: '17px',
                  '&:hover': { border: '2px solid #f3f3f3', background: '#ff4e50' },
                }}
              >
                Delete
              </Button>

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