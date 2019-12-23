import React, { Component } from 'react';
import Exercises from './components/exercises/exercises';
import BodyAreaList from './components/body-area-list/body-area-list';

class App extends Component {
  state = {
    exercisesList: [],
    exercisesListFiltered: [],
    activeBodyArea: 'Back',
    apiError: false
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
      .catch(err => this.setState({ apiError: true }));
  }

  render() {
    const dataLoaded = this.state.exercisesList.length;
    let display;

    if (this.state.apiError) {
      display = (
        <>
          <center>
            <h4 style={{ marginTop: 40, paddingBottom: '100vh' }}>
              ... There was an error accessing the data. Please refresh the page
              and try again!
            </h4>
          </center>
        </>
      );
    } else {
      if (dataLoaded) {
        display = (
          <>
            <center>
              <h4 style={{ marginTop: 40 }}>
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
              <h4 style={{ marginTop: 40, paddingBottom: '100vh' }}>
                ... Please wait while the exercise list is populated!
              </h4>
            </center>
          </>
        );
      }
    }

    return <>{display}</>;
  }

  throwError = () => {
    throw new Error('Api error');
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
      .reduce((acc, val) => acc.concat(val), []);
    return bodyAreasList.filter(
      (bodyArea, index) => bodyAreasList.indexOf(bodyArea) === index
    );
  };
}

export default App;
