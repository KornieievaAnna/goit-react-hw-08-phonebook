import { useAuth } from 'hooks';
import { NavLinks } from '../AuthNav/AuthNav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinks to="/">
        Home
      </NavLinks>
      {isLoggedIn && (
        <NavLinks to="/contacts">
          Contacts
        </NavLinks>
      )}
    </nav>
  );
};
