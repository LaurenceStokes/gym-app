import React from 'react'
import styles from './exercises.module.css'

const Exercises = ({ exercisesList, activeArea }) => {
  return (
    <div>
      {exercisesList.map((exercise) => (
        <div className="card" key={exercise.id}>
          <div className="card-body">
            <h5 className="card-title">{exercise.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{exercise.bodyAreas.map((area, index) => <span key={index} className={activeArea === area ? styles.activeArea : null}>{area} </span>)}</h6>
              <img src={exercise.male.image} alt="pull-up" style={{width: 200, height: 200}}></img>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Exercises
