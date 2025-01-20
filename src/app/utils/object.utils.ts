/**
 *
 * @param list
 * @param keyGetter
 */
export function groupBy<K, V>(list: V[], keyGetter: (input: V) => K): Map<K, V[]> {
  const map = new Map();

  for (const item of list) {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  }

  return map;
}

/**
 *
 * @param list
 * @param keyGetter
 */
export function toMap<K, V>(list: V[], keyGetter: (input: V) => K): Map<K, V> {
  const map = new Map();

  for (const item of list) {
    const key = keyGetter(item);
    map.set(key, item);
  }

  return map;
}
