
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Myapp from './Component/Myapp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Myapp/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
