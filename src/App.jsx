import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/routes";
import "./App.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
