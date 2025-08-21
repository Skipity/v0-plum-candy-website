<script>
  import { onMount } from 'svelte';
  
  let mounted = $state(false);
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Quantum - Aaliyah Corley</title>
  <meta name="description" content="Quantum computing research, publications, and novel proposals by Aaliyah Corley." />
</svelte:head>

<div class="min-h-screen bg-white">
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-purple-100 to-indigo-200 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl font-bold text-purple-900 mb-6 {mounted ? 'animate-fade-in-up' : ''}">
        Quantum Computing
      </h1>
      <p class="text-xl text-purple-700 mb-8 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.1s;">
        Research, Publications, and Novel Proposals
      </p>
    </div>
  </section>

  <!-- Book Section -->
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Restored split block layout with image/details on left, description on right -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
        <!-- Left Column: Book Image + Details -->
        <div class="space-y-8 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.1s;">
          <!-- Book Image - top aligned -->
          <div class="flex justify-center lg:justify-start">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quantum-fKStCV7ORzj7LQvU62HDtVe2v6K6vD.webp" 
              alt="The Best Book on Quantum Computing: A Beginners Guide to Quantum Magic"
              class="w-full max-w-md h-auto object-contain rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <!-- Book Details - under the image -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Book Details</h3>
            <ul class="space-y-2 text-gray-700">
              <li><strong>Authors:</strong> Andrew Corley & Aaliyah Corley</li>
              <li><strong>Print Length:</strong> 316 pages</li>
              <li><strong>Format:</strong> Paperback & Digital</li>
              <li><strong>Subject:</strong> Quantum Computing, Physics, Computer Science</li>
            </ul>
          </div>
        </div>
        
        <!-- Right Column: Title, Description, Buy Button -->
        <div class="space-y-8 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.15s;">
          <!-- Book Title -->
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Best Book on Quantum Computing
            </h2>
            <p class="text-xl text-gray-600 mb-8 italic">
              A Beginners Guide to Quantum Magic
            </p>
          </div>
          
          <!-- Book Description -->
          <div class="prose prose-lg text-gray-700">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">What is this Book?</h3>
            <p>
              We provide beginners with a comprehensive, engaging, and perhaps even charming, introduction to the wonders and challenges of quantum computing. It less like a standard textbook and more like a <strong>guided tour through a fascinating and slightly mystical scientific landscape of Quantum Magic</strong>.
            </p>
            <p>
              Here you will read the whispered tales of quantum computing from its humble beginnings to the triumphant strides it is making in 2023. The narratives are spun with <em>metaphors and jovial analogies</em> to make complex concepts feel like childhood friends you may have known forever.
            </p>
            <p>
              Is it an ordinary guide? No. <strong>Each chapter ends with a poetic flourish</strong> to echo in your mind long after you've stopped turning the pages. These unique poems are fragments of the quantum realm designed to capture the essence of each chapter's revelations; heartbeats that sync with the rhythm of quantum mystery.
            </p>
            <p>
              This book is a lantern, a compass, and a map all rolled into one. Hmm that kind of sounds dangerous for the map. As you can see, the metaphors won't always be perfect, but they will present the stories and concepts in a way that will be much easier for some than a traditional textbook. <em>Will you find qubits charming? Will entanglement leave you entwined in thought? Will it be your cup of tea? The only way to know is to give it a sip.</em>
            </p>
            <p>
              <strong>Are you a curious reader?</strong> Who wants a fun way of looking at quantum computing? This may work for you. But if you're looking for technical insights on how to transform Hilbert Space into wave equations? You may be better served by a book with more mathematical rigor.
            </p>
            <p>
              Whether you are a budding scientist, a curious reader, or simply a seeker of wonders, this enchanting tome will try to bewitch you with charm.
            </p>
            <p class="text-purple-700 font-medium">
              "The Best Book on Quantum Computing: A Beginner's Guide to Quantum Magic" a quantum gateway, a starlit path to the cosmos of quantum knowledge. This book hums with the magic of discovery and glows with the joy of understanding.
            </p>
            <p class="text-gray-600">
              Come, step into the realm of quantum magic, where every page is a new horizon, every word a new adventure. A magical expedition is but a page away... Will you heed its call? Turn the pages, unlock the mysteries, and let yourself be whisked away into the quantum beyond.
            </p>
          </div>
          
          <!-- Amazon Buy Button - under description -->
          <div class="pt-6">
            <a 
              href="https://a.co/d/3G0xrOG" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 bg-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-purple-700 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Buy on Amazon
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Novel Proposal Section -->
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.3s;">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          A Novel Proposal
        </h2>
        <p class="text-xl text-gray-600">
          Sapphire Spiral Design for Quantum Computing
        </p>
      </div>
      
      <div class="bg-white rounded-xl shadow-lg p-8 lg:p-12 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.4s;">
        <div class="prose prose-lg max-w-none">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Abstract</h3>
          <p class="text-gray-700 leading-relaxed mb-6">
            We propose that <strong>multi-second coherence times</strong> in a quantum processor should be achievable — not through incremental improvements, but through <strong>a ~57 cm single-crystal sapphire disc hosting 4000 qubits in a self-stabilizing aperiodic spiral</strong>. Unlike traditional processors with discrete connections, this design depends on a continuous sapphire plane — where the medium itself enforces the wave physics needed for coherence.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            Electromagnetic wave interference is <strong>already a solved problem in military phased-array antennas</strong>, where spiral geometries precisely control wave interactions across hundreds of elements (analogous to qubits), creating stable interference patterns.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            Qubit stability is wave-driven. This is evident in recent experimental results, where Willow's 7×7 lattice-based surface code demonstrated exponential suppression of logical errors, extending logical qubit lifetimes beyond their best physical qubits. Wave physics dictates stability. Therefore, interference engineering — not just localized error correction — must define quantum processor design.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            We propose replacing the traditional qubit lattice with an Archimedean spiral — a continuous curve where qubits are placed along a path defined by r=a+bθ, expanding outward with uniform spacing between turns. By optimizing for the effective wavelength in the continuous sapphire substrate (~1.6 cm at 6 GHz) rather than free-space values (that arise from typical substrate setups), we tailor interference patterns for on-chip propagation. Using established half-wavelength spacing (0.8 cm) from planar antenna design, our architecture scales from 49 qubits (6.4 cm diameter) to 400 qubits (18.4 cm diameter), and ultimately to 4000 qubits (57 cm diameter) — all requiring an unbroken sapphire plane to maintain consistent wave propagation.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-8">
            At 6 GHz, the quantum environment reshapes itself 6 billion times per second. In conventional architectures, these oscillations propagate chaotically, scattering error across the system. But <strong>in our design, aperiodic spiral placement locks interference into a self-stabilizing wave structure inside the uniform sapphire substrate</strong>. We introduce a Bessel-function-based metric to quantify this effect, demonstrating substantially reduced residual wave overlap compared to regular lattices. Since each of these 6 billion cycles compounds the benefit of improved error suppression, even modest reductions in per-cycle error rates yield <strong>exponential gains in coherence times</strong>.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-8">
            With sufficient precision in fabrication and tuning, this approach offers an extraordinary possibility: A single wave system driving all qubits in perfect harmony, with destructive interference precisely where needed — creating <strong>a naturally stable quantum environment</strong>.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Introduction</h3>
          <p class="text-gray-700 leading-relaxed mb-6">
            Quantum coherence in superconducting qubits is notoriously fragile. Superconducting quantum bits (qubits) easily lose their quantum state information by interacting with the environment, leading to decoherence and errors. Even with state-of-the-art devices achieving ~99.9% fidelity per operation, this error rate is many orders of magnitude too high – practical quantum computing demands error probabilities on the order of 10⁻¹² (about one in a trillion). Decoherence remains a central obstacle in quantum computing, requiring advances in hardware and error mitigation.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            One often overlooked factor in hardware design is the physical <strong>geometry</strong> of the qubit layout. The spatial arrangement of qubits on a chip can strongly influence crosstalk, mode structure, and thus coherence. For example, qubits that are placed too closely can unintentionally couple to each other or to shared wiring modes, causing <em>crosstalk</em> errors. Conversely, increasing the distance between qubits tends to reduce such unwanted interactions – recent measurements show that crosstalk levels drop as qubit spacing increases.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            This suggests that by carefully choosing the geometric layout of qubits, one can mitigate some sources of decoherence and improve overall quantum coherence.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            Currently, most superconducting quantum processors use a regular two-dimensional lattice (grid) to position qubits. This choice is partly driven by the needs of quantum error-correcting codes (like the surface code), which require qubits to be arranged with nearest-neighbor connectivity in a planar array. A prominent example is Google's <strong>Willow</strong> quantum processor, which encodes a single logical qubit in a 7×7 lattice of physical qubits (97 physical qubits in total for one logical qubit).
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            By scaling up the lattice from smaller sizes (3×3 to 5×5 to 7×7), the Willow chip demonstrated a dramatic reduction in the logical error rate: it achieved the first clear observation of <em>exponential error suppression</em> as the number of physical qubits increased.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            In essence, each time the code distance was increased (from a 3×3 to a 5×5 to a 7×7 array of qubits), the encoded qubit became roughly twice as stable (halving the error rate).
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            This milestone illustrates how adding more qubits in a well-engineered lattice can significantly boost quantum coherence via error correction.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            <strong>Figure 1 is from the Willow paper: Quantum error correction below the surface code threshold:</strong>
          </p>
          
          <!-- Added Willow paper image at specified location -->
          <div class="my-8 text-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kIK8OgyN82gpjhhgKQbSsLvHnQDtvU.png" 
              alt="Willow paper quantum error correction graphs showing surface code performance"
              class="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
            <p class="text-sm text-gray-600 mt-4 italic">
              Fig. 1 from Google's Willow paper | Surface code performance. a, Schematic of a distance-7 (d = 7) surface code on a 105-qubit processor. Each measure qubit (blue) is associated with a stabilizer (blue-coloured tile). Data qubits (gold) form a d × d array. We remove leakage from each data qubit using a neighbouring qubit below it, with additional leakage removal qubits at the boundary (green). b, Cumulative distributions of error probabilities measured on the 105-qubit processor. Red, Pauli errors for single-qubit gates; black, Pauli errors for CZ gates; gold, Pauli errors for data qubit idle during measurement and reset; blue, identification error for measurement; teal, weight-4 detection probabilities (distance 7, averaged for 250 cycles). c, Logical error probability pL for a range of memory experiment durations. Each data point represents 105 repetitions decoded with the neural network and is averaged over the logical basis (XL and ZL). Black and grey, data from ref. 17 for comparison. Curves, exponential fits after averaging pL over code and basis.
            </p>
          </div>
          
          <p class="text-gray-700 leading-relaxed mb-8">
            Encouraged by such progress, we are motivated to ask whether <strong>geometry itself</strong> can be optimized to enhance coherence, beyond the standard lattice approach. A regular grid is convenient but may not be the <em>optimal</em> arrangement from an electromagnetic standpoint – its periodic structure can support resonances and correlated noise channels that degrade qubit performance. In the following, we explore an alternative placement strategy: an Archimedean spiral pattern for qubit layout. The hypothesis is that this non-periodic, carefully spaced spiral geometry can intrinsically reduce interference and crosstalk, providing a new route to preserving quantum coherence in superconducting qubit systems.
          </p>
          
          <div class="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
            <p class="text-purple-800 font-medium">
              This research represents a fundamental shift in quantum processor design, moving from fighting decoherence to harnessing the natural properties of crystalline materials and wave interference patterns to maintain quantum states at unprecedented scales.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Next Steps Section -->
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.45s;">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Next Steps?
        </h2>
        <p class="text-xl text-gray-600">
          From Theory to Implementation
        </p>
      </div>
      
      <div class="bg-white rounded-xl shadow-lg p-8 lg:p-12 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.5s;">
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-700 leading-relaxed mb-6">
            <strong>The Plan</strong> is to arrange 4000 qubits in an <strong>Archimedean spiral</strong> (3200 cm length, b=0.127 cm/radian, θ≈224.45 rad, ~57 cm diameter, 18 turns) with λ/2=0.8 cm spacing to kill crosstalk via destructive interference, inspired by military-grade spiral antennas.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            But that's really just a guess. <em>I've never touched quantum hardware.</em>
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            Computer models are meh, so I'm hoping <strong>SpaceX's RF expertise</strong> can ground-truth this.
          </p>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            Know anyone who's dealt with spiral layouts of 1000+ elements in phased arrays?
          </p>
          
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
            <h3 class="text-lg font-semibold text-yellow-800 mb-4">Any gotchas on:</h3>
            <ul class="space-y-2 text-yellow-700">
              <li><strong>Real-world spacing</strong> for stable interference patterns?</li>
              <li><strong>Scaling to high element counts</strong> while keeping precision?</li>
              <li><strong>Routing control signals</strong> without messing up the wave field?</li>
            </ul>
          </div>
          
          <p class="text-gray-700 leading-relaxed mb-8">
            Any feedback (get it? <em>feedback?</em>) from real world <strong>RF chads</strong> would be greatly appreciated.
          </p>
          
          <div class="text-center">
            <p class="text-gray-700 mb-6">
              Want the full paper?
            </p>
            <a 
              href="/contact" 
              class="inline-flex items-center gap-3 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Research Impact Section -->
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.5s;">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Research Impact</h2>
        <p class="text-xl text-gray-600">
          Advancing the Frontiers of Quantum Computing
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-8 text-center {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.6s;">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Coherence Innovation</h3>
          <p class="text-gray-700">
            Revolutionary approach to maintaining quantum coherence through crystalline material properties rather than external control systems.
          </p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 text-center {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.7s;">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Scalable Architecture</h3>
          <p class="text-gray-700">
            4000-qubit processor design that scales naturally through the geometric properties of the sapphire disc substrate.
          </p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 text-center {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.8s;">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Practical Applications</h3>
          <p class="text-gray-700">
            Enabling fault-tolerant quantum algorithms and opening new possibilities for quantum machine learning and optimization.
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
    <!-- Added legal links to footer -->
    <div class="mt-4 space-x-6">
      <a href="/privacy-policy" class="text-sm text-gray-400 hover:text-gray-300 transition-colors">Privacy Policy</a>
      <a href="/return-policy" class="text-sm text-gray-400 hover:text-gray-300 transition-colors">Return Policy</a>
      <a href="/terms-conditions" class="text-sm text-gray-400 hover:text-gray-300 transition-colors">Terms & Conditions</a>
    </div>
  </div>
</footer>
