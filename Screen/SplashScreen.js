// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
//import { FirebaseApp } from 'firebase/app';
//import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  navigation.replace('Auth')

  
  /*useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      If not then send for Authentication
      else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 5000);
  }, []);*/

  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}>Hair Genius</Text>
      <Image
        source={require('../Image/logo.jpg')}
        style={{width: '20%', height: '10%', resizeMode: 'contain', margin: 30, borderRadius: 50}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4b0082',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});