import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: 'b3db3e90-5fd1-4911-a6fb-1ddf6025b62d',
    content: 'The only way to do great work is to love what you do. - Steve Jobs',
    likes: {
      likeCount: 51,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/200/300',
    username: 'VivaanVerma',
    createdAt: '2023-07-05T04:05:32.805Z',
    updatedAt: '2023-07-05T04:05:32.805Z',
    comments: [
      {
        _id: '6a0ae14b-63ea-4824-af13-31bb3fe00d5b',
        content: 'This resonates with me.',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      }
    ]
  },
  {
    _id: '19b75e25-30eb-4ea8-957d-b7abe30c01ec',
    content:
      'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    likes: {
      likeCount: 42,
      likedBy: [],
      dislikedBy: []
    },
    username: 'VivaanVerma',
    createdAt: '2023-07-05T04:05:32.805Z',
    updatedAt: '2023-07-05T04:05:32.805Z',
    comments: [
      {
        _id: '78ebdcbc-a305-4657-b223-4f7ed57b157d',
        content: 'Thanks for sharing.',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: 'bbd32fb2-a4b7-4d95-922a-dc201d847f06',
        content: 'Appreciate your thoughts.',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: 'f28701a7-f872-489a-8bb5-c63670df7ce6',
        content: 'Keep up the good work!',
        username: 'KavyaBose',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      }
    ]
  },
  {
    _id: '20f45e8a-c7ef-479b-8958-10f2afbe7fd1',
    content:
      'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    likes: {
      likeCount: 53,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/500/500',
    username: 'RiyaDas',
    createdAt: '2023-07-05T04:05:32.805Z',
    updatedAt: '2023-07-05T04:05:32.805Z',
    comments: [
      {
        _id: 'ce67b7fd-6c5e-4fdb-aebf-3630a8e70f50',
        content: 'Great post!',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: 'e4655d74-4fd0-44f1-91ac-5141c42d5228',
        content: 'Very insightful!',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '4abef2f4-ecd9-4616-a5c1-f02fcd274d84',
        content: 'Interesting perspective.',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: 'c50822db-ab91-41b0-b7f7-4a2542cc8242',
        content: 'I learned something new.',
        username: 'EshaKumar',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      }
    ]
  },
  {
    _id: 'b28ffa44-5fb8-4649-9793-0bfd646dcba3',
    content: 'The best way to predict your future is to create it. - Abraham Lincoln',
    likes: {
      likeCount: 53,
      likedBy: [],
      dislikedBy: []
    },
    imgUrl: 'https://picsum.photos/800/400',
    username: 'RiyaDas',
    createdAt: '2023-07-05T04:05:32.805Z',
    updatedAt: '2023-07-05T04:05:32.805Z',
    comments: []
  },
  {
    _id: 'da38c46d-246f-4310-a373-d98c8f0ed9f5',
    content: 'The only way to do great work is to love what you do. - Steve Jobs',
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ShauryaReddy',
    createdAt: '2023-07-05T04:05:32.805Z',
    updatedAt: '2023-07-05T04:05:32.805Z',
    comments: [
      {
        _id: '8ceb94ba-8b47-4af9-81fd-433e9e1b17ce',
        content: 'Interesting perspective.',
        username: 'AvniGupta',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '5424301b-4cf5-4f1c-8ade-58226e4c5cef',
        content: 'Keep up the good work!',
        username: 'KavyaBose',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: 'fe03c225-3927-4a41-b0b5-f57cbb7fefe1',
        content: 'This resonates with me.',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: 'a12e22d9-f995-4c5e-b873-03bdcb3fde62',
        content: 'Keep up the good work!',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '11a5fc22-9f24-4771-b04f-ba30897796fa',
        content: 'Keep up the good work!',
        username: 'ShreyaKumar',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '58fffb75-6730-4359-80c3-f8bd6c6f448c',
        content: 'Well said!',
        username: 'RiyaDas',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      }
    ]
  },
  {
    _id: '23e1124a-769c-401a-9b8d-fa391e8e3a76',
    imgUrl: 'https://picsum.photos/500/300',
    content: "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    likes: {
      likeCount: 79,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ArjunReddy',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: '9afda0f4-eff9-4301-92f2-1983532557b1',
        content: 'Well said!',
        username: 'EshaKumar',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: 'f2c5cfbb-b896-419c-8c70-2349e599914b',
        content: 'Interesting perspective.',
        username: 'RiyaDas',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: 'c8853a36-2e0b-43f7-8e8c-0b8f27b96d18',
        content: 'I learned something new.',
        username: 'VivaanVerma',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '1bf7c901-3b64-4d93-8f3c-cd2be37fa217',
        content: 'This resonates with me.',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '9b2f3f32-866c-4d7f-ad94-d94814d43f2f',
        content: 'Thanks for sharing.',
        username: 'VivaanVerma',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      }
    ]
  },
  {
    _id: '85b2ccb0-c6b1-4b08-956d-0752280fa0ea',
    content: 'In the middle of difficulty lies opportunity. - Albert Einstein',
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: []
    },
    username: 'AvniGupta',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: '0973c656-3f6f-4f7e-b07a-5010e96b7c4f',
        content: 'I learned something new.',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: 'cc5c820e-8234-49c9-8945-83891f8f4bc6',
        content: 'Keep up the good work!',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '3928f277-fbed-43c4-b225-c5965eeafdf0',
        content: 'Keep up the good work!',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '9ee7ac05-a0c2-4bc4-ac9b-2fa6f72efe83',
        content: 'Very insightful!',
        username: 'RiyaDas',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '0eca0ad4-4cde-48e3-9c2a-7bbcd9014e95',
        content: 'I learned something new.',
        username: 'AvniGupta',
        createdAt: '2023-07-05T04:05:32.806Z',
        updatedAt: '2023-07-05T04:05:32.806Z'
      },
      {
        _id: '192708a0-3c1c-4bcf-ac9b-fa645a9267c6',
        content: 'Interesting perspective.',
        username: 'VivaanVerma',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '2bb79583-2d8e-4432-addd-0d5ccd4913a3',
        content: 'I totally agree with you.',
        username: 'KavyaBose',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'de899750-404f-4fd7-9a01-a5ec824da08f',
        content: 'Appreciate your thoughts.',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      }
    ]
  },
  {
    _id: '7caa4f28-6e51-4f05-9194-46b16867eb67',
    imgUrl: 'https://picsum.photos/600/800',
    content:
      'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    likes: {
      likeCount: 95,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ArjunReddy',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: 'f224c2f3-b13d-473d-82fe-ee11910b9cbe',
        content: 'This resonates with me.',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '40a488ce-2e94-4146-b02b-91f99edf4962',
        content: 'I learned something new.',
        username: 'KavyaBose',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'c4fd90a2-d9fd-4184-a8a4-5e8e7cd66257',
        content: 'Great post!',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '3252ddcd-d865-40db-ac88-c27ea233290b',
        content: 'I learned something new.',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      }
    ]
  },
  {
    _id: '7532fba4-3477-43a9-8773-3e428187bab1',
    content: 'The future starts today, not tomorrow. - Pope John Paul II',
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ArjunReddy',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: '041dc91e-de35-4157-9dbc-b571bd9698c3',
        content: 'Great post!',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '487c1dd0-849f-41b6-b0f1-0435d2e740d9',
        content: 'I totally agree with you.',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'fb7128a7-5b47-4e11-9e3a-097715a059eb',
        content: 'Thanks for sharing.',
        username: 'EshaKumar',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '15a56680-8188-452f-aff9-b3c97263c441',
        content: 'Thanks for sharing.',
        username: 'RiyaDas',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'c8a8cbfe-2fc6-4779-b4fc-c3b192cb1541',
        content: 'Great post!',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      }
    ]
  },
  {
    _id: '473f5d9b-3e67-4d89-ab1a-a87532394734',
    content: 'The future starts today, not tomorrow. - Pope John Paul II',
    likes: {
      likeCount: 30,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ShauryaReddy',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: 'ab956fe0-5e6e-4f90-af00-bb15e45c146b',
        content: 'Very insightful!',
        username: 'EshaKumar',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '0e34465f-6c36-4b73-adcf-cb6a0138a070',
        content: 'This resonates with me.',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'f2b3410c-79c8-461f-9d7c-1bc492609fdb',
        content: 'Interesting perspective.',
        username: 'EshaKumar',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '97e3d007-b869-4b21-b421-d1c2cebd0453',
        content: 'Thanks for sharing.',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '7ec0e85f-16ec-4a2c-9eef-db3b070bdf83',
        content: 'Great post!',
        username: 'ShreyaKumar',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'd7b7efdc-0818-4fc8-87d2-dbd9243a2ac7',
        content: 'Very insightful!',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '9557a6d1-9ade-471f-bdd7-1b34e095ca4b',
        content: 'Well said!',
        username: 'VivaanVerma',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'f4a7114a-6f11-44be-98ce-d2dda74b8f65',
        content: 'Interesting perspective.',
        username: 'RiyaDas',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      }
    ]
  },
  {
    _id: '6f12c54d-d556-4a68-80a4-2288c455fac7',
    imgUrl: 'https://picsum.photos/500/800',
    content: 'The best way to predict your future is to create it. - Abraham Lincoln',
    likes: {
      likeCount: 89,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ArjunReddy',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: '44770b13-942d-4176-b7a2-dd101fabd1ec',
        content: 'I learned something new.',
        username: 'ShreyaKumar',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      }
    ]
  },
  {
    _id: '1122c462-0f21-455f-85f2-95188b78dda1',
    content:
      'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: []
    },
    username: 'AaravMalhotra',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: 'c314d404-e1c7-47c6-83c3-1a077184a66d',
        content: 'Appreciate your thoughts.',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '701a8e24-f5e7-44f0-af4d-6059217d53ab',
        content: 'Interesting perspective.',
        username: 'RiyaDas',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '32be8ff3-c916-423d-ae45-fe58f8fb89de',
        content: 'Interesting perspective.',
        username: 'EshaKumar',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '13d239a3-54b5-4b21-954d-f84f3f4cab40',
        content: 'I learned something new.',
        username: 'VivaanVerma',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'af0e8bf5-738c-421c-b876-eee61bc6faca',
        content: 'This resonates with me.',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'ce33b27f-7ed4-4a49-8e53-ea4c3383388b',
        content: 'This resonates with me.',
        username: 'AvniGupta',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: '07efad56-49eb-456c-9f7d-19976a7cbce1',
        content: 'Keep up the good work!',
        username: 'VivaanVerma',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'a72a5bb6-f5cc-4fc5-9c60-55d48851441a',
        content: 'Very insightful!',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      }
    ]
  },
  {
    _id: 'd81ab069-9606-4988-886c-f7c9113e6b03',
    content:
      'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    likes: {
      likeCount: 23,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ShreyaKumar',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: '40cc3af3-7caa-4b1e-8422-119cbfcb5f46',
        content: 'This resonates with me.',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.807Z',
        updatedAt: '2023-07-05T04:05:32.807Z'
      },
      {
        _id: 'a06489a2-8e4d-4eea-a8b5-2d9605b9401f',
        content: 'Great post!',
        username: 'AvniGupta',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      }
    ]
  },
  {
    _id: 'ae6b1f3e-0f78-49d0-b4c0-9e7d5d2f808e',
    content: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    likes: {
      likeCount: 32,
      likedBy: [],
      dislikedBy: []
    },
    username: 'ArjunReddy',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: 'f8cfd960-f456-42db-a0c8-00e56507fe30',
        content: 'Keep up the good work!',
        username: 'ShreyaKumar',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '9e6e44cf-8265-46cd-82e0-9b011aa35758',
        content: 'Thanks for sharing.',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'cc24bb8e-931b-4ecb-a14d-d960673485ff',
        content: 'Well said!',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'c8386e45-cc89-44ab-aebe-a219511d8092',
        content: 'Well said!',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '074ce011-a57a-45db-9846-0715a1accb23',
        content: 'Very insightful!',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'dccbab93-ba06-4526-a147-3eee67efff9d',
        content: 'This resonates with me.',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '667eaac5-8759-4f5a-8e76-febed9b609a5',
        content: 'I learned something new.',
        username: 'VivaanVerma',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      }
    ]
  },
  {
    _id: 'a8ddefdd-327b-4732-b948-65c1df927b7b',
    content:
      'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: []
    },
    username: 'KavyaBose',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: '86b6cf70-49b1-4425-85f1-a2272f26f3da',
        content: 'Great post!',
        username: 'VivaanVerma',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'eab06e2d-adf8-4c8e-b3d7-2f47a6931a84',
        content: 'Keep up the good work!',
        username: 'KavyaBose',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'df66d63b-3539-4c12-915d-f127c4273c82',
        content: 'Appreciate your thoughts.',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'a436102b-d434-4453-b372-cd35529f2e30',
        content: 'Appreciate your thoughts.',
        username: 'EshaKumar',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '12810901-b7c9-45c9-8898-ebbde7dbcfed',
        content: 'This resonates with me.',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'aa9096c5-c4a8-4e3a-915d-e93c962b18e9',
        content: 'Appreciate your thoughts.',
        username: 'RiyaDas',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'b54bd697-ec4e-4570-b252-94f02e021170',
        content: 'Very insightful!',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      }
    ]
  },
  {
    _id: 'c6bda662-238d-4588-b0d4-b23d39b8a1c9',
    content: "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    likes: {
      likeCount: 65,
      likedBy: [],
      dislikedBy: []
    },
    username: 'KavyaMehta',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: '454488df-cdb8-460b-968e-1b3b98c00cd6',
        content: 'Appreciate your thoughts.',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '6bea0211-b648-47d3-89f7-ea76ebb38e90',
        content: 'This resonates with me.',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      }
    ]
  },
  {
    _id: 'ba600432-706a-4f92-b245-873a448ee2c4',
    content: 'In the middle of difficulty lies opportunity. - Albert Einstein',
    likes: {
      likeCount: 27,
      likedBy: [],
      dislikedBy: []
    },
    username: 'AvniGupta',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: 'e801906e-f62a-4d74-99ee-ca589db6c5df',
        content: 'This resonates with me.',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'e61bef16-1e80-4ce1-82f8-54323ab8235b',
        content: 'Great post!',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '6f5f8750-4cae-40f4-9adf-1b95a1fa0ae0',
        content: 'I totally agree with you.',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '53ff0f66-3613-4969-9d78-8f5461e1180e',
        content: 'Very insightful!',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '3516534b-0459-48b1-a502-241d6fbca0a0',
        content: 'Interesting perspective.',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '72db0c0d-490a-4edb-a2c5-3a1060a24a2f',
        content: 'Appreciate your thoughts.',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '6202b051-552e-4e20-989e-0a391708a471',
        content: 'I learned something new.',
        username: 'ArjunReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '4f1b4d20-7795-4f49-8abc-bbf74668698a',
        content: 'Interesting perspective.',
        username: 'AvniGupta',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'b67bbc2b-0342-4a0d-8979-6eb6e88a475b',
        content: 'Keep up the good work!',
        username: 'EshaKumar',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      }
    ]
  },
  {
    _id: 'b2809d66-25b7-4523-9b7b-32f36cb287c3',
    content: "Believe you can and you're halfway there. - Theodore Roosevelt",
    likes: {
      likeCount: 82,
      likedBy: [],
      dislikedBy: []
    },
    username: 'KavyaBose',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: '12b0aaee-7851-4fe0-8ff2-18227f33421a',
        content: 'Thanks for sharing.',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: 'e50903da-8496-4e3c-9d62-e84e7598a32b',
        content: 'Keep up the good work!',
        username: 'RiyaDas',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      }
    ]
  },
  {
    _id: '771ba01d-9a41-48ed-bb58-57f9eec3a2b1',
    content: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    likes: {
      likeCount: 92,
      likedBy: [],
      dislikedBy: []
    },
    username: 'KavyaMehta',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: '7fd9c51f-d2fa-45f5-8922-4dd9e8cc08a1',
        content: 'I totally agree with you.',
        username: 'KavyaMehta',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '029426cd-cd8e-428e-8432-de691b6f395a',
        content: 'This resonates with me.',
        username: 'AaravMalhotra',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      }
    ]
  },
  {
    _id: 'd5f22a43-23d2-4294-9a34-3a3505ab1829',
    content: "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    likes: {
      likeCount: 81,
      likedBy: [],
      dislikedBy: []
    },
    username: 'EshaKumar',
    createdAt: '2023-07-05T04:05:32.806Z',
    updatedAt: '2023-07-05T04:05:32.806Z',
    comments: [
      {
        _id: 'fa507d87-e20f-4c42-844a-b0925a365520',
        content: 'Great post!',
        username: 'KavyaBose',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      },
      {
        _id: '9e528ed4-f88d-4d38-be50-2773b230a423',
        content: 'Keep up the good work!',
        username: 'ShauryaReddy',
        createdAt: '2023-07-05T04:05:32.808Z',
        updatedAt: '2023-07-05T04:05:32.808Z'
      }
    ]
  }
];
