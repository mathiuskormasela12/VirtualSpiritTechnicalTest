// =========== Card
// import all modules
import React, {useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './styles';
import {Row} from '../grid/Row';
import {Col} from '../grid/Col';
import {Button} from '../button/Button';
import {ICardProps} from '../../types';

export const Card: React.FC<ICardProps> = ({source}) => {
  const [like, setLike] = useState(0);

  const handleState = (name: 'like' | 'dislike') => {
    if (name === 'like') {
      setLike(currentLike => currentLike + 1);
    } else {
      setLike(currentLike => (currentLike > 0 ? currentLike - 1 : currentLike));
    }
  };

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
