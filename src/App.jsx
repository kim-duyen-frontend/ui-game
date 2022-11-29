import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home";

function LayoutRoute({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <LayoutRoute path="/" component={Home} layout={MainLayout} />
      </Switch>
    </div>
  );
}

export default App;
