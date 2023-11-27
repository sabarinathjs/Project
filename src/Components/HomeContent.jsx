import Laptop from '../Datafull/Laptop'
import Stove from '../Datafull/Stove'
import ImageSlider from '../Datafull/ImageSlider'
import { SliderData } from '../Datafull/SliderData'
const HomeContent = () => {
  const navigate=useNavigate();
  const handleCheckout=()=>{
    navigate('/checkout');
  }
  const [count,setcount]=useState(0);
  const[cart,setcart]=useState([]);
  const [tprice,setprice]=useState(0);
  const nameeeee=<Display/>
  return (
    <div>

        <center>
        <h1 style={{marginTop:"10px"}}>Welcome {nameeeee}</h1>
        <hr></hr>
        <h3>No of Items in Cart: {count} </h3></center><hr></hr>
       <ImageSlider slides={SliderData}/>;
       <Stove/> 
      <Laptop/>

    </div>
   
  )
}
export default HomeContent