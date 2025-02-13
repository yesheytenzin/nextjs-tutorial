import React from "react";

export default function ComplexLayout({
  children,
  revenue,
  users,
  notifications,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogged = true; // display conent based on auth
  return isLogged ? (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="p-2">{users}</div>
        <div className="p-2">{revenue}</div>
        <div className="p-2">{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
}
