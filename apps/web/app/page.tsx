import { prisma } from '@db'
import React from "react";
import User from './user';

async function getData() {
  const users = await prisma.user.findMany();

  return users;
}

export default async function Page() {
  const users = await getData();
  
  return (
    <h1>
      <User/>
      🚀
      {users.map((user)=> (<h1>{user.name}</h1>))}
    </h1>);
}
