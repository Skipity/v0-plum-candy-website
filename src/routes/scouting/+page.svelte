<script>
  import { onMount } from 'svelte';
  
  let mounted = $state(false);
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Scouting - Aaliyah Corley</title>
  <meta name="description" content="Aaliyah Corley's remarkable scouting journey from Halloween 2021 to becoming the first girl in New York to earn every merit badge." />
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-green-100 to-green-200 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl font-bold text-green-900 mb-6" class:animate-fade-in-up={mounted}>
        Scouting Journey
      </h1>
      <p class="text-xl text-green-700 mb-8" class:animate-fade-in-up={mounted} style="animation-delay: 0.1s;">
        The Path to Eagle & Every Merit Badge
      </p>
    </div>
  </section>

  <!-- Content -->
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- The Path to Eagle -->
      <div class="mb-8" class:animate-fade-in-up={mounted}>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">The Path to Eagle</h2>
        <div class="text-lg text-gray-700 space-y-6">
          <p>
            Aaliyah joined scouting on Halloween in 2021. By summer camp in July, she had racked up 36 merit badges, but was still Scout rank. One of those badges was Architecture, where she had Jeff Roberts as a counselor, who told her about Troop 163G.
          </p>
          <p>
            She met with Scoutmaster Steve Bo and the troop. After that first year at Onteora, Aaliyah decided that 163G would be a fantastic fit.
          </p>
          <p>
            In September the troop met again, and she became the Troop Bugler. Why? Well, if you want to earn every merit badge, you have to earn the least awarded one: Bugling.
          </p>
          <p>
            By October, she had earned Tenderfoot, Second Class, and First Class. When 2023 summer camp rolled around, she was helping others advance as Troop Instructor, was Star Rank, and had earned 68 Merit Badges.
          </p>
          <p>
            She joined venture crew 577, headed by Mike Sarlo, to get even more involved. She turned in her completed Eagle application when she was 15, a month before her birthday.
          </p>
          
          <blockquote class="border-l-4 border-green-700 pl-6 ml-5 text-center text-3xl italic text-green-700 my-12 flex justify-center items-center gap-3">
            "73 nights in nature — mostly in her hammock" 
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hammock-aKISi4hQU1RE1qEaENeWWU8nD3V7SS.webp" alt="hammock" class="inline-block" />
          </blockquote>
          
          <p>
            Along the way, she's helped with 11 Scout's Eagle Projects, camped overnight 73 times (mostly in her hammock), and instructed and signed off on hundreds of requirements for fellow scouts.
          </p>
          <p>
            She's hiked, biked, paddled, and skied hundreds of wilderness miles. She's done welding, sawing, hammering and building; geocaching, mechanicing, golfing and fishing; scuba diving, sculpture, rock climbing, and painting; surveying, shooting and planting and plumbing. Designing and planning... oh so much planning! and calling and meeting with so many phenomenal people through Scouting that it makes your head spin.
          </p>
          <p>
            Troop 163 has been around since Scouting came to America, and has a tradition of raising scouts to eagle. 
            <a href="https://aaliyah.com.br/scouting/163-eagles" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-800 underline">
              Link to List
            </a>
          </p>
          <p>
            As always, the ongoing adventure of Scouting is made thrilling and worthwhile by the loving support of her friends, troops, parents, and counselors. It's why Scouting has endured for more than a century, and will continue to make lives brighter for centuries to come.
          </p>
        </div>
      </div>

      <!-- Every Merit Badge -->
      <div class="mb-16" class:animate-fade-in-up={mounted} style="animation-delay: 0.2s;">
        <div class="text-lg text-gray-700 space-y-6">
          <p>
            Now she is just 1 requirement away from being the first girl in New York to earn every Scouting merit badge: she must cross the wake on waterskis 4 times.
          </p>
          <p>
            Since Eagle, the remaining 39 merit badges on her quest to get them all demanded more grit and determination than the prior 100 and Eagle Rank combined.
          </p>
          
          <!-- Reduced spacing around heading from mt-8 mb-6 to mt-6 mb-4 -->
          <h2 class="text-4xl font-bold text-gray-900 mb-4 mt-6">Every Merit Badge</h2>
          
          <p>
            Scouting has been in America since 1910. The one thing I would improve is making the goal of earning every merit badge a more visible one.
          </p>
          
          <blockquote class="border-l-4 border-green-700 pl-6 ml-5 text-center text-3xl italic text-green-700 my-12 flex justify-center items-center gap-3">
            "625 Scouts out of 110 Million have done it" 
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mountain-top-wzBpog1xmpo1C0ocYgCWgUH55MlM3s.webp" alt="mountain top achievement" class="inline-block" />
          </blockquote>
          
          <p>
            As of mid 2025, only 625 Scouts out of 110,000,000 have done it and only 10 girls.
          </p>
          <p>
            For one, it's hard. Like really, really hard. But scouts do hard things all the time.
          </p>
          <p>
            The problem is that there is no official badge or medal to commemorate the achievement. You get Eagle, and they are like "If you want to earn more merit badges, you get these Eagle Palms thingies". But the whole Eagle Palms system is muddled — you get a Silver Palm for 20 badges above Eagle, A Gold one for 10, and a Bronze for 5. Then mix and match based on how many you've earned. But almost no one notices if you have 3 palms vs 8.
          </p>
          <p>
            No one is officially pointing to the top of the mountain and saying to young scouts, "This could be YOU."
          </p>
          <p>
            If someone had pointed from the beginning at that mountain top, thousands more might have achieved it.
          </p>
          <p>
            And it's worth doing because the entirety of the Merit Badge curriculum is greater than the sum of its parts. The richness and depth of learning a little something about everything is an amazing and enlightening experience.
          </p>
          <p>
            It's worth it.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

<!-- Footer -->
<footer class="bg-[#220f25] text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto text-center">
    <p class="text-sm">
      &copy; {new Date().getFullYear()} Aaliyah Corley. All rights reserved.
    </p>
    <div class="mt-4 space-x-6">
      <a href="/privacy-policy" class="text-sm text-gray-400 hover:text-gray-300 transition-colors">Privacy Policy</a>
      <a href="/return-policy" class="text-sm text-gray-400 hover:text-gray-300 transition-colors">Return Policy</a>
      <a href="/terms-conditions" class="text-sm text-gray-400 hover:text-gray-300 transition-colors">Terms & Conditions</a>
    </div>
  </div>
</footer>
