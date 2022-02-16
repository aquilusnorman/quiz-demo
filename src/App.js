import logo from './logo.svg';
import './App.css';
import Theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Home, Category, Quiz, Leaderboard } from './Pages';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;