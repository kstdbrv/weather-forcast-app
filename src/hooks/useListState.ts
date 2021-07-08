import { useState } from 'react';


export const useListState = <T>(initialValue: T[]) => {
  const [items, setItems] = useState<T[]>(initialValue);

  const add = (item: T) => {
    setItems((existing) => [...existing, item]);
  };
  const addMany = (item:T[]) => {
    setItems((existing) => [...existing, ...item]);
  };
  const remove = (item: T) => {
    setItems((existing) => existing.filter(i => i !== item));
  };
  const removeBy = (predicate:(item:T) => T) => {
    const item = items.find(predicate);
    if (item) {
      remove(item);
    }
  };
  const removeAll = () => {
    setItems([]);
  };
  const set = (items: T[]) => {
    setItems(items)
  };

  return { items, add, addMany, remove, removeBy, removeAll, set };
}


/* let list:number[] = [1, 3, 5, 8]

const someList = useListState<number>(list)

someList.add(10)
someList.set(list) */

