import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import MobileTopbar from "./MobileTopbar.jsx";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen w-full font-body text-ink">
      <MobileTopbar onOpen={() => setMobileOpen(true)} />
      <div className="flex min-h-screen">
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        <main className="flex-1 lg:ml-[296px] px-3.5 pt-[76px] pb-8 lg:pt-4 lg:px-4">
          {children}
        </main>
      </div>
    </div>
  );
}
