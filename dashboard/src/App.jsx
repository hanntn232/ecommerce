import { useState } from "react";
import Router from "./route/Router";
import publicRoutes from "./route/routes/publicRoutes";

function App() {
  const [allRoutes, selAllRoutes] = useState([...publicRoutes]);
  console.log({allRoutes})
  return <Router allRoutes={allRoutes} />;
}

export default App;
