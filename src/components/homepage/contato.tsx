"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"

const informacoesContato = [
  {
    icon: Phone,
    titulo: "Telefone",
    valor: "(21) 99650-0813",
  },
  {
    icon: Mail,
    titulo: "E-mail",
    valor: "duques.voleibol@gmail.com",
  },
  {
    icon: MapPin,
    titulo: "Endereço",
    valor: "R. Baltazar da Silveira",
    descricao: "Vila Guanabara, Duque de Caxias",
    href: "https://maps.app.goo.gl/YQpYoRjBFoWpjnzS6",
  },
]

export default function ContatoCard() {
  const [titulo, setTitulo] = useState("")
  const [mensagem, setMensagem] = useState("")

  const handleSendWhatsApp = () => {
    if (!titulo.trim() || !mensagem.trim()) {
      alert("Por favor, preencha todos os campos.")
      return
    }

    const phone = "5521996500813" // insira o número com DDI + DDD
    const text = `*${titulo}*\n\n${mensagem}`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contato" className="w-full px-4 py-8">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-gray-900">Entre em Contato</CardTitle>
          <p className="text-gray-600 mt-2">Estamos aqui para ajudar. Entre em contato conosco!</p>
        </CardHeader>

        <CardContent className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações de Contato</h3>
            {informacoesContato.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="group">
                  <a
                    href={info.href}
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    target={info.titulo === "Endereço" ? "_blank" : undefined}
                    rel={info.titulo === "Endereço" ? "noopener noreferrer" : undefined}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">{info.titulo}</span>
                      <p className="text-blue-600 font-semibold text-base mt-1 group-hover:text-blue-700">
                        {info.valor}
                      </p>
                      {info.descricao && <p className="text-gray-500 text-sm mt-1">{info.descricao}</p>}
                    </div>
                  </a>
                </div>
              )
            })}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Envie uma Mensagem</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="titulo" className="text-sm font-medium text-gray-700">
                  Assunto *
                </Label>
                <Input
                  id="titulo"
                  placeholder="Digite o assunto da sua mensagem"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-sm font-medium text-gray-700">
                  Mensagem *
                </Label>
                <Textarea
                  id="mensagem"
                  placeholder="Escreva sua mensagem aqui..."
                  rows={6}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full resize-none"
                  required
                />
              </div>

              <Button
                onClick={handleSendWhatsApp}
                disabled={!titulo.trim() || !mensagem.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </div>
              </Button>

              <p className="text-xs text-gray-500 text-center">* Campos obrigatórios</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
