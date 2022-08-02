import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from '../components/Button';

describe('Button component', () => {
  it('Button isInForm true available', () => {
    const { Button1 } = render(<Button disabledStyle={true} isInForm={true} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    expect(Button1).toMatchSnapshot();
  });
  it('Button isInForm true disable', () => {
    const { Button2 } = render(<Button disabledStyle={false} isInForm={true} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    expect(Button2).toMatchSnapshot();
  });
  it('Button isInForm false available', () => {
    const { Button3 } = render(<Button disabledStyle={true} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    expect(Button3).toMatchSnapshot();
  });
  it('Button isInForm false disable', () => {
    const { Button4 } = render(<Button disabledStyle={false} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    expect(Button4).toMatchSnapshot();
  });
});
