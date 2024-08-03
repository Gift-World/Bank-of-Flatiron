import "../App.css";
import SearchBar from "./SearchBar";
import TransactionList from "./TransactionList";

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <TransactionList />
    </div>
  );
}

export default App;
