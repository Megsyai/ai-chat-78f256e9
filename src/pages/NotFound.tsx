import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Page not found</p>
        <a href="/" className="text-primary underline-offset-4 hover:underline">
          Back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
