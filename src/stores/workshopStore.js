import { writable } from "svelte/store";
import { supabase } from "../supabase.js";

export const workshops = writable([]);


////////////////////////////////////////////////////////
// load supabase data async!
export const loadWorkshops = async () => {
  const { data, error } = await supabase.from('workshops').select();
  if (error) {
    return console.error(error)
  }
  workshops.set(data);
}


////////////////////////////////////////////////////////
// add new workshop to existing array
export const addWorkshop = async (number, title, date, lead, description, link, linkDescription, userId) => {
  const { data, error } = await supabase.from('workshops').insert([{
    number,
    title,
    date,
    lead,
    description,
    link,
    linkDescription,
    userId
  }])
  if (error) {
    return console.error(error)
  }

  workshops.update( (cur) => {
    // return the existing + new
    const newWorkshops = [ ... cur, data[0] ]
    return newWorkshops
  })
}


/*
////////////////////////////////////////////////////////
// remove workshop with the id in arg
export const deleteWorkshop = (id) => {
  workshops.update(workshops => workshops.filter(ws => ws.id !== id))
}
*/