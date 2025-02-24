<script lang="ts">
  import clsx from "clsx";
  let { modal, children } = $props()
</script>

<div class={clsx("bg-black/50 fixed backdrop-blur-xs inset-0", {"hidden": !modal.toggle})}>
  <div class="flex justify-center items-center h-full">
    <div class="bg-white p-5 rounded w-120">
      <div class="grid grid-cols-2 justify-between items-center mx-3 mt-3 px-2 pb-3 border-slate-300 border-b-1">
        <p class="text-2xl">{modal.title}</p>
        <button class="place-self-end text-xl font-bold cursor-pointer" onclick={modal.close}>X</button>
      </div>

      <div class="mx-3 mt-3 px-2 pb-3">
        {@render children()}
      </div>
    </div>
  </div>
</div>