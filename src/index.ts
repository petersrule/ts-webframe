import { User } from './models/User';

const user = new User({ id: 1, name: 'Charitable Shrewd', age: 101 });

user.on('save', () => {
  console.log(user);
});

user.save();
