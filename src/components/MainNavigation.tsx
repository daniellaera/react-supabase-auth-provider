import { NavLink } from 'react-router-dom';
import { IconButton, Nav, Navbar, Tag } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { useAuth } from '../hooks/Auth';
import OffRoundIcon from '@rsuite/icons/OffRound';
import AdminIcon from '@rsuite/icons/Admin';

function MainNavigation() {
  const { user } = useAuth()
  const { signOut } = useAuth()

  const handleLogout = () => {
    signOut()
  }
  return (
    <Navbar>
      <Nav>
        <Nav.Item to={'/'} as={NavLink} icon={<HomeIcon />}>Home</Nav.Item>
        <Nav.Item to={'/blog'} as={NavLink}>News</Nav.Item>
        {user ? (
          <Nav.Item as={NavLink} to="#">
            <IconButton size='sm' onClick={handleLogout} appearance='primary' icon={<OffRoundIcon />}>Logout</IconButton>
          </Nav.Item>
        ) : (
          <Nav.Item as={NavLink} to="/login">
            <Tag color="red">Not Logged In</Tag>
          </Nav.Item>
        )}
      </Nav>
      <Nav pullRight>
        {user && <Nav.Item icon={<AdminIcon />}><p>Welcome back {user?.email}</p></Nav.Item>}
      </Nav>
    </Navbar>
  );
}

export default MainNavigation;
