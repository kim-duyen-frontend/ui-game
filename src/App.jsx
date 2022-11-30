import React from "react";
import { Switch, Route } from "react-router-dom";
import ScreenImage from "./pages/screen";
import MainLayout from "./layout/MainLayout";

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
        <LayoutRoute path="/" component={ScreenImage} layout={MainLayout} />
      </Switch>
    </div>
  );
}

export default App;
