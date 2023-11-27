import Ac1 from './Cartcontent/Ac/pic1.jpg'
import Ac2 from './Cartcontent/Ac/pic2.jpeg'
import Ac3 from './Cartcontent/Ac/pic3.jpeg'

import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const Aclist =[
    {
       
        name : 'LG',
        description : 'Life is good with cooler..',
        image : Ac1,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price :  37000
    },
    {
        name : 'Daikin',
        description : 'Known for its innovative',
        image : Ac2,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/> <StarRateIcon sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 45000
    },
    {
       
        name : 'Godrej',
        description : 'A globally recognized brand!!',
        image : Ac3,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 33000
    },
   
]