import "../App.css";
import Form from "./Form";
import SearchBar from "./SearchBar";
import TransactionList from "./TransactionList";

function App() {
  return (
    <div className="App">
      <div className="bankheader">
      <h1>Flatiron Bank</h1>
      </div>
      <SearchBar />
      <Form />
      <TransactionList />
    </div>
  );
}

export default App;
