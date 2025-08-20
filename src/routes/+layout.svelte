<script lang="ts">
  import '../app.css';
  import Navigation from '$lib/components/Navigation.svelte';
  
  // <CHANGE> using proper Svelte 5 props syntax
  interface Props {
    children: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="min-h-screen bg-white">
  <Navigation />
  <main>
    {@render children()}
  </main>
</div>
