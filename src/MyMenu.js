import * as React from 'react';
import { DashboardMenuItem, Menu, MenuItemLink } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';
import CustomerIcon from '@material-ui/icons/People';
import BlogIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import UserIcon from '@material-ui/icons/Person';
import ManagerIcon from '@material-ui/icons/SupervisorAccount';
import CookIcon from '@material-ui/icons/Restaurant';
import SoupKitchenIcon from '@material-ui/icons/Kitchen';
import Private from '@material-ui/icons/Lock';
import Settings from '@material-ui/icons/Settings';
import Badge from '@mui/material/Badge';
import { MenuBook } from '@material-ui/icons';

export const MyMenu = (props) => (
  <Menu {...props}>
    <DashboardMenuItem />
    <MenuItemLink to="/Users" primaryText="Users" leftIcon={<UserIcon />} />
    <MenuItemLink to="/Cooks" primaryText="Cooks" leftIcon={<CookIcon />} />
    <MenuItemLink
      to="/customers"
      primaryText="Customers"
      leftIcon={<CustomerIcon />}
    />
    <MenuItemLink
      to="/Cloud_Kitchen"
      primaryText="Cloud Kitchens"
      leftIcon={<SoupKitchenIcon />}
    />
    <MenuItemLink to="/Menu" primaryText="Menu" leftIcon={<MenuIcon />} />
    <MenuItemLink to="/Blogs" primaryText="Blogs" leftIcon={<BlogIcon />} />
    <MenuItemLink
      to="/Managers"
      primaryText="Managers"
      leftIcon={<ManagerIcon />}
    />

    <MenuItemLink to="/mypage" primaryText="Protected" leftIcon={<Private />} />
    <MenuItemLink
      to="/settings"
      primaryText="Settings"
      leftIcon={<Settings />}
    />
    <MenuItemLink
      to="/CooksMenu"
      primaryText="CooksMenu"
      leftIcon={<MenuBook />}
    />
    {/* <MenuItemLink to="/custom-route" primaryText="Miscellaneous" leftIcon={<LabelIcon />}/> */}
  </Menu>
);
