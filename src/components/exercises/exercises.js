import React, { Component } from 'react';
import styles from './exercises.module.css'
import ExerciseImage from '../exercise-image/exercise-image';
import { Card, Accordion, Button } from 'react-bootstrap';

const Exercises = props => {
  return (
    <Accordion defaultActiveKey="0" style={{marginTop: 40}}>
      {props.exercisesList.map(exercise => (
        <Card key={exercise.id}>
          <center>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={exercise.id}>
              {exercise.name}
            </Accordion.Toggle>
              <h6 className="card-subtitle mb-2 text-muted">{exercise.bodyAreas.map((area, index) => <span key={index} className={props.activeArea === area ? styles.activeArea : null}>{area} </span>)}</h6>
            </Card.Header>
          </center>
          <Accordion.Collapse eventKey={exercise.id}>
            <Card.Body>
            <div className="container" style={{marginTop: 40}}>
              <div className="row">
                <div className="col-4">
                  <ExerciseImage exercise = {exercise} />
                </div>
                <div className="col-8">
                  <span dangerouslySetInnerHTML={{__html: exercise.transcript || ''}}>
                  </span>
                </div>
              </div>
            </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  )
}

// TODO Define proptypes and default props for everything - this and other classes.
export default Exercises;
