<script>
  const videos = [
    { id: 'NAEFluxX4Y4', title: 'Kitesurfing Video 1' },
    { id: 'NHJJstKtf1A', title: 'Kitesurfing Video 2' }, 
    { id: 'WUj0MMCWW70', title: 'Kitesurfing Video 3' },
    { id: '706jf1wj9bs', title: 'Kitesurfing Video 4' },
    { id: 'kyd8qiFU9vY', title: 'Kitesurfing Video 5' },
    { id: '4HjFPz0fAZo', title: 'Kitesurfing Video 6' },
    { id: 'spo2wdEXHSc', title: 'Kitesurfing Video 7' }
  ];
</script>

<svelte:head>
  <title>Kitesurfing - Aaliyah Corley</title>
  <meta name="description" content="Born in Brazil and raised in Cumbuco, the kitesurfing capital of the world, Aaliyah learned to kitesurf at age 8." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100">
  <!-- Hero Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in-up">
        Kitesurfing
      </h1>
      <div class="prose prose-lg mx-auto text-gray-700 animate-fade-in-up" style="animation-delay: 0.2s;">
        <p class="text-xl leading-relaxed">
          Born in Brazil, I grew up in Cumbuco, the kitesurfing capital of the world. So, at age 8, I learned to kitesurf. The best videos I have of it were back when I was first learning.
        </p>
      </div>
    </div>
  </section>

  <!-- Kitesurfing Image Section -->
  <section class="py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="rounded-lg overflow-hidden shadow-xl animate-fade-in-up" style="animation-delay: 0.4s;">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kitesurfing-GcsoxN9xchUunkZbzwLkuPHD7F6BVV.webp" 
          alt="Kitesurfing in Cumbuco, Brazil - showing a kitesurfer on the water with colorful kites in the sky and palm trees in the background"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>

  <!-- Videos Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-full mx-auto">
      <!-- Header for Videos Section -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 animate-fade-in-up">
        Aaliyah Learning Kitesurfing Videos
      </h2>
      <!-- Replaced iframe embeds with simple YouTube links -->
      <div class="space-y-6 max-w-2xl mx-auto">
        {#each videos as video, index}
          <div class="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">{video.title}</h3>
            <a 
              href="https://www.youtube.com/watch?v={video.id}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12l-6-4h12l-6 4z"/>
              </svg>
              Watch on YouTube
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Action Kitesurfing Image Section -->
  <section class="py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="rounded-lg overflow-hidden shadow-xl animate-fade-in-up">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kitesurfing-aaliyah-TtLgmESUFk1SCVzGcnaqQMhxsMfo5C.webp" 
          alt="Aaliyah kitesurfing in action - showing her riding the waves with kite control bar in hand, with palm trees and beach in the background"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>

  <!-- Closing Section -->
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <div class="prose prose-lg mx-auto text-gray-700 animate-fade-in-up">
        <p class="text-xl leading-relaxed italic">
          It's a phenomenal activity and I'm blessed to have it be a part of my life.
        </p>
      </div>
    </div>
  </section>
</main>

<!-- Footer -->
<footer class="bg-[#220f25] text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto text-center">
    <p class="text-sm">
      &copy; {new Date().getFullYear()} Aaliyah Corley. All rights reserved.
    </p>
  </div>
</footer>
