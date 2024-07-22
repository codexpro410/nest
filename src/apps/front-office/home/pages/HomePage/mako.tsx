import * as React from "react"

import { Card, CardContent } from "../../../../../../@components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../../../@components/ui/carousel"

export function Mako() {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {Array.from({ length: 20}).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="bg-emerald-400 text-[100px] min-w-[1586px] font-semibold">{index + 1} </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
