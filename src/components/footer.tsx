import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

const redesSociais = [
  { icon: Facebook, href: "#", label: "Acesse nosso Facebook" },
  { icon: Instagram, href: "#", label: "Siga-nos no Instagram" },
  { icon: Youtube, href: "#", label: "Veja nossos vídeos no YouTube" }
]

const linksRapidos = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#titulos", label: "Títulos" },
  { href: "#contato", label: "Contato" }
]

const contatos = [
  { icon: Phone, text: "(11) 99999-9999" },
  { icon: Mail, text: "contato@duquesvolei.com.br" },
  { icon: MapPin, text: "Rua das Palmeiras, 123<br />Centro - São Paulo/SP" }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full text-black border-t  border-gray-400 mt-8 pt-8">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Duques Vôlei</h3>
            <p className="mb-6 max-w-md">
              Formando atletas de excelência através da dedicação, disciplina e paixão pelo vôlei.
              Junte-se a nós e faça parte desta família esportiva.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              {redesSociais.map((rede) => {
                const IconComponent = rede.icon
                return (
                  <a
                    key={rede.label}
                    href={rede.href}
                    className="w-10 h-10 bg-blue-400  rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={rede.label}
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {linksRapidos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              {contatos.map((contato, index) => {
                const IconComponent = contato.icon
                return (
                  <div key={index} className="flex items-start space-x-2">
                    <IconComponent className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: contato.text }} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-dashed border-gray-400 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Duques Vôlei Clube. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}