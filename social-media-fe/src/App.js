import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = null;

          if (route.layout) {
            Layout = route.layout;
          } else {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                route.prop ? (
                  <Layout>
                    <Page prop={route.prop} />
                  </Layout>
                ) : (
                  <Layout>
                    <Page />
                  </Layout>
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
