import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './body-area-list.module.css';

const BodyAreaList = props => {
  return (
    <span
      className={cx(styles.bodyAreaItem, {
        [styles.active]: props.active
      })}
      onClick={() => {
        props.bodyAreaOnClickHandler(props.bodyArea);
      }}
    >
      {props.bodyArea}
    </span>
  );
};

BodyAreaList.propTypes = {
  active: PropTypes.bool,
  bodyAreaOnClickHandler: PropTypes.func.isRequired,
  bodyArea: PropTypes.string.isRequired
};

BodyAreaList.defaultProps = {
  active: false
};

export default BodyAreaList;
