import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Hero() {
  const imageUrl =
    "https://images.unsplash.com/photo-1574169207511-e21a21c8075a?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className=" grid grid-cols-2">
      <Carousel className="col-span-2">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-2 h-full">
                <div className="col-span-1 flex flex-col items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    Delhi Technical Campus
                  </span>
                  <p className="text-lg mt-4">
                    Here you'll get all the updates whether it's related to
                    academics, time tables or the notes and Collese societies
                    announcements. You will get all the updates here....
                  </p>
                  <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">
                    Join Us..
                  </button>
                </div>
                <div className="col-span-1 h-full overflow-hidden rounded-full">
                  <img
                    src={imageUrl}
                    alt={`Carousel Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
