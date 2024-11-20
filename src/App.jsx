// import { useState } from "react";
import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <div>
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route></Route>

            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
