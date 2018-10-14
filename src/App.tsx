import React from 'react';
import Moment from 'react-moment';
import { StyleSheet,  View, ScrollView } from 'react-native';
import { MonoText } from './components/StyledText';
import * as data from '../weather.json';
import Weather, { Datum, Description, MainEnum }  from './boot/WeatherProps';
// import { Background } from './boot/index';
export interface State {}

class HomeScreen extends React.Component<Weather, State> {
  static navigationOptions = {
    title: 'Home'
  };
  static defaultProps = data;
  render() {
    const { container, content } = styles;
    return (
      <View style={container}>
        <View style={content}>
          <MonoText>{this.props.city.name}{','}{this.props.city.country}</MonoText>
          <ScrollView horizontal={true}>
            {this.props.data.map( (d: Datum) => {
            return (
              d.weather.map(weather => {
                return (
                  <View key={weather.id}>
                    <Moment unix={true} element='Text' >{d.dt}</Moment>
                     <Weather  {...weather}/>
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

const Weather = (props: ScreenProps) => {
  const { container, content } = styles;
  return (
    <View style={container}>
      <View key={props.id} style={content}>
        <MonoText>{props.main}</MonoText>
        <MonoText>{props.description}</MonoText>
      </View>
    </View>
  );
};
interface ScreenProps {
  id: number,
  main: MainEnum,
  description: Description
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center'
  },
  header: {
    flex: 1
  },
  content: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;
