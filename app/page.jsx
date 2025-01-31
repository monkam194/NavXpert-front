import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { TransitLines } from "@/components/transit-lines";
import { RoutineSelector } from "@/components/routine-selector";

// context
import { RoutineProvider } from "@/contexts/routine-context";

const Home = () => {
  return (
    <RoutineProvider>
      <section className="min-h-screen bg-background">
      <main className="container px-4 py-6">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
          <div className="lg:col-span-2 xl:col-span-3 space-y-6">
            <TransitLines />
          </div>
          
          <div className="order-first lg:order-none">
            <div className="lg:sticky lg:top-6">
              <RoutineSelector />
            </div>
          </div>
        </div>
      </main>
      </section>
    </RoutineProvider>
  );
};

export default Home;
