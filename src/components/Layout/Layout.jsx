"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Logo from "../../../public/logo3.png";
import Image from "next/image";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import HamburgerButton from "../Hamburger/Hamburger";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import UserPic from '../../../public/user.jpeg'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from "next/navigation";
import Link from "next/link";



const BasicLayout = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  

  const router = useRouter();
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex", height: "100dvh" }}>
      <Box
        sx={{
          width: { md: "200px", lg: "270px" },
          background: "white",
          overflow: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "&-ms-overflow-style:": {
            display: "none",
          },
          display: { md: "none", lg: "block", xl: "block" },
          position: "sticky",
        }}
      >
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "white",
            height: "15dvh",
          }}
        >
          <Image
            src={Logo}
            width={230}
            style={{ paddingLeft: "1rem" }}
            alt="Logo"
          />
        </Box>
        <Box sx={{ borderBottom: "1px solid rgba(171, 175, 179, 0.5)" }}></Box>
        <Box sx={{ paddingLeft: "2.5rem", paddingTop: "1.5rem" }}>
          <Typography
            fontFamily="CircularStdBold"
            fontSize="15px"
            fontWeight="normal"
            color="#237A57"
          >
            Main
          </Typography>
        </Box>
        <Box sx={{ paddingLeft: "1.5rem" }}>
          <List component="nav" aria-label="main mailbox folders">
          <Link href='/'>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon style={{ minWidth: "35px" }}>
                <DashboardIcon   sx={{color:'#F3904F'}}/>
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{
                  fontFamily: "CircularStdBold",
                  color: "#237A57",
                  fontSize: "16px",
                  paddingTop: "0.2rem",
                }}
              />
            </ListItemButton>
            </Link>
            <Link href='/clientlist'>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon style={{ minWidth: "35px" }}>
                <PeopleIcon  sx={{color:'#F3904F'}}/>
              </ListItemIcon>
              <ListItemText
                primary="Client List"
                sx={{
                  fontFamily: "CircularStdBold",
                  color: "#237A57",
                  fontSize: "16px",
                  paddingTop: "0.2rem",
                }}
              />
            </ListItemButton>
            </Link>
            <Link href='/courselist'>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon style={{ minWidth: "35px" }}>
                <CategoryIcon  sx={{color:'#F3904F'}}/>
              </ListItemIcon>
              <ListItemText
                primary="Course List"
                sx={{
                  fontFamily: "CircularStdBold",
                  color: "#237A57",
                  fontSize: "16px",
                  paddingTop: "0.2rem",
                }}
              />
            </ListItemButton>
            </Link>
            <Link href='/adminlist'>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon style={{ minWidth: "35px" }}>
                <AdminPanelSettingsIcon  sx={{color:'#F3904F'}}/>
              </ListItemIcon>
              <ListItemText
                primary="Admin List"
                sx={{
                  fontFamily: "CircularStdBold",
                  color: "#237A57",
                  fontSize: "16px",
                  paddingTop: "0.1rem",
                }}
              />
            </ListItemButton>
            </Link>
            <Link href='/settings'>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon style={{ minWidth: "35px" }}>
                <SupportAgentIcon sx={{color:'#F3904F'}}/>
              </ListItemIcon>
              <ListItemText
                primary="Account Settings"
                sx={{
                  fontFamily: "CircularStdBold",
                  color: "#237A57",
                  fontSize: "16px",
                  paddingTop: "0.1rem",
                }}
              />
            </ListItemButton>
            </Link>
            <Box sx={{height:'1px',background:'#f3f3f9',width:'100%',marginBottom:'1rem '}}></Box>




            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
             
              <ListItemIcon style={{ minWidth: "35px" }}>
                <LoginIcon sx={{color:'#F3904F'}}/>
              </ListItemIcon>
              <ListItemText
                primary="Login"
                sx={{
                  fontFamily: "CircularStdBold",
                  color: "#237A57",
                  fontSize: "16px",
                  paddingTop: "0.1rem",
                }}
              />
            </ListItemButton>

            
          </List>
        </Box>
        
      </Box>

      {/* Appbar */}

      <Box sx={{ flex: 3, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "2rem",
            background: "white",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            height: "10dvh",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Box sx={{ display: { md: "block", lg: "none" } }}>
              {/* <HamburgerButton /> */}
            </Box>
            <TextField
              placeholder="Search"
              sx={{
                "& fieldset": { border: "none" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
                style: {
                  width: "300px",
                  height: "40px",
                  fontFamily: "Rubik",
                  fontSize: "15px",
                  fontWeight: "400",
                  background: "#f3f3f3",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
           
           
           
            <Box marginLeft={2}>
              
              <Image 
              // onClick={handleClick} 
              style={{cursor:'pointer',borderRadius:'50%'}} src={UserPic}   width={40} height={40} alt="user" />
              {/* <BasicMenu  anchorEl={anchorEl} open={open} onClose={handleClose}/> */}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: "92dvh",
            overflow: "auto",
            scrollbarWidth: "none", // Hide the scrollbar for firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
            },
            "&-ms-overflow-style:": {
              display: "none", // Hide the scrollbar for IE
            },
            
          }}
        >
          {children}
          

          
        </Box>
        
      </Box>
      
    </Box>
  );
};

export default BasicLayout;
