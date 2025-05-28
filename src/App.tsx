import { Container } from "@/layout/Container";
import "./App.css";
import { DirectorySelector } from "@/components/DirectorySelector";
import { Alert } from "@/components/Alert";
import Spacer from "@/components/Spacer";
import { DirectoryInfoBox } from "@/components/DirectoryInfoBox";

function App() {
  return (
    <Container>
      <div className="flex flex-col h-full">
        <form
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
        <Spacer size="sm" />
        <Alert
          text="Please select the ftbquests directory from your minecraft world
          folder."
          variant="info"
        />
        <DirectoryInfoBox />
      </div>
    </Container>
  );
}

export default App;
