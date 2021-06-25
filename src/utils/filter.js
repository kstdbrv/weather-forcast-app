
// filter<T>(predicate: (element: T) => boolean, collection: T[]): T[];

/**
 * myFilter function, duplicate Array.prototype.filter, 
 * build on Array.prototype.reduce
 * @function
 * @template T 
 * @param {(element: T) => boolean} predicate
 * @param {T[]} collection
 * @returns {T[]}
 */

 function myFilter(predicate, collection) {
  return collection.reduce((acc, element) =>
   [ ...acc, ...predicate(element) ? [element] : [] ],
   []);
};