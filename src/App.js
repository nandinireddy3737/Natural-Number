import './App.css';

function App() {
  // Generate array of first 10 natural numbers (1 to 10)
  const naturalNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="App">
      <h1>First 10 Natural Numbers</h1>
      <div>
        {naturalNumbers.map((number) => (
          <span key={number}>{number} </span>
        ))}
      </div>
    </div>
  );
}

export default App;
