import FortuneContainer from "./components/FortuneContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FortuneClover from "./components/FortuneClover";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-comic-sans relative overflow-hidden">
      {/* Background Decorative Clovers */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <FortuneClover size={20} top="10%" left="10%" delay={0} />
        <FortuneClover size={14} top="15%" right="15%" delay={0.5} />
        <FortuneClover size={16} bottom="20%" left="20%" delay={1} />
        <FortuneClover size={18} bottom="15%" right="8%" delay={1.5} />
        <FortuneClover size={12} top="40%" left="5%" delay={2} />
        <FortuneClover size={15} top="30%" right="5%" delay={2.5} />
        <FortuneClover size={17} bottom="30%" left="50%" delay={3} />
      </div>

      <div className="container mx-auto px-4 pt-8 pb-16 relative z-10">
        <Header />
        <FortuneContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
