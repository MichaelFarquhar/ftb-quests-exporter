import { Container } from "@/layout/Container";
import "./App.css";
import { DirectorySelector } from "@/components/DirectorySelector";
import { Alert } from "@/components/Alert";

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
          <DirectorySelector />
        </form>
        <Alert
          text="Please select the ftbquests directory from your minecraft world
          folder."
          variant="info"
        />
      </div>
    </Container>
  );
}

export default App;
