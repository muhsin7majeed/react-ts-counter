import "./styles.css";

import Counter from "./components/Counter";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Counter />
    </div>
  );
}
