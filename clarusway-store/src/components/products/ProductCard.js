import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard({ product, handleAddToCart, account,handleRemove,handleUpdate }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Bu kısım ürünlerin özellikleri */}
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        sx={{ objectFit: "contain" }}
        alt="Paella dish"
      />
      <CardContent sx={{ p: 1 }}>
        <Box display="flex" justifyContent="space-between" height={70}>
          <Typography variant="body2" color="text.secondary">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
            {product.price + "$"}
          </Typography>
        </Box>
      </CardContent>

      {/* -------------------- */}

      {/* Bu kısımda kart ile ilgili işlemleri yapıyoruz */}

      {!account ? (
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
          <IconButton
            aria-label="share"
            onClick={() =>
              handleAddToCart(
                {
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                },
                1
              )
            }
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      ) : (
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center">
            <Button type="button" size="small" onClick={() =>  handleUpdate(product.id,product.quantity-1)}>
               -
            </Button>
            <Typography variant="body2" color="text.secondary">
              {product?.quantity}
            </Typography>

            <Button type="button" size="small" onClick={() => handleUpdate(product.id, product.quantity + 1)}>
              +
            </Button>
          </Box>
          <Button 
          onClick={()=>handleRemove(product.id)}
          type="button" size="small" color="error" variant="contained">
            Remove
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
