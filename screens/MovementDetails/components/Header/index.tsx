import Text from '@components/Text';
import Colors from '@constants/Colors';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HeaderProps = {
  name: string;
};

const Header: React.FC<HeaderProps> = ({ name }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.root,
        {
          paddingTop: 102 - insets.top,
        },
      ]}
    >
      <Text weight="bold" size={24}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    backgroundColor: Colors.backgroundHeader,
    paddingBottom: 24,
  },
});

export default Header;
