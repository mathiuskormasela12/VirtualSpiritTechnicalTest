// ========== Home Screen
// import all modules
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

// import themes
import {Colors} from '../themes';

// import static data
import data from '../data';

// import all components
import {Button, Container, Row, Col, Card} from '../components';

// import helpers
import {generateSize} from '../helpers';

// import redux action
import {handleLikeAction} from '../redux/actions';

const HomeScreen: React.FC = (): React.ReactNode => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.hero}>
      <Container>
        <View style={styles.header}>
          <Row flexDirection="row">
            <Col>
              <Button
                type="primary"
                onPress={() =>
                  dispatch(handleLikeAction('LIKE_ACTION_IS_BEING_DONE', true))
                }>
                Like All
              </Button>
            </Col>
            <Col>
              <Button
                type="ligth"
                onPress={() =>
                  dispatch(handleLikeAction('RESET_ACTION_IS_BEING_DONE', true))
                }>
                Reset All
              </Button>
            </Col>
            <Col>
              <Button
                type="danger"
                onPress={() =>
                  dispatch(
                    handleLikeAction('DISLIKE_ACTION_IS_BEING_DONE', true),
                  )
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
