import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Product.css";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';export default function Product() {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
        <StarPurple500Icon className="star"/>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1622666959-91cta5lgwsl-ac-uy695-1622666943.jpg?crop=1xw:0.9990867579908675xh;center,top&resize=480:*"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
