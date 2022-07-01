import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Product.css";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";

export default function Product({id,title,image,rating,price}) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>


      <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

      {/* <div>
        {Array(rating).fill().map((_,i)=>{
            <p>merhaba</p>
            //    <StarPurple500Icon className="star" />
        })}
      </div>
      <StarPurple500Icon className="star" /> */}
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <span>$</span>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
