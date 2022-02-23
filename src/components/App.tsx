import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgeCheck from "./ageCheck";
import AlkoCounter from "./AlkoCounter";
import Layout from "./Layout";
import Under18 from "./under18";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgeCheck />}></Route>
        <Route path="alkoCounter" element={<AlkoCounter />}></Route>
        <Route path="under18" element={<Under18 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
