import { Users, Trophy, Target, } from "lucide-react"

const categorias = [
   {
      id: 1,
      nome: "Infanto",
      descricao: "Iniciação ao vôlei para jovens",
      idade: "Até 18 anos",
      time: "Masculino",
      icone: Users,
      cor: "from-blue-500 to-blue-600"
   },
   {
      id: 2,
      nome: "Juvenil",
      descricao: "Desenvolvimento técnico para atletas",
      idade: "19-23 anos",
      time: "Masculino",
      icone: Target,
      cor: "from-green-500 to-green-600"
   },
   {
      id: 3,
      nome: "Adulto",
      descricao: "Aperfeiçoamento técnico e Ritmo de jogo",
      idade: "23+ anos",
      time: "Feminino e Masculino",
      icone: Trophy,
      cor: "from-purple-500 to-purple-600"
   }
]

export default function NossoTime() {
   return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Nosso Time
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Conheça as categorias que desenvolvemos e os treinamentos oferecidos
            </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((categoria) => {
               const IconComponent = categoria.icone
               return (
                  <div
                     key={categoria.id}
                     className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                  >
                     <div className={`bg-gradient-to-br ${categoria.cor} p-6 text-white text-center`}>
                        <IconComponent className="w-12 h-12 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">{categoria.nome}</h3>
                     </div>

                     <div className="p-6">
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                           {categoria.descricao}
                        </p>

                        <div className="space-y-2 text-sm">
                           <div className="flex items-center text-gray-700">
                              <span className="font-medium mr-2">Idade:</span>
                              <span>{categoria.idade}</span>
                           </div>
                           <div className="flex items-center text-gray-700">
                              <span className="font-medium mr-2">Time:</span>
                              <span>{categoria.time}</span>
                           </div>
                        </div>

                        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                           Saiba Mais
                        </button>
                     </div>
                  </div>
               )
            })}
         </div>
      </section>
   )
} 