import Clima from "./components/Clima/Clima.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Desmatamento from "./components/Desmatamento/Desmatamento.jsx";
import Banner from "./components/Banner/Banner.jsx";
function App() {
  return (
    <div>
      <Menu />
      <Banner />
      <Clima />
      <Desmatamento />
    </div>
  );
}

export default App;
