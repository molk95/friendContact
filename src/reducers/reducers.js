const initialStateSearch = {
  search: '',
};

export const searchKittens = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_FIELD':
      return { ...state, search: action.payload };

    default:
      return state;
  }
};


const initialStateKittens = {
    kittens: [],
    isPending: false,
    error: ''
  };
export const requestKittens = (state = initialStateKittens, action = {}) => {
  switch (action.type) {
    case 'REQUEST_CAT_PENDING':
      return { ...state, isPending: true };
    case 'REQUEST_CAT_SUCCESS':
      return { ...state, kittens: action.payload, isPending: false };
    case 'REQUEST_CAT_FAILED':
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
