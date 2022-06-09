<script>
  import { supabase } from "../supabase.js"
  // console.log(supabase)
  import Auth from "../components/Auth.svelte"
  import Navbar from "../components/Navbar.svelte"
  import { user } from "../stores/authStore.js";
  import { loadWorkshops } from "../stores/workshopStore.js";

  import "../css/extraFonts.css"
  import "../css/layout.css"

  // Find out if user is logged in!
  console.log(supabase.auth.user());
  user.set(supabase.auth.user());
  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session?.user)
    if (session?.user) {
      loadWorkshops();
    }
  })
</script>

<div class="">
  <div class="pageWrapper">
    {#if $user}
      <Navbar/>
      <slot></slot>
    {:else}
      <Auth/>
    {/if}
  </div>
</div>