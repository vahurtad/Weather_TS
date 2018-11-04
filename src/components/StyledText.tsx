import React from 'react';
import { Text , StyleSheet } from 'react-native';

export class MonoText extends React.Component<TextInt> {
  render() {
    return <Text style={[styles.textStyle, this.props.style]}>{this.props.text}</Text>;
  }
}

interface TextInt {
  style: {},
  text: string
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'space-mono'
  }
});