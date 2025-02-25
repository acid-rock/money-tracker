<script lang="ts">
  import Modal from "./Modal.svelte";
  import TransactionForm from "./TransactionForm.svelte";

  let { supabase, transactions=[] } = $props()

  function open() {
    modal.toggle = true
  }

  function close() {
    modal.toggle = false
  }
  let index = $state(0)

  let modal = $state({
    title: "",
    toggle: false,
    close: close
  })

  async function deleteTransaction(id: number) {
    await supabase.from("transactions").delete().eq("id", id)
    window.location.href = "/dashboard"
  }
</script>

<div class="grid gap-3 py-6 border-y-1 w-full">
  {#each transactions as transaction, i (transaction.id)}
    <div>
      <p class="text-xl">{ transaction.type === "income" ? "+" : "-" }{ transaction.amount }</p>
      <div class="flex gap-5">
        <button onclick={() => {
          open();
          modal.title="Edit transaction";
          index = i
          }
        }>Edit</button>
        <button onclick={() => deleteTransaction(transaction.id)}>Delete</button>
      </div>
    </div>
  {/each}
</div>

<Modal {modal}>
  <TransactionForm transaction={transactions[index]} mode="Edit" />
</Modal>