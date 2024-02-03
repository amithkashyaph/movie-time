import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import appStore from "./utils/store/AppStore";
import SearchMovieList from "./components/SearchMovieList";
import WatchedMovieList from "./components/WatchedMovieList";

function App() {
  return (
    <Provider store={appStore}>
      <div className="w-full">
        <Navbar />
        <main className="flex w-[900px] mx-auto">
          <SearchMovieList />
          <WatchedMovieList />
        </main>
      </div>
    </Provider>
  );
}

export default App;
