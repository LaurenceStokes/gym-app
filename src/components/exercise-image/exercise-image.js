import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './exercise-image.module.css'

const ExerciseImage = props => {
  const [activeSex, setActiveSex] = useState('female')
  return (
    <>
      <div>
        <img
          src={
            activeSex === 'male'
              ? props.exercise.male.image
              : props.exercise.female.image
          }
          alt={props.exercise.name + '-' + activeSex}
          style={{ "width" : "100%", maxWidth: 200}}
        />
      </div>
      <div style={{"width" : "100%", maxWidth: 200, maxHeight: 45, marginTop: 20 }}>
        <center>
          <img
            src='https://image.flaticon.com/icons/png/512/32/32551.png'
            alt='male-gender-icon'
            className={cx(styles.genderIcon, styles.genderIconMale, {
              [styles.activeSex]: activeSex === 'male'
            })}
            onClick={() => setActiveSex('male')}
          />
          <img
            src='https://image.flaticon.com/icons/png/512/2088/2088808.png'
            alt='female-gender-icon'
            className={cx(styles.genderIcon, styles.genderIconFemale, {
              [styles.activeSex]: activeSex === 'female'
            })}
            onClick={() => setActiveSex('female')} // TODO ENUM
          />
        </center>
      </div>
    </>
  )
}

ExerciseImage.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    female: PropTypes.shape({
      image: PropTypes.string.isRequired
    }).isRequired,
    male: PropTypes.shape({
      image: PropTypes.string.isRequired
    }).isRequired,
    bodyAreas: PropTypes.arrayOf(PropTypes.string)
  })
}

ExerciseImage.defaultProps = {
  exercise: PropTypes.shape({})
}

export default ExerciseImage
