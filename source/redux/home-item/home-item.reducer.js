import {HomeItemActionTypes} from './home-item.type';

import _ from 'lodash';

const INITIAL_STATE = {
  content: [],
  filterData: [],
  search: '',
};

export const homeReducer = (state = INITIAL_STATE, action) => {
  console.log('Data: ', state);
  switch (action.type) {
    case HomeItemActionTypes.HOME_ITEM:
      return {
        ...state,
        content: action.payload,
        filterData: action.payload,
      };
    case HomeItemActionTypes.SEARCH:
      return {
        ...state,
        content: searchFilter(state, action),
        search: action.search,
      };
    default:
      return state;
  }
};

const searchFilter = (state, action) => {
  const formatQuery = action.search.toLowerCase();
  const filter = state.filterData.map((val) => {
    const data = _.filter(val.BusinessMaster_Home, (keywords) => {
      return contains(keywords, formatQuery);
    });
    return {...val, BusinessMaster_Home: data};
  });
  console.log("Filtering: ", filter)
  return filter;
};

const contains = (keywords, query) => {
  const {Buss_Name} = keywords;
  console.log(`Buss_Name: ${JSON.stringify(keywords.Buss_Name)}`);
  if (Buss_Name !== null && Buss_Name !== '' && Buss_Name !== undefined) {
    if (Buss_Name.toLowerCase().includes(query)) {
      return true;
    }
  }
  return false;
};
