import { Link } from "react-router-dom";
import {logo} from '../utils/constants'
// import { Image } from "@mui/icons-material";
import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";
const Navbar = () => (

   <Stack direction={"row"} alignItems={"center"} sx={{ position: "sticky", top: "0", background: "#0b0654", justifyContent: "space-between", p: "3px" }}>

   <Link to='/' style={{display:"flex",alignItems:"center"}}>  <img src={logo} alt=""  width={"45"} /></Link>
 <SearchBar/>
   
</Stack>

   );


export default Navbar;