<script lang="ts">
  let { form } = $props()
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <form method="POST" class="grid justify-center place-items-center gap-10">
    <h1 class="text-3xl">Create an account</h1>

    <div class="grid gap-3 w-80">
      <div class="grid grid-cols-2 gap-2">
        <input type="text" name="firstname" placeholder="First Name" class="border-1 rounded p-1">
        <input type="text" name="lastname" placeholder="Last Name" class="border-1 rounded p-1">
      </div>

      <input type="email" name="email" placeholder="Email" class="border-1 rounded p-1">

      <input type="password" name="password" placeholder="Password" class="border-1 rounded p-1">
      {#if form?.error}
        <span class="place-self-center">{form.error}</span>
      {/if}

      {#if form?.message}
        <span class="place-self-center text-sm text-green-600">{form.message}</span>
      {/if}
    </div>

    <div class="grid">
      <button class="text-lg bg-gray-300 p-2 rounded border-gray-400 border-2">Sign up</button>
      <a href="/" class="place-self-center">Go back</a>
    </div>

    <a href="/login" class="text-sm">Already have an account? Log-in here.</a>
  </form>
</div>