import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Order from "@/components/Order";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Order />
      </main>
      <Footer />
    </>
  );
}
