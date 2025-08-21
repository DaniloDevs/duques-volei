import { Trophy, Medal, Star } from "lucide-react"

const titulos = [
   {
      id: 1,
      ano: "2024",
      titulo: "Campeão Liga Esportiva",
      categoria: "Categoria Adulta",
      competicao: "Liga Desportiva Carioca",
      icon: Trophy,
      cor: "text-yellow-600"
   },
   {
      id: 2,
      ano: "2024",
      titulo: "Campeão Copa Vila",
      categoria: "Categoria Sub-14",
      competicao: "Categoria Adulta",
      icon: Medal,
      cor: "text-gray-600"
   },
   {
      id: 3,
      ano: "2023",
      titulo: "Vice-Campeão Taça Valim",
      categoria: "Categoria Adulto",
      competicao: "Taça Valim de Volei",
      icon: Star,
      cor: "text-blue-600"
   },
]

export default function Titulos() {
   return (
      <section id="titulos" className="w-full px-8 md:px-0">
         <div className="">
            <div className="text-start mb-8">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
               Alguns dos Nossos Títulos
               </h2>
               <p className="text-lg text-gray-600">
                  Conquistas que representam o trabalho árduo e dedicação de nossos atletas
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {titulos.map((titulo) => {
                  const IconComponent = titulo.icon
                  return (
                     <div
                        key={titulo.id}
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:scale-105"
                     >
                        <div className="flex items-center justify-between mb-4">
                           <span className="text-2xl font-bold text-blue-600">{titulo.ano}</span>
                           <IconComponent className={`w-8 h-8 ${titulo.cor}`} />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                           {titulo.titulo}
                        </h3>

                        <div className="space-y-2 text-sm text-gray-600">
                           <p><span className="font-medium">Categoria:</span> {titulo.categoria}</p>
                           <p><span className="font-medium">Competição:</span> {titulo.competicao}</p>
                        </div>

                     </div>
                  )
               })}
            </div>

          
         </div>
      </section>
   )
} 