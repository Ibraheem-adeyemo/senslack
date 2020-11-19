import React from 'react';
import { useParams } from 'react-router-dom'
import StarboarderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './chat.css';

const Chat = () => {
    const { roomId }: {roomId: string} = useParams()
    return (
        <div className="chat">
            <div className="chat-header">
                <div className="chat-header-left">
                    <h4 className="chat-channel-name">
                        <strong># general</strong>
                        <StarboarderIcon />
                    </h4>
                </div>
                <div className="chat-header-right">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat;
