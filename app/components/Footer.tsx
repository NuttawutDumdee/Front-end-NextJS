import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#222',
                color: 'white',
                py: 4,
                px: 3,
                mt: 'auto',
                textAlign: 'center',
            }}
        >
            <Typography variant="h6" gutterBottom>
                ติดต่อเรา
            </Typography>
            <Typography>
                ที่อยู่: ที่อยู่ 99/9 หมู่ 2 ถนน พระราม 2
                ตำบลพันท้ายนรสิงห์
                อำเภอเมืองสมุทรสาคร
                จังหวัด สมุทรสาคร
                รหัสไปรษณีย์ 74000.
                โทร. (034)-871-661
                E-mail : project@woodtechfurnish.com
                ทำงาน : จันทร์ - เสาร์
                เวลา: 8.00 - 17.00 น.
            </Typography>
            <Typography>
                โทร: <Link href="tel:+66812345678" color="inherit">+66 81 234 5678</Link> | อีเมล: <Link href="mailto:info@example.com" color="inherit">info@example.com</Link>
            </Typography>

            <Box mt={2}>
                <IconButton aria-label="facebook" href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
                    <FacebookIcon />
                </IconButton>
                <IconButton aria-label="instagram" href="https://instagram.com" target="_blank" sx={{ color: 'white' }}>
                    <InstagramIcon />
                </IconButton>
                <IconButton aria-label="twitter" href="https://twitter.com" target="_blank" sx={{ color: 'white' }}>
                    <TwitterIcon />
                </IconButton>
            </Box>

            <Box mt={3} sx={{ fontSize: 14 }}>
                © 2025 Your Company. All rights reserved.
            </Box>
        </Box>
    );
}
