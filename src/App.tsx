import { Hero } from './components/Hero';
import { ModuleCards } from './components/ModuleCards';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="graph-paper min-h-screen overflow-hidden bg-paper text-navy">
      <div className="mx-auto max-w-[1460px] px-6 pb-10 sm:px-8 2xl:px-0">
        <Navbar />
        <Hero />
        <ModuleCards />
      </div>
    </div>
  );
}
