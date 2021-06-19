
// map<T, V>(callback: (element: T) => V, collection: T[]): V[];

/**
 * myMap function, duplicate Array.prototype.map, 
 * build on Array.prototype.reduce
 * @function
 * @template T, V
 * @param {(element: T) => V} callback
 * @param {T[]} collection
 * @returns {V[]}
 */

 function myMap(callback, collection) {
  return collection.reduce((acc, element) => 
    [ ...acc, callback(element) ], []
  );
};


