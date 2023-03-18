function removeProperty(obj, prop) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => removeProperty(item, prop));
  }
  
  const newObj = {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObj[key] = removeProperty(obj[key], prop);
      } else if (key !== prop) {
        newObj[key] = obj[key];
      }
    }
  }
  
  return newObj;
}

export default removeProperty;