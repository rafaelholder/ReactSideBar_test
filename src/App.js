
import './App.css';
import HiddenBar from './components/hiddenbar';

function App() {



  return (
    <div className="App">
      <div className='container-sidebar'>
        <HiddenBar />
      </div>
      <div className='dashboard'>
        <h2>
          dashboard
        </h2>
      </div>
    </div>
  );
}

export default App;
