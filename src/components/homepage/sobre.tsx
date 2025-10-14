import Image from "next/image";
import banner1 from "@/assets/img/banner1.png"


export default function Sobre() {
   return (
      <section id="sobre" className="max-w-6xl px-4">
         <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               {/* Conteúdo de texto */}
               <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                     Nossa Missão
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                     No vôlei, cada ponto é conquistado em equipe. Não é apenas sobre levantar a bola,
                     atacar ou defender: é sobre confiança, disciplina e união. Nossa missão é ir além das quadras,
                     formando atletas que acreditam na força do trabalho coletivo e no poder de superar limites juntos
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                     Mais do que vencer jogos, queremos inspirar pessoas. Ser um time de vôlei é
                     também ser um exemplo de união, dedicação e amor pelo esporte. Aqui, cada saque é
                     um recomeço, cada defesa é um ato de coragem, e cada ponto conquistado é a prova de que juntos somos mais fortes.
                  </p>
               </div>

               {/* Área da imagem */}
               <div className="relative">
                  <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
                     {/* Placeholder para imagem do time */}
                     <div className="text-center text-gray-500">
                        <Image
                           src={banner1}
                           alt=''
                           placeholder="blur"
                           style={{ width: "100%", height: "450px" }}
                           className="object-cover rounded-xl"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </section>
   )
} 