import React from 'react'

import { styles } from './AddTaskBox.module.css'

const AddTaskBox = () => {
  return (
    <div className={styles}>
      <img src="https://pomofocus.io/icons/plus-circle-white.png" alt="Circulo" />
      <div>Add Task</div>
    </div>
  )
}

export default AddTaskBox
