<script>
  import { onMount } from 'svelte';

  import { workshops, loadWorkshops } from "../stores/WorkshopStore.js"

  // onMount: https://svelte.dev/tutorial/onmount
  onMount(async () => {
    await loadWorkshops();
  });

  ///////////////////////////////////////
  // handle click for edit buttons on each workshop
  const handleEditClick = () => {
    console.log("Edit was clicked!")
  }
</script>


{#if $workshops.length > 0}
  <table>
    <tr>
      <th>Number:</th>
      <th>Title:</th>
      <th>Date:</th>
      <th>Lead:</th>
      <th>Description:</th>
      <th>Link:</th>
      <th>LinkDescription:</th>
      <th>UserId:</th>
      <th>Edit</th>
    </tr>
    {#each $workshops as ws}
      <tr>
        <td>{ws.number}</td>
        <td>{ws.title}</td>
        <td>{ws.date}</td>
        <td>{ws.lead}</td>
        <td>{ws.description}</td>
        <td>{ws.link}</td>
        <td>{ws.linkDescription}</td>
        <td>{ws.userId}</td>
        <td><a on:click|preventDefault={handleEditClick} class="editBtn">Edit</a></td>
      </tr>
    {/each}
  </table>
{:else}
  <p>loading ...</p>
{/if}



<!-- ************************************************************************** -->
<style>
  table {
    font-size: 18px;
    line-height: 24px;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  table tr, table td {
    text-align: left;
    vertical-align: top;
  }
  th, td {
    padding: 1rem;
  }
  .editBtn {
    cursor: pointer;
  }
</style>