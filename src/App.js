import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [
  {
    path: "/root",
    component: root,
    routes: [
      {
        path: "/root/home",
        component: home,
        routes: [
          {
            path: "/root/home/myname",
            component: myname,
            routes: [
              {
                path: "/root/home/myname/filea.txt",
                component: filea
              },
              {
                path: "/root/home/myname/fileb.txt",
                component: fileb
              },
              {
                path: "/root/home/myname/projects",
                component: projects,
                routes: [
                  {
                    path: "/root/home/myname/projects/mysupersecretproject",
                    component: mysupersecretproject,
                    routes: [
                      {
                        path: "/root/home/myname/projects/mysupersecretproject/mysupersecretfile.txt",
                        component: mysupersecretfile,
                      }
                    ]
                  }
                ]
              }

            ]
          }

        ]
      }
    ]
  }
];



export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        
        <ul>
          <Link to="/root">root</Link>
        </ul>

        <Switch>
          {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} /> 
          ))}
        </Switch>
      </div>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <div>
      <h2>This is in {route.path.toString()}</h2>
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    </div>

  );
}



function root({ routes }) {
  return (
    <div>
      <ul>
        <Link to="/root/home">home</Link>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function home({ routes }) {
  return (
    <div>
      <ul>

        <Link to="/root/home/myname">myname</Link>

      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function myname({ routes }) {
  return (
    <div>
      <ul>
        <div>
          <Link to="/root/home/myname/projects">projects</Link>
        </div>
        <div>
          <Link to="/root/home/myname/filea.txt">filea.txt</Link>
        </div>

        <div>
          <Link to="/root/home/myname/fileb.txt">fileb.txt</Link>
        </div>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function filea({ routes }) {
  return (
    <div>
      <ul>

        <p>THIS IS FILE: filea.txt</p>

      </ul>

      <Switch>
      </Switch>
    </div>
  );
}

function fileb({ routes }) {
  return (
    <div>
      <ul>
        <p>THIS IS FILE: fileb.txt</p>
      </ul>

      <Switch>
      </Switch>
    </div>
  );
}

function projects({ routes }) {
  return (
    <div>
      <ul>

        <Link to="/root/home/myname/projects/mysupersecretproject">mysupersecretproject</Link>

      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function mysupersecretproject({ routes }) {
  return (
    <div>
      <ul>

        <Link to="/root/home/myname/projects/mysupersecretproject/mysupersecretfile.txt">mysupersecretfile.txt</Link>

      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function mysupersecretfile({ routes }) {
  return (
    <div>
      <ul><p>THIS IS FILE: mysupersecretfile.txt</p></ul>



      <Switch>
      </Switch>
    </div>
  );
}
