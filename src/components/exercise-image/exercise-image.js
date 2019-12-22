import React, { Component } from 'react';
import styles from './exercise-image.module.css'

class ExerciseImage extends Component  {

  state = {
    activeSex: 'female'
  }

  setActiveSex = (sex) => {
    this.setState({activeSex: sex});
  }

  render() {

    return (
      <div>
          <div>
              <img src={this.state.activeSex === 'male' ? this.props.exercise.male.image : this.props.exercise.female.image} alt="pull-up" style={{width: 200, height: 200}}></img>
          </div>
          <div style={{width: 200, height: 45, marginTop: 20}}>
            <center>
              <img src="https://image.flaticon.com/icons/png/512/32/32551.png" alt="male-gender-icon" className={`${styles.genderIcon} ${styles.genderIconMale} ${this.state.activeSex === 'male' ? styles.activeSex : null}`} onClick={ () => { this.setActiveSex('male') }} ></img>
              <img src="https://image.flaticon.com/icons/png/512/2088/2088808.png" alt="female-gender-icon" className={`${styles.genderIcon} ${styles.genderIconFemale} ${this.state.activeSex === 'female' ? styles.activeSex : null}`} onClick={ () => { this.setActiveSex('female') }}></img>
            </center>
          </div>
      </div>
    )
  }
}

export default ExerciseImage
