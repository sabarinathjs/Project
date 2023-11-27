import crock1 from './Cartcontent/Crock pots/pic1.jpg'
import crock2 from './Cartcontent/Crock pots/pic2.jpeg'
import crock3 from './Cartcontent/Crock pots/pic3.jpg'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
export const Crockslist =[
    {
        head:"Stove",
        name : 'Rival',
        description : 'Steel holder..',
        image : crock1,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price :  3000
    },
    {
        head:"Stove",
        name : 'Savary',
        description : 'Double sided hot pots',
        image : crock2,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/> <StarRateIcon sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 6700
    },
    {
        head:"Stove",
        name : 'Philips',
        description : 'The original slow cooker',
        image : crock3,
        Rating : <>
        <StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarRateIcon sx={{color:"gold"}}/><StarHalfIcon  sx={{color:"gold"}}/><StarBorderIcon sx={{color:"gold"}}/>
        </>,
        price : 5000
    },
]
