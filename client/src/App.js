import React, {
  useState,
  useEffect,
  createContext,
  lazy,
  Suspense
} from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "aos/dist/aos.css";
import AOS from "aos";
import "./App.scss";

import ScrollToTop from "./utils/ScrollToTopController";
import Navbar from "./components/layouts/Navbar";
import AddProject from "./components/AddProject";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/layouts/Login";
import Loading from "./components/Loading";
import Overlay from "./components/layouts/Overlay";
import { verify } from "./utils/auth";

//Create USER Context
export const UserContext = createContext();

const Home = lazy(() => import("./components/layouts/Home"));
const Works = lazy(() => import("./components/layouts/Works"));
const Contact = lazy(() => import("./components/layouts/Contact"));
const About = lazy(() => import("./components/layouts/About"));

function App() {
  const [user, setUser] = useState({ isAuth: false });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100
    });
  });

  useEffect(() => {
    setLoading(true);
    document.querySelector(".overlay-image").addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const result = await verify(sessionStorage.getItem("auth-token"));
      if (result) setUser({ isAuth: true });
    })();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Suspense fallback={<Loading width={150} />}>
          <ScrollToTop>
            <div className="App">
              {loading ? (
                <Loading width={150} />
              ) : (
                <React.Fragment>
                  <Navbar />
                  <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/contact" component={Contact} />
                    <PrivateRoute
                      path="/projects/add"
                      component={AddProject}
                      isAuth={user.isAuth}
                    />
                    <Route path="/projects" component={Works} />
                    <Route path="/" component={Home} />
                  </Switch>
                </React.Fragment>
              )}
            </div>
          </ScrollToTop>
        </Suspense>
        <Overlay />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
