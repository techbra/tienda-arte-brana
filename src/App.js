import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar></NavBar>
      <ItemListContainer mensaje="Bienvenidos a este Mundo de Arte"></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
