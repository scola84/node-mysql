/*eslint no-invalid-this: "off"*/

export default function(orders) {
  const fields = Object.keys(orders);

  if (fields.length === 0) {
    return '';
  }

  return ' ORDER BY ' + fields.map((field) => {
    return this.escapeId(field) + ' ' + fields[field];
  }).join(',');
}
