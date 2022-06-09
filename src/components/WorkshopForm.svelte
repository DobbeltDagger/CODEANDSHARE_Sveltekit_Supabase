<script>
  import { addWorkshop } from "../stores/workshopStore.js"
  let wsNumber = "";
  let wsTitle = "";
  let wsDate = "";
  let wsLead = "";
  let wsDescription = "";
  let wsLink = "";
  let wsLinkDescription = "";
  
  /////////////////////////////////////////
  // post the form data to store
  const handleSubmit = () => {
    let userId = null; // "test"; // Date.now();
    addWorkshop(wsNumber, wsTitle, wsDate, wsLead, wsDescription, wsLink, wsLinkDescription, userId)
    wsNumber = "";
    wsTitle = "";
    wsDate = "";
    wsLead = "";
    wsDescription = "";
    wsLink = "";
    wsLinkDescription = "";
    console.log("Submitting...");
  }
</script>


<!-- ****************************************************************************** -->
<form class="workshopForm" on:submit|preventDefault={ handleSubmit }>
  <!-- Number -->
  <div>
    <label for="number">Workshop Number</label>
    <input name="number" type="text" bind:value={wsNumber} placeholder="Type Workshop Number"/>
  </div>
  <!-- Title -->
  <div>
    <label for="workshop">Workshop Title</label>
    <input name="workshop" type="text" bind:value={wsTitle} placeholder="What's the workshop title?"/>
  </div>
  <!-- Date -->
  <div>
    <label for="Date">Workshop Date</label>
    <input name="Date" type="text" bind:value={wsDate} placeholder="Type Workshop Date"/>
  </div>
  <!-- Lead -->
  <div>
    <label for="Lead">Workshop Lead</label>
    <input name="Lead" type="text" bind:value={wsLead} placeholder="Type Workshop Lead"/>
  </div>
  <!-- Description -->
  <div>
    <label for="Description">Workshop Description</label>
    <textarea name="Description" rows="6" cols="50" bind:value={wsDescription} placeholder="Type Workshop Description"/>
  </div>
  <!-- Link -->
  <div>
    <label for="Link">Workshop Link</label>
    <input name="Link" type="text" bind:value={wsLink} placeholder="Type Workshop Link"/>
  </div>
  <!-- Link -->
  <div>
    <label for="LinkDescription">Workshop Link Description</label>
    <input name="LinkDescription" type="text" bind:value={wsLinkDescription} placeholder="Type Workshop Link Description"/>
  </div>  

  <!-- SUBMIT button -->
  <button type="submit">Submit</button>
</form>


<!-- ****************************************************************************** -->
<style>
  .workshopForm {
    border: 1px solid red;
    margin-bottom: 2rem;
  }
</style>