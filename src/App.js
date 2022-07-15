import logo from './logo.svg';
import './App.css';
import './Styles/index.css'
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './Routes/MainRoute/MainRoute';

function App() {
  return (
    <BrowserRouter>
    <MainRoute/>
    </BrowserRouter>
  );
}

export default App;
