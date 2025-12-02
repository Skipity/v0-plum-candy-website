<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  let mounted = $state(false);
  let showCollectorDetails = $state(false);
  let userState = "";
  let taxRate = 0;

  // US state tax rates (simplified - using state-level rates)
  const taxRates = {
    AL: 0.04,
    AK: 0.0,
    AZ: 0.056,
    AR: 0.065,
    CA: 0.0725,
    CO: 0.029,
    CT: 0.0635,
    DE: 0.0,
    FL: 0.06,
    GA: 0.04,
    HI: 0.04,
    ID: 0.06,
    IL: 0.0625,
    IN: 0.07,
    IA: 0.06,
    KS: 0.065,
    KY: 0.06,
    LA: 0.0445,
    ME: 0.055,
    MD: 0.06,
    MA: 0.0625,
    MI: 0.06,
    MN: 0.06875,
    MS: 0.07,
    MO: 0.04225,
    MT: 0.0,
    NE: 0.055,
    NV: 0.0685,
    NH: 0.0,
    NJ: 0.06625,
    NM: 0.05125,
    NY: 0.08,
    NC: 0.0475,
    ND: 0.05,
    OH: 0.0575,
    OK: 0.045,
    OR: 0.0,
    PA: 0.06,
    RI: 0.07,
    SC: 0.06,
    SD: 0.045,
    TN: 0.07,
    TX: 0.0625,
    UT: 0.0485,
    VT: 0.06,
    VA: 0.053,
    WA: 0.065,
    WV: 0.06,
    WI: 0.05,
    WY: 0.04,
  };

  onMount(async () => {
    mounted = true;

    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      if (data.region_code && taxRates[data.region_code]) {
        userState = data.region_code;
        taxRate = taxRates[data.region_code];
        // Store in localStorage for PayPal component
        localStorage.setItem("userState", userState);
      } else {
        // Default to Nassau County, NY rate if detection fails
        userState = "NY";
        taxRate = 0.0863;
        localStorage.setItem("userState", "NY");
      }
    } catch (error) {
      // Fallback to Nassau County, NY rate
      userState = "NY";
      taxRate = 0.0863;
      localStorage.setItem("userState", "NY");
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  });

  function scrollToContent() {
    const prodigySection = document.getElementById("prodigy-edition");
    if (prodigySection) {
      prodigySection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function toggleCollectorDetails() {
    showCollectorDetails = !showCollectorDetails;
  }

  function goToBookClubGuide() {
    goto("/plum-candy").then(() => {
      // Small delay to ensure page is loaded before scrolling
      setTimeout(() => {
        const bookclubSection = document.getElementById("bookclub");
        if (bookclubSection) {
          bookclubSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    });
  }
</script>

<svelte:head>
  <title>Aaliyah Corley - Plum Candy Presale</title>
  <meta
    name="description"
    content="Reserve your copy of Plum Candy, the debut mystery novel by Aaliyah Corley."
  />
</svelte:head>

<!-- Hero Section with Purple Gradient -->
<section
  class="gradient-purple min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
>
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Book Image -->
      <div
        class="flex justify-center lg:justify-start order-1 lg:order-1 mt-8 md:mt-2 {mounted
          ? 'animate-slide-in-left animate-float'
          : 'loading'}"
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-plum-candy-2MKe0phl0eH1LvvoPyimOd0UyzyQKE.webp"
          alt="Plum Candy book mockups - Trade Paperback and Premium Hardcover editions"
          class="h-auto object-contain hover-scale"
          style="max-height: 70vh; width: auto;"
        />
      </div>

      <!-- Content -->
      <div
        class="text-center lg:text-left order-2 lg:order-2 {mounted
          ? 'animate-fade-in-up loaded'
          : 'loading'}"
      >
        <!-- Enhanced title with staggered animation -->
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          style="animation-delay: 0.2s;"
        >
          Plum Candy
        </h1>
        <p
          class="text-xl sm:text-2xl text-purple-100 mb-8 font-medium"
          style="animation-delay: 0.4s;"
        >
          It is, after all, a Mystery
        </p>
        <p
          class="text-xl lg:text-2xl leading-relaxed text-purple-50 mb-12 max-w-2xl mx-auto lg:mx-0"
          style="animation-delay: 0.6s;"
        >
          Plum Candy is a debut novel by a 17-year-old unknown.<br />
          10,000 copies.<br />
          One printing.<br />
          Gorgeous. Japanese paper, smyth-sewn, hand-signed and hand-numbered by me
          before I turn 18, cloth-bound slipcase, built to feel like the Origin of
          the Myth, that it is, in your hands.
        </p>

        <!-- Pricing Options Removed -->
        <div class="space-y-6 mb-12" style="animation-delay: 0.8s;">
          <p class="text-2xl text-purple-100 font-semibold italic">
            They'll be available to buy soon at <a
              href="https://plumcandy.com"
              class="underline hover:text-white transition-colors"
              >plumcandy.com</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Content Section -->
<section id="content-section" class="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto">
    <!-- Author Introduction with Photo -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 scroll-reveal"
    >
      <!-- Aaliyah's Photo -->
      <div class="flex justify-center lg:justify-start order-1 lg:order-1">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaliyah-corley-plf21IyakdTG9UU3LHuuYcMyAIEGaH.webp"
          alt="Aaliyah Corley by a waterfall"
          class="h-auto object-cover rounded-2xl shadow-lg hover-scale"
          style="max-height: 60vh; width: auto; max-width: 100%;"
        />
      </div>

      <!-- Author Text - Left Justified -->
      <div class="text-left order-2 lg:order-2">
        <p
          class="text-2xl lg:text-3xl text-gray-700 mb-6 font-medium leading-relaxed"
        >
          Debut novelist Aaliyah Corley is a cute 16-year-old girl — an Eagle
          Scout who co-authored <a
            href="/quantum"
            class="italic text-purple-700 hover:text-purple-900 transition-colors"
            >The Best Book on Quantum Computing</a
          >.
        </p>
        <p
          class="text-2xl lg:text-3xl text-gray-600 mb-8 font-bold leading-relaxed"
        >
          Don't be fooled by her pretty smile.
        </p>
        <div class="prose prose-xl text-gray-700 space-y-6">
          <p class="text-xl lg:text-2xl leading-relaxed">
            Plum Candy puts a friendly arm around your shoulders, invites you
            into a charming small-town mystery, and then <strong
              >tightens the grip</strong
            >. Like the namesake treat, she starts with disarming sweetness —
            but by the time you taste the bitter truth, it's too late to turn
            back. The twists are inevitable, but you won't see 'em coming.
          </p>
          <p class="text-xl lg:text-2xl leading-relaxed">
            Every gut punch hits harder than the last, 'til her brutal knock-out
            ending leaves you cursing every comfort feigned along the way. When
            you read it the second time, <strong
              >you'll see what was hidden in plain sight</strong
            >.
          </p>
          <p class="text-xl lg:text-2xl font-semibold leading-relaxed">
            Your biggest challenge? Don't spoil it for all the friends you'll be
            insisting must read it.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Links Section -->
<section class="bg-alternating py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-4xl font-bold text-white mb-12 scroll-reveal">
      Get a Taste of the Mystery
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        class="card-enhanced bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg hover-lift scroll-reveal"
      >
        <div class="mb-6">
          <svg
            class="w-12 h-12 text-white mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-6">
          Read How the Novel Starts
        </h3>
        <p class="text-purple-100 mb-8 text-lg">
          Dive into the opening pages and see how Aaliyah draws you into her web
          of mystery and intrigue.
        </p>
        <a
          href="/plum-candy"
          class="inline-flex items-center gap-2 bg-white text-purple-800 font-semibold py-4 px-8 rounded-lg hover:bg-purple-50 transition-colors text-lg"
        >
          Start Reading
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div
        class="card-enhanced bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg hover-lift scroll-reveal"
        style="animation-delay: 0.1s;"
      >
        <div class="mb-6">
          <svg
            class="w-12 h-12 text-white mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-6">
          Book Club Read-Along Guide
        </h3>
        <p class="text-purple-100 mb-8 text-lg">
          Perfect for book clubs! Get discussion questions, character insights,
          and spoiler-free analysis.
        </p>
        <button
          onclick={goToBookClubGuide}
          class="inline-flex items-center gap-2 bg-white text-purple-800 font-semibold py-4 px-8 rounded-lg hover:bg-purple-50 transition-colors text-lg"
        >
          View Guide
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="bg-white py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16 scroll-reveal">
      <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
        Advance Reader Feedback
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div
        class="testimonial-card bg-purple-50 rounded-lg p-8 scroll-reveal hover-lift"
      >
        <blockquote class="text-xl text-gray-700 mb-4 italic leading-relaxed">
          "My therapist thanks you. How dare you, Aaliyah!"
        </blockquote>
        <div class="flex text-2xl" style="font-size: 20pt;">🟣🍬😭🔚</div>
      </div>

      <div
        class="testimonial-card bg-purple-50 rounded-lg p-8 scroll-reveal hover-lift"
        style="animation-delay: 0.1s;"
      >
        <blockquote class="text-xl text-gray-700 mb-4 italic leading-relaxed">
          "Technically it's barely PG-13. WTF I WAS NOT PREPARED. HOW. HOW?!?"
        </blockquote>
        <div class="flex text-2xl" style="font-size: 20pt;">🟣🍬😭🔚</div>
      </div>

      <div
        class="testimonial-card bg-purple-50 rounded-lg p-8 scroll-reveal hover-lift"
        style="animation-delay: 0.2s;"
      >
        <blockquote class="text-xl text-gray-700 mb-4 italic leading-relaxed">
          "I had it all figured out. Until I didn't. Then I did. Then OMG!"
        </blockquote>
        <div class="flex text-2xl" style="font-size: 20pt;">🟣🍬😭🔚</div>
      </div>

      <div
        class="testimonial-card bg-purple-50 rounded-lg p-8 scroll-reveal hover-lift"
        style="animation-delay: 0.3s;"
      >
        <blockquote class="text-xl text-gray-700 mb-4 italic leading-relaxed">
          "I was having so much fun reading it I didn't realize what she was
          doing to me. Now, I'm freaked out."
        </blockquote>
        <div class="flex text-2xl" style="font-size: 20pt;">🟣🍬😭🔚</div>
      </div>
    </div>
  </div>
</section>

<!-- Collector Edition Details -->
<section
  id="prodigy-edition"
  class="bg-prodigy-dark py-24 px-4 sm:px-6 lg:px-8"
>
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-20 scroll-reveal">
      <h2 class="text-4xl sm:text-5xl font-bold text-white mb-12">
        The Rookie Card Edition
      </h2>
      <p
        class="text-2xl lg:text-3xl text-purple-100 max-w-4xl mx-auto leading-relaxed"
      >
        A debut novel is a singular moment in an author's career. The Rookie
        Card Edition is like the official "rookie card" for Aaliyah Corley's
        electrifying debut, Plum Candy.
      </p>
    </div>

    <div class="mb-20">
      <!-- Content removed as requested -->
    </div>

    <!-- Removed the non-functional "Reserve Your Collector's Edition" button -->
    <div
      class="text-center card-enhanced bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-12 scroll-reveal hover-scale"
    >
      <blockquote
        class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-relaxed"
      >
        "This can be your story too — the true story where you get to be the
        hero that says, 'I was there at the beginning.'"
      </blockquote>
    </div>
  </div>
</section>

<!-- Footer Section -->
<footer class="bg-[#220f25] text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
  <div class="max-w-6xl mx-auto text-center">
    <!-- Added legal page links to footer -->
    <div class="flex flex-wrap justify-center gap-4 mb-4">
      <a
        href="/privacy-policy"
        class="text-sm hover:text-white transition-colors">Privacy Policy</a
      >
      <span class="text-sm">•</span>
      <a
        href="/return-policy"
        class="text-sm hover:text-white transition-colors">Return Policy</a
      >
      <span class="text-sm">•</span>
      <a href="/plum-candy" class="text-sm hover:text-white transition-colors"
        >Plum Candy</a
      >
      <span class="text-sm">•</span>
      <a href="/scouting" class="text-sm hover:text-white transition-colors"
        >Scouting</a
      >
      <span class="text-sm">•</span>
      <a href="/credentials" class="text-sm hover:text-white transition-colors"
        >Credentials</a
      >
      <span class="text-sm">•</span>
      <a href="/quantum" class="text-sm hover:text-white transition-colors"
        >Quantum</a
      >
      <span class="text-sm">•</span>
      <a href="/kitesurfing" class="text-sm hover:text-white transition-colors"
        >Kite Surfing</a
      >
      <span class="text-sm">•</span>
      <a
        href="/terms-conditions"
        class="text-sm hover:text-white transition-colors">Terms & Conditions</a
      >
    </div>
    <p class="text-sm">
      &copy; {new Date().getFullYear()} Aaliyah Corley. All rights reserved.
    </p>
  </div>
</footer>
