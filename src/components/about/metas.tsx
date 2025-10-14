import { Card } from "../ui/card"


export default function MetaSection() {
   const metas = [
      {
         title: "Competir em Alto Nível",
         description: "Participar e conquistar posições de destaque em campeonatos regionais e estaduais.",
         icon: "🏆",
      },
      {
         title: "Desenvolvimento Técnico",
         description:
            "Aprimorar constantemente as habilidades individuais e coletivas através de treinos estruturados.",
         icon: "📈",
      },
      {
         title: "Expandir o Time",
         description: "Recrutar novos talentos e formar uma base sólida de atletas comprometidos.",
         icon: "👥",
      },
      {
         title: "Infraestrutura",
         description: "Garantir acesso a quadras de qualidade e equipamentos adequados para treinos e jogos.",
         icon: "🏐",
      },
      {
         title: "Visibilidade",
         description: "Aumentar nossa presença nas redes sociais e na comunidade esportiva local.",
         icon: "📱",
      },
      {
         title: "Sustentabilidade",
         description: "Estabelecer parcerias e patrocínios para garantir a continuidade do projeto.",
         icon: "🤝",
      },
   ]

   return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

         <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Nossas Metas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Objetivos que nos guiam rumo ao sucesso</p>
         </div>

         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {metas.map((meta, index) => (
               <Card
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
               >
                  <div className="text-5xl mb-4">{meta.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{meta.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{meta.description}</p>
               </Card>
            ))}
         </div>
      </section>
   )
}