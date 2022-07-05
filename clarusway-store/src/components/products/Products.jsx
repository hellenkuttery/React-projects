import React from "react";
import CategoryBar from "../category/CategoryBar";
import ProductCard from "./ProductsCard"
import { CircularProgress, Container, Grid, Toolbar } from "@mui/material";

const Products = ({ products, getProducts }) => {
  return (
    <Container maxWidth="sm">
      {/* <Toolbar/> */}
      <CategoryBar getProducts={getProducts} />
      <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id}>
              <ProductCard product={product}  />
            </Grid>
          ))}
        </Grid>
        
    
    </Container>
  );
};

export default Products;
