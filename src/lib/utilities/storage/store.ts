// Code below is taken from https://github.com/joshnuss/svelte-local-storage-store
// that implements Svelte store using local or session storages of the browser.

import { get, writable as internal, type Updater, type Writable } from "svelte/store";

type StoreDict<T> = { [key: string]: Writable<T> }

interface Serializer<T> {
  parse(s: string): T
  stringify(o: T): string
}

type StorageType = "local" | "session";

type Options<T> = {
  serializer?: Serializer<T>
  storage?: StorageType
}


const stores: StoreDict<any> = {};

export function writable<T>(key: string, value?: T, opts?: Options<T>): Writable<T> {
  const serializer = opts?.serializer ?? JSON;
  const storageType = opts?.storage ?? "local";
  const browser = typeof(window) !== 'undefined' && typeof(document) !== 'undefined';

  const updateStorage = (key: string, value: T) => {
    if (!browser) return;
    getStorage(storageType).setItem(key, serializer.stringify(value));
  }

  if (!stores[key]) {
    const store = internal(value, set => {
      const text = browser ? getStorage(storageType).getItem(key) : null;
      if (text) {
        set(serializer.parse(text));
      }

      if (browser) {
        const handle = (event: StorageEvent) => {
          if (event.key === key) {
            set(event.newValue ? serializer.parse(event.newValue) : null);
          }
        }
        window.addEventListener("storage", handle);
        return () => window.removeEventListener("storage", handle)
      }
    });

    const { subscribe, set } = store;

    stores[key] = {
      set(value: T) {
        updateStorage(key, value);
        set(value);
      },
      update(updater: Updater<T>) {
        const value = updater(get(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe,
    }
  }

  return stores[key];
}

function getStorage(type: StorageType) {
  return type === "local" ? localStorage : sessionStorage;
}

