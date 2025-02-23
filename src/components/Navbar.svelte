<script lang="ts">
  let { logout, isLoggedIn } = $props()
</script>

<nav class="flex justify-between items-center p-6 bg-gray-200">
  <h1 class="text-2xl font-bold">MT</h1>

  <div class="flex gap-6">
    {#if !isLoggedIn}
      <a href="/login">Log in</a>
      <a href="/signup">Sign up</a>
    {:else}
      <a href="/dashboard">Dashboard</a>
      <button class="cursor-pointer" onclick={logout}>Log out</button>
    {/if}
  </div>
</nav>

