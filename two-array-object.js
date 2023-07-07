"use strict";

/** accepts two arrays ([keys], [values]); returns object of keys:values
 * if not enough values, excess keys set to null
 * if not enough keys, ignore excess values
 */

function twoArrayObject(keys, values) {
  const outputObject = {};

  for (let i = 0; i < keys.length; i++) {
    if (!values[i]) {
      outputObject[keys[i]] = null;
    } else {
      outputObject[keys[i]] = values[i];
    }
  }

  return outputObject;
}

//possible to refactor?