import { StyleSheet, View } from 'react-native';
import Colors from '@constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import Description from './components/Description';
import Spacer from '@components/Spacer';
import Button from '@components/Button';
import { NavigationProp } from '@react-navigation/native';
import { RootParamList } from '@types/Navigation';
type MovementDetailsScreenProps = {
  route: {
    params: {
      product: string;
      points: number;

      createdAt: string;
      image: string;
    };
  };
  navigation: NavigationProp<ReactNavigation.RootParamList>;
};

const MovementDetailsScreen: React.FC<MovementDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const { product, points, image, createdAt } = route.params;

  const goBack = () => navigation.goBack();

  return (
    <>
      <SafeAreaView style={styles.root}>
        <Header name={product} />
        <View style={styles.container}>
          <ImageContainer image={image} />
          <Spacer height={32} />
          <Description date={createdAt} points={points} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Aceptar'} onPress={goBack} />
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor={Colors.backgroundHeader} />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.backgroundPage,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
});

export default MovementDetailsScreen;
