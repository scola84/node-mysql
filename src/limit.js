export default function limit(limit) {
  return typeof limit.offset !== 'undefined' &&
    typeof limit.count !== 'undefined' ?
    ' LIMIT ' + limit.offset + ',' + limit.count : '';
}
