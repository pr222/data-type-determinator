/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

import * as determinator from './determinator.js'

console.log(determinator.tellType('Hasta la vista, baby.'))
console.log(determinator.tellType(false))
console.log(determinator.tellType(3))
console.log(determinator.tellType({}))
console.log(determinator.tellType([]))
console.log(determinator.tellType(undefined))
console.log(determinator.tellType(function () {}))
console.log(determinator.tellType(null))
console.log(determinator.tellType())
