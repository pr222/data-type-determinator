/**
 * determinator module.
 *
 * @module src/determinator
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {*} data - The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */
export function tellType (data) {
  let result = 'You sent me '

  if (typeof (data) === 'string') {
    result += 'a string.'
  } else if (typeof (data) === 'number') {
    result += 'a number.'
  } else if (typeof (data) === 'boolean') {
    result += 'a boolean.'
  } else if (typeof (data) === 'undefined') {
    result += 'an undefined value.'
  } else if (typeof (data) === 'object') {
    result += 'an object.'
  } else if (typeof (data) === typeof 'Array') {
    result += 'an array.'
  } else if (typeof (data) === 'function') {
    result += 'a function.'
  } else if (typeof (data) === typeof 'null') {
    result += 'a null value.'
  }
  return result
}
