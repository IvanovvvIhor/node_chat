import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
});

export const client = {
  getAllRooms: async () => {
    try {
      const response = await api.get("/room");
      return response.data;
    } catch (error) {
      console.error("Помилка отримання кімнат:", error);
      throw error;
    }
  },

  createRoom: async (nameRoom: string) => {
    try {
      const response = await api.post("/room/create", { nameRoom });
      return response.data;
    } catch (error) {
      console.error("Помилка створення кімнати:", error);
      throw error;
    }
  },

  updateRoom: async (roomId: string, newName: string) => {
    try {
      const response = await api.patch("/room/rename", {roomId, newName});

      return response.data;
    } catch (error) {
      console.error("Помилка створення кімнати:", error);
      throw error;
    }
  },

  deleteRoom: async (roomId: string) => {
    await api.delete(`/room/${roomId}`);
  },

  createUser: async (userName: string) => {
    try {
      const response = await api.post("/user/register", {userName : userName})

      return response.data;
    } catch (error) {
      console.error("Помилка створення користувача:", error);
      throw error;
    }
  },

  loginUser: async (userName: string) => {
    try {
      const response = await api.post("/user/login", {userName : userName})

      return response.data;
    } catch (error) {
      console.error("Помилка під час авторизації:", error);
      throw error;
    }
  },

  joinRoom: async (roomId: string, userId: string) => {
    try {
      const response = await api.patch("/room/join", { roomId, userId });
      return response.data;
    } catch (error) {
      console.error("Помилка приєднання до кімнати:", error);
      throw error;
    }
  },

  sendMessage: async (roomId: string, authorId: string, text: string) => {
    try {
      const response = await api.post("/message/send", { roomId, authorId, text });
      return response.data;
    } catch (error) {
      console.error("Помилка відправки повідомлення:", error);
      throw error;
    }
  },

  getMessages: async (roomId: string) => {
    try {
      const response = await api.get(`/message/${roomId}`);
      return response.data;
    } catch (error) {
      console.error("Помилка отримання повідомлень:", error);
      throw error;
    }
  },
};
