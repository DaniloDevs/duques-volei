import { Trophy, Medal, Star } from "lucide-react"

const titulos = [
   {
      id: 1,
      ano: "2023",
      titulo: "Campeão Estadual Sub-16",
      categoria: "Categoria Sub-16",
      competicao: "Liga Estadual de Vôlei",
      icon: Trophy,
      cor: "text-yellow-600"
   },
   {
      id: 2,
      ano: "2023",
      titulo: "Vice-Campeão Nacional Sub-14",
      categoria: "Categoria Sub-14",
      competicao: "Campeonato Brasileiro",
      icon: Medal,
      cor: "text-gray-600"
   },
   {
      id: 3,
      ano: "2022",
      titulo: "Campeão Regional Sub-18",
      categoria: "Categoria Sub-18",
      competicao: "Copa Regional",
      icon: Star,
      cor: "text-blue-600"
   },
   {
      id: 4,
      ano: "2022",
      titulo: "3º Lugar Estadual Sub-12",
      categoria: "Categoria Sub-12",
      competicao: "Jogos Escolares",
      icon: Medal,
      cor: "text-orange-600"
   },
   {
      id: 5,
      ano: "2021",
      titulo: "Campeão Municipal Sub-16",
      categoria: "Categoria Sub-16",
      competicao: "Liga Municipal",
      icon: Trophy,
      cor: "text-yellow-600"
   },
   {
      id: 6,
      ano: "2021",
      titulo: "Vice-Campeão Regional Sub-14",
      categoria: "Categoria Sub-14",
      competicao: "Copa Regional",
      icon: Medal,
      cor: "text-gray-600"
   }
]

export default function Titulos() {
   return (
      <section id="titulos" className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nossos Títulos
               </h2>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

                        <div className="mt-4 pt-4 border-t border-gray-100">
                           <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              {titulo.ano}
                           </span>
                        </div>
                     </div>
                  )
               })}
            </div>

            <div className="text-center mt-12">
               <div className="bg-blue-600 rounded-lg p-8 text-white max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Estatísticas Impressionantes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div>
                        <div className="text-3xl font-bold mb-2">15+</div>
                        <div className="text-blue-100">Títulos Conquistados</div>
                     </div>
                     <div>
                        <div className="text-3xl font-bold mb-2">200+</div>
                        <div className="text-blue-100">Atletas Formados</div>
                     </div>
                     <div>
                        <div className="text-3xl font-bold mb-2">10+</div>
                        <div className="text-blue-100">Anos de História</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
} 