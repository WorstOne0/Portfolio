import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Landing } from "./pages";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
