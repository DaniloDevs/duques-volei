"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import banner1 from "@/assets/img/banner1.png"
import banner2 from "@/assets/img/banner2.png"
import banner3 from "@/assets/img/banner3.png"
import banner4 from "@/assets/img/banner4.png"
import React from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
  )

  const images = [
    { src: banner1, alt: "Treino da equipe 1" },
    { src: banner2, alt: "Treino da equipe 2" },
    { src: banner3, alt: "Treino da equipe 3" },
    { src: banner4, alt: "Treino da equipe 4" },
  ]

  return (
    <section id="inicio">
      <div className="relative mx-auto">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
          className="px-2 flex items-center justify-center"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    placeholder="blur"
                    priority={index === 0}
                    style={{ width: "100%", height: "450px" }}
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
          <div className="text-start max-w-3xl">
            <h1 className="text-3xl md:text-5xl tracking-widest font-bold mb-3 w-fit">Duques Vôlei Clube</h1>
            <p className="text-lg md:text-xl mb-4">
              Formando atletas de excelência e promovendo o esporte através da dedicação, disciplina e paixão pelo vôlei.
            </p>
            <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
              <a href="#contato">Quero treinar com o Duques</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
