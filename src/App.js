import Footer from "./components/Footer";
import Header from "./components/Header";
import MiddleSection from "./components/MiddleSection";

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <main className="bg-bg text-ink [font-family:Georgia,_Times_New_Roman,_serif] leading-relaxed">
      <Header />
      <MiddleSection />
      <Footer />
      </main>
    </div>
  );
}

export default App;
