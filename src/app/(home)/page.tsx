import Header from "@/components/header";
import Hero from "@/components/homepage/hero";
import Sobre from "@/components/homepage/sobre";
import NossoTime from "@/components/homepage/nosso-time";
import Titulos from "@/components/homepage/titulos";
import Banner from "@/components/homepage/banner";
import Contato from "@/components/homepage/contato";
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
      </main>

      <Footer />
    </main>
  );
}
