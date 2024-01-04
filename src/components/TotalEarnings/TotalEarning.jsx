// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icons Imports
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Sub from '../../../public/sub.png'
import One from '../../../public/onetoone.png'
import Online from '../../../public/online.jpeg'
import Image from 'next/image'
const data = [
  {
    progress: 75,
    imgHeight: 20,
    title: 'Online Bookings',
    color: 'primary',
    amount: '$24,895.65',
    subtitle: 'Vuejs, React & HTML',
    imgSrc: Online
  },
  {
    progress: 50,
    color: 'info',
    imgHeight: 27,
    title: 'Subscription',
    amount: '$8,650.20',
    subtitle: 'Sketch, Figma & XD',
    imgSrc: Sub
  },
  {
    progress: 20,
    imgHeight: 20,
    title: '1-1 Sessions',
    color: 'secondary',
    amount: '$1,245.80',
    subtitle: 'HTML & Angular',
    imgSrc: One
  }
]

const TotalEarning = () => {
  return (
    <Card>
      <CardHeader
        title='Total Earning'
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(1.25)} !important` }}>
        <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}>
            $24,895
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
            <ArrowDropUpIcon sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />
            <Typography variant='body2' sx={{ fontWeight: 600, color: 'success.main' }}>
              10%
            </Typography>
          </Box>
        </Box>

        <Typography component='p' variant='caption' sx={{ mb: 4 }}>
          Compared to $84,325 last year
        </Typography>

        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                ...(index !== data.length - 1 ? { mb: 8.5 } : {})
              }}
            >
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  backgroundColor: theme => `rgba(${theme.palette.customColors}, 0.04)`
                }}
              >
                <Image src={item.imgSrc} alt={item.title} style={{objectFit:'contain'}} />
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  {/* <Typography variant='caption'>{item.subtitle}</Typography> */}
                </Box>

                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    {item.amount}
                  </Typography>
                  <LinearProgress color={item.color} value={item.progress} variant='determinate' />
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default TotalEarning
