import foods from './foods';
import { choice, remove } from './helpers';

const food = choice(foods);

console.log(`I’d like one ${food}, please.`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! May I have another?`);
remove(foods, food);
console.log(foods);
