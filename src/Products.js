import React ,{useState}from 'react'
import "./Products.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {data} from "./Data"

export default function Products() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <div id="Products_page_main_div">
        <div id="category_main_div">
            <p className="category_main_div1">LUCKNOW VEG EXPRESS</p>
            <p className="category_main_div1"><i class="fa fa-star star_icon" aria-hidden="true"></i><i class="fa fa-star star_icon" aria-hidden="true"></i><i class="fa fa-star star_icon" aria-hidden="true"></i><i class="fa fa-star star_icon" aria-hidden="true"></i><i class="fa fa-star star_icon" aria-hidden="true"></i></p>
            <p className="category_main_div1">Average 3.5 / 5</p>
            <p id="category_main_fruits">Fruits</p>
            <p id="category_main_vegetables">Vegetables</p>
            <p id="category_main_nonveg">Non Veg</p>

        </div>
        <div id="category_main_div_products">
            <div id="sort_search_div">
                  <Box id="box1_dropdown_id">
                   <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
                    <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={age}
                     label="Sort By:"
          onChange={handleChange}
        >
          <MenuItem value="High To Low">High To Low</MenuItem>
          <MenuItem value="Low to High">Low to High</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div id="search_div_id"><input type="text" id="search_input_id"/><SearchOutlinedIcon id="search_icon"/></div>
    <div id="cart2_div_id"><i class="fa-brands fa-opencart" id="cart_icon_id"></i></div>
   
    </div>
    <div id="display_products_div">
    {data.map((d)=>{
        return(
            <div>
                <div id="display_image_div"><img src={d.image} alt=""/></div>
            </div>
        )
    })}
    </div>
        </div>

    </div>
  )
}
