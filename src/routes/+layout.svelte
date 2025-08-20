<script lang="ts">
  import '../app.css';
  import Navigation from '$lib/components/Navigation.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="min-h-screen bg-white">
  <Navigation />
  <main>
    {@render children?.()}
  </main>
</div>
