const LinkedList = require('../LinkedList');
const Node = require('../Node');

test('should have a head property', () => {
  const list = new LinkedList();
  expect(list).toHaveProperty('head');
});

test('Linkedlist should have a size method that returns all the node count', () => {
  const node = new Node('some data');
  const list = new LinkedList(node);
  expect(list).toHaveProperty('size');
  expect(list.size()).toBe(1);
});

test('should a head property with valid value', () => {
  const node = new Node();
  const list = new LinkedList(node);
  expect(list).toHaveProperty('head');
  expect(list.head).toBe(node);
});

test('should be able to access head data', () => {
  const node = new Node('test');
  const list = new LinkedList(node);
  expect(list.head.data).toBe('test');
});

test('should have a insert method to add a new node', () => {
  const list = new LinkedList();
  expect(list).toHaveProperty('insert');
  list.insert('data');
  expect(list.size()).toBe(1);
  list.insert('data2');
  expect(list.size()).toBe(2);
  list.insert('data3');
  expect(list.size()).toBe(3);
});

test('should have a insertAt method to add a new node at given indedx', () => {
  const list = new LinkedList();
  expect(list).toHaveProperty('insertAt');
  list.insert('data');
  list.insert('data2');
  list.insert('data3');
  list.insertAt('dataInserted', 1);
  const node = list.getAt(1);
  const oldNode = list.getAt(2);
  expect(node.data).toBe('dataInserted');
  expect(oldNode.data).toBe('data2');
});

test('should have a method to get the last node', () => {
  const list = new LinkedList();
  list.insert('data');
  list.insert('data2');
  list.insert('data3');
  expect(list).toHaveProperty('getLast');
  const node = list.getLast();
  expect(node.data).toBe('data3');
  expect(node.next).toBe(null);
});

test('should have a method to get the first node', () => {
  const list = new LinkedList();
  list.insert('data');
  list.insert('data2');
  list.insert('data3');
  expect(list).toHaveProperty('getFirst');
  const node = list.getFirst();
  expect(node.data).toBe('data');
});

test('should have a getAt method that returns an node at given index', () => {
  const list = new LinkedList();
  expect(list).toHaveProperty('getAt');
  list.insert('data');
  list.insert('data2');
  list.insert('data3');
  const node = list.getAt(1);
  expect(node.data).toBe('data2');
});