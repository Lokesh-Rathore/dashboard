import './App.css';
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/maincontent/main";
import Right from "./components/rightbar/right";
function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar/>
        <Main/>
        <Right/>
      </div>
    </div>
  );
}

export default App;
