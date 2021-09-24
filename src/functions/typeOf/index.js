// ____________________________________________________________________________
//<[ 0. typeOf() >> Function returns constructor name of provided object      ]>----
// [------------------->> this one is universal for most/all of the classes   ]>----
function typeOf( objToCheck ) {
  return objToCheck.constructor.name;
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = typeOf;
