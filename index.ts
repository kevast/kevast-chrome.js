import { MutationEvent, Storage } from 'kevast/dist/Storage';
import { Pair } from 'kevast/dist/Pair';

export class KevastChromeSync implements Storage {
  public async mutate(event: MutationEvent): Promise<void> {
    const promises: Array<Promise<void>> = [
      ...event.set.map(pair => set('sync', pair)),
      ...event.removed.map(pair => remove('sync', pair[0])),
      event.clear ? clear('sync') : Promise.resolve()
    ];
    await Promise.all(promises);
  }
  public async get(key: string): Promise<string | undefined> {
    return get('sync', key);
  }
}

export class KevastChromeLocal implements Storage {
  public async mutate(event: MutationEvent): Promise<void> {
    const promises: Array<Promise<void>> = [
      ...event.set.map(pair => set('local', pair)),
      ...event.removed.map(pair => remove('local', pair[0])),
      event.clear ? clear('local') : Promise.resolve()
    ];
    await Promise.all(promises);
  }
  public async get(key: string): Promise<string | undefined> {
    return get('local', key);
  }
}

function set(mode: 'sync' | 'local', pair: Pair): Promise<void> {
  return new Promise<void>(resolve => {
    chrome.storage[mode].set({ [pair.key]: pair.value }, resolve);
  });
}

function get(mode: 'sync' | 'local', key: string): Promise<string> {
  return new Promise<string>(resolve => {
    chrome.storage[mode].get(key, result => resolve(result[key]));
  });
}

function remove(mode: 'sync' | 'local', key: string): Promise<void> {
  return new Promise<void>(resolve => {
    chrome.storage[mode].remove(key, resolve);
  });
}

function clear(mode: 'sync' | 'local'): Promise<void> {
  return new Promise<void>(resolve => {
    chrome.storage[mode].clear(resolve);
  });
}
