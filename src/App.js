import React, { Component } from 'react';
import Exercises from './components/exercises/exercises';
import BodyAreaList from './components/body-area-list/body-area-list';

class App extends Component {
  state = {
    exercisesList: [],
    exercisesListFiltered: [],
    activeBodyArea: 'Back'
  };

  filterExercises = bodyArea => {
    const filtered = this.state.exercisesList.filter(exercise =>
      exercise.bodyAreas.includes(bodyArea)
    );
    this.setState({ exercisesListFiltered: filtered });
  };

  setActiveBodyArea = bodyArea => {
    this.setState({ activeBodyArea: bodyArea });
  };

  bodyAreaOnClickHandler = bodyArea => {
    this.filterExercises(bodyArea);
    this.setActiveBodyArea(bodyArea);
  };

  // Gets the 'bodyArea' property from the exercises array, then flattens the result before stripping duplicates
  getBodyAreasList = exercisesList => {
    const bodyAreasList = exercisesList
      .map(exercise => exercise.bodyAreas)
      .flat();
    return bodyAreasList.filter(
      (bodyArea, index) => bodyAreasList.indexOf(bodyArea) === index
    );
  };

  componentDidMount() {
    fetch(
      'https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/'
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ exercisesList: data.exercises });
        this.bodyAreaOnClickHandler(this.state.activeBodyArea);
      })
      .catch(console.log);
  }

  render() {
    const dataLoaded = this.state.exercisesList.length;
    let display;

    if (dataLoaded) {
      display = (
        <>
          <center>
            <h1>Exercises List</h1>
          </center>
          <hr />
          <center>
            <h4 style={{marginTop: 40}}>
              |{' '}
              {this.getBodyAreasList(this.state.exercisesList).map(
                (bodyArea, index) => (
                  <BodyAreaList
                    bodyArea={bodyArea}
                    active={this.state.activeBodyArea === bodyArea}
                    bodyAreaOnClickHandler={this.bodyAreaOnClickHandler}
                    key={index}
                  />
                )
              )}
            </h4>
          </center>
          <Exercises
            exercisesList={this.state.exercisesListFiltered}
            activeArea={this.state.activeBodyArea}
          />
        </>
      );
    } else {
      display = (
        <>
          <center>
            <h1>Exercises List</h1>
          </center>
          <hr />
          <center>
            <h4 style={{marginTop: 40}}>... Please wait while the exercise list is populated!</h4>
          </center>
        </>
      );
    }

    return <div>{display}</div>;
  }
}

export default App;
