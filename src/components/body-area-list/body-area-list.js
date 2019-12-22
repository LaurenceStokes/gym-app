import React from 'react';
import styles from './body-area-list.module.css'

const BodyAreaList = props => {
  return (
    <span
      className={props.active ? styles.active: null}
      onClick={() => {
        props.bodyAreaOnClickHandler(props.bodyArea);
      }}>
        {props.bodyArea}
      <span className={styles.seperator}>|</span>
    </span>
  )
}

export default BodyAreaList
