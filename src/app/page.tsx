import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import BackgroundEffect from '@/components/BackgroundEffect';

export default function Home() {
  return (
    <BackgroundEffect>
      <div className="flex min-h-screen items-center">
        <div className="grid md:grid-cols-[21rem_auto] lg:grid-cols-[24rem_auto] xl:grid-cols-[28rem_auto] md:max-w-7/8 mx-auto gap-x-6 w-full">
          <div className="md:pt-6 ">
            <Hero />
            <About />
            <Footer />
          </div>
          <Projects />
        </div>
      </div>
    </BackgroundEffect>
  );
}
