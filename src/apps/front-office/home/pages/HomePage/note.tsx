
import { Card, CardContent } from "../../../../../../@components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../../@components/ui/carousel"
import { slider1, slider2 } from "./images/images";

function Caro() {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {/* start of map */}
        <div className="relative min-w-[200px]">
                <img src={slider1} className="rounded-3xl w=[1586px] h-[538px]" alt="slider" width={1586} height={538}/>
                <p className="absolute top-10 left-20 text-[72px] min-w-[200px]">Don't miss amazing</p>
                <p className="absolute top-10 left-20 text-[72px] min-w-[200px]">grocery deals</p>
                <p className="absolute top-10 left-20 text-[30px] min-w-[200px]">Sign up for the daily newsletter</p>
        </div>
                <img src={slider2} className="rounded-3xl" alt="slider2" width={1586} height={538}/>
      </CarouselContent>
      <CarouselContent>
        {/* start of map */}
        <div className="relative min-w-[200px]">
                <img src={slider1} className="rounded-3xl w=[1586px] h-[538px]" alt="slider" width={1586} height={538}/>
                <p className="absolute top-10 left-20 text-[72px] min-w-[200px]">Don't miss amazing</p>
                <p className="absolute top-10 left-20 text-[72px] min-w-[200px]">grocery deals</p>
                <p className="absolute top-10 left-20 text-[30px] min-w-[200px]">Sign up for the daily newsletter</p>
        </div>
                <img src={slider2} className="rounded-3xl" alt="slider2" width={1586} height={538}/>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export default Caro;