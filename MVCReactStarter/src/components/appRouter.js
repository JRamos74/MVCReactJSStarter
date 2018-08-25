import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import AppLayout from "./appLayout";

const NoMatch = ({ location }) => (
    <div>No URL matching {location.pathname}</div>
);

const HelloWorld = (props) => (
    <div>Hello World from App Router</div>
);

const AboutPage = (props) => (
    <div>This is all about you!</div>
);

export const AppRouter = (props) => (
    <AppLayout>
        <main>
            <Switch>
                <Route exact path="/" component={HelloWorld} />
                <Route path="/about" component={AboutPage} />
                <Route component={NoMatch} />
            </Switch>
        </main>
    </AppLayout>
);