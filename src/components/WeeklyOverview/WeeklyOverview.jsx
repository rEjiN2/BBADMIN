import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ChartComponent from '../BarChart/BarChart'


// ** Icons Imports
// import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Custom Components Imports
// import ReactApexcharts from 'src/@core/components/react-apexcharts'

const WeeklyOverview = () => {
  // ** Hook
  const theme = useTheme()
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Dec'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30,65, 59, 80, 81, 56, 55, 40,45,98],
        backgroundColor: ['linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)', 'linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)','linear-gradient(135deg, #f48665 47%, #f48665 47%, #fda23f 53%)',],
        borderColor: ['rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)','rgb(255, 159, 64)',],
        borderWidth: 1,
        barThickness:5
      },
    ],
  };
 
  
  

  return (
    <Card>
      <CardHeader
        title='Weekly Overview'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
       
      />
      <CardContent >
        
        <ChartComponent data={chartData} />
        <Box sx={{mt:'1rem', mb: 4, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4 }}>
            45%
          </Typography>
          <Typography variant='body2'>Your sales performance is 45% 😎 better compared to last month</Typography>
        </Box>
        <Button fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
