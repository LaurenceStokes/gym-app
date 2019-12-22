import React, { Component } from 'react';
import styles from './exercises.module.css'
import ExerciseImage from '../exercise-image/exercise-image';

class Exercises extends Component  {

  render() {
    return (
      <div style={{marginTop: 50}}>
        {this.props.exercisesList.map((exercise) => (
                  <div id={'accordion'+exercise.id} key={exercise.id} style={{marginTop: 20, marginBottom: 20}}>
                    <div className="card">
                      <div className="card-header" id={'heading'+exercise.id} >
                        <center>
                          <button className="btn btn-link" data-toggle="collapse" data-target={'collapse'+exercise.id} aria-expanded="false" aria-controls={'collapse'+exercise.id} >
                            {exercise.name}
                          </button>
                          <h6 className="card-subtitle mb-2 text-muted">{exercise.bodyAreas.map((area, index) => <span key={index} className={this.props.activeArea === area ? styles.activeArea : null}>{area} </span>)}</h6>
                        </center>
                      </div>

                      <div id={'collapse'+exercise.id} className="collapse show" aria-labelledby={'heading'+exercise.id} data-parent={'accordion'+exercise.id}>
                        <div className="card-body">
                          <ExerciseImage exercise = {exercise} />

                          <div style={{marginTop: 40}}>
                            <span dangerouslySetInnerHTML={{__html: exercise.transcript || ''}}>
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                </div>
        ))}
      </div>
    )
  }
}

export default Exercises
