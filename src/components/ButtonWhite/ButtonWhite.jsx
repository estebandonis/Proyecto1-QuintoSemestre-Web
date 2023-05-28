import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './ButtonWhite.module.css'

const ButtonWhite = ({ estilo, nombreBoton }) => {
  return (
    <button style={estilo} className={styles} type="submit">{nombreBoton}</button>
  )
}

ButtonWhite.propTypes = {
  nombreBoton: PropTypes.string,
  estilo: PropTypes.element,
}

ButtonWhite.defaultProps = {
  nombreBoton: PropTypes.string,
  estilo: PropTypes.element,
}

export default ButtonWhite
