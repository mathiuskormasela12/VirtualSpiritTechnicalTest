// ========== Home Screen
// import all modules
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from '../themes';
import data from '../data';

// import all components
import {Button, Container, Row, Col, Card} from '../components';
import {generateSize} from '../helpers';
import {CardActionTypes} from '../types';

const HomeScreen: React.FC = (): React.ReactNode => {
  const [states, setStates] = useState({
    likeActionIsDoing: false,
    dislikeActionIsDoing: false,
    resetAction: false,
  });

  const handleLikeActionOrDislikeActionIsDoing = (name: CardActionTypes) => {
    setStates(currentState => ({
      ...currentState,
      [name]: !currentState[name],
    }));
  };

  return (
    <SafeAreaView style={styles.hero}>
      <Container>
        <View style={styles.header}>
          <Row flexDirection="row">
            <Col>
              <Button
                type="primary"
                onPress={() =>
                  handleLikeActionOrDislikeActionIsDoing('likeActionIsDoing')
                }>
                Like All
              </Button>
            </Col>
            <Col>
              <Button
                type="ligth"
                onPress={() =>
                  handleLikeActionOrDislikeActionIsDoing('resetAction')
                }>
                Reset All
              </Button>
            </Col>
            <Col>
              <Button
                type="danger"
                onPress={() =>
                  handleLikeActionOrDislikeActionIsDoing('dislikeActionIsDoing')
                }>
                Dislike All
              </Button>
            </Col>
          </Row>
        </View>
        <View style={styles.main}>
          <Row asScrollView>
            {data.map(item => (
              <Col key={item.id.toString()}>
                <Card
                  source={item.source}
                  likeActionIsDoing={states.likeActionIsDoing}
                  dislikeActionIsDoing={states.dislikeActionIsDoing}
                  resetAction={states.resetAction}
                  handleLikeActionOrDislikeActionIsDoing={
                    handleLikeActionOrDislikeActionIsDoing
                  }
                />
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
