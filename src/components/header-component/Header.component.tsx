import React from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchICon from '@material-ui/icons/Search';
import HelpOutline from '@material-ui/icons/HelpOutline';
import './Header.css';
import { useStateValue } from '../stateProvider/AuthStateProvider';

const HeaderComponent = () => {

    const { state: { user }} = useStateValue()

    return (
        <div className="header">
            <div className="header__left">
                <Avatar alt={user?.displayName} src={user?.photoURL} />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchICon />
                <input placeholder="Search" />
            </div>
            <div className="header__right">
                <HelpOutline />
            </div>
        </div>
    )
}

export default HeaderComponent