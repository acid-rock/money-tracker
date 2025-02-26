<script>
  import DashboardHeader from '../../components/DashboardHeader.svelte';

  let { children } = $props()
</script>

<DashboardHeader />
{@render children()}