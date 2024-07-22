
import { Card, CardContent } from "../../../../../../@components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../../@components/ui/carousel"
import React from "react"
import './caro.css'
import { slider1, slider2 } from "./images/images"
import Slides from "./Slides"
function Caro() {
const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
let sliderArray = [
  {id:1,image:slider1, text1:"Don't miss amazing",text2:"grocery deals",text3:"Sign up for the daily newsletter"},
  {id:2,image:slider2, text1:"Don't miss amazing",text2:"grocery deals",text3:"Sign up for the daily newsletter"},
]
{
  return (
    <Carousel
      plugins={[plugin.current]}
      // overflow-hidden
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{align:"center"}}
      orientation="horizontal"
    >
      <CarouselContent className="relative">
{
  sliderArray.map((slide)=>(
   <Slides key={slide.id} image={slide.image} text1={slide.text1} text2={slide.text2} text3={slide.text3}/>
  ))
}
      </CarouselContent>
      <CarouselPrevious className='pre absolute -left-[2rem] bg-black text-white ' />
      <CarouselNext  className='next absolute  -right-[8rem]'/>
    </Carousel>
  )
}
}
export default Caro;