import { writable } from "svelte/store";

export const workshops = writable([]);


////////////////////////////////////////////////////////
// add new workshop to existing array
export const addWorkshop = (text) => {
  workshops.update( (cur) => {
    // return the existing + new
    const newWorkshops = [ ... cur, { text, completed: false, id: Date.now() }]
    return newWorkshops
  })
}

////////////////////////////////////////////////////////
// remove workshop with the id in arg
export const deleteWorkshop = (id) => {
  workshops.update(workshops => workshops.filter(ws => ws.id !== id))
}