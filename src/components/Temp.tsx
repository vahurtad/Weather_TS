import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as data from '../../weather.json';

class Temp extends React.Component {
  static defaultProps = data;
  render() {
      return (
      <View>
        {console.log(this.props.data)}
        <Text>{'ss'}</Text>
      </View>
    );
  }
}

export default Temp;
