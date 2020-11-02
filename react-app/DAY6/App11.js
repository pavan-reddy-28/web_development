import React,{Component} from "react";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";

class App11 extends Component {
    render() {
      return (
      <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav>
            <ul >
              <li><Link to={'/'} > Home </Link></li>
              <li><Link to={'/contact'} >Contact</Link></li>
              <li><Link to={'/about'} >About</Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  


class Home extends Component {
        render() {
          return (
              <div>
                <h2>Home</h2>
              </div>
          );
        }
      }
    

    
    class About extends Component {
            render() {
              return (
                  <div>
                    <h2>About</h2>
                  </div>
              );
            }
          }
        

        class Contact extends Component {
                render() {
                  return (
                      <div>
                        <h2>Contact</h2>
                      </div>
                  );
                }
              }
            
            



export default App11;

