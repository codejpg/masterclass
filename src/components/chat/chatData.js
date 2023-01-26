export const MessageType = {
    Sender: 'sender',
    Receiver: 'receiver',
    Comment: 'comment',
};



export const chatData = [
    {
        name: 'Anna',
        msg: 'Hello',
        msgType: MessageType.Sender,
    },
    {
        name: 'Katja',
        msg: 'Hello',
        msgType: MessageType.Receiver,
    },
    {
        msg: 'Hello',
        msgType: MessageType.Comment,
    },
];
