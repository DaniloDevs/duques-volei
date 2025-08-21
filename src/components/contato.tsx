import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const informacoesContato = [
   {
      icon: Phone,
      titulo: "Telefone",
      valor: "(11) 99999-9999",
      descricao: "WhatsApp disponível"
   },
   {
      icon: Mail,
      titulo: "E-mail",
      valor: "contato@duquesvolei.com.br",
      descricao: "Respondemos em até 24h"
   },
   {
      icon: MapPin,
      titulo: "Endereço",
      valor: "Rua das Palmeiras, 123",
      descricao: "Centro - São Paulo/SP"
   },
   {
      icon: Clock,
      titulo: "Horário de Funcionamento",
      valor: "Segunda a Sexta",
      descricao: "8h às 18h"
   }
]

export default function Contato() {
   return (
      <section id="contato" className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Entre em Contato
               </h2>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Estamos aqui para responder suas dúvidas e receber novos atletas
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {/* Informações de Contato */}
               <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                     Informações de Contato
                  </h3>

                  <div className="space-y-6">
                     {informacoesContato.map((info, index) => {
                        const IconComponent = info.icon
                        return (
                           <div key={index} className="flex items-start space-x-4">
                              <div className="flex-shrink-0">
                                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <IconComponent className="w-6 h-6 text-blue-600" />
                                 </div>
                              </div>
                              <div>
                                 <h4 className="text-lg font-medium text-gray-900 mb-1">
                                    {info.titulo}
                                 </h4>
                                 <p className="text-blue-600 font-semibold mb-1">
                                    {info.valor}
                                 </p>
                                 <p className="text-gray-600 text-sm">
                                    {info.descricao}
                                 </p>
                              </div>
                           </div>
                        )
                     })}
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                     <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Horários de Treino
                     </h4>
                     <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium">Manhã:</span> 8h às 10h</p>
                        <p><span className="font-medium">Tarde:</span> 14h às 16h</p>
                        <p><span className="font-medium">Noite:</span> 19h às 21h</p>
                     </div>
                  </div>
               </div>

               {/* Formulário de Contato */}
               <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                     Envie uma Mensagem
                  </h3>

                  <form className="space-y-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                              Nome Completo
                           </label>
                           <input
                              type="text"
                              id="nome"
                              name="nome"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Seu nome completo"
                           />
                        </div>
                        <div>
                           <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                              Telefone
                           </label>
                           <input
                              type="tel"
                              id="telefone"
                              name="telefone"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="(11) 99999-9999"
                           />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                           E-mail
                        </label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           placeholder="seu@email.com"
                        />
                     </div>

                     <div>
                        <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
                           Categoria de Interesse
                        </label>
                        <select
                           id="categoria"
                           name="categoria"
                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                           <option value="">Selecione uma categoria</option>
                           <option value="sub-12">Sub-12 (10-12 anos)</option>
                           <option value="sub-14">Sub-14 (12-14 anos)</option>
                           <option value="sub-16">Sub-16 (14-16 anos)</option>
                           <option value="sub-18">Sub-18 (16-18 anos)</option>
                        </select>
                     </div>

                     <div>
                        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                           Mensagem
                        </label>
                        <textarea
                           id="mensagem"
                           name="mensagem"
                           rows={4}
                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           placeholder="Conte-nos sobre seu interesse no vôlei..."
                        ></textarea>
                     </div>

                     <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                     >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                     </Button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
} 