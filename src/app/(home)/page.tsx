import Header from "@/components/header";
import Hero from "@/components/hero";
import Sobre from "@/components/sobre";
import NossoTime from "@/components/nosso-time";
import Titulos from "@/components/titulos";
import Contato from "@/components/contato";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-violet-100">
      <Header />

      <main className="max-w-7xl mx-auto flex flex-col">
        <Hero />
      </main>
      {/* <Sobre />
    <NossoTime />
    <Titulos />
    <Contato />
    <Footer /> */}
    </main>
  );
}
