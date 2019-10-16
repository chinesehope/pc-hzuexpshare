import faker from 'faker/locale/zh_CN'
export default {
  address: faker.address.city(),
  id: faker.random.uuid(),
  title: faker.name.title(),
  answerCount: faker.random.number(),
  starCount: faker.random.number(),
  name: faker.name.findName(),
  describe: faker.lorem.sentence(),

}