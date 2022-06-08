<script>
  // import { deleteWorkshop } from "../stores/workshopStore";

  // to take in args in this component, use export ...
  export let ws;
</script>


<li>
  <span>text: {ws.text}</span> | 
  <span>id: {ws.id}</span> | 
  <span>completed: {ws.completed}</span>
</li>