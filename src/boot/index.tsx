import React from 'react';
import { View, Text } from 'react-native';

export class Background extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Lima,PE&APPID=6354042f2fff6620822e50af8c355cf6')
    .then( (results) => {
      return results.json();
    }).then( data => {
      let weather = data.list.map((w: any) => {
        return(
          [w.dt_txt && w.main]
        );
      });
      return this.setState({data: weather});
   }).catch( error => {
     console.log('error', error);
   });
  }

  render() {
    return (
      <View>
        <Text>{'hi'}</Text>
        {console.log(this.state)}
      </View>
    );
  }
}
// state management = redux
