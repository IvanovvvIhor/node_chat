import type { Message } from "../types";

export const MessageList = ({ messages }: { messages: Message[] }) => {

  // Функція для безпечного отримання імені
  const getAuthorName = (author: any) => {
    if (!author) return 'Невідомий';
    if (typeof author === 'object') {
      return author.userName || author.name || 'Невідомий';
    }
    return author;
  };

  // Функція для форматування часу (ГГ:ХХ)
  const formatTime = (timeData: any) => {
    if (!timeData) return '';
    const date = new Date(timeData);
    // Перевірка на валідність дати
    if (isNaN(date.getTime())) return '';
    return date.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div style={{
      flexGrow: 1,
      overflowY: 'auto',
      border: '1px solid #ddd',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
      minHeight: '300px'
    }}>
      {messages.length === 0 && (
        <p style={{ color: '#888', textAlign: 'center', marginTop: '20px' }}>
          Повідомлень ще немає.
        </p>
      )}

      {messages.map(msg => (
        <div key={(msg as any)._id || (msg as any).id} style={{
          marginBottom: '10px',
          padding: '10px',
          backgroundColor: '#f9f9f9',
          border: '1px solid #eee',
          borderRadius: '6px',
          display: 'flex',
          flexDirection: 'column' // Робимо стовпчик, щоб час був під текстом, або збоку
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <strong style={{ color: '#007bff' }}>{getAuthorName(msg.authorId)}</strong>
            <span style={{ color: '#aaa', fontSize: '12px' }}>
              {formatTime((msg as any).time || (msg as any)._time)}
            </span>
          </div>
          <span style={{ color: '#333' }}>{msg.text}</span>
        </div>
      ))}
    </div>
  );
};
