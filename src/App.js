
import React, { Component } from 'react';
import Exercises from './components/exercises';
import BodyAreaList from './components/body-area-list';

class App extends Component {

    state = {
      exercisesList: [],
      exercisesListFiltered: [],
      activeBodyArea: ''
    }

    filterExercises = (bodyArea) => {
      const filtered = this.state.exercisesList.filter((exercise) => exercise.bodyAreas.includes(bodyArea));
      this.setState({ exercisesListFiltered: filtered })
    }

    setActiveBodyArea = (bodyArea) => {
      this.setState({activeBodyArea: bodyArea});
    }

    // Gets the 'bodyArea' property from the exercises array, then flattens the result before stripping duplicates
    getBodyAreasList = (exercisesList) => {
      const bodyAreasList = exercisesList.map(exercise => exercise.bodyAreas).flat();
      return bodyAreasList.filter((bodyArea, index) => bodyAreasList.indexOf(bodyArea) === index);
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
          <center>
            <h4>
              | {this.getBodyAreasList(this.state.exercisesList).map((bodyArea, index) => <BodyAreaList bodyArea={bodyArea} active={this.state.activeBodyArea === bodyArea} filterExercises={this.filterExercises} setActiveBodyArea={this.setActiveBodyArea} key={index}/>)}
            </h4>
          </center>
          <Exercises exercisesList={this.state.exercisesListFiltered} />
        </div>
      )
    }
}

export default App;
