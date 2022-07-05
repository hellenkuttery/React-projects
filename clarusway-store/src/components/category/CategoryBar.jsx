import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CaregoryBar( {getProducts}) {
  const [category, setCategories] = useState([]);
  const baseUrl = "https://fakestoreapi.com/products/categories";

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get(baseUrl)
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <FormControl just sx={{ width: "100vw", m: 3 }}>
      <RadioGroup
       sx={{ justifyContent: "center" }}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) =>
          getProducts(e.target.value && `/category/${e.target.value}`)
        }
        // onCahnge ile kategoriyi alacağız
      >

        {/* All seçeneği  için bir tane radio  */}
        <FormControlLabel value="" control={<Radio />} label="All" />
       
       {/* Diğer kategorileri çin diğer radiolar map ile aç */}
       
        {category?.map((cat, i) => (
          <FormControlLabel
            key={i}
            sx={{ textTransform: "capitalize" }}
            value={cat}
            control={<Radio />}
            label={cat}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
