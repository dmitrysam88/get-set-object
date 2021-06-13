
function splitPath(pathName) {
  return pathName.replace(/\]/g, '').split(/[\.\[]/);
}

function recursiveSet(parent, pathParths, value) {
  if (!pathParths.length) return value;

  const key = pathParths.shift();

  if (!parent) parent = isNaN(key) ? {} : [];

  parent[key] = recursiveSet(parent[key], pathParths, value);

  return parent;
}

function set(obj, path, value) {
  return recursiveSet(obj, splitPath(path), value);
}

function setImmutable(obj, path, value) {
  return recursiveSet(deepClone(obj), splitPath(path), value);
}

function recursiveGet(parent, pathParths) {
  const key = pathParths.shift();

  if (parent[key] == undefined) return undefined;

  if (!pathParths.length) return parent[key];

  return recursiveGet(parent[key], pathParths);
}

function get(obj, path) {
  return recursiveGet(obj, splitPath(path));
}

function deepClone(origin) {
  let result;
  if (Array.isArray(origin)) {
    result = [];

    for (const el of origin) {
      result.push(deepClone(el));
    }

    return result;
  } else if (typeof origin === 'object' && origin !== null) {
    result = {};

    for (const key in origin) {
      result[key] = deepClone(origin[key]);
    }

    return result;
  } else {
    return origin;
  }
}

module.exports = { get, set, deepClone, setImmutable };
