import React, { Component } from 'react';
import styles from './body-area-list.module.css'

class BodyAreaList extends Component {
    render() {
      return (
          <span className={this.props.active ? styles.active: null} onClick={ () => { this.props.filterExercises(this.props.bodyArea); this.props.setActiveBodyArea(this.props.bodyArea) }}> {this.props.bodyArea} <span className={styles.seperator}>|</span></span>
      )
    }
}

export default BodyAreaList
