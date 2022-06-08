<script>
  // import { addWorkshop } from "../stores/workshopStore.js";
  import { workshops } from "../stores/workshopStore.js"
  import DemoCode from "../components/DemoCode.svelte";
  import WorkshopForm from "../components/WorkshopForm.svelte";
  import Workshop from "../components/Workshop.svelte"


  const handleTestClick = () => {
    console.log("test click was pressed!")
  }
</script>



<main>
  <h1>Hi there</h1>
  <!-- <DemoCode/> -->
  <WorkshopForm/>

  <p>
    {#each $workshops as ws}
      <Workshop ws={ws} index={ws.id}/>
    {/each}
  </p>

  <div style="columns: 3 auto">

    <p><strong>Lorem ipsum dolor sit amet</strong>, <i>consectetur adipiscing elit.</i> Fusce at mauris iaculis libero feugiat facilisis ut sed mi. Suspendisse lobortis sed ex sit amet euismod. Vivamus eget arcu ut eros efficitur lobortis a iaculis est. Aliquam sed diam id ipsum consectetur bibendum sit amet vitae ipsum. Donec in dolor orci. Nam vehicula pharetra lorem eu malesuada. Vestibulum mollis consectetur tortor at sodales. Morbi vitae rhoncus ligula, eu euismod ante. In pharetra sodales leo, vel commodo mauris facilisis eu. Aliquam aliquam tellus magna, a blandit sapien pulvinar et. Nullam a sapien at lacus porttitor malesuada.<br/>
    <button on:click|preventDefault={handleTestClick}>press me here!</button></p>
    <p>Aliquam arcu risus, tincidunt ac pharetra nec, varius tincidunt eros. Donec nisi diam, porttitor id elementum a, elementum a nisi. In interdum ipsum quis interdum dignissim. Nulla quis ante porta augue imperdiet volutpat. Aliquam blandit erat sed ligula feugiat dignissim. Integer imperdiet augue non lorem porttitor tempus. Phasellus sagittis, libero sed volutpat semper, orci lectus vehicula orci, in bibendum leo neque a ligula. Morbi porttitor bibendum ipsum, non ullamcorper justo dictum lacinia. Fusce pretium sapien purus, et varius risus suscipit ut. Suspendisse dignissim tellus non nisi tincidunt posuere. Praesent ultricies vel dolor sed interdum. Quisque sed eros ex. Ut pharetra nisl at mi iaculis, nec maximus lectus pulvinar. Aenean vitae metus facilisis, viverra enim nec, porta leo. Ut vitae lorem scelerisque, imperdiet elit eget, pulvinar mi. Phasellus commodo varius aliquam.</p>
    <p>Nam sit amet ultricies metus, sed interdum elit. Pellentesque tempor justo in gravida ornare. Aliquam erat volutpat. Donec tincidunt et urna sed hendrerit. Vivamus libero nibh, dapibus ut efficitur eu, ultricies in dolor. Pellentesque nisl odio, tristique sit amet felis non, rutrum gravida nunc. Morbi a fermentum lectus. Quisque elementum lacus nec sollicitudin ornare. Vivamus vitae augue arcu.</p>
    <p>Duis finibus cursus neque nec bibendum. Duis tempor id sapien sit amet egestas. Donec iaculis augue at rhoncus ultricies. Aenean auctor metus blandit urna ultrices cursus. Praesent vel eros vitae nisi posuere lobortis tempor in mauris. Maecenas mollis sodales sollicitudin. Pellentesque molestie imperdiet tortor, eu vulputate dolor mollis eu. Suspendisse potenti. Nam auctor sollicitudin nulla in molestie. Sed non justo eu eros lobortis imperdiet. In nec tristique est, vel molestie quam. Praesent scelerisque nisi enim, eu pharetra diam laoreet vel. In luctus laoreet magna, non pellentesque nunc consectetur ut. Cras dapibus pellentesque gravida. Vivamus mi nunc, lacinia at euismod ac, facilisis nec nisi.</p>
    <p>Sed purus est, pretium in lorem eu, pharetra sagittis ante. Curabitur a nisl non metus posuere tempor sed id dolor. Nam sit amet congue arcu. Suspendisse sed blandit ligula. Cras consequat eu mi ut lacinia. Cras nulla sapien, convallis at aliquam vel, mollis sit amet ligula. Morbi vitae mi leo. Etiam et sapien et nisi laoreet rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc maximus placerat odio eget molestie. Nullam lobortis arcu elit, eu suscipit dolor elementum sed.</p>

  </div>
</main>