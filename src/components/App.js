import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ExercisesContainer from '../pages/ExercisesContainer';
import ExerciseNewContainer from '../pages/ExerciseNewContainer';
import NotFound from '../pages/404';
const parametro = 'valorParametro1';
const App = () => (
	<HashRouter basename="/">
		<Switch>
			<Route exact path="/" render={() => <ExercisesContainer parametro={parametro} />} />
			<Route exact path="/exercise/new" component={ExerciseNewContainer} />
			<Route component={NotFound} />
		</Switch>
	</HashRouter>
);

export default App;
