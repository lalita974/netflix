import "./App.css";

import movies from "./assets/movies_rnexgr.json";
import Section from "./components/Section";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Section />;
    </div>
  );
};

export default App;
