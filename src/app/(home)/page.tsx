import Header from "@/components/header";
import Hero from "@/components/hero";
import Sobre from "@/components/sobre";
import NossoTime from "@/components/nosso-time";
import Titulos from "@/components/titulos";
import Banner from "@/components/banner";
import Contato from "@/components/contato";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className=" min-h-screen bg-violet-100 flex flex-col items-center">
      <Header />
      <Banner />

      <main className="max-w-6xl mt-4 flex flex-col gap-16 items-center mb-10">
        <Hero />
        <Sobre />
        <NossoTime />
        <Titulos />
        <Contato />
        <Footer />
      </main>
    </main>
  );
}
