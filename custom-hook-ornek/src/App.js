import logo from './logo.svg';
import './App.css';
import useWindowSize from './hooks/useWindowSize';
function App() {
  const {width,height} = useWindowSize()
  return (
    <div className="App">
      <header className="App-header">
       
          React Custom Hook Örnek
        
          {width > 800 &&   <img src={logo} className="App-logo" alt="logo" />}
       
        {width} | {height}
      </header>
    </div>
  );
}

export default App;

        
        
        
      
