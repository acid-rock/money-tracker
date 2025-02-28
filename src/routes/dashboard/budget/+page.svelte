<script>
  import { months } from "$lib/constants";
  import BudgetForm from "../../../components/BudgetForm.svelte";
  import Modal from "../../../components/Modal.svelte";

  let { data } = $props()
  let { account } = $derived(data)

  let modal = $state({
    title: "",
    toggle: false,
    close: close
  })
  let month_index = $state(new Date().getMonth())
  let current_year = $state(new Date().getFullYear())

  function open() {
    modal.toggle = true
  }

  function close() {
    modal.toggle = false
  }

</script>
<main class="m-6">
  <div>
    <div class="flex flex-col gap-1">
      <h2 class="text-2xl">Budget: {account?.budget}.00</h2>
    </div>
  </div>

  <button class="p-2 bg-slate-500 text-white rounded my-4" onclick={() => {
    open();
    modal.title = "Set budget";
  }}>Set budget</button>

  <div class="border-y-1">
    <h2 class="text-2xl my-6 flex justify-center items-center">Report for {months[month_index]} {current_year}</h2>
  </div>
</main>

<Modal {modal}>
  <BudgetForm {account} />
</Modal>