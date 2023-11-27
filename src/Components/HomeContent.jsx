import Laptop from '../Datafull/Laptop'
import Stove from '../Datafull/Stove'
import ImageSlider from '../Datafull/ImageSlider'
import { SliderData } from '../Datafull/SliderData'
import Ac from '../Datafull/Ac'
import Blenders from '../Datafull/Blenders'
import Crocks from '../Datafull/Crocks'
const HomeContent = () => {
  return (
    <div>
     
       <ImageSlider slides={SliderData}/>;
       <Stove/> 
      <Laptop/>
      <Ac/>
      <Blenders/>
   <Crocks/>
    </div>
   
  )
}
export default HomeContent