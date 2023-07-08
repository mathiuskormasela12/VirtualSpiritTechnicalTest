// ========== Home Screen
// import all modules
import React from 'react';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import {Fonts} from '../themes';

// import all components
import {Button} from '../components';

// import assets
import image1 from '../assets/images/Image-1.png';

const HomeScreen: React.FC = (): React.ReactNode => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Hello React Native</Text>
      <Button>Click Me</Button>

      <Image source={image1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'red',
    fontFamily: Fonts.bold,
  },
});

export default HomeScreen;
