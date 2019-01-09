import historyStore from './historyStore';

const stores = () => ({
  historyStore: new historyStore(document.location.pathname),
});

export default stores;

export {
  historyStore,
};