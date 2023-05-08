import Text from '@components/Text';
import Colors from '@constants/Colors';
import { Pressable, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text weight="bold" size={16} color="white" alignment="center">
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 14,
  },
});

export default Button;
