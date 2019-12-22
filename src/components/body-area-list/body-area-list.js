import React from 'react';
import PropTypes from 'prop-types';
import styles from './body-area-list.module.css'

const BodyAreaList = props => {
  return (
    <span
      className={props.active ? styles.active: null}
      onClick={() => {
        props.bodyAreaOnClickHandler(props.bodyArea);
      }}>
         {props.bodyArea}
      <span className={styles.seperator}> | </span>
    </span>
  )
}

BodyAreaList.propTypes = {
  active: PropTypes.bool,
  bodyAreaOnClickHandler: PropTypes.func.isRequired
};

BodyAreaList.defaultProps = {
  active: false,
};

export default BodyAreaList
