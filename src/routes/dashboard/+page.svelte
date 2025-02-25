<script lang="ts">
  import Modal from "../../components/Modal.svelte";
  import TransactionForm from "../../components/TransactionForm.svelte";
  import Transactions from "../../components/Transactions.svelte";

  function open() {
    modal.toggle = true
  }

  function close() {
    modal.toggle = false
  }

  let { data } = $props();
  let { user, transactions, income, expense, total, supabase } = $derived(data)
  let modal = $state({
    title: "",
    toggle: false,
    close: close
  })
</script>

<div class="grid gap-3 place-items-start m-6">
  <h1 class="text-3xl">Welcome, {user?.user_metadata.first_name || user}</h1>
  
  <div class="flex flex-col gap-1">
    <h2 class="text-2xl">Income: {income}.00</h2>
    <h2 class="text-2xl">Expense: {expense}.00</h2>
    <h2 class="text-2xl my-3">Balance: {total}.00</h2>
  </div>

  <button class="p-2 bg-slate-500 text-white rounded" onclick={() => {open(); modal.title = "Add transaction";}}>Add transaction</button>

  <Transactions {supabase} transactions={transactions} />
</div>

<Modal {modal}>
  <TransactionForm mode="Add" />
</Modal>