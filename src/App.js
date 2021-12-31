import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/layout/Index";
import TrackDetails from "./components/tracks/TrackDetails";
import { Provider } from "./components/context/context";

function App() {
  return (
    <Provider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Index />} />
              <Route
                path="/track-details/:id"
                exact
                element={<TrackDetails />}
              />
            </Routes>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
