import React, { Fragment } from 'react';
import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddButtom from '../components/AddButton';

const Exercises = ({ data }) => (
	<Fragment>
		<Welcome username="Santiago" />
		<ExerciseList exercises={data} />
		<AddButtom />
	</Fragment>
);

export default Exercises;
