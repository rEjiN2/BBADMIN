
"use client"
import * as React from 'react';
// import {Box,Typography} from '@mui/material';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import Logo from '../../../public/logo3.png'
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import styles from './Hamburger.module.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import Arena from '../../../public/Arena.svg'
// import AppleIcon from '../../../public/diet.svg'
// import Calendar from '../../../public/cal.svg'
// import ChatIcon from '../../../public/chat.svg'
// import WorkoutIcon from '../../../public/routine.svg'
// import InformationIcon from '../../../public/i.svg'
// import LibraryIcon from '../../../public/books.svg'
// import SettingIcon from '../../../public/setting.svg'
// import Events from '../../../public/events.svg'
// import Sub from '../../../public/sub.svg'
// import Invoice from '../../../public/invoice.svg'
// import Signout from '../../../public/signout.svg'
// import MessageIcon from '../../../public/msg.svg'
// import NotificationIcon from '../../../public/not.svg'
// import UserPic from '../../../public/mainuser.png'
// import Client from '../../../public/client.svg'
// import Image from 'next/image';


  


const HamburgerButton = () => {
  // const [state, setState] = React.useState({
  
  //   left: false,
   
  // });
  // const [selectedIndex, setSelectedIndex] = React.useState(1);
  

  
  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };
  // const closeDrawer = () => {
  //   setState({ ...state, left: false });
  // };
  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event &&
  //     event.type === 'keydown' &&
  //     (event.key === 'Tab' || event.key === 'Shift')
  //   ) {
  //     return;
  //   }
     
  //   setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
  //     role="presentation"
  //     onClick={closeDrawer} // Close drawer when clicked anywhere else
  //     onKeyDown={closeDrawer} // Close drawer on key press
  //   >
  //     <Box sx={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', height: '130px' }}>
  //         <Image src={Logo} width={230} alt='Logo' />
  //       </Box>
  //       <Box sx={{ borderBottom: '1px solid rgba(171, 175, 179, 0.5)' }}></Box>
  //       <Box sx={{ paddingLeft: '2.5rem', paddingTop: '1.5rem' }}>
  //         <Typography fontFamily='CircularStdBold' fontSize='12px' fontWeight='normal' color='#abafb3'>NAVIGATION</Typography>
  //       </Box>
  //       <Box sx={{ paddingLeft: '1.5rem' }}>
  //         <List component="nav" aria-label="main mailbox folders">
  //           <ListItemButton
  //             selected={selectedIndex === 0}
  //             onClick={(event) => handleListItemClick(event, 0)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={Arena} alt='arena' width={15} height={15} />
  //             </ListItemIcon>
  //             <ListItemText primary="Arena" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.2rem' }} />
  //           </ListItemButton>



  //           <ListItemButton
  //             selected={selectedIndex === 1}
  //             onClick={(event) => handleListItemClick(event, 1)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={LibraryIcon} alt='Library' width={15} height={15} />

  //             </ListItemIcon>
  //             <ListItemText primary="Library" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.2rem' }} />
  //           </ListItemButton>

  //           <ListItemButton
  //             selected={selectedIndex === 2}
  //             onClick={(event) => handleListItemClick(event, 2)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={InformationIcon} alt='Learning' width={15} height={15} />

  //             </ListItemIcon >
  //             <ListItemText primary="Learning" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.2rem' }} />
  //           </ListItemButton>

  //           <ListItemButton
  //             selected={selectedIndex === 3}
  //             onClick={(event) => handleListItemClick(event, 3)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={SettingIcon} alt='settings' width={15} height={15} />
  //             </ListItemIcon>
  //             <ListItemText primary="Settings" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.1rem' }} />
  //           </ListItemButton>
  //         </List>
  //       </Box>
  //       <Box sx={{ borderBottom: '1px solid rgba(171, 175, 179, 0.5)' }}></Box>

  //       <Box sx={{ paddingLeft: '2.5rem', paddingTop: '1.5rem' }}>
  //         <Typography fontFamily='CircularStdBold' fontSize='12px' fontWeight='normal' color='#abafb3'>DEDICATED</Typography>
  //       </Box>

  //       <Box sx={{ paddingLeft: '1.5rem' }}>
  //         <List component="nav" aria-label="main mailbox folders" >
  //           <ListItemButton
  //             selected={selectedIndex === 4}
  //             onClick={(event) => handleListItemClick(event, 4)}
  //           >

  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={Calendar} alt='arena' width={15} height={15} />
  //             </ListItemIcon>
  //             <ListItemText primary="Calendar" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.2rem' }}  />
  //           </ListItemButton>



  //           <ListItemButton
  //             selected={selectedIndex === 5}
  //             onClick={(event) => handleListItemClick(event, 5)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={Client} alt='Client' width={15} height={15} />

  //             </ListItemIcon>
  //             <ListItemText primary="Clients" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.1rem' }} />
  //           </ListItemButton>

  //           <ListItemButton
  //             selected={selectedIndex === 6}
  //             onClick={(event) => handleListItemClick(event, 6)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={WorkoutIcon} alt='Routine' width={15} height={15} />

  //             </ListItemIcon >
  //             <ListItemText primary="Routine" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.2rem' }} />
  //           </ListItemButton>

  //           <ListItemButton
  //             selected={selectedIndex === 7}
  //             onClick={(event) => handleListItemClick(event, 7)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={AppleIcon} alt='Diet' width={15} height={15} />
  //             </ListItemIcon>
  //             <ListItemText primary="Diet Plans" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.2rem' }} />
  //           </ListItemButton>
  //         </List>
  //       </Box>
  //       <Box sx={{ borderBottom: '1px solid rgba(171, 175, 179, 0.5)' }}></Box>


  //       <Box sx={{ paddingLeft: '2.5rem', paddingTop: '1.5rem' }}>
  //         <Typography fontFamily='CircularStdBold' fontSize='12px' fontWeight='normal' color='#abafb3'>DISTINCT</Typography>
  //       </Box>

  //       <Box sx={{ paddingLeft: '1.5rem' }}>
  //         <List component="nav" aria-label="main mailbox folders" >
  //           <ListItemButton
  //             selected={selectedIndex === 8}
  //             onClick={(event) => handleListItemClick(event, 8)}
  //           >

  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={Events} alt='events' width={15} height={15} />
  //             </ListItemIcon>
  //             <ListItemText primary="Events" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.2rem' }} />
  //           </ListItemButton>



  //           <ListItemButton
  //             selected={selectedIndex === 9}
  //             onClick={(event) => handleListItemClick(event, 9)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={Invoice} alt='Invoice' width={15} height={15} />

  //             </ListItemIcon>
  //             <ListItemText primary="Invoice" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.1rem' }} />
  //           </ListItemButton>

  //           <ListItemButton
  //             selected={selectedIndex === 10}
  //             onClick={(event) => handleListItemClick(event, 10)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={Sub} alt='sub' width={15} height={15} />

  //             </ListItemIcon >
  //             <ListItemText primary="Subscription" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.2rem' }} />
  //           </ListItemButton>

  //           <ListItemButton
  //             selected={selectedIndex === 11}
  //             onClick={(event) => handleListItemClick(event, 11)}
  //           >
  //             <ListItemIcon style={{ minWidth: '35px' }}>
  //               <Image src={Signout} alt='Signout' width={15} height={15} />
  //             </ListItemIcon>
  //             <ListItemText primary="Sign Out" sx={{ fontFamily: 'CircularStdBold', color: '#6a707e', fontSize: '16px', paddingTop: '0.2rem' }} />
  //           </ListItemButton>
  //         </List>
  //       </Box>
  //   </Box>
  // );
  return (
    <>
   
    {/* <MenuIcon onClick={toggleDrawer('left', true)} sx={{paddingLeft:'1rem',width:'50px'}}/>
    <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer> */}
    </>
  );
};

export default HamburgerButton;
