import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import FunComponent from './components/FunComponent';
import MyClass from './components/MyClass';
import 'bootstrap/dist/css/bootstrap.min.css'
import Name from './components/Name'

function App() {

  function clicked() {
    alert("Inside App.js")
}

  return (
    <div className="container">
    <Name/>

    </div>
  );
}

export default App;
