let _default = {
  string: _ => "",
  array: _ => [],
  object: _ => ({}),
  number: _ => 0,
  integer: _ => "",
  boolean: _ => false,
  arrayTable: _ => [],
  arrayTableItem: _ => ({})
};

export function register(extensions) {
  _default = { ..._default, ...extensions };
}

export function parser(type) {
  return _default[type]();
}
