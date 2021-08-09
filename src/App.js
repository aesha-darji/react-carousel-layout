import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { SliderOne } from "./components/SliderOne";
import { SliderTwo } from "./components/SliderTwo";

const App = () => {
  return (
    <div className="container-fluid">
      <SliderOne />
      <SliderTwo />
    </div>
  );
};

export default App;
