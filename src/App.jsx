import "./App.css";
import Header from "./assets/components/header/header";
import Main from "./assets/components/main/main";
import Footer from "./assets/components/footer/footer";

function App() {
  return (
    <>
      <header className="container">
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </>
  );
}

export default App;
