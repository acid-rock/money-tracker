<form method="POST" class="grid gap-3 my-4">
  <select name="type" class="w-full border-1 border-slate-300 rounded px-1">
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>
  <input type="number" name="amount" placeholder="Amount (0.00)" class="border-1 border-slate-300 rounded px-1">
  <textarea name="description" rows={5} placeholder="Description" class="w-full border-1 border-slate-300 rounded px-1"></textarea>
  <button class="bg-slate-500 text-white rounded p-1">Add</button>
</form>