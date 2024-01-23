import {Counter} from '../index';
import {render, screen, fireEvent} from '@testing-library/react';

test('Example test', function () {
  const x = 2;
  // function here 
  expect(x).toEqual(2);
});

describe('<Counter /> component', function () {
  it('Should render correctly', function () {
    render(<Counter />);

    const countText = screen.getByTestId('count-amount');

    expect(countText).toHaveTextContent('0');
  });

  it('should increment count value correctly', function () {
    render(<Counter />);

    const countText = screen.getByTestId('count-amount');
    const plusButton = screen.getByTestId('plus-button');

    fireEvent.click(plusButton);
    expect(countText).toHaveTextContent('1');
    
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(countText).toHaveTextContent('3');
  });

  // TODO
  it('should decrement count value correctly', function () {
    render(<Counter />);


    const minusButton = screen.getByTestId('minus-button');
  });

  it('should render component with specified initial count correctly', function () {
    const initialState = {count: 3};
    render(<Counter initialState={initialState}/>);

    expect(screen.getByTestId('count-amount')).toHaveTextContent('3');
  });
});