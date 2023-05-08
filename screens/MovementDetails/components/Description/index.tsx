import Spacer from '@components/Spacer';
import Text from '@components/Text';
import Colors from '@constants/Colors';
import { StyleSheet, View } from 'react-native';

type DescriptionProps = {
  date: string;
  points: number;
};

const Description: React.FC<DescriptionProps> = ({ date, points }) => {
  return (
    <View>
      <Text weight="bold" color={Colors.gray}>
        Detalles del producto:
      </Text>
      <Spacer height={20} />
      <Text weight="bold" size={16}>
        Comprado el {date}
      </Text>
      <Spacer height={20} />
      <Text weight="bold" color={Colors.gray}>
        Con esta compra acumulaste:
      </Text>
      <Spacer height={32} />
      <Text weight="bold" size={24}>
        {points} puntos
      </Text>
    </View>
  );
};

export default Description;
