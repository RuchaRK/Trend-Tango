import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: 'e15cc4ed-0542-456c-958b-b137ff66708a',
    content: 'The future starts today, not tomorrow. - Pope John Paul II',
    likes: {
      likeCount: 44,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/300/200',
    username: 'VivaanVerma',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '2616099e-fed6-4e8a-94a7-c6be70e57c71',
        content: 'This resonates with me.',
        username: 'VivaanVerma',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: '96a2811f-5ef6-49eb-8c1b-158354399310',
        content: 'Interesting perspective.',
        username: 'AnayaJain',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'c35598dc-49b0-4f6c-ac07-e5bb04d68288',
        content: 'Thanks for sharing.',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'e12e4f37-fc92-4ef6-9f3d-5572f8eb36fd',
        content: 'Keep up the good work!',
        username: 'ZaraJain',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: '18a35cb6-9a6a-4d96-a5c5-e6ac8144e932',
        content: 'Appreciate your thoughts.',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      }
    ]
  },
  {
    _id: '469348ef-f6a0-4145-91a2-2bfd1a843ee5',
    content:
      'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    likes: {
      likeCount: 74,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/300/250',
    username: 'AdvaitGupta',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '0cfc2a71-151a-4d8a-a276-33383df9ad13',
        content: 'Interesting perspective.',
        username: 'VivaanVerma',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      }
    ]
  },
  {
    _id: 'c85ba48d-e420-4dca-bf11-55a50d36bc6c',
    content: 'The only way to do great work is to love what you do. - Steve Jobs',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/200/300',
    username: 'AnayaMehta',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '9b552055-a3ff-4a73-8080-fa316d4882ad',
        content: 'Well said!',
        username: 'AdvaitGupta',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: '65975078-54a1-4605-95a9-42acc6a4a8ad',
        content: 'I learned something new.',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      }
    ]
  },
  {
    _id: '05923f07-d5d0-4306-be32-b1f5c6be0aff',
    content: 'The only way to do great work is to love what you do. - Steve Jobs',
    likes: {
      likeCount: 49,
      likedBy: [],
      dislikedBy: []
    },
    username: 'AnayaJain',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: 'd77958b0-697f-43ab-a883-0a210fd5dfa5',
        content: 'Interesting perspective.',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'c82c8267-a104-4dc3-8271-b4ad54e40db9',
        content: 'Very insightful!',
        username: 'AdvaitGupta',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'b83006df-b96c-46d8-88df-fc108cbf43bd',
        content: 'Thanks for sharing.',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'f6b86b54-052d-4e1f-ad6c-d687b618b357',
        content: 'Interesting perspective.',
        username: 'AnayaMehta',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: '452431fc-8950-4991-a39e-59e81ad7cc0d',
        content: 'Great post!',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'f968d208-be77-4826-9248-f3b14450160b',
        content: 'Great post!',
        username: 'ZaraJain',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      }
    ]
  },
  {
    _id: '74e9570e-a5ab-4c2b-988a-f91a2427ad36',
    content: 'The future starts today, not tomorrow. - Pope John Paul II',
    likes: {
      likeCount: 50,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/300',
    username: 'AaravVerma',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: 'c9b40e4a-7b72-4072-8f89-e29ebea6c8dd',
        content: 'I totally agree with you.',
        username: 'ArjunShah',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'e59b0919-4a00-4523-9e0f-f4689e945177',
        content: 'This resonates with me.',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: '9bf70922-2c2a-4355-a57c-2d88bbb7971c',
        content: 'I learned something new.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      }
    ]
  },
  {
    _id: '547f661b-8929-412b-8a1e-4d0f3d7d7665',
    content: 'In the middle of difficulty lies opportunity. - Albert Einstein',
    likes: {
      likeCount: 97,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/100/200',
    username: 'AnayaJain',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: 'f54e8227-9ab9-4f96-a6be-8e61deae9c3d',
        content: 'Thanks for sharing.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      }
    ]
  },
  {
    _id: '436b090d-dc99-42ba-91ac-32f511e16d8c',
    content: "Believe you can and you're halfway there. - Theodore Roosevelt",
    likes: {
      likeCount: 26,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/300',
    username: 'ArjunShah',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: 'e97d0918-be57-4f7f-95ab-55ad2465d6e5',
        content: 'I totally agree with you.',
        username: 'ZaraJain',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      }
    ]
  },
  {
    _id: 'fa4f9b8d-c8c5-4ae6-8dc9-5b73ecba62ff',
    content: 'The future starts today, not tomorrow. - Pope John Paul II',
    likes: {
      likeCount: 79,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/400/300',
    username: 'AaravVerma',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '773f8160-6f9e-4a7f-b0ae-dd2a64cc56c6',
        content: 'Interesting perspective.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'd7eb80c5-7e79-4be9-92f2-0df5845320af',
        content: 'Appreciate your thoughts.',
        username: 'VivaanVerma',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'cab0ae05-e457-4055-b6eb-a5136ddb6733',
        content: 'Well said!',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: '1c58bca2-b049-45cf-8b60-a537e2a81ae4',
        content: 'Keep up the good work!',
        username: 'VivaanVerma',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: 'b01b6d60-3d32-42dc-a0c7-502ebca416db',
        content: 'Great post!',
        username: 'ZaraJain',
        createdAt: '2023-07-09T19:06:51.808Z',
        updatedAt: '2023-07-09T19:06:51.808Z'
      },
      {
        _id: '53d72e84-7bbd-492b-bd79-4139bb00efd6',
        content: 'Interesting perspective.',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.809Z',
        updatedAt: '2023-07-09T19:06:51.809Z'
      }
    ]
  },
  {
    _id: '3c5399b4-ed6b-4e29-8a00-4affef76c272',
    content: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    likes: {
      likeCount: 77,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/300',
    username: 'AnayaMehta',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '3e5af668-8a02-429b-84ec-5c06c6c34878',
        content: 'This resonates with me.',
        username: 'AnayaJain',
        createdAt: '2023-07-09T19:06:51.809Z',
        updatedAt: '2023-07-09T19:06:51.809Z'
      },
      {
        _id: 'd2348c31-0c39-4023-9225-f16723d0463e',
        content: 'Keep up the good work!',
        username: 'VivaanVerma',
        createdAt: '2023-07-09T19:06:51.809Z',
        updatedAt: '2023-07-09T19:06:51.809Z'
      },
      {
        _id: 'dc958494-8024-4d78-ac25-cabbe83de1f2',
        content: 'I learned something new.',
        username: 'AnayaMehta',
        createdAt: '2023-07-09T19:06:51.809Z',
        updatedAt: '2023-07-09T19:06:51.809Z'
      },
      {
        _id: 'db2e60c9-be1a-40ed-bf01-5728b504862f',
        content: 'This resonates with me.',
        username: 'AnayaJain',
        createdAt: '2023-07-09T19:06:51.809Z',
        updatedAt: '2023-07-09T19:06:51.809Z'
      },
      {
        _id: '302dece3-53fd-4ea9-9c28-f61f554994c6',
        content: 'I learned something new.',
        username: 'ZaraJain',
        createdAt: '2023-07-09T19:06:51.809Z',
        updatedAt: '2023-07-09T19:06:51.809Z'
      },
      {
        _id: '3481a488-35fd-45eb-9816-a22a6f155f31',
        content: 'I learned something new.',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.809Z',
        updatedAt: '2023-07-09T19:06:51.809Z'
      },
      {
        _id: '60db34c0-869f-4203-85a2-60b0f6ac0641',
        content: 'Appreciate your thoughts.',
        username: 'VivaanVerma',
        createdAt: '2023-07-09T19:06:51.809Z',
        updatedAt: '2023-07-09T19:06:51.809Z'
      }
    ]
  },
  {
    _id: '2b4e5c21-ddaa-4b2c-bf19-c160d335f8b6',
    content:
      'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    likes: {
      likeCount: 70,
      likedBy: [],
      dislikedBy: []
    },
    username: 'AaravVerma',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: []
  },
  {
    _id: 'fa59ed3e-e089-4eba-93dd-c63db5d8e702',
    content: "Believe you can and you're halfway there. - Theodore Roosevelt",
    likes: {
      likeCount: 16,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ZaraSen',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '7d0a069a-d6ca-4456-8ec5-db995ac8d862',
        content: 'Great post!',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.809Z',
        updatedAt: '2023-07-09T19:06:51.809Z'
      }
    ]
  },
  {
    _id: '3a290523-567d-4140-a9a2-12106ea3f165',
    content: 'The only way to do great work is to love what you do. - Steve Jobs',
    likes: {
      likeCount: 63,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/500',
    username: 'AaravVerma',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '2282630a-0241-4d7e-8bde-b93afe70946c',
        content: 'Very insightful!',
        username: 'AdvaitGupta',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'e32b6338-631a-4550-afc3-0f95c63230ef',
        content: 'I learned something new.',
        username: 'ArjunShah',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '55317a74-7f13-48bb-972e-251a0fb22ccb',
        content: 'Well said!',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '96061a87-e4ed-4519-b12e-cea026496e7c',
        content: 'Interesting perspective.',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '8440acee-5339-4719-a8b5-2fadbcbd2b75',
        content: 'I learned something new.',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '7d7b8ec1-f16d-4af8-8ce0-60f3c36e7b22',
        content: 'Interesting perspective.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'b957f2bc-df40-4bac-be4b-61dbc0fa791b',
        content: 'I learned something new.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '38942323-3215-4a5d-b110-0c5e2e597912',
        content: 'Thanks for sharing.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '7f5425aa-02d8-4542-affd-e64ad0b11fe4',
        content: 'Interesting perspective.',
        username: 'ArjunShah',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      }
    ]
  },
  {
    _id: '0092cddf-08ca-4b9f-acd4-5adc07ba143d',
    content:
      'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    likes: {
      likeCount: 57,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/300',
    username: 'AnayaMehta',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: 'aa438075-2e38-4f54-ad2e-94c34b764793',
        content: 'Very insightful!',
        username: 'ZaraJain',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'ef47f89a-9c8d-4ac9-b0ed-0e96f7caa43b',
        content: 'I totally agree with you.',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '3d81cb6e-5b12-49be-a99b-d043e1a22f12',
        content: 'Interesting perspective.',
        username: 'AdvaitGupta',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '1af8ac2f-274f-49d9-96bb-d49570e8803e',
        content: 'Well said!',
        username: 'AdvaitGupta',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'c82d583a-05eb-4d40-89aa-d1ea8ec4db5c',
        content: 'Appreciate your thoughts.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'f94b654d-983f-414a-ba0a-77efadc5b15b',
        content: 'Well said!',
        username: 'ArjunShah',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'afaa28b6-7936-4928-a5cf-aee4dc078976',
        content: 'I totally agree with you.',
        username: 'ZaraJain',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      }
    ]
  },
  {
    _id: 'cedbcd1d-1655-403b-a1a6-6fb15fdacbae',
    content:
      'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    likes: {
      likeCount: 72,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/250',
    username: 'AaravVerma',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '2a3da655-7bd0-45a8-9bd1-cc35779dbfc5',
        content: 'Great post!',
        username: 'VivaanVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '95fcd814-61ad-4000-ba69-44dbf30c6b53',
        content: 'Thanks for sharing.',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '7f62099a-bbd0-4580-ae73-b618d7727a4a',
        content: 'Appreciate your thoughts.',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'b1a0d4c2-cec6-4cba-81b8-ee8dcb680e69',
        content: 'Great post!',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '463eefa6-6452-4f99-9b8e-2bad5a06a270',
        content: 'I totally agree with you.',
        username: 'AnayaJain',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '1c624742-70ac-4dbe-8a6e-f5fcc6cb1bd3',
        content: 'Well said!',
        username: 'ZaraJain',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'f9a6ba83-1729-4de4-a46f-e225edce7b6a',
        content: 'Interesting perspective.',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      }
    ]
  },
  {
    _id: '0524db01-65fd-40ea-b299-6f46fedab173',
    content:
      'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    likes: {
      likeCount: 77,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/300',
    username: 'ShauryaRao',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: 'b6599920-c69c-4360-9ad8-fd0eecc5fd75',
        content: 'Keep up the good work!',
        username: 'ArjunShah',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '059c7236-6e7c-45e0-9163-f25c2bb66058',
        content: 'Great post!',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      }
    ]
  },
  {
    _id: '520bf9aa-1ddc-4311-8c2f-9eec625f23ba',
    content: 'The best way to predict your future is to create it. - Abraham Lincoln',
    likes: {
      likeCount: 28,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/350/150',
    username: 'AdvaitGupta',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: 'cea60114-8e5e-4224-b2d8-3d20370c5e8b',
        content: 'This resonates with me.',
        username: 'AnayaJain',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      }
    ]
  },
  {
    _id: '71bc6ab8-a176-44a5-8835-ad3905e05fd3',
    content: 'The future starts today, not tomorrow. - Pope John Paul II',
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/300',
    username: 'VivaanVerma',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '7472116a-c10e-481d-a57b-ab6175991f03',
        content: 'Interesting perspective.',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '3984e73d-e614-47b6-b4f7-2be918971a09',
        content: 'Thanks for sharing.',
        username: 'VivaanVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'a0a9c5e3-4cef-471e-b9f2-487fe5c83586',
        content: 'I learned something new.',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '9e664a1f-cc5f-4389-8a2a-d5d27a441c66',
        content: 'Well said!',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '3105876b-b7f3-4fb2-b234-307132eed67f',
        content: 'Great post!',
        username: 'ArjunShah',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'a3fff322-d58c-421c-afd4-ddee64ae00ce',
        content: 'I totally agree with you.',
        username: 'AnayaJain',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'ccc653f8-aa7e-479f-9285-66580fb7849c',
        content: 'Keep up the good work!',
        username: 'AnayaMehta',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      }
    ]
  },
  {
    _id: '993bb0fc-5dbd-45a9-b4a6-c263f17829f4',
    content:
      'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    likes: {
      likeCount: 19,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/100/400',
    username: 'ZaraSen',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: 'f8f2cb89-43c0-48ef-afff-1dbcc12949da',
        content: 'Well said!',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '1ca359cd-d0d9-441b-ab70-b5e6e3e12569',
        content: 'This resonates with me.',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '76397707-3182-4afc-8456-c1905edda69f',
        content: 'Great post!',
        username: 'VivaanVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'b4a4062f-0a58-412f-87f3-35935b89be88',
        content: 'This resonates with me.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '2755640f-add7-4362-8fa4-81ffd23bee66',
        content: 'Very insightful!',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'b3c94e1f-80f0-4f0d-95dd-6950cc255f74',
        content: 'I totally agree with you.',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '05d7b04e-c63d-4545-9b79-c83599341085',
        content: 'Very insightful!',
        username: 'ZaraJain',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'da05848d-cf87-4fbe-9552-f7f031f74165',
        content: 'Appreciate your thoughts.',
        username: 'AnayaMehta',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '5c1016e5-668c-4a44-b9ab-c38ab7c5a2bc',
        content: 'This resonates with me.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      }
    ]
  },
  {
    _id: '8e58fbc5-6016-4342-8cd4-c856af688689',
    content: 'In the middle of difficulty lies opportunity. - Albert Einstein',
    likes: {
      likeCount: 96,
      likedBy: [],
      dislikedBy: []
    },
    username: 'AdvaitGupta',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '877e51ae-4a93-4e78-86f2-30ee67a2356c',
        content: 'Great post!',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'eff918b7-a405-4a5b-b3e8-9472d2b3ecbe',
        content: 'Well said!',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'e73b43e0-7d5f-4e0d-bbc6-8bc1541085ef',
        content: 'Thanks for sharing.',
        username: 'AaravVerma',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '714b54d1-5138-40be-972b-ca8ee06c27cb',
        content: 'Very insightful!',
        username: 'ZaraSen',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      }
    ]
  },
  {
    _id: '60c555b1-350a-4c9e-9487-5d283d9a2ecc',
    content:
      'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    likes: {
      likeCount: 27,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ShauryaRao',
    createdAt: '2023-07-09T19:06:51.807Z',
    updatedAt: '2023-07-09T19:06:51.807Z',
    comments: [
      {
        _id: '8cc515ba-7ca4-4358-bc89-7640f3c6d127',
        content: 'Very insightful!',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '5fe62d2f-fb02-4445-ba52-01f5a4150c50',
        content: 'I totally agree with you.',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: 'b86d7c72-b54d-4c59-a35a-1b7070118a13',
        content: 'I learned something new.',
        username: 'ShauryaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      },
      {
        _id: '4ce8e93e-9371-4ab9-836b-286232af7851',
        content: 'Interesting perspective.',
        username: 'EshaRao',
        createdAt: '2023-07-09T19:06:51.810Z',
        updatedAt: '2023-07-09T19:06:51.810Z'
      }
    ]
  }
];
