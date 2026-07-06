import { useState } from "react";
import { client } from "../services/client";

export const CreateRoomModal = ({ onRoomCreated }: { onRoomCreated: () => void }) => {
  const [name, setName] = useState('');

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await client.createRoom(name);
      setName('');
      onRoomCreated();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleCreate} style={{ marginBottom: '20px' }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Назва нової кімнати"
        style={{ padding: '8px', marginRight: '10px', background: '#222', color: '#fff', border: '1px solid #555' }}
      />
      <button type="submit" style={{ padding: '8px 15px', background: '#444', color: '#fff', border: 'none', cursor: 'pointer' }}>Створити</button>
    </form>
  );
};
