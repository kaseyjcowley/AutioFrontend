const defaultState = {
  searchText: ''
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'SEARCH_VEHICLES':
      return Object.assign({}, state, {
        searchText: action.searchText
      });

    default:
      return state;
  }
}
