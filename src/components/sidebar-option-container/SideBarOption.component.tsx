import React from 'react';
import './SidebarOption.css';

const SideBarOption:React.FC<any> = ({ Icon, title}: {Icon:any, title: string}) => {
    return (
        <div className="sidebar_option">
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
