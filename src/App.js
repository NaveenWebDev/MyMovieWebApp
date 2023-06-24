import "./App.css";
import AddMovie from "./components/AddMovie";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { Route , Routes } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path="/detail/:id" element={<Detail></Detail>} />
          <Route path="/" element={<Cards></Cards>} />
          <Route path="/addmovie" element={<AddMovie></AddMovie>} />
        </Routes>
    </div>
  );
}

export default App;
