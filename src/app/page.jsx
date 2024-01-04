"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Avatar, Box, CardContent, Grid, Typography } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import WeeklyOverview from '@/components/WeeklyOverview/WeeklyOverview';
import TotalEarning from '@/components/TotalEarnings/TotalEarning';
import DashboardTable from '@/components/BookingList/BookinList';

const salesData = [
  {
    stats: '245k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUpIcon sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: 'success',
    icon: <PersonOutlineIcon sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Products',
    icon: <ImportantDevicesIcon sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$88k',
    color: 'info',
    title: 'Revenue',
    icon: <PriceCheckIcon sx={{ fontSize: '1.75rem' }} />
  }
]

export default function Home() {
  return (
    <Box sx={{ padding: '1.5rem' }}>
      <Box sx={{ width: '100%', height: '220px', background: '#fff', boxShadow: '1.5px 2.6px 10px 0 rgba(119, 119, 119, 0.1)', padding: '1rem' }}>
        <Typography fontFamily='Rubik' fontSize='28px' fontWeight='500' >Statics Card</Typography>
        <Typography fontFamily='Rubik' fontSize='18px' fontWeight='400' paddingTop='0.5rem' >Total 48.5% growth 😎 this month</Typography>
        <Box sx={{ paddingTop: '1rem' }}>
          <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
            <Grid container spacing={[5, 0]}>
              {salesData.map((item, index) => (
                <Grid item xs={12} sm={3} key={index}>
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      variant='rounded'
                      sx={{
                        mr: 3,
                        width: 44,
                        height: 44,
                        boxShadow: 3,
                        color: 'common.white',
                        backgroundColor: `${item.color}.main`
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant='caption'>{item.title}</Typography>
                      <Typography variant='h6'>{item.stats}</Typography>
                    </Box>
                  </Box>
                </Grid>))}
            </Grid>
          </CardContent>

        </Box>

      </Box>


      <Box sx={{marginTop:'1rem',display:'flex',alignItems:'center',gap:'1rem'}}>
         <Box  >
          <WeeklyOverview />
         </Box>
           <Box sx={{flexGrow:1}}>
          <TotalEarning />
          </Box>
      </Box>


      <Box sx={{marginTop:'1rem'}}>
        <DashboardTable/>
      </Box>
    </Box>
  )
}
