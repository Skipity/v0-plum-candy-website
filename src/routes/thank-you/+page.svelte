<svelte:head>
  <title>Thank You - Aaliyah Corley</title>
  <meta name="description" content="Thank you for your order! Your Plum Candy reservation has been confirmed." />
</svelte:head>

<section class="gradient-purple min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
  <div class="max-w-2xl mx-auto text-center">
    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
      <div class="mb-8">
        <svg class="w-20 h-20 text-green-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
          Thank You!
        </h1>
        <p class="text-xl text-purple-100 mb-8">
          Your Plum Candy reservation has been confirmed. You'll receive an email confirmation shortly.
        </p>
      </div>
      
      <div class="space-y-4 mb-8">
        <p class="text-purple-100">
          We're excited to get your copy of Plum Candy into your hands when it's ready to ship.
        </p>
        <p class="text-purple-100">
          Keep an eye on your inbox for updates about the publication timeline and shipping details.
        </p>
      </div>
      
      <div class="space-y-4">
        <a 
          href="/" 
          class="inline-block bg-white text-purple-800 font-semibold py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors"
        >
          Return to Homepage
        </a>
        <div>
          <a 
            href="/plum-candy" 
            class="text-purple-200 hover:text-white transition-colors underline"
          >
            Read the opening pages while you wait
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
