import "./styles.css";
import { Provider } from "react-redux";
import store from "./Store/store";
import Counter from "./Components/Counter";
import Countries from "./Components/Countries";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <Countries />
      </div>
    </Provider>
  );
}
