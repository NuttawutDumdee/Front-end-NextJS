import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export type Furniture = {
    id: number;
    name: string;
    detail: string;
    image: string;
};

export default function FurnitureCard({ furniture }: { furniture: Furniture }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                image={furniture.image}
                alt={furniture.name}
                sx={{ height: 200, width: '100%', objectFit: 'cover' }}
            />
            <CardContent>
                <Typography
                    variant="h6">{furniture.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                    {furniture.detail}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">ดูลายละเอียด</Button>
            </CardActions>
        </Card>
    );
}  
