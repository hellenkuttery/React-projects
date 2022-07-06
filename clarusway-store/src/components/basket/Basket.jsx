import { CollectionsOutlined } from "@mui/icons-material";
import { Grid, Toolbar,Box ,Typography,Button, Container} from "@mui/material";
import ProductCard from "../products/ProductCard";
import React from "react";
import {Link } from "react-router-dom";

const Basket= ({ account,handleRemove,handleEmptyCart,handleUpdate}) => {

  console.log(account);

  let subTotal = 0;
  for (let i = 0; i < account.length; i++) {
   subTotal += account[i].quantity * account[i].price;
  }
  console.log(subTotal)

  const EmptyCard = () => {
    return (
     <Typography variant="subtitle1">
        You have no items in your shopping cart,
        {/* <Link  to="/">
             add one 
            </Link> */}
      </Typography>
    );
  };

  const FilledCard = () => {
    console.log("in filled:",account);
    return (
      <>
        <Grid container justifyContent="center" spacing={4}>
          {account?.map((item) => (
            <Grid item key={item.id}>
              <ProductCard
                product={item}
                handleRemove={handleRemove}
                handleUpdate={handleUpdate}               
                account
              />
            </Grid>
          ))}
  
        </Grid>
        <Box display="flex" justifyContent="space-between" my={5}>
      
      <Typography variant="h4">
          Subtotal:{subTotal.toFixed(2)+" $"}
        </Typography>
        <div>
          <Button
            size="large"
            type="button"
            variant="contained"
            color="error"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
        </div>
     </Box>
      </>
    );
  };


  return (
<Container>
      <Toolbar />
      <Typography mt={2} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!account?.length ? <EmptyCard /> : <FilledCard />}
    </Container>
  );
};

export default Basket;
