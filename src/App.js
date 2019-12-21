
    import React, { Component } from 'react';

    class App extends Component {

      componentDidMount() {
        fetch('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/')
          .then(res => res.json())
          .then((data) => {
            console.log(getBodyAreasList(data.exercises));
          })
        .catch(console.log)
      }

      render() {
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pull up</h5>
              <h6 className="card-subtitle mb-2 text-muted">Back, Biceps</h6>
              <p className="card-text">
              </p>
              <img src="https://cdni.gs.lightning-e.com/media/5c0e516f72fc52b810eb7f57-malewidegrippullupthumbnail.jpg" alt="pull-up" style={{width: 200, height: 200}}></img>
            </div>
          </div>
        );
      }
  }

  export default App;

  // Gets the 'bodyArea' property from the exercises array, then flattens the result before stripping duplicates
  const getBodyAreasList = (exercisesList) => {
    const bodyAreasList = exercisesList.map(exercise => exercise.bodyAreas).flat();
    return bodyAreasList.filter((bodyArea, index) => bodyAreasList.indexOf(bodyArea) === index);
  }
