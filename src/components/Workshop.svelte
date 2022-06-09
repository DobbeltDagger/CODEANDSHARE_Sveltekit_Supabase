<script>
  // import { deleteWorkshop } from "../stores/workshopStore";

  // to take in args in this component, use export ...
  export let ws;
</script>


<li>
  <span>Number: {ws.number} | </span>
  <span>Title: {ws.title} | </span>
  <span>Date: {ws.date} | </span>
  <span>Lead: {ws.lead} | </span>
  <span>Description: {ws.description} | </span>
  <span>Link: {ws.link} | </span>  
  <span>LinkDescription: {ws.linkDescription} | </span>
  <span>UserId: {ws.userId} | </span>
  <!-- <span>completed: {ws.completed}</span> -->
</li>


