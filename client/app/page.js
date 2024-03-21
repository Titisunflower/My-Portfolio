import HeroSection from "./components/header/HeroSection";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div class="container mx-auto px-12 py-4 mt-6">
      <HeroSection />
      <Nav />
      <About />
      </div>
    </main>
  );
}