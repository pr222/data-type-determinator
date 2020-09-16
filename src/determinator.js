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
  } else if (typeof (data) === 'function') {
    result += 'a function.'
  }

  if (typeof (data) === 'object') {
    if (data === null) {
      result += 'a null value.'
    } else if (Array.isArray(data) === true) {
      result += 'an array.'
    } else {
      result += 'an object.'
    }
  }

  return result
}
