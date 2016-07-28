/*eslint no-invalid-this: "off"*/

export default function where(fields, defaults = []) {
  const and = [];
  const entries = [];

  Object.keys(fields).map((field) => {
    fields[field].forEach((value) => {
      entries.push({
        fields: field ? [field] : defaults,
        value
      });
    });
  });

  entries.forEach((entry) => {
    const or = [];

    entry.fields.forEach((field) => {
      or.push(this.escapeId(field) + ' LIKE ' +
        this.escape('%' + entry.value + '%'));
    });

    if (or.length > 0) {
      and.push('(' + or.join(' OR ') + ')');
    }
  });

  return and.length > 0 ? ' WHERE ' + and.join(' AND ') : '';
}
