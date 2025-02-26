<script lang="ts">
  import Account from "../../components/Account.svelte";
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
  let { user, transactions, account, supabase } = $derived(data)
  let modal = $state({
    title: "",
    toggle: false,
    close: close
  })
</script>

<div class="grid gap-3 place-items-start m-6">
  <h1 class="text-3xl">Welcome, {user?.user_metadata.first_name || user}</h1>

  <Account {account} />

  <button class="p-2 bg-slate-500 text-white rounded" onclick={() => {open(); modal.title = "Add transaction";}}>Add transaction</button>

  <Transactions {supabase} transactions={transactions} />
</div>

<Modal {modal}>
  <TransactionForm mode="Add" />
</Modal>