import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import banner1 from "@/assets/img/banner2.png"


export default function AboutCard() {
   return (
      <Card className="w-[90%] md:w-full md:grid md:grid-cols-2 md:gap-1 ">
         <CardHeader className="flex flex-col gap-2 md:justify-center">
            <CardTitle className="text-2xl">Sobre o Duques</CardTitle>
            <CardDescription className="text-xl">
               <p>
                  Desde nossa fundação, buscamos criar um ambiente onde o esporte se encontra com a amizade, onde cada
                  treino é uma oportunidade de evolução e cada jogo é uma celebração do nosso trabalho em equipe.
               </p>
               <br />
               <p className="md:block hidden">
                  Nosso compromisso vai além das quadras: queremos inspirar outros a descobrir o amor pelo vôlei e
                  construir uma comunidade esportiva forte e acolhedora.
               </p>
            </CardDescription>
         </CardHeader>
         <CardContent>
            <Image
               src={banner1}
               alt=''
               placeholder="blur"
               style={{ width: "100%", height: "350px" }}
               className="object-cover rounded-xl hidden md:block"
            />
            <Image
               src={banner1}
               alt=''
               placeholder="blur"
               style={{ width: "100%", height: "180px" }}
               className="object-cover rounded-xl block md:hidden"
            />
         </CardContent>
      </Card>
   )
}
