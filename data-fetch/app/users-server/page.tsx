type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UserServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return (
    <div>
      <ul className="space-y-4 p-4">
        {users.map((user) => (
          <li key={user.id} className="P-4 bg-white text-gray-700">
            <div>{user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
