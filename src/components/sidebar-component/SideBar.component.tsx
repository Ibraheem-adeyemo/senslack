import React, { useState, useEffect } from 'react';
import './SideBar.css';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from '../sidebar-option-container/SideBarOption.component';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FilecopyIcon from '@material-ui/icons/FileCopy';
import ExpandlessIcon from '@material-ui/icons/ExpandLess';
import ExpandmoreIcon from '@material-ui/icons/ExpandMore';
import Logout from '@material-ui/icons/LabelOff'
import AddIcon from '@material-ui/icons/Add';
import { db } from '../../firebase';
import { useStateValue } from '../stateProvider/AuthStateProvider';

const SideBar = () => {
    const { state: {user} } = useStateValue()
    const [channels, setChannels ] = useState<any[]>([]);
    console.log(user)
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id:doc.id,
                    name: doc.data().name
                }))
            )
        ))        
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Passionate Programmer</h2>
                    <h3>
                        <FiberManualRecord />
                        {user.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SideBarOption Icon={InsertCommentIcon} title="Threads"  />
            <SideBarOption Icon={InboxIcon} title="Mentions & reactions"  />
            <SideBarOption Icon={DraftIcon} title="Saved items"  />
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser"  />
            <SideBarOption Icon={PeopleAltIcon} title="People & user groups"  />
            <SideBarOption Icon={AppsIcon} title="Apps"  />
            <SideBarOption Icon={FilecopyIcon} title="Files browser"  />
            <SideBarOption Icon={ExpandlessIcon} title="Show less"  />
            <hr />
            <SideBarOption Icon={ExpandmoreIcon} title="Channels"  />
            <hr />
            <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel"  />
            {
                channels.map(channel => (
                    <SideBarOption title={channel.name} id={channel.id} />
                ))
            }
            <SideBarOption Icon={Logout} title="Log out" />
        </div>
    )
};

export default SideBar;
