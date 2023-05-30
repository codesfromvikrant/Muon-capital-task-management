import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoContextProvider from "./context/contextApi";
import Dashboard from "./pages/dashboard";
import TodoPage from "./pages/Todopage";

const App = () => {
  return (
    <TodoContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<TodoPage />} />
          </Route>
        </Routes>
      </Router>
    </TodoContextProvider>
  );
};

export default App;
