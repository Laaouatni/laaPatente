export function recursiveObjectToArray(obj: object) {
  let result: any[] = [];

  Object.values(obj).forEach((thisValue) => {
    if(Array.isArray(thisValue)) {
      result.push(thisValue);
    } else {
      result = recursiveObjectToArray(thisValue);
    }
  });

  return result.flat();
}