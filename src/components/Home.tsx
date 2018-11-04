import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { MonoText } from './StyledText';
import * as data from '../../weather.json';
import WeatherProps, { Datum, WeatherElement }  from '../boot/WeatherProps';
import Header from './header/header';
import Weather from './Weather';

export interface State {}

class HomeScreen extends React.Component<WeatherProps, State> {
  static navigationOptions = {
    title: 'Home'
  };

  static defaultProps = data;
  render() {
    const { container, content, header } = styles;
    return (
      <View style={container}>
        <View style={header}>
          <Header title={this.props.city.name}/>
        </View>
        <View style={content}>
          <MonoText style={{color: '#000'}} text={`${this.props.city.name}${','}${this.props.city.country}`} />
          <ScrollView horizontal={true}>
            {this.props.data.map((d: Datum) => {
            return (
              d.weather.map((weather: WeatherElement) => {
                return (
                  <View key={weather.id}>
                    <Weather weather={weather} time={d.dt}/>
                  </View>
                );
              })
            );
          })}
          </ScrollView>
          {/* <Background/> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 1
  },
  content: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  horizontal : {
    flexDirection: 'column',
    backgroundColor: '#1abc9c',
    justifyContent: 'space-around',
    padding: 15
  }
});

export default HomeScreen;
