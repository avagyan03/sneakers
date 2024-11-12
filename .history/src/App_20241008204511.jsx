import "@fontsource/inter/400.css"; //
import "@fontsource/inter/500.css"; //
import "@fontsource/inter/600.css"; //
import "@fontsource/inter/700.css"; //
import "./style/vars.css";
import "./style/global.css";
import "./style/repeat.css";
import "./style/reset.css";
import { Header } from "./components/Header.module.css";
import Slider from "./components/Slider.module.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Slider />
      </main>
    </>
  );
}

export default App;
