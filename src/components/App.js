import "../App.css";
import Form from "./Form";
import SearchBar from "./SearchBar";
import TransactionList from "./TransactionList";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Form />
      <TransactionList />
    </div>
  );
}

export default App;
