import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/> {/* allows chirdren of the parent to show ()*/}
    </div>
  );
}

export default App;
