import { Image, StyleSheet, View } from 'react-native';

type ImageContainerProps = {
  image: string;
};
const ImageContainer: React.FC<ImageContainerProps> = ({ image }) => {
  return (
    <View style={styles.root}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
  },
});

export default ImageContainer;
