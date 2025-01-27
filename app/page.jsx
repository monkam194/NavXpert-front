"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { TransitLines } from "@/components/transit-lines";
import { RoutineSelector } from "@/components/routine-selector";
import { useEffect, useState } from "react";
import Link from "next/link";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier les cookies côté client
    const authCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("authToken="));

    if (authCookie) {
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br bg-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Bienvenue</h1>
        <Link href="/register">
          <Button className="flex items-center gap-2">
            Connexion
          </Button>
        </Link>
      </div>
    );
  }

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
