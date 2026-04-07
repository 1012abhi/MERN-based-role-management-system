import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
