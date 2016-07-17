export default function where(terms, defaults = []) {
  const and = [];

  Object.keys(terms).forEach((term) => {
    const or = [];
    const fields = terms[term].length > 0 ? terms[term] : defaults;

    fields.forEach((field) => {
      or.push(this.escapeId(field) + ' LIKE ' +
        this.escape('%' + term + '%'));
    });

    if (or.length > 0) {
      and.push('(' + or.join(' OR ') + ')');
    }
  });

  return and.length > 0 ? ' WHERE ' + and.join(' AND ') : '';
}
