import { Stack, Typography } from "@mui/material";
import { categories } from '../utils/constants';
const SildeBar = ({selectedCategory, setselectedCategory}) =>(
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        marginTop: "12px"
      }
      }
    >
      {
        categories.map((category) => (

          <button className="category-btn"
            onClick={() => setselectedCategory(category.name)}
            style={{
              background: category.name === selectedCategory && '#FC1503',
              color: "white"
            }}
            key={category.name}
          >

            <span style={{
              paddingRight: "8px", color: category.name === selectedCategory ? 'white' : '#FC1503'
            }}>{category.icon}</span>
            < span > {category.name}</span>
          </button>
        ))
      }
      <Typography className="copyright" variant="body2" sx={{ position: { sx: "none", md: "sticky", bottom: "0", background: "#000 ", paddingTop: "9px", color: "white", mt: "4px" } }}  >
        Copy Right SmartTube
      </Typography>
    </Stack >
  );


export default SildeBar;