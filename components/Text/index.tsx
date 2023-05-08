import { PixelRatio, Text as RNText, useWindowDimensions } from 'react-native';

type TextProps = {
  children: React.ReactNode;
  weight?: 'regular' | 'bold';
  size?: number;
  color?: string;
  alignment?: 'auto' | 'left' | 'right' | 'center';
  style?: object;
};

const Text: React.FC<TextProps> = ({
  children,
  weight = 'regular',
  size = 14,
  color = 'black',
  alignment = 'left',
  style,
}) => {
  const scaleFont = (size: number) => size * PixelRatio.getFontScale() * 0.5;

  const returnFont = (weight: string | undefined): string => {
    switch (weight) {
      case 'regular':
        return 'Regular';
      case 'bold':
        return 'Bold';
      default:
        return 'Regular';
    }
  };
  return (
    <RNText
      testID="text"
      style={{
        fontSize: scaleFont(size),
        color,
        fontFamily: returnFont(weight),
        textAlign: alignment ? alignment : 'center',
        ...style,
      }}
    >
      {children}
    </RNText>
  );
};

export default Text;
