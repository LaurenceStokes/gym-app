import React, { Component } from 'react';
import styles from './exercises.module.css'

class Exercises extends Component  {
  render() {
    return (
      <div>
        {this.props.exercisesList.map((exercise) => (
          <div className="card" key={exercise.id}>
            <div className="card-body">
              <h5 className="card-title">{exercise.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{exercise.bodyAreas.map((area, index) => <span key={index} className={this.props.activeArea === area ? styles.activeArea : null}>{area} </span>)}</h6>
              <div>
                  <img src={exercise.male.image} alt="pull-up" style={{width: 200, height: 200}}></img>
              </div>
              <div style={{width: 200, height: 45, marginTop: 20}}>
                <center>
                  <img src="https://image.flaticon.com/icons/png/512/32/32551.png" alt="male-gender-icon" style={{width: 40, height: 40, marginRight: 10}}></img>
                  <img src="https://image.flaticon.com/icons/png/512/2088/2088808.png" alt="female-gender-icon" style={{width: 40, height: 40, marginLeft: 10}}></img>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Exercises
