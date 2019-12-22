import React, { Component } from 'react';
import styles from './exercises.module.css'
import ExerciseImage from '../exercise-image/exercise-image';
import { Card, Accordion, Button } from 'react-bootstrap';

const Exercises = props => {
  return (
    <Accordion defaultActiveKey="0">
      {props.exercisesList.map(exercise => (
        <Card key={exercise.id}>
          <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={exercise.id}>
            {exercise.name}
            <center>
              <h6 className="card-subtitle mb-2 text-muted">{exercise.bodyAreas.map((area, index) => <span key={index} className={props.activeArea === area ? styles.activeArea : null}>{area} </span>)}</h6>
            </center>
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={exercise.id}>
            <Card.Body>
              <ExerciseImage exercise = {exercise} />
              <div style={{marginTop: 40}}>
                <span dangerouslySetInnerHTML={{__html: exercise.transcript || ''}}>
                </span>
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
