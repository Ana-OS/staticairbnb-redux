import flats from '../data/flats'; 

// this is the action we will pass to the flats_reducer
export function setFlats() {
    // to do: Api call! For now, simulate a DB
  return {
    type: 'SET_FLATS',
    payload: flats
  } 
}


export function selectFlat(flat) {
  // to do: Api call! For now, simulate a DB
  console.log(flat)
  return {
    type: 'SELECT_FLAT',
    payload: flat
  } 
}