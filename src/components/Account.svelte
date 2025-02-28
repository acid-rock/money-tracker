<script lang="ts">
  let { account } = $props()
</script>

<div>
  <div class="flex flex-col gap-1">
    <h2 class="text-2xl">Income: {account.income}.00</h2>
    <h2 class="text-2xl">Expense: {account.expense}.00</h2>
    <h2 class="text-2xl my-3">Balance: {account.total}.00</h2>
  </div>
</div>