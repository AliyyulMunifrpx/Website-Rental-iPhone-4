import Navbar from "../navbar.jsx";
import Footer from "../footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-x-hidden bg-white">
      {/* Background gradient full page */}
<div className="absolute inset-0 fixed z-0 bg-[radial-gradient(circle_at_top,_white,_#cecece)]" />
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-20 w-full">
        <Navbar />
      </div>

      {/* Content */}
      <main className="relative z-10 w-full">
        {children}
        <Footer />
      </main>
    </div>
  );
}