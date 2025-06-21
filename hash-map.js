#!/usr/bin/env node

function HashMap() {
  const hashMap = {};
  hashMap.capacity = 16;
  hashMap.loadFactor = 0.8;
  hashMap.size = 0;
  hashMap.buckets = new Array(hashMap.capacity).fill(null).map(() => []);
  hashMap.hash = function (key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % hashMap.capacity;
  };
  hashMap.set = function (key, value) {
    const index = hashMap.hash(key);
    const bucket = hashMap.buckets[index];
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    hashMap.size++;
  };
  hashMap.get = function (key) {
    const index = hashMap.hash(key);
    const bucket = hashMap.buckets[index];
    for (const pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return null;
  };
  hashMap.has = function (key) {
    const index = hashMap.hash(key);
    const bucket = hashMap.buckets[index];
    return bucket.some((pair) => pair[0] === key);
  };
  hashMap.remove = function (key) {
    const index = hashMap.hash(key);
    const bucket = hashMap.buckets[index];
    const idx = bucket.findIndex((pair) => pair[0] === key);
    if (idx !== -1) {
      bucket.splice(idx, 1);
      hashMap.size--;
      return true;
    }
    return false;
  };
  hashMap.length = function () {
    return hashMap.size;
  };
  hashMap.clear = function () {
    hashMap.buckets = new Array(hashMap.capacity).fill(null).map(() => []);
    hashMap.size = 0;
  };
  hashMap.keys = function () {
    const keys = [];
    for (const bucket of hashMap.buckets) {
      for (const pair of bucket) keys.push(pair[0]);
    }
    return keys;
  };
  hashMap.values = function () {
    const values = [];
    for (const bucket of hashMap.buckets) {
      for (const pair of bucket) values.push(pair[1]);
    }
    return values;
  };
  hashMap.entries = function () {
    const entries = [];
    for (const bucket of hashMap.buckets) {
      for (const pair of bucket) entries.push(pair);
    }
    return entries;
  };
  return hashMap;
}
//
// const test = HashMap();
// test.loadFactor = 0.75;
//
// test.set("apple", "red");
// test.set("banana", "yellow");
// test.set("carrot", "orange");
// test.set("dog", "brown");
// test.set("elephant", "gray");
// test.set("frog", "green");
// test.set("grape", "purple");
// test.set("hat", "black");
// test.set("ice cream", "white");
// test.set("jacket", "blue");
// test.set("kite", "pink");
// test.set("lion", "golden");
// console.log("First length: " + test.length());
// console.log("First capacity: " + test.capacity);
//
// test.set("jacket", "lavendar");
// test.set("kite", "hot pink");
// test.set("lion", "yellow");
// console.log("Second length: " + test.length());
// console.log("Second capacity: " + test.capacity);
//
// test.set("moon", "silver");
// test.set("moon", "gray");
// test.set("jacket", "blue");
// test.set("kite", "pink");
// test.set("lion", "golden");
// console.log("First get : " + test.get("moon"));
// test.remove("moon");
// console.log("First has: " + test.has("moon"));
// console.log("First keys: ", test.keys());
// console.log("First values: ", test.values());
// console.log("First entries: ", test.entries());
// test.clear();
// console.log("Last length: " + test.length());

// HashMap >> [0, 1, 2]
// [0, 1, 2] => [1, 2, 3]
// [1, 2, 3] >> [["first", 1], ["second", 2], ["third", 3]]

function HashSet() {
  const hashSet = {};
  hashSet.capacity = 16;
  hashSet.loadFactor = 0.8;
  hashSet.size = 0;
  hashSet.buckets = new Array(hashSet.capacity).fill(null).map(() => []);
  hashSet.hash = function (key) {
    let hashCode = 0;
    const primeNumber = 31;
    const keyStr = String(key);
    for (let i = 0; i < keyStr.length; i++) {
      hashCode = primeNumber * hashCode + keyStr.charCodeAt(i);
    }
    return hashCode % hashSet.capacity;
  };
  hashSet.add = function (key) {
    const index = hashSet.hash(key);
    const bucket = hashSet.buckets[index];
    for (const entry of bucket) {
      if (entry === key) {
        return;
      }
    }
    bucket.push(key);
    hashSet.size++;
  };
  hashSet.get = function (key) {
    const index = hashSet.hash(key);
    const bucket = hashSet.buckets[index];
    for (const entry of bucket) {
      if (entry === key) {
        return entry;
      }
    }
    return null;
  };
  hashSet.has = function (key) {
    const index = hashSet.hash(key);
    const bucket = hashSet.buckets[index];
    return bucket.some((entry) => entry === key);
  };
  hashSet.remove = function (key) {
    const index = hashSet.hash(key);
    const bucket = hashSet.buckets[index];
    const idx = bucket.findIndex((entry) => entry === key);
    if (idx !== -1) {
      bucket.splice(idx, 1);
      hashSet.size--;
      return true;
    }
    return false;
  };
  hashSet.length = function () {
    return hashSet.size;
  };
  hashSet.clear = function () {
    hashSet.buckets = new Array(hashSet.capacity).fill(null).map(() => []);
    hashSet.size = 0;
  };
  hashSet.keys = function () {
    const keys = [];
    for (const bucket of hashSet.buckets) {
      for (const entry of bucket) keys.push(entry);
    }
    return keys;
  };
  hashSet.values = function () {
    const values = [];
    for (const bucket of hashSet.buckets) {
      for (const entry of bucket) values.push(entry);
    }
    return values;
  };
  hashSet.entries = function () {
    const entries = [];
    for (const bucket of hashSet.buckets) {
      for (const entry of bucket) entries.push(entry);
    }
    return entries;
  };
  return hashSet;
}
