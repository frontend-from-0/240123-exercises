import {UserPage} from '../index';
import {render, screen, fireEvent} from '@testing-library/react';

describe('<UserPage /> component', function () {
  it('should render correctly', function () {
    render(<UserPage />);

    // get(ByTestId) is used when element IS on the screen.
    // query(ByTestId) is used when element IS NOT on the screen.
    const usernameInput = screen.getByTestId('user-name-input');
    const dialog = screen.queryByTestId('dialog');

    expect(dialog).toBeFalsy();
  });

  it('should show error when requirede fields are not submitted', function () {
    // TODO
  });

  it('should be possible to submit the form', async function () {
    render(<UserPage />);

    const usernameInput = screen.getByLabelText("User Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");


    fireEvent.change(usernameInput, {target: {value: 'John Doe'}});
    fireEvent.change(emailInput, {target: {value: 'John@gmail.com'}});
    fireEvent.change(passwordInput, {target: {value: 'johndoe2345'}});

    fireEvent.click(screen.getByTestId('submit-btn'));

    // The dialog does not appear on the screen immediately so using screen.getByTestId('dialog') does not work in this case. Instead, screen.findByTestId can be used in combination with async / await. See more here: https://testing-library.com/docs/guide-disappearance
    const dialog = await(screen.findByTestId('dialog'));
    expect(dialog).toBeInTheDocument();
  });
});