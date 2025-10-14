
import Header from "@/components/header";
import Banner from "@/components/homepage/banner";
import Footer from "@/components/footer";
import AboutCard from "@/components/about/landpage";
import ReviewCard from "@/components/about/review-card";
import MetaSection from "@/components/about/metas";


export default function Home() {
  return (
    <main className=" min-h-screen bg-violet-100 flex flex-col items-center">
      <Header />
      <Banner />

      <main className="max-w-6xl mt-4 flex flex-col gap-1 items-center mb-10">
        <AboutCard />
        <ReviewCard />
        <MetaSection />
      </main>

      <Footer />
    </main>
  );
}
