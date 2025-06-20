import { Box } from '@mui/material';
import Slider from "react-slick";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
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

  return (
    <Box sx={{ maxWidth: '100%', mb: 4, mt: 2 }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', maxHeight: 600, objectFit: 'cover', borderRadius: '12px' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}