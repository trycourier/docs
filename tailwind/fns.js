// https://github.com/tokens-studio/plugin-example-tailwindcss/blob/main/fns.js
function deepen(obj) {
  const result = {};

  // For each object path (property key) in the object
  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split(".");

    // Create sub-objects along path as needed
    let target = result;
    while (parts.length > 1) {
      const part = parts.shift();
      target = target[part] = target[part] || {};
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath];
  }

  return result;
}

function createArray({ dictionary }) {
  const arr = dictionary.allTokens;
  return JSON.stringify(arr);
}

function filterTokensByType(type, tokens) {
  const map = new Map();
  const obj = tokens.reduce((acc, cur) => {
    map[cur.type] = true;
    if (cur.type === type) {
      // if text, remove the last path because it's the same as the type and redundant
      // not for fontWeight or lineHeight because they can be loaded in with the font size as a default
      // in tailwind.config.js
      if (
        cur?.path[0] === "text" &&
        cur?.path?.length === 4 &&
        (cur?.path[3] === "fontFamily" || cur?.path[3] === "fontSize")
      ) {
        cur.path.pop();
      }

      // same for core
      if (
        cur?.path[0] === "core" &&
        cur?.path?.length === 3 &&
        (cur?.path[2] === "fontFamily" || cur?.path[2] === "fontSize")
      ) {
        cur.path.pop();
      }

      acc[cur.path.join(".")] = `var(--${cur.name})`;
    }
    return acc;
  }, {});

  // console.log("map", map);
  const deep = deepen(obj);
  return deep;
}

// https://stackoverflow.com/questions/33036487/one-liner-to-flatten-nested-object
const flatten = (obj, roots = [], sep = "-") =>
  Object
    // find props of given object
    .keys(obj)
    // return an object by iterating props
    .reduce(
      (memo, prop) =>
        Object.assign(
          // create a new object
          {},
          // include previously returned object
          memo,
          Object.prototype.toString.call(obj[prop]) === "[object Object]"
            ? // keep working if value is an object
              flatten(obj[prop], roots.concat([prop]), sep)
            : // include current prop and value and prefix prop with the roots
              { [roots.concat([prop]).join(sep)]: obj[prop] }
        ),
      {}
    );

module.exports = { createArray, filterTokensByType, flatten };
