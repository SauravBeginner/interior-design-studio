import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-editorial flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-4xl font-semibold md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-8">
        <Button variant="terracotta">Back to Home</Button>
      </Link>
    </div>
  );
}
