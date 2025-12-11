import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary/30 pt-20">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-primary mb-4 opacity-0 animate-fade-up">404</h1>
        <p className="text-xl text-muted-foreground mb-8 opacity-0 animate-fade-up stagger-1">
          Oops! This page doesn't exist
        </p>
        <Link to="/" className="opacity-0 animate-fade-up stagger-2 inline-block">
          <Button variant="hero">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
