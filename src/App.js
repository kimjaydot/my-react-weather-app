import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Kim Johnson
          <a
            href="https://github.com/kimjaydot/my-react-weather-app"
            target="blank"
          >
            {" "}
            Open-sourced on Github.com
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
