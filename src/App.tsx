import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/public-layout";
import HomePage from "@/routes/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Adding Public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Protected Routes */}
      </Routes>
    </Router>
  );
}

export default App;
