import React from 'react';
import {View,Text} from 'react-native';
import Navigator from '_navigations';

const App = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Mot de passe
        </Text>
      </View>
    );
  }

export default App;