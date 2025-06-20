'use client';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Link from 'next/link';
import { Kanit, Sarabun } from 'next/font/google'

const kanit = Kanit({
  subsets: ['thai'],
  weight: ['400', '700'],
  display: 'swap',
});

const sarabun = Sarabun({
  subsets: ['thai'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // เช็คจอเล็ก

  // สร้างเมนูพร้อมลิงก์
  const menuItems = [
    { text: 'หน้าแรก', href: '/' },
    { text: 'ผลงานของเรา', href: '/portfolio' },
    { text: 'โปรโมชั่นพิเศษ', href: '/promotions' },
    { text: 'เกี่ยวกับเรา', href: '/about' },
    { text: 'ติดต่อเรา', href: '/contact' },
  ];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgb(255, 255, 255)',
          backdropFilter: 'blur(6px)',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            px: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* โลโก้ */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://static.wixstatic.com/media/bdc6b0_8432b278dd574d0dbbb52c166f29bf17~mv2.jpg/v1/fill/w_101,h_30,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/BRAND.jpg"
              alt="โลโก้"
              style={{ height: 50 }}
            />
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box>
              {menuItems.map(({ text, href }) => (
                <Link key={text} href={href}>
                  <Button
                    sx={{
                      fontSize: '18px',
                      fontWeight: '500',
                      fontFamily: "'Sarabun', 'Kanit', 'Mitr', 'Prompt', sans-serif",
                      color: 'black',
                      mx: 1,
                      textTransform: 'none',
                    }}
                  >
                    {text}
                  </Button>
                </Link>
              ))}
            </Box>
          )}

          {/* Mobile Hamburger Icon */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer สำหรับ Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map(({ text, href }) => (
              <Link key={text} href={href}>
                <ListItem
                  component="a"
                  role="button"
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
