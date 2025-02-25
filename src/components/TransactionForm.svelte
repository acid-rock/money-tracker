<script lang="ts">
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";

  let { mode, transaction = {} } = $props()

  const handleEnhance: SubmitFunction = ({formData}) => {
    if (mode.toLowerCase() === "edit") {
      formData.set("id", transaction.id)
    }

    window.location.reload()
  }
</script>

<form method="POST" action="?/{mode.toLowerCase()}" class="grid gap-3 my-4" use:enhance={handleEnhance}>
  <select name="type" value={transaction ? transaction.type : "income"} class="w-full border-1 border-slate-300 rounded px-1">
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>
  <input type="number" name="amount" value={transaction ? transaction.amount : ""} placeholder="Amount (0.00)" class="border-1 border-slate-300 rounded px-1">
  <textarea name="description" value={transaction ? transaction.description : ""} rows={5} placeholder="Description" class="w-full border-1 border-slate-300 rounded px-1"></textarea>
  <button class="bg-slate-500 text-white rounded p-1">{mode}</button>
</form>