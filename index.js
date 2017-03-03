import limit from './src/limit';
import order from './src/order';
import where from './src/where';

function extend(object) {
  return Object.assign(object, {
    limit,
    order,
    where
  });
}

export {
  extend
};
