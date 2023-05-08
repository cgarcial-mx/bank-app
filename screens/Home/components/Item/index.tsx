import Spacer from '@components/Spacer';
import Text from '@components/Text';
import Colors from '@constants/Colors';
import { Movements } from '@types/Models';
import { Image, StyleSheet, View } from 'react-native';

type ItemProps = {
  item: Movements;
};

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <View style={styles.root}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text weight="bold">{item.product}</Text>
        <Text size={12}>{item.createdAt}</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text
          weight="bold"
          size={16}
          color={item.isRedeemed ? Colors.red : Colors.green}
        >
          {item.isRedeemed ? '- ' : '+ '}
        </Text>
        <Text weight="bold">{item.points}</Text>
      </View>
      <Spacer width={15} />
      <Text weight="bold" size={18}>{`>`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    height: 55,
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginLeft: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
});

export default Item;
