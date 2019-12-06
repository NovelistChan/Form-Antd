import string from "./string";

let attributes = {
  string
};

export function register(extensions) {
  attributes = { ...attributes, ...extensions };
}

export default attributes;
