import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './ButtonTransparent.module.css'

const ButtonTransparent = ({ nombreBoton, link }) => {
  return (
    <div className={styles}>
      <button type="submit">
        {
        link ?
          <img src={link} alt="imagen" />
          : null
        }
        <div>{nombreBoton}</div>
      </button>
    </div>
  )
}

ButtonTransparent.propTypes = {
  nombreBoton: PropTypes.string,
  link: PropTypes.string,
}

ButtonTransparent.defaultProps = {
  nombreBoton: PropTypes.string,
  link: PropTypes.string,
}

export default ButtonTransparent
