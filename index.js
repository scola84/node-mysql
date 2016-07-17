import limit from './src/limit';
import order from './src/order';
import where from './src/where';

export function extend(connection) {
  connection.limit = limit;
  connection.order = order;
  connection.where = where;

  return connection;
}
