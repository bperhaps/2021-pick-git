import { BrowserRouter, Route, Switch } from "react-router-dom";

import { PAGE_URL } from "./constants/urls";
import NavigationHeader from "./components/@layout/NavigationHeader/NavigationHeader";
import HomeFeedPage from "./pages/HomeFeedPage/HomeFeedPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={[PAGE_URL.HOME, PAGE_URL.PROFILE]}>
          <NavigationHeader isLoggedIn={false} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={PAGE_URL.HOME}>
          <HomeFeedPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
