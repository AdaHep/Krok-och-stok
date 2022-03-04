import Shop from "./Shop";
import Errorbounds from "./Errorbounds";
import "@material-tailwind/react/tailwind.css";

function App() {
  return (
    <div>
      <Errorbounds>
        <Shop />
      </Errorbounds>
    </div>
  );
}
export default App;
