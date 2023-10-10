import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "https://challenge.photier.com";
const TOKEN = "3ff0695a1a16fc4814f4baf64ebac6af";

const StartChallenge = () => {
  const [email, setEmail] = useState("");

  const startChallenge = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/start/`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      console.log("Challenge başlatıldı:", response.data);
    } catch (error) {
      console.error("Challenge başlatılırken hata oluştu:", error);
    }
  };

  return (
    <div>
      <h2>Challenge Başlat</h2>
      <input
        type="email"
        placeholder="E-posta adresinizi girin"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={startChallenge}>Başlat</button>
    </div>
  );
};

export default StartChallenge;