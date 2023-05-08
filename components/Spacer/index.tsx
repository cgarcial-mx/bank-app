import { View } from 'react-native';

type SpacerProps = {
  width?: number;
  height?: number;
};

const Spacer: React.FC<SpacerProps> = ({ width, height }) => {
  return <View style={{ width, height }} />;
};

export default Spacer;
