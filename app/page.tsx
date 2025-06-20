'use client';

import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import FurnitureCard, { Furniture } from './components/FurnitureCard';
import DropdownButton from './components/DropdownButton';
import TextSection from './components/TextSection';
import { Button } from '@mui/material';
import { imageSet1, imageSet2 } from './components/ImageSets';
import SocialButtons from './components/Menu';
import Link from 'next/link';
import Footer from './components/Footer';

export default function Home() {
  const [furnitures, setFurnitures] = useState<Furniture[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    fetch('http://localhost:3000/furniture')
      .then((res) => res.json())
      .then((data) => setFurnitures(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  if (!furnitures) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <Navbar />
      <Grid container spacing={3} justifyContent="right" mt={2} mx={4}>
        <SocialButtons />
      </Grid>

      <Box sx={{ mt: '50px', mx: '20px' }}>
        {/* Image Slider */}
        <Grid container spacing={3} justifyContent="center">
          <ImageSlider images={imageSet1} />
        </Grid>

        <hr className="hr-thick" />

        {/* Text Section */}
        <Grid container spacing={2} justifyContent="center">
          <TextSection
            title="Fully Furnish Solution"
            content="เราคือโรงงานเฟอร์นิเจอร์ขนาดใหญ่ ที่มีประสบการณ์ทำงานกับ โครงการคอนโดมิเนียม หอพัก และ อพาร์ทเม้น มาอย่างโชกโชน และมีบริการครบวงจร ตั้งแต่ ออกแบบ ผลิต จัดส่ง และติดตั้งหน้างาน"
          />
        </Grid>

        <hr className="hr-medium" />

        {/* Text Section */}
        <Grid container spacing={1} justifyContent="center" >
          <TextSection
            title="บริการของเราออกแบบตกแต่งภายในของเรา"
            content=""
          />
        </Grid>

        {/* Furniture Cards */}
        <Grid container spacing={3} justifyContent="center" mb={12}>
          {furnitures.map((furniture) => (
            <Grid item xs={12} sm={6} md={4} key={furniture.id}>
              <FurnitureCard furniture={furniture} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <hr className="hr-medium" />

      {/* Text Section */}
      <Grid container direction="column" spacing={0} justifyContent="center" >
        <TextSection
          title="โปรโมชั่นพิเศษ"
          content="ออกแบบตกแต่งภายใน บิ้วอินบ้านและคอนโดให้น่าอยู่พร้อมโปโมชั่นดี ๆ จาก Woodtech Furnish "
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 0,
          }}
        >
          <Link href="/promotions" passHref>
            <Button variant="outlined" component="a">
              ดูรายละเอียด
            </Button>
          </Link>
        </Box>
      </Grid>

      <hr className="hr-medium" />

      {/* Text Section */}
      <Grid container direction="column" spacing={0} justifyContent="center" >
        <TextSection
          title="ตัวอย่างผลงานของเรา"
          content="ภาพผลงานบิ้วอิน ออกแบบตกแต่งภายใน ตามแต่ละสไตล์ มีให้คุณเลือกชม"
        />
      </Grid>

      <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {imageSet2.map((src, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <img
              src={src}
              alt={`img-${index}`}
              style={{
                width: '100%',
                height: 200,       // กำหนดความสูงเท่ากัน
                borderRadius: 8,
                objectFit: 'cover' // ตัดขอบภาพให้พอดี ไม่ยืดหรือบีบ
              }}
            />
          </Grid>
        ))}

        <Link href="/portfolio" passHref>
          <Button variant="outlined" component="a">
            ดูรายละเอียด
          </Button>
        </Link>

      </Grid>

      <Footer/>

    </div>

  );
}