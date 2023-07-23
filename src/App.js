
import Navbar from './theapp/navbar';
import Home from './theapp/home';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Create from './theapp/create';

//'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
         <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path ="/">
               <Home/>
              </Route>
              <Route path ="/create">
               <Create/>
              </Route>

            </Switch>
          </div>
  
      </div>
    </Router>
  );
}

export default App;
