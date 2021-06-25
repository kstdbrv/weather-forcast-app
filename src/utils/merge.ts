

function merge<T, V>(object1: T, object2: V): T & V {

  return { ...object1, ...object2 };
};


export { }


/* type typedobject1 = {
  name: string
}
type typedobject2 = {
  age: 24
}
  
let object1: typedobject1 = {
  name: 'Stefan',
}

let object2: typedobject2 = {
  age: 24
}

console.log(merge(object1, object2)) */
