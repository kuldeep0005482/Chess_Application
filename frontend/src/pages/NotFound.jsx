import { Link } from "react-router-dom";
import { Crown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4 text-ink text-center px-4">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-purple to-blue">
        <Crown size={26} />
      </div>
      <h1 className="font-display text-3xl font-semibold">404</h1>
      <p className="text-dim">This square doesn't exist on the board.</p>
      <Link to="/" className="btn-primary px-6 py-3 text-[13.5px]">
        Back to Home
      </Link>
    </div>
  );
}
