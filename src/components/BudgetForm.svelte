<script lang="ts">
  let { account } = $props()
</script>

<form method="POST" action="?/{account ? "set": "edit"}" class="grid gap-3">
  <select class="border-1 border-slate-300 rounded px-1" disabled={true}>
    <option value="monthly">Monthly</option>
  </select>

  <label class="flex gap-3 items-center">
    Budget: 
    <input type="number" name="amount" value={account ? account.budget : 0} class="w-full border-1 border-slate-300 rounded px-1">
  </label>

  <button class="bg-slate-500 text-white rounded p-1">Set</button>
</form>