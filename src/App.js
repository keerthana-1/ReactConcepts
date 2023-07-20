import logo from './logo.svg';
import './App.css';
import ImageCarousel from './Components/ImageCarousel';
import QuoteGenerator from './Components/QuoteGenerator';
import ToDoList from './Components/ToDoList';
import GitUserSearch from './Components/GitUserSearch';

function App() {
  return (
    <div className="App">
     <ImageCarousel></ImageCarousel>
     <br></br>
     <hr></hr>
     <br></br>
     <QuoteGenerator></QuoteGenerator>
     <br></br>
     <hr></hr>
     <br></br>
     <ToDoList></ToDoList>
     <br></br>
     <hr></hr>
     <br></br>
     <GitUserSearch></GitUserSearch>
    </div>
  );
}

export default App;
