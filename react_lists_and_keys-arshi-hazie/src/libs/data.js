import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const postTemplate = {
  postId: 0,
  title: "a title",
  date: "DD/MM/YY",
  author: "author",
  text: lorem.generateParagraphs(7),
  highlights: [
    lorem.generateWords(3),
    lorem.generateWords(3),
    lorem.generateWords(3),
  ],
  image: { link: "link", alt: "alt" },
};

const samplePosts = [
  {
    postId: 1,
    title: "One Of My Favourites",
    date: "12/10/20",
    author: "Ben Lee",
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        "https://i.pinimg.com/originals/71/a0/5f/71a05f47b8f449fc231881416bf4bc66.jpg",
      alt: "A blue-grey pigeon turns to face the camera.",
    },
  },
  {
    postId: 2,
    title: "Look At This Marvellous Pigeon",
    date: "14/10/20",
    author: "Ben Lee",
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link: "https://i.redd.it/u6xrjmzbrf321.png",
      alt: "A close up shot of a pigeon with glorious ruffles.",
    },
  },
  {
    postId: 3,
    title: "A Lovely Pidgeon",
    date: "16/10/20",
    author: "Ben Lee",
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link:
        "https://image.freepik.com/free-photo/pidgeon-waters-edge_19485-37038.jpg",
      alt:
        "A pigeon with a spectacular green plumage stares thoughtfully into the distance.",
    },
  },
  {
    postId: 4,
    title: "An Evil Pigeon",
    date: "31/10/20",
    author: "Vampire",
    text: `Hello evil pigeon.`,
    highlights: [1, 2, 3],
    image: {
      link:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88628149-8273-42ee-a2ff-27687a421a58/d2icb52-a6333845-9218-440c-87a8-c7b9e8bb388f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODg2MjgxNDktODI3My00MmVlLWEyZmYtMjc2ODdhNDIxYTU4XC9kMmljYjUyLWE2MzMzODQ1LTkyMTgtNDQwYy04N2E4LWM3YjllOGJiMzg4Zi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.MDKcKGW3KGyc2nvwtH7gO-cvhNqBf3gzdRNnoBEJLkU",
      alt: "A pigeon at war with a flamethrower.",
    },
  },
];

export default samplePosts;
