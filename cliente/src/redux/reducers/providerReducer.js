const initialState = {
  providers: []
};

const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROVIDERS':
      return { ...state, providers: action.payload };
    case 'ADD_PROVIDER':
      return { ...state, providers: [...state.providers, action.payload] };
    case 'DELETE_PROVIDER':
      return { ...state, providers: state.providers.filter(p => p.name !== action.payload) };
    default:
      return state;
  }
};

export default providerReducer;