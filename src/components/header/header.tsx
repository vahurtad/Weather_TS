import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MonoText } from '../../components/StyledText';

interface CompProps {
  title: string
}

const Header = (props: CompProps) => {
  return (
    <View style= { styles.container }>
    <MonoText style={{color: '#fff', fontSize: 30}} text={props.title}/>
    </View>
    );
  };

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1abc9c'
    },
    titleText: {
      color: '#fff',
      fontSize: 30
    }
  });

  export default Header;
