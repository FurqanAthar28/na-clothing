import Hero from "@/components/Hero";
import AboutSnippet from "@/components/AboutSnippet";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";



export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSnippet />
      <Services />
        <HowItWorks />
        
    </main>
  );
}