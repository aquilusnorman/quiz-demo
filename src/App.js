import logo from './logo.svg';
import './App.css';
import { Home, Category } from './Pages';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
      </Routes>
    </div>
  );
}

export default App;