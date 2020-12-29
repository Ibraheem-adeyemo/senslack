import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import StarboarderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatMessage from '../chat-messages/Chat-message';
import './chat.css';
import { db } from '../../firebase';
import ChatInput from './chat-input/ChatInput.component';

const Chat = () => {
    const { roomId }: {roomId: string} = useParams();
    const [roomDetails, setRoomDetails] = useState<any>();
    const [roomMessages, setRoomMessages] = useState<any>();

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => setRoomDetails(snapshot.data())
        )
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(
            snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data()))
        )
        }
    }, [roomId]);

    console.log(roomMessages, 'room messages');

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
            <div className="chat-messages">
            {roomMessages?.map((roomMessage: any, i: number) => {
                console.log(roomMessage)
                return <div key={i}>
                    <ChatMessage message={roomMessage.message} timestamp={roomMessage.timestamp} user={roomMessage.user} userImage={roomMessage.userImage} />
                </div>
            })}
            </div>
            <ChatInput />
        </div>
    )
}

export default Chat;
