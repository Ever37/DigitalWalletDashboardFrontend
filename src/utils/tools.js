// a value is empty if it's null/undefined, empty string , false boolean, empty array or empty object
// if number, only Nan is empty (but not if it's zero!)
export const isNotEmpty = (v) => {
  if (v == null || v === '' || Number.isNaN(v) || v === false) return false;
  const t = typeof v;
  if (t === 'string' || t === 'number' || t === 'boolean' || t === 'bigint') return true;
  if (Array.isArray(v)) return v.length > 0;
  return Object.keys(v).length > 0;
};

export const isEmpty = (v) => !isNotEmpty(v);