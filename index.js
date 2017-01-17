import limit from './src/limit';
import order from './src/order';
import where from './src/where';

export function extend(object) {
  return Object.assign(object, {
    limit,
    order,
    where
  });
}
