import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "./router/routes";
import Theme from "./themes/theme";
function App() {
  return (
    <Theme
      children={
        <Router>
          <Routes />
        </Router>
      }
    />
  );
}

export default App;
