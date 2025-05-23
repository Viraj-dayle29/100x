import Navbar from "../components/Home/components/Header/navbar";
import Hero from "../components/Home/components/HeroSection/Hero";

const Home: React.FC = () => {
  return (
    <div>
      <main className="relative sm:pt-17 sm:max-w-8xl">
        <Navbar />
        <Hero />
      </main>
    </div>
  );
};

export default Home;
