import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Etudie l'ingenierie logicielle </span>
            <h1 className="h1 mb-6">
              je suis <br /> <span className="text-accent">José Monkam</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Passionné par le développement et la résolution de problèmes grâce à l’informatique, je suis à la
              recherche d'une alternance à partir du 08 février 2025 avec un rythme de 4 jours en entreprise et 1
              jour à l’école afin de poursuivre mes études en master
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                // as="a"
                href="/CVJose.pdf"
                download
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Télecharger mon CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
