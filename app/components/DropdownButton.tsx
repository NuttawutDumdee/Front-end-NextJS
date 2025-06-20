import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LineIcon from '@mui/icons-material/Chat';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { Typography } from '@mui/material';

export default function DropdownButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="social-button"
        aria-controls={open ? 'social-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        sx={{
          width: 60, // กำหนดความกว้าง
          height: 60, // กำหนดความสูงเท่ากัน
          borderRadius: '50%', // ทำให้เป็นวงกลม
          minWidth: 0, // ไม่ให้ MUI บังคับขนาดปุ่มตาม text
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AddToPhotosIcon fontSize="medium" />
      </Button>

      <Menu
        id="social-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'social-button' }}
        sx={{
          '& .MuiMenu-paper': {
            borderRadius: 2,
            padding: 1,
            display: 'flex',
            gap: 1.5,
          },
        }}
      >
        <MenuItem onClick={handleClose} sx={{ p: 1 }}>
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#1877F2',
              color: '#fff',
              width: 48,
              height: 48,
              '&:hover': {
                backgroundColor: '#145dc9',
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ p: 1 }}>
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#E4405F',
              color: '#fff',
              width: 48,
              height: 48,
              '&:hover': {
                backgroundColor: '#c0324d',
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ p: 1 }}>
          <IconButton
            component="a"
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#00C300',
              color: '#fff',
              width: 48,
              height: 48,
              '&:hover': {
                backgroundColor: '#00a900',
              },
            }}
          >
            <LineIcon />
          </IconButton>
        </MenuItem>
      </Menu>

    </>
  );
}
