import { User } from './models/User';

const user = new User({ name: 'George Lawrence', age: 23 });

user.on('change', () => {});
user.on('change', () => {});
user.on('ljsf', () => {});

console.log(user);
