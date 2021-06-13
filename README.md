## Get set library

This library is for adding or getting some properties from object by path in string

```js
const { set } = reqyire('get-set-object');
const a = {};
set(a, 'users[0].name.firstName', 'John');
JSON.stringify(a); //{"users":[{"name":{"firstName":"John"}}]}
```

```js
const { get } = reqyire('get-set-object');
const a = {
  users: [
    {
      name: {
        firstName: 'John',
        lastName: 'Smith',
      }
    }
  ]
}
get(a, 'users[0].name.lastName'); // Smith
```

```js
const { deepClone } = reqyire('get-set-object');
const a = {
  users: [
    {
      name: {
        firstName: 'John',
        lastName: 'Smith',
      }
    }
  ]
}
const b = deepClone(a);

b.users[0] === a.users[0]; // false
```
