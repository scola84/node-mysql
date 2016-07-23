/*eslint no-invalid-this: "off"*/

const directions = {
  'asc': 'asc',
  'desc': 'desc'
};

export default function(orders) {
  if (orders.length === 0) {
    return '';
  }

  orders = orders.map((order) => {
    return this.escapeId(order.column) + ' ' +
      (directions[order.direction] || 'asc');
  });

  return ' ORDER BY ' + orders.join(', ');
}
