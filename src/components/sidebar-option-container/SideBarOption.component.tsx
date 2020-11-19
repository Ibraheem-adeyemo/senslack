import React from 'react';
import { useHistory } from 'react-router-dom';
import './SidebarOption.css';
import { db } from '../../firebase';

interface sidebarOptionProps {
    Icon: any,
    title: string,
    id: string,
    addChannelOption: boolean,
    handleClick?: () => void
}
const SideBarOption:React.FC<any> = ({ Icon, id, addChannelOption, title, handleClick}: sidebarOptionProps) => {
    const history = useHistory();

    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`)
        } else {
            history.push('title')
        }
    }

    const addChannel = () => {
        const newChannelName = prompt('Please enter the channel name');

        if(newChannelName) {
            db.collection('rooms').add({
                name: newChannelName
            })
        }
    }

    return (
        <div className="sidebar_option" onClick={handleClick? handleClick : addChannelOption? addChannel : selectChannel} >
            {
                Icon && <Icon className="sidebarOption_icon" />
            }
            {
                Icon ? (
                    <h3>{title}</h3>
                ) : (
                <h3 className="sidebarOption_channel">
                    <span className="sidebarOption_hash">#</span>{title}
                </h3>)
            }
        </div>
    )
}

export default SideBarOption
