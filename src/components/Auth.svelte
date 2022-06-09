<script>
  import { supabase } from "../supabase.js";

  let loading = false;
  let email;

  const handleLogin = async () => {
    try {
      loading = true;
      console.log("email:", email)
      const {error} = await supabase.auth.signIn({email});
      if (error) throw error;
      alert('Check your email for the login link')
    }
    catch (error) {
      console.error(error)
      alert(error.error_description || error.message)
    }
    finally {
      loading = false;
    }
  }
</script>


<h1>Log In</h1>
<p>Sign in via magic link with your email below.</p>
<form on:submit|preventDefault={handleLogin}>
  <div>
    <label for="email">Email</label>
    <input name="email" type="email" placeholder="Your email" bind:value={email}/>
  </div>
  <button type="submit">Log In</button>
</form>