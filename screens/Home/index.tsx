import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import PointsCard from './components/Header/PointsCard';
import Colors from '@constants/Colors';
import Spacer from '@components/Spacer';
import MovementsList from './components/Header/MovementsList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Header />
      <Spacer height={20} />
      <PointsCard />
      <Spacer height={20} />
      <MovementsList />
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
