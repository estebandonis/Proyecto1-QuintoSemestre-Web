import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './ButtonWhite.module.css'

const ButtonWhite = ({ nombreBoton }) => {
  return (
    <button className={styles} type="submit">{nombreBoton}</button>
  )
}

ButtonWhite.propTypes = {
  nombreBoton: PropTypes.string,
}

ButtonWhite.defaultProps = {
  nombreBoton: PropTypes.string,
}

export default ButtonWhite
