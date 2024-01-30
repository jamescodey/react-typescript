import React from 'react';
import Card from 'react-bootstrap/Card';
import { Stack } from 'react-bootstrap';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface JSONCardProps {
  user: User;
}

export const JSONCard: React.FC<JSONCardProps> = ({user}) => {
  return (
    <Card className='json-card'>
      <Card.Body className='json-card-body'>
        <Card.Title className='json-card-title'><h4><strong>{user.name}</strong></h4></Card.Title>
        <Card.Text>
          <Stack>
            <text><strong>Username:</strong> {user.username}</text>
            <text><strong>Email:</strong> {user.email}</text>
            <text><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</text>
            <text><strong>Phone:</strong> {user.phone}</text>
            <text><strong>Website</strong> {user.website}</text>
            <text><strong>Company</strong> {user.company.name}</text>
          </Stack>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
