export default function limit(value) {
  return typeof value.offset !== 'undefined' &&
    typeof value.count !== 'undefined' ?
    ' LIMIT ' + value.offset + ',' + value.count : '';
}
