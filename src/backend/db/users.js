import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

const users = [
  {
    _id: uuid.v4(),
    firstName: 'Adarsh',
    lastName: 'Balika',
    username: 'adarshbalika',
    password: 'adarshBalika123',
    createdAt: '2023-06-30T23:59:59.000Z',
    updatedAt: '2023-06-30T23:59:59.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Rohan',
    lastName: 'Sharma',
    username: 'rohansharma',
    password: 'rohanSharma123',
    createdAt: '2023-07-01T00:00:00.000Z',
    updatedAt: '2023-07-01T00:00:00.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Sakshi',
    lastName: 'Gupta',
    username: 'sakshigupta',
    password: 'sakshiGupta123',
    createdAt: '2023-07-02T01:01:01.000Z',
    updatedAt: '2023-07-02T01:01:01.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Priyanka',
    lastName: 'Dwivedi',
    username: 'priyankadwivedi',
    password: 'priyankaDwivedi123',
    createdAt: '2023-07-03T02:02:02.000Z',
    updatedAt: '2023-07-03T02:02:02.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Amit',
    lastName: 'Kumar',
    username: 'amitkumar',
    password: 'amitKumar123',
    createdAt: '2023-07-04T03:03:03.000Z',
    updatedAt: '2023-07-04T03:03:03.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Reena',
    lastName: 'Sinha',
    username: 'reenasinha',
    password: 'reenaSinha123',
    createdAt: '2023-07-05T04:04:04.000Z',
    updatedAt: '2023-07-05T04:04:04.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Rahul',
    lastName: 'Shukla',
    username: 'rahulshukla',
    password: 'rahulShukla123',
    createdAt: '2023-07-06T05:05:05.000Z',
    updatedAt: '2023-07-06T05:05:05.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Priya',
    lastName: 'Verma',
    username: 'priyaverma',
    password: 'priyaVerma123',
    createdAt: '2023-07-07T06:06:06.000Z',
    updatedAt: '2023-07-07T06:06:06.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Aditya',
    lastName: 'Sharma',
    username: 'adityasharma',
    password: 'adityaSharma123',
    createdAt: '2023-07-08T07:07:07.000Z',
    updatedAt: '2023-07-08T07:07:07.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Shreya',
    lastName: 'Sinha',
    username: 'shreyasinha',
    password: 'shreyaSinha123',
    createdAt: '2023-07-09T08:08:08.000Z',
    updatedAt: '2023-07-09T08:08:08.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Dhruv',
    lastName: 'Verma',
    username: 'dhruvverma',
    password: 'dhruvVerma123',
    createdAt: '2023-07-10T09:09:09.000Z',
    updatedAt: '2023-07-10T09:09:09.000Z'
  },
  {
    _id: uuid.v4(),
    firstName: 'Tanvi',
    lastName: 'Shukla',
    username: 'tanvishukla',
    password: 'tanviShukla123',
    createdAt: '2023-07-11T10:10:10.000Z',
    updatedAt: '2023-07-11T10:10:10.000Z'
  }
];
