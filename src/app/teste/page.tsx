export default function Sobre4() {
   return (
     <div className="min-h-screen bg-white">
       {/* Minimal Hero */}
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
         <div className="max-w-4xl">
           <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-none">
             Duques
             <br />
             <span className="text-orange-600">Vôlei</span>
           </h1>
           <p className="text-2xl sm:text-3xl text-gray-600 leading-relaxed">
             Um time amador com mentalidade profissional, construindo excelência através do esporte.
           </p>
         </div>
       </section>
 
       {/* Image Divider */}
       <section className="relative h-96 sm:h-[500px] overflow-hidden">
         <img src="/volleyball-game-action-shot.jpg" alt="Jogo de vôlei" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
       </section>
 
       {/* Sobre - Two Column */}
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
         <div className="grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-4">
             <h2 className="text-5xl font-bold text-gray-900 sticky top-8">
               Sobre o<br />
               Projeto
             </h2>
           </div>
           <div className="lg:col-span-8 space-y-6 text-lg text-gray-700 leading-relaxed">
             <p>
               O <strong>Duques</strong> é um projeto de vôlei amador que nasceu da vontade de um grupo de amigos de
               levar o esporte a sério, sem perder a essência da diversão e da amizade que nos uniu inicialmente.
             </p>
             <p>
               Fundado em 2023, o time rapidamente evoluiu de encontros casuais para uma estrutura organizada, com
               treinos regulares, participação em campeonatos e um compromisso real com o desenvolvimento de cada atleta.
             </p>
             <p>
               Hoje, representamos mais do que um time de vôlei. Somos uma comunidade que acredita no poder transformador
               do esporte, na importância do trabalho em equipe e no valor das relações construídas dentro e fora das
               quadras.
             </p>
             <p>
               Nosso nome, <strong>Duques</strong>, reflete nossa aspiração: jogar com nobreza, respeito e excelência,
               sempre buscando elevar o nível do vôlei amador em nossa região.
             </p>
           </div>
         </div>
       </section>
 
       {/* Missão - Centered */}
       <section className="bg-gray-900 py-24 sm:py-32">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-block px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-full mb-8">
             NOSSA MISSÃO
           </div>
           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
             Transformar paixão em performance
           </h2>
           <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
             Desenvolver atletas completos através do vôlei, combinando treinamento técnico de qualidade com valores de
             respeito, disciplina e espírito de equipe, criando um ambiente onde todos possam crescer e alcançar seu
             potencial máximo.
           </p>
         </div>
       </section>
 
       {/* Metas - List Style */}
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
         <div className="grid lg:grid-cols-12 gap-12">
           <div className="lg:col-span-4">
             <h2 className="text-5xl font-bold text-gray-900 mb-6">
               Nossas
               <br />
               Metas
             </h2>
             <p className="text-xl text-gray-600">Objetivos claros para 2025 e além</p>
           </div>
           <div className="lg:col-span-8 space-y-8">
             {[
               {
                 title: "Competir em Alto Nível",
                 description:
                   "Participar de no mínimo 6 campeonatos oficiais e conquistar posição entre os 3 melhores em pelo menos 2 deles.",
                 color: "orange",
               },
               {
                 title: "Programa de Treinamento Estruturado",
                 description:
                   "Manter 3 treinos semanais com foco em fundamentos, táticas e preparação física, com acompanhamento de profissionais.",
                 color: "red",
               },
               {
                 title: "Expansão do Elenco",
                 description:
                   "Recrutar e integrar 15 novos atletas comprometidos, formando um grupo diverso e competitivo.",
                 color: "orange",
               },
               {
                 title: "Infraestrutura de Qualidade",
                 description:
                   "Garantir quadra fixa para treinos, uniformes completos e equipamentos adequados para todos os membros.",
                 color: "red",
               },
               {
                 title: "Presença e Engajamento",
                 description:
                   "Construir comunidade ativa nas redes sociais com 1000+ seguidores e cobertura regular de jogos e eventos.",
                 color: "orange",
               },
               {
                 title: "Parcerias Estratégicas",
                 description:
                   "Estabelecer 3 parcerias com empresas locais para apoio financeiro e logístico ao projeto.",
                 color: "red",
               },
             ].map((meta, index) => (
               <div key={index} className="flex gap-6 group">
                 <div
                   className={`flex-shrink-0 w-12 h-12 rounded-full bg-${meta.color}-100 flex items-center justify-center text-${meta.color}-600 font-bold text-xl group-hover:bg-${meta.color}-600 group-hover:text-white transition-colors`}
                 >
                   {index + 1}
                 </div>
                 <div className="flex-1 pb-8 border-b border-gray-200 last:border-0">
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{meta.title}</h3>
                   <p className="text-lg text-gray-600 leading-relaxed">{meta.description}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA */}
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24">
         <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 sm:p-16 text-center text-white">
           <h2 className="text-4xl sm:text-5xl font-bold mb-6">Quer fazer parte?</h2>
           <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-2xl mx-auto">
             Estamos sempre abertos a novos talentos que compartilham nossa paixão pelo vôlei
           </p>
           <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg">
             Entre em Contato
           </button>
         </div>
       </section>
     </div>
   )
 }
 