const initState = {
  expanded: false,
  loaded: false,
  isAttractions: true,
  isResto: false,
  isToilettes: false,
  isSortie: false,
  witchOne: 0,
  goClick: false,
  wichType: 'attractions',
};

const showIconsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ATTRACTION':
      const stateAttraction = {
        expanded: false,
        loaded: false,
        isAttractions: true,
        isResto: false,
        isToilettes: false,
        witchOne: 0,
        goClick: false,
        isSortie: false,

        wichType: 'attractions',
      };
      console.log('ici stateAttraction', state);
      return stateAttraction;
    case 'RESTO':
      const stateRestaurant = {
        expanded: false,
        loaded: false,
        isAttractions: false,
        isResto: true,
        isToilettes: false,
        witchOne: 0,
        isSortie: false,

        goClick: false,
        wichType: 'attractions',
      };
      console.log('ici stateRestaurant', state);
      return stateRestaurant;
    case 'TOILETTES':
      const stateToilettes = {
        expanded: false,
        loaded: false,
        isAttractions: false,
        isResto: false,
        isToilettes: true,
        isSortie: false,

        witchOne: 0,
        goClick: false,
        wichType: 'attractions',
      };
      console.log('ici stateToilettes ', state);
      return stateToilettes;
    case 'SORTIES':
      const stateSorties = {
        expanded: false,
        loaded: false,
        isAttractions: false,
        isResto: false,
        isToilettes: false,
        isSortie: true,
        witchOne: 0,
        goClick: false,
        wichType: 'attractions',
      };
      console.log('ici stateSorties ', state);
      return stateSorties;
    default:
      console.log('ici default state', state);
      return state;
  }
};

export default showIconsReducer;
