
import React, { Component } from 'react';
import Exercises from './components/exercises';

    class App extends Component {

      state = {
        exercisesList: [],
        exercisesListFiltered: []
      }

      filterExercises = (bodyArea) => {
        const filtered = this.state.exercisesList.filter((exercise) => exercise.bodyAreas.includes(bodyArea));
        this.setState({ exercisesListFiltered: filtered })
      }

      componentDidMount() {
        fetch('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/')
          .then(res => res.json())
          .then((data) => {
            this.setState({ exercisesList: data.exercises })
          })
        .catch(console.log)
      }

      render() {
        return (
          <div>
            <center><h1>Exercises List</h1></center>
            <hr></hr>
            <center><h4 className="">{getBodyAreasList(this.state.exercisesList).map((bodyArea, index) => <span key={index} onClick={ () => this.filterExercises(bodyArea) }>{bodyArea} </span>)}</h4></center>
            <Exercises exercisesList={this.state.exercisesListFiltered} />
          </div>
        )
      }
  }

  export default App;

  // Gets the 'bodyArea' property from the exercises array, then flattens the result before stripping duplicates
  const getBodyAreasList = (exercisesList) => {
    const bodyAreasList = exercisesList.map(exercise => exercise.bodyAreas).flat();
    return bodyAreasList.filter((bodyArea, index) => bodyAreasList.indexOf(bodyArea) === index);
  }
