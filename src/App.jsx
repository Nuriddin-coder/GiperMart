import { Route, Routes } from "react-router-dom";

///// import Component:
import { MainLayout } from "./layout/main-layout";
import { pages } from "./route/main-routes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {pages.map((route) => (
            <Route
              index={route.path ? false : true}
              path={route.path}
              key={route.id}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
