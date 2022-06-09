<script>
  // import { workshops } from "../stores/workshopStore.js"
  import WorkshopForm from "../components/WorkshopForm.svelte";
  // import Workshop from "../components/Workshop.svelte"
  import WorkshopAll from "../components/WorkshopAll.svelte";
</script>


<main>
  <h1>Code&amp;Share[&nbsp;]</h1>
  <WorkshopForm/>

  <!-- 
  <ul>
    {#each $workshops as ws}
      <Workshop ws={ws} index={ws.userId}/>
    {:else}
      <p>Loading list...</p>
    {/each}
  </ul>
  -->
  <WorkshopAll/>
</main>