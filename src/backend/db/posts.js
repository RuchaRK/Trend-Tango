import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: 'adarshbalika',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: 'shubhamsoni',
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    username: 'amitsharma',
    content:
      "Today, I learned how to code a chatbot! I'm so excited to see what I can create with this new skill.",
    likes: {
      likeCount: 1,
      likedBy: ['amitsharma'],
      dislikedBy: ['adarshbalika']
    },
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    username: 'rohangupta',
    content: `I just finished reading a great book called
     'The Alchemist'. It's a story about following your dreams and never giving up. I highly recommend it!`,
    likes: {
      likeCount: 2,
      likedBy: ['amitsharma', 'rohangupta'],
      dislikedBy: []
    },
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    username: 'shreyasinha',
    content:
      "I just got a new job! I'm so excited to start this new chapter in my life. I'm really looking forward to meeting new people and learning new things.",
    likes: {
      likeCount: 3,
      likedBy: ['amitsharma', 'rohangupta', 'shreyasinha'],
      dislikedBy: ['adarshbalika']
    },
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    username: 'adityasingh',
    content:
      "I just finished writing my first book! It's a story about a young woman who overcomes adversity to achieve her dreams. I'm so excited to share it with the world.",
    likes: {
      likeCount: 3,
      likedBy: ['adityasingh', 'akankshagandhi', 'agastyasukla'],
      dislikedBy: ['adarshbalika', 'kiarakapoor']
    },
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    username: 'akankshagandhi',
    content:
      "I just got accepted to my dream school! I'm so excited to start this new chapter in my life. I'm really looking forward to learning new things and meeting new people.",
    likes: {
      likeCount: 1,
      likedBy: ['akankshagandhi'],
      dislikedBy: ['shreyasinha']
    },
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    username: 'agastyasukla',
    content:
      "I just started my own business! It's a small business, but I'm so excited to see where it takes me. I'm really looking forward to meeting new customers and making a difference in the world.",
    likes: {
      likeCount: 2,
      likedBy: ['agastyasukla', 'kiarakapoor'],
      dislikedBy: ['akankshagandhi', 'shreyasinha']
    },
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    username: 'anjalimehta',
    content:
      "I just got married! I'm so happy to have found the love of my life. I'm really looking forward to spending the rest of my life with him.",
    likes: {
      likeCount: 1,
      likedBy: ['anjalimehta'],
      dislikedBy: ['akankshagandhi']
    },
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    username: 'kiarakapoor',
    content:
      "I just went on my first solo trip! It was an amazing experience. I'm so glad I took the plunge and did it. I'm really looking forward to going on more solo trips in the future.",
    likes: {
      likeCount: 2,
      likedBy: ['kiarakapoor', 'adityasingh'],
      dislikedBy: ['anjalimehta']
    },
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
];
