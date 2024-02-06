// Function to create a HashTable
export const createHashTable = () => {
  const table: any = {};

  // Function to insert key-value pair into the HashTable
  const insert = (key: any, value: any) => {
    table[key] = value;
  };

  // Function to retrieve value from the HashTable given a key
  const retrieve = (key: any) => {
    return table[key];
  };

  // Function to delete key-value pair from the HashTable
  const remove = (key: any) => {
    delete table[key];
  };

  // Function to get all keys in the HashTable
  const keys = () => {
    return Object.keys(table);
  };

  // Function to check if the HashTable contains a key
  const contains = (key: any) => {
    return table.hasOwnProperty(key);
  };

  return {
    insert,
    retrieve,
    remove,
    keys,
    contains,
  };
};
