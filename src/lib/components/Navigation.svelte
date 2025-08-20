<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  let mobileMenuOpen = $state(false);
  let mounted = false;
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Plum Candy', href: '/plum-candy' },
    { name: 'Scouting', href: '/scouting' },
    { name: 'Credentials', href: '/credentials' },
    { name: 'Quantum', href: '/quantum' },
    { name: 'Kitesurfing', href: '/kitesurfing' },
    { name: 'Contact', href: '/contact' }
  ];
  
  onMount(() => {
    mounted = true;
  });
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<!-- Complete navigation redesign with cleaner layout and better spacing -->
<nav class="bg-white shadow-sm sticky top-0 z-50">
  <div class="max-w-7xl mx-auto">
    <!-- Desktop Navigation -->
    <div class="hidden lg:flex items-center justify-between px-8 py-4">
      <!-- Centered Navigation Links -->
      <div class="flex-1 flex justify-center">
        <div class="flex items-center space-x-8">
          {#each navItems as item}
            <a
              href={item.href}
              class="relative text-lg font-bold text-gray-800 hover:text-purple-600 transition-all duration-300 group"
            >
              {item.name}
              <!-- Animated underline -->
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full {$page.url.pathname === item.href ? 'w-full' : ''}"></span>
            </a>
          {/each}
        </div>
      </div>
      
      <!-- Right-aligned Social Link -->
      <div class="flex-shrink-0">
        <a
          href="https://x.com/CorleyAaliyah"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-300"
          aria-label="Follow Aaliyah on X (Twitter)"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <div class="lg:hidden px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex-1"></div>
        
        <!-- Mobile menu button -->
        <button
          onclick={toggleMobileMenu}
          class="p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
          aria-expanded={mobileMenuOpen}
        >
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if !mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="lg:hidden bg-white border-t border-gray-100">
        <div class="px-4 py-3 space-y-2">
          {#each navItems as item}
            <a
              href={item.href}
              onclick={closeMobileMenu}
              class="block px-4 py-3 text-lg font-bold rounded-lg transition-colors {
                $page.url.pathname === item.href
                  ? 'bg-purple-100 text-purple-800'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
              }"
            >
              {item.name}
            </a>
          {/each}
          
          <!-- Mobile social link -->
          <a
            href="https://x.com/CorleyAaliyah"
            target="_blank"
            rel="noopener noreferrer"
            onclick={closeMobileMenu}
            class="flex items-center px-4 py-3 text-lg font-bold text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          >
            <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Follow on X
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>
