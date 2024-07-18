export function findLast<T>(array: T[], predicate: (value: T, index: number, obj: T[]) => unknown): T | undefined {
    for (let i = array.length - 1; i >= 0; i--) {
      if (predicate(array[i], i, array)) {
        return array[i];
      }
    }
    return undefined;
  }