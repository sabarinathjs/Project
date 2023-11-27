import React from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import FluorescentIcon from '@mui/icons-material/Fluorescent';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Aclist } from './DataAc';
function Ac() {
 
 return (
    <>
   <Box sx={{bgcolor:"black",color:"white",p:2}}>
      <Typography varient="h5"sx={{color:'white',textAlign:'center' ,fontFamily:"bold",fontSize:'30px'}} >
       <FluorescentIcon sx={{fontSize:'55px',paddingBottom:'10px'}}/> AIR CONDITIONER
      </Typography >
      <Typography varient="h5"sx={{color:'white',fontFamily:"bold",fontSize:'30px'}}>Sort by <ArrowDropDownIcon/><input style={{borderRadius:"5px"}}></input></Typography>
     </Box>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center" ,paddingTop:8}}>
  {
          Aclist.map((menu1) =>(
            <Card sx={{maxWidth:450,display:'flex',m: 2}}>
              <CardActionArea>
 <CardMedia sx={{minHeight: '400px',minWidth:'400px'}} component={'img'} src={menu1.image} alt={menu1.name}/>
                <CardContent>
                    <Typography varient ='h5' gutterBottom>
                  <b>
                    {menu1.name}
                    </b>
                  </Typography>
                  <Typography varient="body2">
                    {menu1.description}
                  </Typography>
                  <Typography>
                     <b>Rating</b> {menu1.Rating}
                     </Typography>
                     <Typography varient="body2">
                       <b>
                        Price:{menu1.price}
                        </b>
                     <button className="addcart" style={{marginLeft:"200px",backgroundColor:"black",fontWeight:"700px",color:"white"}}>Add to Cart</button>
                     </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        ))
      }
        </Box>
        </>
 )
  
            }

export default Ac;