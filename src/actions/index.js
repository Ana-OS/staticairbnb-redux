// import flats from '../data/flats'; 

// this is the action we will pass to the flats_reducer
export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';

export function setFlats() {
  const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json'
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return {
        type: SET_FLATS,
        payload: data
      }
    });  
}


export function selectFlat(flat) {
  console.log(flat)
  return {
    type: 'SELECT_FLAT',
    payload: flat
  } 
}