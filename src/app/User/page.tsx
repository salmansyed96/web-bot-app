import React from 'react';
import UserTable from '../components/UserTable';
import { User } from './columns';

async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch(
      'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
    );
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await res.json();
    return data;  
  } catch (error) {
    console.error('Error fetching users:', error);
    return []; // Return an empty array or handle the error as needed
  }
}

export default async function Users() {
  const users = await getUsers();

  return (
    <>
      <h1 style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px', fontWeight: 'bold', fontSize: '40px' }}>User</h1>
      <UserTable users={[]}/>
    </> 
  );
}
