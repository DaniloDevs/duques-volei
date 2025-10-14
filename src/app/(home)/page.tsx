import Header from "@/components/header";
import Hero from "@/components/home/hero";
import Sobre from "@/components/home/about";
import NossoTime from "@/components/home/time-section";
import Titulos from "@/components/home/achievements";
import Banner from "@/components/home/banner";
import Contato from "@/components/home/contact-card";
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
