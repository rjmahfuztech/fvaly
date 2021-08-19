import React, { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));

const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Suspense
          fallback={
            <div className="text-center mt-5">
              <Spinner animation="border" />
            </div>
          }
        >
          <Route exact path="/" component={Home} />
          <Route path="/help" component={Help} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;
