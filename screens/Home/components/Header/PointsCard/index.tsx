import { StyleSheet, View } from 'react-native';
import Text from '@components/Text';
import Colors from '@constants/Colors';
import Spacer from '@components/Spacer';

type PointsCardProps = {
  points: number;
};

const PointsCard: React.FC<PointsCardProps> = ({ points = 0 }) => {
  return (
    <View>
      <Text weight="bold" color={Colors.gray}>
        TUS PUNTOS
      </Text>
      <Spacer height={20} />
      <View style={styles.card}>
        <Text weight="bold" size={16} color="white">
          Diciembre
        </Text>
        <Spacer height={7} />
        <Text weight="bold" size={32} color="white" alignment="center">
          10,000 pts
        </Text>
        <Spacer height={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    elevation: 5,
    paddingHorizontal: 19,
    paddingVertical: 21,
    borderRadius: 20,
    marginHorizontal: 33,
  },
});

export default PointsCard;
