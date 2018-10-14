import React from 'react';
import { Text } from 'react-native';

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[{color: 'rgba(96,100,109, 0.8)', fontFamily: 'space-mono' }]} />;
  }
}
