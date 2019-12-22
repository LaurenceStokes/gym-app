import React, { Component } from 'react';
import styles from './exercises.module.css'
import ExerciseImage from '../exercise-image/exercise-image';

class Exercises extends Component  {


  render() {
    return (
      <div>
        {this.props.exercisesList.map((exercise) => (
          <div className="card" key={exercise.id}>
            <div className="card-body">
              <h5 className="card-title">{exercise.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{exercise.bodyAreas.map((area, index) => <span key={index} className={this.props.activeArea === area ? styles.activeArea : null}>{area} </span>)}</h6>
              <ExerciseImage exercise={exercise}/>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Exercises
