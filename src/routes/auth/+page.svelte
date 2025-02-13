<script>
  let mode = $state("signup")
</script>

<div class="flex flex-col justify-center items-center h-screen">
  {#if mode === "login"}
    <form method="POST" class="grid place-items-center gap-10">
      <h1 class="text-3xl">Login</h1>

      <div class="flex flex-col gap-3 w-80">
        <input type="email" name="email" placeholder="Email" class="border-1 rounded p-1">

        <input type="password" name="password" placeholder="Password" class="border-1 rounded p-1">
      </div>

      <div class="flex flex-col">
        <button class="text-lg bg-gray-300 p-2 rounded border-gray-400 border-2">Log-in</button>
        <a href="/" class="place-self-center">Go back</a>
      </div>
      <button class="text-sm" onclick={() => {mode="signup"}}>Don't have an account? Sign-up here.</button>
    </form>

  {:else if mode === "signup"}
    <form method="POST" class="grid justify-center place-items-center gap-10">
      <h1 class="text-3xl">Create an account</h1>

      <div class="grid gap-3 w-80">
        <div class="grid grid-cols-2 gap-2">
          <input type="text" name="firstname" placeholder="First Name" class="border-1 rounded p-1">
          <input type="text" name="lastname" placeholder="Last Name" class="border-1 rounded p-1">
        </div>

        <input type="email" name="email" placeholder="Email" class="border-1 rounded p-1">

        <input type="password" name="password" placeholder="Password" class="border-1 rounded p-1">
      </div>

      <div class="grid">
        <button class="text-lg bg-gray-300 p-2 rounded border-gray-400 border-2">Sign up</button>
        <a href="/" class="place-self-center">Go back</a>
      </div>

      <button class="text-sm" onclick={() => {mode="login"}}>Already have an account? Log-in here.</button>
    </form>
  {/if}
</div>