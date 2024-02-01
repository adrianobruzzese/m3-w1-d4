import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import FantasyBooks from "./books/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <MyJumbotron></MyJumbotron>
      <BookList FantasyBooks={FantasyBooks}></BookList>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
