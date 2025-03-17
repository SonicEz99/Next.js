import { faker } from '@faker-js/faker';

export const generateBooks = () => {
  const length = faker.helpers.rangeToNumber({ min: 3, max: 10 });

  const books = Array.from({length}).map(() =>({
    id: faker.number.int(),
    title: faker.lorem.words(),
    desc: faker.lorem.sentence()
  }))

  return books;
};