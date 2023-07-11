import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.contexts';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/auth'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
