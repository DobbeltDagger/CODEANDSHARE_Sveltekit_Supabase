<script>
  import { supabase } from "../supabase.js";

  const logout = () => {
    console.log("Log out");
    supabase.auth.signOut();
  }
</script>


<div class="navbarWrapper">
  <button on:click={logout}>Log Out</button>
</div>


<!-- ********************************************************************************** -->
<style>
  .navbarWrapper {
    margin-bottom: 2rem;
  }
</style>