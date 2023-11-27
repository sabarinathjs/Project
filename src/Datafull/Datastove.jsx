import Stove1 from './Cartcontent/Stove/pic1.jpg'
import Stove2 from './Cartcontent/Stove/pic2.jpeg'
import Stove3 from './Cartcontent/Stove/pic3.jpg'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const Menulist =[
    {
        head:"Stove",
        name : 'Bajaj',
        description : 'Single Flamed Stove makes your whole work easy!',
        image : Stove1,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price :  70000
    },
    {
        head:"Stove",
        name : 'Preethi new Induction Stove',
        description : 'Fire Inspire!!!',
        image : Stove2,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/> <StarRateIcon sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 67000
    },
    {
        head:"Stove",
        name : 'Premier',
        description : 'Premium in Everything - Double Slotted Gas Stove!!!',
        image : Stove3,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 55000
    },
]
