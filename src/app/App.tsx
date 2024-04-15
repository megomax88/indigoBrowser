import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "../pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "../pages/MainPage/MainPage.lazy";
import { Suspense } from "react";

function App() {
  return (
    <div className={styles.app}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О браузере</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
