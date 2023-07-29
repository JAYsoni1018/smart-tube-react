import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchValue, setsearchValue] = useState('')
  const navigate = useNavigate()
  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      navigate(`search/${searchValue}`);

      setsearchValue('');
    }
  }
  return (
    <Paper component="form" onSubmit={handelSubmit} sx={{ borderRadius: "23px", pl: "4px", boxShadow: "none", mr: { sm: 5 } }} >
      <input className="search-bar" type="text" placeholder="Search something....." value={searchValue} onChange={(e) => setsearchValue(e.target.value)} />
      <IconButton type="submit" sx={{ p: "7px", color: "red", background: "#d1d1d1" }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar;