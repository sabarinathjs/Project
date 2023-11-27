import blend1 from './Cartcontent/blenders/pic1.jpg'
import blend2 from './Cartcontent/blenders/pic2.jpg'
import blend3 from './Cartcontent/blenders/pic3.jpg'

import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const Blenderlist =[
    {
       
        name : 'CookWell',
        description : 'A new bullet mixer',
        image : blend1,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price :  2450
    },
    {
       
        name : 'Wonderchef',
        description : 'Smothie maker',
        image : blend2,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/> <StarRateIcon sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 3420
    },
    {
       
        name : 'Romino',
        description : 'Mini grinder!!',
        image : blend3,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 2690
    },
   
]