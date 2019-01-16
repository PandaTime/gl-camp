import historyStore from './historyStore';
import moviesStore from './movieStore';

const stores = () => ({
  historyStore: new historyStore(document.location.pathname),
  moviesStore: new moviesStore([]),
});

export default stores;

export {
  historyStore,
  moviesStore,
};