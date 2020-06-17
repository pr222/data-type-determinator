/**
 * determinator module.
 *
 * @module src/determinator
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
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
  let result = 'You sent me a'

  const type = typeof data

  if (type === 'undefined') {
    result += 'n undefined value.'
  } else if (type === 'function' ||
      type === 'string' ||
      type === 'number' ||
      type === 'boolean') {
    result += ` ${type}.`
  } else if (type === 'object') {
    if (data === null) {
      result += ' null value.'
    } else if (Array.isArray(data)) {
      result += 'n array.'
    } else {
      result += 'n object.'
    }
  }

  return result
}
