import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Forms, Label, Input,RegBtn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Forms  onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Sign up
        <Input type="text" name="name" placeholder="User name"/>
        <Input type="email" name="email" placeholder="Email"/>
        <Input type="password" name="password" placeholder="Password"/>
      </Label>
      <RegBtn type="submit">Register</RegBtn>
    </Forms>
  );
};
