<script>
  import { onMount } from 'svelte';
  
  let mounted = $state(false);
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Credentials - Aaliyah Corley</title>
  <meta name="description" content="Academic achievements, publications, and credentials of Aaliyah Corley." />
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-indigo-100 to-indigo-200 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl font-bold text-indigo-900 mb-6 {mounted ? 'animate-fade-in-up' : ''}">
        Credentials & Achievements
      </h1>
      <p class="text-xl text-indigo-700 mb-8 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.1s;">
        Professional Certifications and Academic Excellence
      </p>
    </div>
  </section>

  <!-- Completely redesigned credentials content with certificate images -->
  <!-- Professional Certifications -->
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center {mounted ? 'animate-fade-in-up' : ''}">
        Professional Certifications
      </h2>
      
      <!-- Certificate Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        <!-- Google UX Design Certificate -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.1s;">
          <div class="aspect-[4/3] overflow-hidden">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XD99VCtKXOuPZLwKYoiY6aeUCNsTkv.png" 
              alt="Google UX Design Professional Certificate"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">Google UX Design</h3>
                <p class="text-sm text-gray-600">Professional Certificate • June 2023</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              Completed comprehensive 7-course program covering UX foundations, wireframing, prototyping, user research, and high-fidelity design in Figma.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">User Experience</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">User Research</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Figma</span>
            </div>
            <p class="text-sm text-gray-600">
              <strong>Credential ID:</strong> EH2LVKY7Z7DR
            </p>
          </div>
        </div>

        <!-- Stanford Machine Learning Certificate -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.2s;">
          <div class="aspect-[4/3] overflow-hidden">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6fBl36UaIivT5ql44fCajvFcyUBSFn.png" 
              alt="Stanford Machine Learning Specialization Certificate"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">Machine Learning Specialization</h3>
                <p class="text-sm text-gray-600">Stanford University • December 2024</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              Mastered modern machine learning concepts including supervised learning, neural networks, decision trees, and reinforcement learning through Stanford's comprehensive 3-course program.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">Machine Learning</span>
              <span class="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">AI</span>
              <span class="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">Neural Networks</span>
            </div>
            <p class="text-sm text-gray-600">
              <strong>Credential ID:</strong> 5M7I2STPGOZZ
            </p>
          </div>
        </div>

        <!-- IBM Quantum Certificate -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.3s;">
          <div class="aspect-[4/3] overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B0TMWC9jztdQ3klTlNeYW4REBR619u.png" 
              alt="IBM Quantum Business Foundations Certificate"
              class="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">Quantum Business Foundations</h3>
                <p class="text-sm text-gray-600">IBM • April 2025</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              Foundational understanding of quantum computing principles and their business applications, preparing for the quantum computing revolution.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">Quantum Computing</span>
              <span class="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">Business Strategy</span>
            </div>
          </div>
        </div>

        <!-- Ham Radio License -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.4s;">
          <div class="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <div class="text-center text-white p-8">
              <svg class="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
              </svg>
              <h4 class="text-2xl font-bold">HAM RADIO</h4>
              <p class="text-lg">TECHNICIAN LICENSE</p>
            </div>
          </div>
          <div class="p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">Ham Radio Technician License</h3>
                <p class="text-sm text-gray-600">FCC • October 2023 - October 2033</p>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              Licensed amateur radio operator with technical knowledge of radio frequency principles, electronics, and emergency communications protocols.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Radio Communications</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">Electronics</span>
            </div>
            <p class="text-sm text-gray-600">
              <strong>License ID:</strong> L02712425
            </p>
          </div>
        </div>
      </div>

      <!-- Publications Section -->
      <div class="mb-16 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.5s;">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Publications</h2>
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 shadow-lg">
          <div class="flex items-start gap-6">
            <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Co-Author: "The Best Book on Quantum Computing"</h3>
              <p class="text-lg text-gray-700 mb-6">
                Co-authored a comprehensive guide to quantum computing principles, making complex concepts accessible to students and professionals alike. This groundbreaking work bridges the gap between theoretical quantum mechanics and practical computing applications.
              </p>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Quantum Physics</span>
                <span class="px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Computer Science</span>
                <span class="px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Technical Writing</span>
                <span class="px-4 py-2 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Language Mastery Section -->
      <div class="mb-16 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.55s;">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Native Language Mastery</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg">
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">English</h3>
                <p class="text-lg text-gray-700">
                  Native fluency with exceptional written and verbal communication skills, demonstrated through published works and technical writing.
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                </svg>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Portuguese</h3>
                <p class="text-lg text-gray-700">
                  Native bilingual proficiency enabling cross-cultural communication and expanding global reach for educational and professional endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Eagle Scout Achievement -->
      <div class="mb-16 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.6s;">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Perseverance</h2>
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg">
          <div class="flex items-start gap-6">
            <div class="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Eagle Scout Achievement</h3>
              <p class="text-lg text-gray-700 mb-6">
                Aaliyah will be the first girl in New York to earn All 139 Merit Badges, and has earned every achievable Eagle Palm. This unprecedented achievement demonstrates exceptional dedication, leadership, and commitment to personal growth and community service.
              </p>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">Leadership</span>
                <span class="px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">Community Service</span>
                <span class="px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">Project Management</span>
                <span class="px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">All 139 Merit Badges</span>
                <span class="px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">Eagle Palms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-indigo-50 rounded-xl p-12 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.7s;">
        <h3 class="text-3xl font-bold text-gray-900 mb-6">Ready to Collaborate?</h3>
        <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Interested in working together on STEM education, writing projects, speaking engagements, or quantum computing initiatives?
        </p>
        <a 
          href="/contact" 
          class="inline-flex items-center gap-3 bg-indigo-600 text-white font-semibold py-4 px-10 rounded-lg hover:bg-indigo-700 transition-colors text-lg shadow-lg hover:shadow-xl"
        >
          Get In Touch
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
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
  </div>
</footer>
