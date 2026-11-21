import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="page container">
        <section className="page__intro">
          <h1>הקטלוג</h1>
          <p>סרטים שכדאי לראות — הישנים הטובים והחדשים.</p>
        </section>
        <MovieList />
      </main>
      <Footer />
    </>
  );
}

export default App;
