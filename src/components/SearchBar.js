import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => {
  return (
   <Paper component="form" onChange={()=>{}} sx={{borderRadius:"23px",pl:"4px",border:"1px solid black",boxShadow:"none",mr:{sm:5}}} >
    <input className="search-bar" type="text" placeholder="Search something....." value="" onChange={()=>{}}/>
    <IconButton type="submit" sx={{p:"7px",color:"red"}}>
        <Search/>
    </IconButton>
   </Paper>
  )
}

export default SearchBar;