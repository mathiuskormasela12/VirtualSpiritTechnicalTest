// ========== Home Screen
// import all modules
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from '../themes';
import data from '../data';

// import all components
import {Button, Container, Row, Col, Card} from '../components';
import {generateSize} from '../helpers';

const HomeScreen: React.FC = (): React.ReactNode => {
  return (
    <SafeAreaView style={styles.hero}>
      <Container>
        <View style={styles.header}>
          <Row flexDirection="row">
            <Col>
              <Button type="primary">Like All</Button>
            </Col>
            <Col>
              <Button type="ligth">Reset All</Button>
            </Col>
            <Col>
              <Button type="danger">Dislike All</Button>
            </Col>
          </Row>
        </View>
        <View style={styles.main}>
          <Row asScrollView>
            {data.map(item => (
              <Col key={item.id.toString()}>
                <Card source={item.source} />
              </Col>
            ))}
          </Row>
        </View>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hero: {
    backgroundColor: Colors.gray,
    height: generateSize(100, 'height'),
  },
  header: {
    height: generateSize(10, 'height'),
    justifyContent: 'center',
  },
  main: {
    height: generateSize(77, 'height'),
  },
});

export default HomeScreen;
