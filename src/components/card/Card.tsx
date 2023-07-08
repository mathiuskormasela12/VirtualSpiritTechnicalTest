// =========== Card
// import all modules
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import styles from './styles';
import {Row} from '../grid/Row';
import {Col} from '../grid/Col';
import {Button} from '../button/Button';
import {CardStateTypes, ICardProps} from '../../types';

export const Card: React.FC<ICardProps> = ({
  source,
  likeActionIsDoing,
  dislikeActionIsDoing,
  resetAction,
  handleLikeActionOrDislikeActionIsDoing,
}) => {
  const [like, setLike] = useState(0);

  const handleState = (name: CardStateTypes) => {
    if (name === 'like') {
      setLike(currentLike => currentLike + 1);
    } else if (name === 'dislike') {
      setLike(currentLike => (currentLike > 0 ? currentLike - 1 : currentLike));
    } else if (name === 'reset') {
      setLike(() => 0);
    }
  };

  useEffect(() => {
    if (likeActionIsDoing) {
      handleState('like');
      handleLikeActionOrDislikeActionIsDoing('likeActionIsDoing');
    } else if (dislikeActionIsDoing) {
      handleState('dislike');
      handleLikeActionOrDislikeActionIsDoing('dislikeActionIsDoing');
    } else if (resetAction) {
      handleState('reset');
      handleLikeActionOrDislikeActionIsDoing('resetAction');
    }
  }, [
    dislikeActionIsDoing,
    likeActionIsDoing,
    resetAction,
    handleLikeActionOrDislikeActionIsDoing,
  ]);

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
