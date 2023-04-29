import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Forms, Label, Input,RegBtn } from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Forms onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Login
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
      </Label>
      <RegBtn type="submit">Log In</RegBtn>
    </Forms>
  );
};
