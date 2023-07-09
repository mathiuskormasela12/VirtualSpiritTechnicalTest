// =========== Card
// import all modules
import React, {useEffect} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {useCard} from '../../hooks';

// import types
import {ICardProps} from '../../types';

// import styles
import styles from './styles';

// import all components
import {Row, Col, Button} from '../';

export const Card: React.FC<ICardProps> = ({source}) => {
  const [like, handleState, startEffect, states] = useCard();

  useEffect(() => {
    startEffect();
  }, [states, startEffect]);

  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.header}>
        <Image source={source} style={styles.img} />
      </View>
      <View style={styles.footer}>
        <View style={styles.wrapper}>
          <Row flexDirection="row">
            <Col>
              <Button small type="ligth">
                {like} Like
              </Button>
            </Col>
            <Col>
              <View style={styles.btnCol}>
                <Button
                  small
                  type="primary"
                  marginRight={2}
                  onPress={() => handleState('like')}>
                  Like
                </Button>
                <Button
                  small
                  disabled={like < 1}
                  type="danger"
                  onPress={() => handleState('dislike')}>
                  Dislike
                </Button>
              </View>
            </Col>
          </Row>
        </View>
      </View>
    </SafeAreaView>
  );
};
