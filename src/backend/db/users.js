import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    password: 'adarshBalika123',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Rucha',
    lastName: 'Kathar',
    username: 'rucha',
    password: 'rucha123',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Amit',
    lastName: 'Sharma',
    username: 'amitsharma',
    password: 'password123',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Rohan',
    lastName: 'Gupta',
    username: 'rohangupta',
    password: 'password456',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Shreya',
    lastName: 'Sinha',
    username: 'shreyasinha',
    password: 'password789',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Anjali',
    lastName: 'Mehta',
    username: 'anjalimehta',
    password: 'password012',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Kiara',
    lastName: 'Kapoor',
    username: 'kiarakapoor',
    password: 'password321',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Aditya',
    lastName: 'Singh',
    username: 'adityasingh',
    password: 'password432',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Akanksha',
    lastName: 'Gandhi',
    username: 'akankshagandhi',
    password: 'password543',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    firstName: 'Agastya',
    lastName: 'Shukla',
    username: 'agastyasukla',
    password: 'password654',
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
];
