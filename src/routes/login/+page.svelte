<script lang="ts">
  let { form } = $props()
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <form method="POST" class="grid place-items-center gap-10">
    <h1 class="text-3xl">Login</h1>

    <div class="flex flex-col gap-3 w-80">
      <input type="email" name="email" placeholder="Email" class="border-1 rounded p-1">

      <input type="password" name="password" placeholder="Password" class="border-1 rounded p-1">
      {#if form}
        <span class="place-self-center text-red-600">{form.error}</span>
      {/if}
    </div>

    <div class="flex flex-col">
      <button class="text-lg bg-gray-300 p-2 rounded border-gray-400 border-2">Log-in</button>
      <a href="/" class="place-self-center">Go back</a>
    </div>
    <a href="/signup" class="text-sm">Don't have an account? Sign-up here.</a>
  </form>
</div>