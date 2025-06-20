
import { Typography, Grid } from '@mui/material';
import { Kanit, Sarabun } from 'next/font/google';

interface TextSectionProps {
  title: string;
  content: string;
}

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

export default function TextSection({ title, content }: TextSectionProps) {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 10, mb: 10 }}>
      <Grid item xs={12} md={8}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Kanit, sans-serif',
            fontWeight: 700,
            fontSize: { xs: '24px', md: '32px' },
            color: '#2c3e50',
            textAlign: 'center',
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Sarabun, sans-serif',
            fontSize: { xs: '16px', md: '18px' },
            fontWeight: 400,
            color: '#555',
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          {content}
        </Typography>

      </Grid>
    </Grid>
  );
}
