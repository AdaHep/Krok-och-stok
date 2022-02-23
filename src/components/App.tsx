import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgeCheck from "./ageCheck";
import AlkoCounter from "./alkoCounter";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgeCheck />}></Route>
        <Route path="alkoCounter" element={<AlkoCounter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
