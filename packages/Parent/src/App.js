import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'
import Spinner from "./Spinner"
const Child = React.lazy(() => import('Child/App'))

function App() {
  const Nav = styled.nav`
    padding: 10px 0;
  `
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #F8FF13;
  `
  const Ul = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    text-decoration: none;
    @media(max-width: 320px) {
      flex-direction: column;
      margin: 0 10px;
      gap: 5px;
    }
  `
  const Li = styled.ul`
    padding: 5px 20px;
    border: solid 1px #F8FF13;
    border-radius: 5px;
    &:hover {
      background-color: #F8FF13;
      cursor: pointer;
      color: #000000;
    }
  `

  return (
    <div>
      <Router>
        <div>
          <Nav>
            <Ul>
              <Li>
                <Link to="/">Home</Link>
              </Li>
              <Li>
                <Link to="/child">Child</Link>
              </Li>
            </Ul>
          </Nav>
          <Switch>
            <Route exact path="/child">
              <React.Suspense fallback={<Spinner />}>
                <Child />
              </React.Suspense>
            </Route>
            <Route exact path="/">
              <Title>
                Click "Child" to load module
              </Title>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
