import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header';
import Navibar from './Components/Navibar';
import Footer from './Components/Footer';


import Home from './Pages/Home';
import Start from './Pages/Start';
import Develop from './Pages/Develop';
import Admin from './Pages/Admin';
import Design from './Pages/Design';
import Management from './Pages/Management';
import Marketing from './Pages/Marketing';
import Popsci from './Pages/Popsci';
import Article from './Pages/Article';

import { withRouter } from "react-router";

const NavibarWithRouter = withRouter(Navibar);
function App() {
  return (
    <>
        <Router>
            <Header/>
            <NavibarWithRouter />
            <Switch>
                <Route exact path="/" component={Home} title="Index Page"/>
                <Route exact path="/start" component={Start} />
                <Route exact path="/develop" component={Home} />
                <Route exact path="/admin" component={Home} />
                <Route exact path="/design" component={Home} />
                <Route exact path="/management" component={Home} />
                <Route exact path="/marketing" component={Home} />
                <Route exact path="/popsci" component={Home} />
                <Route exact path="/articles/:slug" component={Article} />
            </Switch>
        </Router>
        <Footer />
    </>
  );
}

export default App;
