// Function to create a HashTable
export const createHashTable = () => {
  const table: Record<number | string, string[]> = {};

  // Function to insert key-value pair into the HashTable
  const insert = (key: string, value: string[]): void => {
    table[key] = value;
  };

  // Function to retrieve value from the HashTable given a key
  const retrieve = (key: string | number): string[] => {
    return table[key];
  };

  // Function to delete key-value pair from the HashTable
  const remove = (key: string | number): void => {
    delete table[key];
  };

  // Function to get all keys in the HashTable
  const keys = (): string[] => {
    return Object.keys(table);
  };

  // Function to check if the HashTable contains a key
  const contains = (key: string | number): boolean => {
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
