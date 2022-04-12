import './App.css';
import { NavBar } from './components/nav';
import DemoOne from './components/functionComponent';
import DemoTwo from './components/classComponent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <DemoOne />
      <DemoTwo />
    </div>
  );
}

export default App;
