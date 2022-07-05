import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({product}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        title={product.title}
        sx={{ objectFit: "contain" }}
        alt="Paella dish"
      />
      <CardContent>
      <Box display="flex" justifyContent="space-between" height={70}>
        <Typography variant="body2" color="text.secondary">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product.price+"$"}
        </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2" color="text.secondary">
         {product.category}
        </Typography>
        <IconButton aria-label="share">
           sx={{ objectFit: "contain" }}
        </IconButton>
       
        </CardActions>
     
    </Card>
  );
}

