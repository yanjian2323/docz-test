import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  render() {
    const { buttonText } = this.props
    return (
      <button>{buttonText}</button>
    )
  }
}
Button.defaultProps = {
  // buttonText: PropTypes.string,
  name: '按钮'
}

Button.propTypes = {
  name: PropTypes.string,
}

export default Button