import React from 'react'
import "./chat-message.css";
import { Avatar } from '@material-ui/core';

interface ChatMessage {
    message: string,
    timestamp: any,
    user: string,
    userImage: string
}
const ChatMessage = ({message, timestamp, user, userImage}: ChatMessage) => {
    return (
        <div className="chat-message">
            <Avatar alt={user} src={userImage} variant='rounded' />
            <div className="message-info">
                <div className="msg-header">
                    <h3>{user} <span className='message-time-stamp'>
                            {new Date(timestamp?.toDate()).toUTCString()}
                        </span> 
                    </h3>
                </div>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage
