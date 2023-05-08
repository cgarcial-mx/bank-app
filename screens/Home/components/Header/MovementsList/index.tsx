import { StyleSheet, View } from 'react-native';
import Text from '@components/Text';
import Colors from '@constants/Colors';

const MovementsList = () => {
  return (
    <View>
      <Text weight="bold" color={Colors.gray}>
        TUS MOVIMIENTOS
      </Text>
      <View style={styles.card}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
});

export default MovementsList;
