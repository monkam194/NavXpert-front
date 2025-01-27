 import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <img 
            src="/assets/navxpert.png" 
            alt="NavXpert Logo" 
            
            width="120px"
            height="120px" 
          />
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Signaler une perturbation</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
