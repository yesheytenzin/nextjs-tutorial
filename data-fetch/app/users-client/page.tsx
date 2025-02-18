"use client";
import React, { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UserClient() {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("user could not be fetched");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("unknown error occured");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <div>loading ....</div>;
  if (error) return <div>{error}</div>;
  return (
    <ul className="space-y-4 p-4">
      {user.map((user) => (
        <li key={user.id} className="P-4 bg-white text-gray-700">
          <div>{user.name}</div>
          <div>username: {user.username}</div>
          <div>email: {user.email}</div>
          <div>phone: {user.phone}</div>
        </li>
      ))}
    </ul>
  );
}
