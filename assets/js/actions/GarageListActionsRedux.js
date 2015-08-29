export function searchVehicles(searchText) {
  return {
    type: 'SEARCH_VEHICLES',
    searchText
  };
}
