import logo from './logo.svg';
import './App.css';
// import Routes from './pages/Routes';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Lists from './pages/Lists';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/list" element={<Lists />} />
          {/* <Route path="*" element={<NoMatch />} />  */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
