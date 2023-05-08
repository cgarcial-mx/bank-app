import { render } from '@testing-library/react-native';
import Text from '../Text';

describe('Text', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders bold weight correctly', () => {
    const { getByTestId } = render(<Text weight="bold">Prueba</Text>);
    const text = getByTestId('text');
    expect(text).toHaveStyle({
      fontFamily: 'Bold',
    });
  });

  it('renders regular weight correctly', () => {
    const { getByTestId } = render(<Text weight="regular">Prueba</Text>);
    const text = getByTestId('text');
    expect(text).toHaveStyle({
      fontFamily: 'Regular',
    });
  });

  it('renders custom size correctly', () => {
    const { getByTestId } = render(<Text size={20}>Prueba</Text>);
    const text = getByTestId('text');
    expect(text).toHaveStyle({
      fontSize: 20,
    });
  });

  it('renders default size correctly', () => {
    const { getByTestId } = render(<Text>Prueba</Text>);
    const text = getByTestId('text');
    expect(text).toHaveStyle({
      fontSize: 14,
    });
  });

  it('renders default alignment correctly', () => {
    const { getByTestId } = render(<Text>Prueba</Text>);
    const text = getByTestId('text');
    expect(text).toHaveStyle({
      textAlign: 'left',
    });
  });
  it('renders custom alignment correctly', () => {
    const { getByTestId } = render(<Text alignment="center">Prueba</Text>);
    const text = getByTestId('text');
    expect(text).toHaveStyle({
      textAlign: 'center',
    });
  });
});
