import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MonoText } from '../components/StyledText';
import { WeatherElement } from '../boot/WeatherProps';
import moment from 'moment';
export interface State {}

const Weather = (props: WeatherProps) => {
  const { container, horizontal } = styles;
  return (
    <View style={container}>
      <View key={props.weather.id} style={horizontal}>
        <MonoText style={{color: '#000'}} text={props.weather.main} />
        <MonoText style={{color: '#000'}} text={props.weather.description} />
        <MonoText style={{color: '#000'}} text={moment(props.time).format('h:mm a')} />
      </View>
    </View>
  );
};

interface WeatherProps {
  weather: WeatherElement,
  time: number,
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

export default Weather;