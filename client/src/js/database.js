import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");
  const jateDb = await openDB("jate", 1);
  const jateData = jateDb.transaction("jate", "readwrite");
  const store = jateData.objectStore("jate");
  const request = store.put({ id: 1, content: content });
  const result = await request;
  console.log("added ", result);
  console.error("putDb not implemented");
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET all from the database");
  const jateDb = await openDB("jate", 1);
  const jateData = jateDb.transaction("jate", "readonly");
  const store = jateData.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  if (result) {
    console.log("result.value", result);
  } else {
    console.error("getDb not implemented");
  }
  return result;
};

initdb();
