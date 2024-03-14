import React from 'react'
import { chatData, MessageType } from './chatData'
import './chat.css'

const Chat = () => {
  const chooseMessageStyling = (messageType) => {
    let messageClass
    switch (messageType) {
      case MessageType.Sender:
        messageClass = 'sender'
        break
      case MessageType.Receiver:
        messageClass = 'receiver'
        break
      default:
        messageClass = 'comment'
    }

    return messageClass
  }

  const renderChatData = chatData.map((message) => {
    return (
      <div className="chatBox">
        <div key={message.id} className={chooseMessageStyling(message.msgType)}>
          <div className="name">{message.name}:</div>
          <div className="bubble">{message.msg}</div>
        </div>
      </div>
    )
  })

  return <div className="chatContainer">{renderChatData}</div>
}

export default Chat
