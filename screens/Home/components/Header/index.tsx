import { StyleSheet, View } from 'react-native';
import Text from '@components/Text';

const Header = () => {
  return (
    <View style={styles.root}>
      <Text weight="bold">Bienvenido de vuelta!</Text>
      <Text>Ruben Rodriguez</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
  },
});

export default Header;
