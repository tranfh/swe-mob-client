import './App.css';
import './Sidebar/Sidebar';
import Sidebar from './Sidebar/Sidebar';
import Python from './Python/Python';
import 'tachyons';

function App() {
  return (
    <div className="App flex justify-between">
      <div className="navbars">
        <Sidebar />
      </div>
      <div className="wrapper w-75 pa3 ml3">
        <Python />
      </div>
    </div>
  );
}

export default App;
