type Author = {
  id: number;
  name: string;
};

export default async function author({ userId }: { userId: number }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: Author = await response.json();
  return (
    <div>
      <h1>written by : {user.name}</h1>
    </div>
  );
}
