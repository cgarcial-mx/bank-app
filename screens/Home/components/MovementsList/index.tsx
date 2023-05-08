import { Button, FlatList, StyleSheet, View } from 'react-native';
import Text from '@components/Text';
import Colors from '@constants/Colors';
import { Movements } from '@types/Models';
import Item from '../Item';
import Spacer from '@components/Spacer';

type MovementsListProps = {
  list: Array<Movements>;
};

const MovementsList: React.FC<MovementsListProps> = ({ list }) => {
  const _renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <Text weight="bold" color={Colors.gray}>
        TUS MOVIMIENTOS
      </Text>
      <View style={styles.card}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={_renderItem}
          style={styles.list}
          ItemSeparatorComponent={() => <Spacer height={8} />}
        />
      </View>
      <Spacer height={43} />
      <View style={{ marginBottom: 40 }}>
        <Button title="Ver todos" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
});

export default MovementsList;
