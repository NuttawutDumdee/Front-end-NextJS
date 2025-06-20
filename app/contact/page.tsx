'use client';

import { useState } from 'react';
import {
    Grid,
    Box,
    TextField,
    Button,
    Typography,
    IconButton,
    Link as MuiLink,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Navbar from '../components/Navbar';
import TextSection from '../components/TextSection';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import Footer from '../components/Footer';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: ส่งข้อมูล formData ไป API หรือ backend
        console.log('ส่งข้อมูล:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Navbar />
            <Box sx={{ padding: '2rem', maxWidth: 900, margin: 'auto' }}>
                <TextSection title="ติดต่อเรา" content="กรอกข้อมูลด้านล่างเพื่อให้เราติดต่อกลับคุณได้ครับ" />

                <Grid container spacing={4} mt={2}>
                    {/* ซ้าย: ฟอร์มติดต่อ */}
                    <Grid item xs={12} md={6}>
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                            <TextField
                                fullWidth
                                label="ชื่อ"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="อีเมล"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                label="ข้อความ"
                                name="message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                margin="normal"
                                required
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2 }}
                            >
                                ส่งข้อความ
                            </Button>

                            {submitted && (
                                <Typography sx={{ mt: 2 }} color="success.main">
                                    ขอบคุณสำหรับข้อความของคุณ เราจะติดต่อกลับโดยเร็วที่สุดครับ
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
}
