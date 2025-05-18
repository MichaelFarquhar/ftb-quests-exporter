import { Container } from "@/layout/Container";
import "./App.css";

function App() {
  return (
    <Container>
      <div className="grid place-items-center h-full">
        <h1 className="font-bold">Select file path</h1>

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
      </div>
    </Container>
  );
}

export default App;
