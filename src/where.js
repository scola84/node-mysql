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

    let match = null;
    let value = null;

    entry.fields.forEach((field) => {
      field = this.escapeId(field);
      match = isNaN(entry.value) ? ' LIKE ' : ' = ';
      value = isNaN(entry.value) ?
        this.escape('%' + entry.value + '%') : entry.value;

      or.push(field + match + value);
    });

    if (or.length > 0) {
      and.push('(' + or.join(' OR ') + ')');
    }
  });

  return and.length > 0 ? ' WHERE ' + and.join(' AND ') : '';
}
