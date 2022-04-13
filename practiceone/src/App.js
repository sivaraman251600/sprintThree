import './App.css';
import { NavBar } from './components/nav';
import DemoOne from './components/functionComponent';
import DemoTwo from './components/classComponent';
import LifeA from './components/lifeCycleA';
import UpdatingA from './components/updatingLifeCycle';
import Names from './components/keyValues';
import Axios from './components/axious';
import IndividualAxios from './components/individualAxios';

function App() {
  return (
    <div className="App">
      <NavBar />
      <hr/>
      <DemoOne />
      <hr/>
      <DemoTwo />
      <hr/>
      <LifeA/>
      <hr/>
      <UpdatingA/>
      <hr/>
      <Names />
      <hr/>
      <IndividualAxios />
      <hr/>
      <Axios />
    </div>
  );
}

export default App;
