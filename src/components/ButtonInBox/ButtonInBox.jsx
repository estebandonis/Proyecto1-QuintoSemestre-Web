import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './ButtonInBox.module.css'

const ButtonInBox = ({ onclick, nombreBoton }) => {
  return (
    <button onClick={onclick} className={styles} type="submit">{nombreBoton}</button>
  )
}

ButtonInBox.propTypes = {
  nombreBoton: PropTypes.string,
  onclick: PropTypes.func,
}

ButtonInBox.defaultProps = {
  nombreBoton: PropTypes.string,
  onclick: PropTypes.func,
}

export default ButtonInBox
