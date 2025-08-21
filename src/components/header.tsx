"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Logo from "@/assets/img/logo-duques.png";

const navigationLinks = [
   { href: "/", label: "Início" },
   { href: "/sobre", label: "Sobre" },
   { href: "/titulos", label: "Títulos" },
]

export default function Header() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
   const pathname = usePathname()


   return (
      <header className="w-full shadow-md bg-white">
         <div className="max-w-6xl mx-auto ">
            <div className="flex justify-between items-center h-24">
               {/* Logo */}
               <div className="flex items-center">
                  <Image src={Logo} alt="Logo time Duques Volei" className="size-24 p-1"/>
                  <div className="flex-shrink-0">
                     <h1 className="text-2xl font-bold text-violet-600">Duques Vôlei</h1>
                  </div>
               </div>

               {/* Desktop  */}
               <div className="flex items-center gap-6">
                  <NavigationMenu className="h-full *:h-full max-md:hidden">
                     <NavigationMenuList className="h-full gap-2">
                        {navigationLinks.map((link, index) => (
                           <NavigationMenuItem key={index} className="h-full">
                              <NavigationMenuLink
                                 active={ pathname === link.href}
                                 href={link.href}
                                 className=" text-md tracking-widest font-semibold text-muted-foreground hover:text-primary border-b-primary hover:border-b-violet-600 data-[active]:border-b-violet-600 h-full justify-center rounded-none border-y-2 border-transparent py-1.5  hover:bg-transparent data-[active]:bg-transparent!"
                              >
                                 {link.label}
                              </NavigationMenuLink>
                           </NavigationMenuItem>
                        ))}
                     </NavigationMenuList>
                  </NavigationMenu>
               </div>

               {/* Mobile */}
               <div className="md:hidden">
                  <Button
                     variant="ghost"
                     size="icon"
                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                     {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </Button>
               </div>
            </div>

            {isMobileMenuOpen && (
               <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 flex flex-col gap-3 bg-white border-t">
                     {navigationLinks.map((link) => (
                        <a
                           key={link.href}
                           href={link.href}
                           className="hover:border-b-violet-600"
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                           {link.label}
                        </a>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </header>
   )
} 