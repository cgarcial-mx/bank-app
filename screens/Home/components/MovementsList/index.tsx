import { FlatList, StyleSheet, View } from 'react-native';
import Text from '@components/Text';
import Colors from '@constants/Colors';
import { type Movements } from '@types/Models';
import Item from '../Item';
import Spacer from '@components/Spacer';
import Button from '@components/Button';

type MovementsListProps = {
  list: Array<Movements>;
  listType?: 'all' | 'redeemed' | 'earned';
  setListType?: (type: 'all' | 'redeemed' | 'earned') => void;
};

const MovementsList: React.FC<MovementsListProps> = ({
  list,
  listType,
  setListType,
}) => {
  const _renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <Text weight="bold" color={Colors.gray}>
        TUS MOVIMIENTOS
      </Text>
      <Spacer height={20} />
      <View style={styles.card}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={_renderItem}
          style={styles.list}
          ItemSeparatorComponent={() => <Spacer height={8} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Spacer height={43} />
      {listType !== 'all' && (
        <View style={styles.buttonContainer}>
          <Button title="Todos" onPress={() => setListType('all')} />
        </View>
      )}
      {listType === 'all' && (
        <View style={styles.buttonContainer}>
          {/* Los botones de ganados y canjeados tiene otro tamaño de letra y padding, no respetan el design system, decidí conservarlo como el que dice todos. */}
          <Button title="Ganados" onPress={() => setListType('earned')} />
          <Spacer width={13} />
          <Button title="Canjeados" onPress={() => setListType('redeemed')} />
        </View>
      )}
      <Spacer height={40} />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MovementsList;
