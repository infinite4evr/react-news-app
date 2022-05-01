import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';
import userEvent from '@testing-library/user-event';

describe('Testing Article Component', () => {
  const handler = jest.fn();
  // see if the form is visible
  test('Component renders successfully', () => {
    render(
      <Input
        label='Email'
        name='email'
        type='email'
        placeholder='Email'
        required
        value='Search'
        data-test-id='email-test'
        onChange={handler}
      />
    );

    expect(screen.findByLabelText('Email')).toBeDefined();
    expect(screen.findAllByPlaceholderText('Email')).toBeDefined();
  });

  test('Input shows error', () => {
    render(
      <Input
        label='Email'
        required
        value='Search'
        error='Some error'
        onChange={handler}
      />
    );

    expect(screen.findByText('Some error')).toBeDefined();
  });

  test('Input handles changes', async () => {
    render(<Input label='Email' value='' onChange={handler} data-test- />);

    await waitFor(() =>
      userEvent.type(screen.getByLabelText('Email'), 'sudhanshu@gmail.com')
    );

    expect(handler).toHaveBeenCalledTimes('sudhanshu@gmail.com'.length);
  });
});
