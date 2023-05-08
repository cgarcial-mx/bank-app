import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import PointsCard from './components/PointsCard';
import Colors from '@constants/Colors';
import Spacer from '@components/Spacer';
import MovementsList from './components/MovementsList';
import { useCallback, useMemo, useState } from 'react';
import { getMovements } from '@api/resolvers';
import { Movements } from '@types/Models';
import { useFocusEffect } from '@react-navigation/native';
import Text from '@components/Text';

const HomeScreen = () => {
  const [movements, setMovements] = useState<Array<Movements>>([]);

  const points = useMemo(() => {
    return movements.reduce((acc, item) => {
      return item.isRedeemed ? acc - item.points : acc + item.points;
    }, 0);
  }, [movements]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const list = await getMovements();
          setMovements(list);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []),
  );

  return (
    <SafeAreaView style={styles.root}>
      <Header />
      <Spacer height={20} />
      <PointsCard points={points} />
      <Spacer height={20} />
      <MovementsList list={movements} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.backgroundPage,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
