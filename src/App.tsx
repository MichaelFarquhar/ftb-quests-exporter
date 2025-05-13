import "./App.css";

function App() {
  return (
    <main className="container">
      <h1>Select file path</h1>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          id="greet-input"
          onChange={(_) => console.log("clicked")}
          placeholder="Select path..."
        />
      </form>
    </main>
  );
}

export default App;
