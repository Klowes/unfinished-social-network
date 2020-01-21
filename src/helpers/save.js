import store from 'store';
export function save (state) {
    store.set('state', state);
    this.setState(state);
}
export const mergeSave = (...state) => {
    save(state ? {...state} : {});
}

export const load = () => {
    return store.get('state');
};