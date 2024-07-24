import { Card, CardContent } from "../../../../../../@components/ui/card"
import { CarouselItem,} from "../../../../../../@components/ui/carousel"

type SliderProps = {
  key?: number;
  image?:string;
  text1?:string;
  text2?:string;
  text3?:string;
}
export default function SliderSwiper({key,image,text1,text2,text3}:SliderProps) {
  return (

    <div className="p-1">
        <div className="relative flex items-center justify-center p-6">
          <img src={image} className="bg-fit rounded-3xl text-[100px] min-w-[1180px] h-[500px] font-semibold"/>
          <section className="absolute top-10 left-20 flex flex-col justify-center gap-2 items-start">
                <p className="pt-[20px] text-[72px] min-w-[200px]">{text1}</p>
                <p className="text-[72px] min-w-[200px]">{text2}</p>
                <p className="pt-[20px] text-[30px] min-w-[200px]">{text3}</p>

                <div className=" bg-white mt-[20px] h-12 bottom-32 left-20 rounded-3xl flex gap-2 justify-between items-center">
                  <div className="transition-transform -rotate-45 p-3 flex items-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </div>
                <input type="text" placeholder="Your email address" className="h-10 flex-1 outline-none" />
                <button className="bg-[#3bb77e] h-12 rounded-3xl p-4 flex items-center text-white">Subscribe</button>
                </div>
              </section>
        </div>
    </div>

  )
}
