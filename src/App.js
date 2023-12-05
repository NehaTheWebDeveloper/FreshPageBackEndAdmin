import "./App.css";
import MainLayout from "./component/Layouts/MainLayout";
import AddQuizWrapper from "./screens/AddQuiz/AddQuizWrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout>Dashboard Page</MainLayout>} />
          <Route path={"/quizandevents"} element={<MainLayout><AddQuizWrapper /></MainLayout>} />
          <Route path={"/globalsettings"} element={<MainLayout><AddQuizWrapper /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
