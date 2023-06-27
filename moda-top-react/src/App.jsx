import './App.css';
import BarraNavegacion from './components/navbar/BarraNavegacion';
import TarjetaPresentacion from './components/navbar/TarjetaPresentacion';
import Contador from './components/navbar/Contador';

function App() {
  return (
    <div className="App">
      <h2>Comenzamos con React!!!!</h2>
      <BarraNavegacion/>
      <TarjetaPresentacion name="Pepe" description="I'm web developer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14oEX0uwq7YBBxHYJoe3ekaMxQVZM6pT09i1A0OA&s"/>
      <TarjetaPresentacion name="Juan" description="I'm web developer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14oEX0uwq7YBBxHYJoe3ekaMxQVZM6pT09i1A0OA&s"/>
      <TarjetaPresentacion name="Carlos" description="I'm web developer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14oEX0uwq7YBBxHYJoe3ekaMxQVZM6pT09i1A0OA&s"/>
      <Contador/>
    </div>
  );
}

export default App;
