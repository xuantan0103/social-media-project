import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/routes";
import PrivateRoutes from "./utils/PrivateRoutes";

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
                  <Layout >
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
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = null;

          if (route.layout) {
            Layout = route.layout;
          } else {
            Layout = Fragment;
          }
          return (
            <Route key="private" element={<PrivateRoutes />}>
              <Route
                key={"private" + index}
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
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
