
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "../src/routes/Home.jsx";
import Income from "./routes/income.jsx";
import Expenses from "./routes/Expenses.jsx";
import NavCenter from "./routes/NavCenter.jsx";

function App() {
  return (
    <Routes>

      <Route exact path="/react-money-tracker-app" element={<NavCenter/>}>
        <Route index element={<Home/>}/>
        <Route path="/react-money-tracker-app/income" element={<Income/>}/>
        <Route path="/react-money-tracker-app/expenses" element={<Expenses/>}/>
      </Route>
    </Routes>   
    
  );
}

export default App;
