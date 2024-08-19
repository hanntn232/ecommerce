import { useEffect, useState } from "react";
import Router from "./route/Router";
import publicRoutes from "./route/routes/publicRoutes";
import { getRoutes } from "./route/routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  // console.log({allRoutes})
  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes])
  }, []);
  return <Router allRoutes={allRoutes} />;
}

export default App;
