import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent,  Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const ChannelCard = ({ channelInfo }) => {
  console.log(channelInfo)
  return (
    <Box sx={{
      width: { xs: "356px", md: "320px" },
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      margin:"auto",
      marginTop:"-93px"

    }}>
      
      {/* // {`/channel/${channelInfo.channelId}`} */}
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", textAlign: "center", color: "white" }}>
        <img src={channelInfo?.avatar[0].url} style={{ height: "180px", width: "180px", borderRadius: "50%", border: "1px solid #e3e3e3" }} alt={channelInfo?.title} />
        <Typography variant="h4" sx={{ fontSize: "20px", marginTop: '12px' }}>
          {channelInfo?.title}
            <CheckCircle sx={{fontSize:18,color:"grey" ,ml:1,lineHeight:"2px"}}/>

          </Typography>
          <Typography variant="h6" component="div" sx={{fontSize:"16px"}}>
          Subscribers : {parseInt(channelInfo?.stats?.subscribers).toLocaleString()}


          </Typography>
        </CardContent>
     
    </Box>
  )
};

export default ChannelCard;