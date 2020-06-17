/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

import * as determinator from './determinator.js'

console.log(determinator.tellType('Hasta la vista, baby.'))
console.log(determinator.tellType(true))
console.log(determinator.tellType(42))
console.log(determinator.tellType({}))
console.log(determinator.tellType([]))
console.log(determinator.tellType(null))
console.log(determinator.tellType(function () {}))
console.log(determinator.tellType())
