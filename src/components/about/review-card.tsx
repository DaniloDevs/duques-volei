import { Card } from "../ui/card";


export default function ReviewCard() {
   return (
      <div className="w-[90%] md:w-full  flex flex-col gap-2 md:flex-row justify-around">
         <Card className="flex py-1 h-fit items-center justify-center gap-1 rounded-3xl p-8  w-full ">
            <div className="text-5xl font-bold text-violet-500 mb-2">2021</div>
            <div className="text-xl font-semibold">Ano de Fundação</div>
         </Card>

         <Card className="flex py-1 h-fit items-center justify-center gap-1 rounded-3xl p-8 w-full ">
            <div className="text-5xl font-bold text-violet-600 mb-2">20+</div>
            <div className="text-xl font-semibold text-gray-900">Atletas Ativos</div>
         </Card>

         <Card className="flex py-1 h-fit items-center justify-center gap-1 rounded-3xl p-8 w-full ">
            <div className="text-5xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-xl font-semibold text-gray-900">Jogos Realizados</div>
         </Card>
      </div>
   )
}