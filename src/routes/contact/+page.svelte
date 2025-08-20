<script>
  import { onMount } from 'svelte';
  
  let mounted = $state(false);
  let formData = $state({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  onMount(() => {
    mounted = true;
  });
  
  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  }
</script>

<svelte:head>
  <title>Contact - Aaliyah Corley</title>
  <meta name="description" content="Get in touch with Aaliyah Corley for speaking engagements, interviews, or general inquiries." />
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-purple-100 to-purple-200 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl font-bold text-purple-900 mb-6 {mounted ? 'animate-fade-in-up' : ''}">
        Get In Touch
      </h1>
      <p class="text-xl text-purple-700 mb-8 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.1s;">
        Let's connect about books, science, scouting, or anything else!
      </p>
    </div>
  </section>

  <!-- Contact Form -->
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="{mounted ? 'animate-fade-in-up' : ''}">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="bg-purple-100 rounded-lg p-3">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Speaking Engagements</h3>
                <p class="text-gray-600">Available for schools, libraries, and literary events</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="bg-purple-100 rounded-lg p-3">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Media Inquiries</h3>
                <p class="text-gray-600">Interviews and press opportunities welcome</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="bg-purple-100 rounded-lg p-3">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Book Clubs</h3>
                <p class="text-gray-600">Virtual visits and discussion sessions available</p>
              </div>
            </div>
          </div>
          
          <div class="mt-12 p-6 bg-purple-50 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Response Time</h3>
            <p class="text-gray-600">
              I typically respond to inquiries within 2-3 business days. For urgent media requests, please indicate "URGENT" in your subject line.
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-50 rounded-lg p-8 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.2s;">
          <form onsubmit={handleSubmit} class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                id="subject"
                bind:value={formData.subject}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="media">Media Inquiry</option>
                <option value="bookclub">Book Club Visit</option>
                <option value="general">General Question</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell me about your inquiry..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
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
  </div>
</footer>
