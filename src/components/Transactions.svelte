<script lang="ts">
  import Modal from "./Modal.svelte";
  import TransactionForm from "./TransactionForm.svelte";
  import { months } from "$lib/constants";

  let { supabase, transactions=[] } = $props()

  let month_index = $state(new Date().getMonth())
  let current_year = $state(new Date().getFullYear())
  let index = $state(0)
  let modal = $state({
    title: "",
    toggle: false,
    close: close
  })

  let filtered = $derived.by(() => {
    let filtered_transactions = transactions.filter((transaction: any) => {
      let year_check = new Date(transaction.created_at).getFullYear() === current_year
      let month_check = new Date(transaction.created_at).getMonth() === month_index
      return year_check && month_check
    })

    return filtered_transactions
  })

  async function deleteTransaction(id: number) {
    await supabase.from("transactions").delete().eq("id", id)
    window.location.href = "/dashboard"
  }

  function open() {
    modal.toggle = true
  }

  function close() {
    modal.toggle = false
  }

  function decrement() {
    month_index = ((month_index - 1 % months.length) + months.length) % months.length;
    if (month_index === 11) {
      current_year -= 1
    }
  }

  function increment() {
    month_index = (month_index + 1) % months.length;
    if (month_index === 0) {
      current_year += 1
    }
  }
</script>

<!-- Date Scroller -->
<div class="flex justify-between items-center text-2xl w-full my-3">
  <button onclick={decrement}>&lt;</button>
  <p>{months[month_index]} {current_year}</p>
  <button onclick={increment}>&gt;</button>
</div>

<!-- Transaction List -->
<div class="grid gap-3 py-6 border-y-1 w-full">
  {#each filtered as transaction, i (transaction.id)}
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