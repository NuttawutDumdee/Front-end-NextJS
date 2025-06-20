import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LineIcon from '@mui/icons-material/Chat'; // ใช้ไอคอนแทนไลน์
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { SiTiktok, SiLine } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';


export default function SocialButtons() {
    return (
        <div style={{
            position: 'fixed',    // ทำให้ติดหน้าจอ
            top: '50%',           // อยู่กึ่งกลางแนวตั้งของหน้าจอ
            right: 16,             // ระยะห่างจากขอบซ้าย 16px (ปรับได้)
            transform: 'translateY(-50%)', // เลื่อนขึ้นครึ่งปุ่ม เพื่อให้กึ่งกลางจริงๆ
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            zIndex: 9999,

        }}
        >
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    backgroundColor: '#1877F2',
                    color: 'white',
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#145dc9')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1877F2')}
            >
                <FacebookIcon />
            </a>

            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    backgroundColor: '#E4405F',
                    color: 'white',
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c0324d')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#E4405F')}
            >
                <InstagramIcon />
            </a>

            <a
                href="https://line.me/ti/p/yourid"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    backgroundColor: '#00C300',
                    color: 'white',
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00a900')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00C300')}
            >
                <SiLine size={28} color="white" />
            </a>

            <a
                href="https://www.tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    backgroundColor: '#000000',
                    color: 'white',
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#000000')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#000000')}
            >
                <SiTiktok size={28} color="white" />
            </a>

            <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    backgroundColor: '#1DA1F2', // สีฟ้าแบบ Twitter เดิม
                    color: 'white',
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0d8ddb')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1DA1F2')}
            >
                <FaTwitter size={28} color="white" />
            </a>

        </div>
    );
}
