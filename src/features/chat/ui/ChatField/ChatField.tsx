const ChatField = ({ messages, onSendMessage }) => (
    <div>
        {messages.map(msg => (
            <div key={msg.id}>
                <strong>{msg.sender}:</strong> {msg.text}
            </div>
        ))}
        <input type="text" onKeyDown={e => e.key === 'Enter' && onSendMessage(e.target.value)} />
    </div>
);