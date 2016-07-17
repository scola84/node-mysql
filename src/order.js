export default function(order) {
  return order.column && order.direction ?
    ' ORDER BY ' + order.column + ' ' + order.direction : '';
}
