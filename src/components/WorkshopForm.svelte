<script>
  import { addWorkshop } from "../stores/workshopStore.js"
  let workshop = "";

  const handleSubmit = () => {
    addWorkshop(workshop);
    workshop = ""; // clean the form
    console.log("handleSubmit was pressed. Submitting! ...");
  }
</script>


<form on:submit|preventDefault={ handleSubmit }>
  <div>
    <label for="workshop">Workshop Title</label>
    <input name="workshop" type="text" bind:value={workshop} placeholder="What's the workshop title?"/>
  </div>
  <button type="submit">Submit</button>
</form>