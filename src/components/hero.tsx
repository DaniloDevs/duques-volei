'use client'
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import banner1 from "@/assets/img/banner1.png"
import banner2 from "@/assets/img/banner2.png"
import banner3 from "@/assets/img/banner3.png"
import banner4 from "@/assets/img/banner4.png"
import React from "react"

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000, // tempo entre slides (3 segundos)
      stopOnInteraction: false, // continua mesmo após interação
    })
  )


  const images = [
    { src: banner1, alt: "" },
    { src: banner2, alt: "" },
    { src: banner3, alt: "" },
    { src: banner4, alt: "" },
  ]

  return (
    <section id="inicio">
      <div className="relative mx-auto">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true
          }}
          className="px-2 flex items-center justify-center"
        >
          <CarouselContent className="">
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    placeholder="blur"
                    priority={index === 0}
                    style={{ width: "100%", height: "450px" }}
                    className="object-cover rounded-xl" 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>


        <div className="absolute bottom-4 px-6 z-20 text-white ">
          <div className="text-start  ">
            <h1 className="text-3xl md:text-5xl tracking-widest font-bold mb-3 backdrop-blur-[8px] w-fit">Duques Vôlei Clube</h1>
            <p className="text-lg md:text-xl max-w-3xl backdrop-blur-[2px]">
              Formando atletas de excelência e promovendo o esporte através da dedicação,
              disciplina e paixão pelo vôlei.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 