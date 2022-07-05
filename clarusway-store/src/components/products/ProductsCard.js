import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function ProductCard({product,handleAddToCart}) {


console.log(product)
  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        sx={{ objectFit: "contain" }}
        alt="Paella dish"
      />
      <CardContent sx={{ p: 1}}>
      <Box display="flex" justifyContent="space-between" height={70}>
        <Typography variant="body2" color="text.secondary">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ml:2}}>
         {product.price+"$"}
        </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing
      sx={{ 
        display:"flex",
        justifyContent:"space-between"
      }}>
      <Typography variant="body2" color="text.secondary">
         {product.category}
        </Typography>
        <IconButton aria-label="share" 
        onClick={()=>
          handleAddToCart(
            {
              id:product.id,
              title:product.title,
              price:product.price,
              image:product.image,
            }, 1
          )
        }>
        <AddShoppingCartIcon/>
        </IconButton>
       
        </CardActions>
     
    </Card>
  );
}

