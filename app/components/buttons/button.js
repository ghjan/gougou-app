import React, { PropTypes, Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

const Button = ({onPress, disabled, style, containerStyle, text}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.75}>
    <View style={containerStyle}>
      <Text style={style}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
)

Button.propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  containerStyle: View.propTypes.style,
  text: PropTypes.string
}

Button.defaultProps = {
  onPress() { },
  disabled: false
}

export default Button
