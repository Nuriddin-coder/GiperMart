import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

///// import Component:
import { MainLayout } from "./layout/main-layout";
import pages from "./route/main-routes";

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
              element={
                <Suspense fallback={<h1>Loading ...</h1>}>
                  {route.element}
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
