import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

const redesSociais = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

const linksRapidos = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#titulos", label: "Títulos" },
  { href: "#contato", label: "Contato" }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Duques Vôlei</h3>
            <p className="text-gray-300 mb-6 max-w-md">
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
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={rede.label}
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
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
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
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contato@duquesvolei.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span>Rua das Palmeiras, 123<br />Centro - São Paulo/SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Duques Vôlei Clube. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvido com ❤️ para o esporte
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 