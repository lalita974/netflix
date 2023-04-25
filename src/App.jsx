import "./App.css";
import fullLogoNetflix from "/src/image/logo.696c2101.png";
import movies from "./assets/movies_rnexgr.json";

const App = () => {
  const section = movies.map((element) => {
    return (
      <section>
        <h1>{element.category}</h1>
        <div>
          {element.images.map((pic) => {
            return <img src={pic} alt="img" />;
          })}
        </div>
      </section>
    );
  });

  return (
    <div>
      <header>
        <div>
          <img alt="Netflix en rouge" src={fullLogoNetflix} />
        </div>
      </header>
      <main>
        <div>{section}</div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
