// ========== Home Screen
// import all modules
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

// import all components
import {Button, Container, Row, Col} from '../components';
import {Colors} from '../themes';

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
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hero: {
    backgroundColor: Colors.gray,
    height: '100%',
  },
  header: {
    paddingVertical: 20,
  },
});

export default HomeScreen;
