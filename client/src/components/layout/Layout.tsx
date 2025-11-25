import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCTA } from "../FloatingCTA";
import { SEOSchema } from "../SEOSchema";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOSchema />
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
