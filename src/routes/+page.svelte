<script>
  let { data } = $props();
  let { supabase } = $derived(data)
  import Navbar from "../components/Navbar.svelte";

  async function logout() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      return error
    }
  }
</script>

<Navbar isLoggedIn={data.session} logout={logout} />

<div class="flex flex-col justify-center items-center gap-2 m-8">
  <h1 class="text-5xl">Money Tracker</h1>

  <p class="text-xl">A money tracker. That's it.</p>

  <a href={data.session ? "/dashboard" : "/login"} class="m-6">
    <button class="border-2 rounded p-2 hover:text-white transition-all hover:bg-slate-800 hover:font-semibold">Get Started</button>
  </a>
</div>