const chooseOptimalDistance = (t, k, ls) => {
  // твій код
  let arrAllValues = [];

  const ArraySum = (arr) => {
    const newValue = arr.reduce((acc, currentValue) => {
      return (acc += currentValue);
    }, 0);
    return newValue;
  };

  function newArrOfArrs(arr, prepend) {
    let i,
      version,
      el,
      result = [];
    prepend = prepend || [];
    if (arr.length === k) return [arr];
    for (i = 0; i < arr.length; i++) {
      if (arr.length === k) {
        result.push(prepend.concat([arr[i], arr[(i + 1) % k]]));
      } else {
        version = arr.slice();
        el = version.splice(i, 1);
        result = result.concat(newArrOfArrs(version, prepend.concat(el)));
      }
    }
    return result;
  }

  const test = newArrOfArrs(ls);
  test.map((el) => {
    arrAllValues.push(ArraySum(el));
  });
  const arrUniqueValue = (arr) => {
    return arr.reduce((p, c) => {
      if (p.indexOf(c) < 0 && c <= t) p.push(c);
      return p;
    }, []);
  };

  const result = Math.max(...arrUniqueValue(arrAllValues));
  if (result && typeof result === "number" && result !== -Infinity)
    return result;

  return null;
};
