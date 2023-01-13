import './App.css';
import Menu from "./components/Menu";
import {Route, Routes} from "react-router-dom";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

function App() {
  return (
    <>
      <Menu/>
      <hr/>
      <Routes>
        <Route path={'/red'} element={<RedPage/>}/>
        <Route path={'/blue'} element={<BluePage/>}/>
      </Routes>
    </>
  );
}

export default App;
