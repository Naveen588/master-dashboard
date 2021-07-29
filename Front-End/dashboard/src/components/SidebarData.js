import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
// import AssessmentIcon from '@material-ui/icons/Assessment';
import NoteIcon from '@material-ui/icons/Note';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
 
export const SidebarData = [
  {
    title: 'Input-elements',
    path: '/Navbar/inputs',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Button',
    path: '/Navbar/LoginForm',
    icon: <NoteIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <AddShoppingCartIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Device-list',
    path: '/devicelist',
    icon: <GroupIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <MailOutlineIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <HelpIcon  />,
    cName: 'nav-text'
  }
];