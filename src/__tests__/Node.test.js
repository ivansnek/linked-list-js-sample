const Node = require('../Node');

test('Node should have data and next attributes', () => {
  const node = new Node();
  expect(node).toHaveProperty('data');
  expect(node).toHaveProperty('next');
});

test('Instantiate Node object with data, data property should have a valid value', () => {
  let node = new Node();
  expect(node.data).toBeUndefined();
  node = new Node('data')
  expect(node.data).toBe('data');
});

test('Node can have next reference', () => {
  const node1 = new Node('some data');
  const node2 = new Node('second data', node1);
  expect(node1.data).toBe('some data');
  expect(node2.data).toBe('second data');
  expect(node2.next).toBe(node1);
});

test('Node can set data and next reference after instanciate object', () => {
  const node = new Node();
  expect(node.data).toBeUndefined();
  expect(node.next).toBeFalsy();
  expect(node).toHaveProperty('setData');
  expect(node).toHaveProperty('setNext');
  node.setData(123);
  expect(node.data).toBe(123);
  const node2 = new Node();
  node.setNext(node2);
  expect(node.next).toBe(node2);
});