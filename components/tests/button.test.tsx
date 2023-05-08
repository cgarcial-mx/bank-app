import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';
import Colors from '@constants/Colors';
import { toHaveStyle } from '@testing-library/jest-native'; // this is failing in the last version.

describe('Button', () => {
  const onPressMock = jest.fn();
  const title = 'Press me';

  it('renders correctly', () => {
    const { getByText } = render(
      <Button title={title} onPress={onPressMock} />,
    );
    expect(getByText(title)).toBeDefined();
  });

  it('calls onPress function when pressed', () => {
    const { getByText } = render(
      <Button title={title} onPress={onPressMock} />,
    );
    fireEvent.press(getByText(title));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('has correct styles', () => {
    const { getByText } = render(
      <Button title={title} onPress={onPressMock} />,
    );
    const button = getByText(title).parent;
    expect(button).toHaveStyle({
      flex: 1,
      backgroundColor: Colors.primary,
      borderRadius: 10,
      padding: 14,
    });
  });
});
