<script>
  import { onMount } from 'svelte';
  
  let mounted = $state(false);
  
  onMount(() => {
    mounted = true;
    
    const hash = window.location.hash;
    if (hash === '#bookclub') {
      // Try multiple times with increasing delays to ensure the page is fully rendered
      setTimeout(() => {
        document.getElementById('bookclub')?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
      
      // Backup attempt in case the first one fails
      setTimeout(() => {
        const element = document.getElementById('bookclub');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  });

  function scrollToBookClub() {
    document.getElementById('bookclub')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<div class="min-h-screen bg-[#441e4b] text-white">
  <!-- Hero Section with Book Images -->
  <section class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-6xl sm:text-7xl font-bold text-white mb-4 {mounted ? 'animate-fade-in-up' : ''}">
        Plum Candy
      </h1>
      <p class="text-2xl text-purple-200 mb-12 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.1s;">
        by Aaliyah Corley
      </p>
      
      <!-- Large Book Images -->
      <div class="flex justify-center mb-16 {mounted ? 'animate-fade-in-up' : ''}" style="animation-delay: 0.2s;">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-plum-candy-2MKe0phl0eH1LvvoPyimOd0UyzyQKE.webp" 
          alt="Plum Candy book covers"
          class="w-full max-w-4xl h-auto object-contain"
        />
      </div>

      <!-- Scroll to Book Club Button -->
      <button 
        onclick={scrollToBookClub}
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors {mounted ? 'animate-fade-in-up' : ''}" 
        style="animation-delay: 0.3s;"
      >
        Jump to Book Club Guide
      </button>
    </div>
  </section>

  <!-- Book Content Section -->
  <section class="bg-white text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Title and Japanese Text -->
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-gray-900 mb-4">Plum Candy</h2>
        <p class="text-3xl text-gray-600 mb-4">表面は甘く、中は苦い</p>
        <p class="text-2xl italic text-gray-700 mb-12">It is, after all, a mystery.</p>
      </div>

      <!-- Preface -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-gray-900 mb-8">Preface</h3>
        <div class="prose prose-lg max-w-none text-lg leading-relaxed space-y-6">
          <p>Is it really a betrayal if you should have seen it coming? You can't think about that now.</p>
          
          <p>Darkness presses in, heavy, sapping — but not the kind of dark to hide in. You don't see anyone, but are you alone? No.</p>
          
          <p><strong>Your body knows before the mind. Hair stands up — a million nerve extenders seek out danger. The crawling sensation up your spine snaps a whip: <em>glance behind</em>.</strong></p>
          
          <p>Freeze. Hold that noisy breath. Listen.</p>
          
          <p>You hear nothing. Nothing out of the ordinary. Not yet. How can it be so quiet and loud at the same time? It's the heightened sense that both the hunted and the hunter share — that they've had to share since before time had a name. Pure survival.</p>
          
          <p>Before the fall it was all so simple.</p>
          
          <p>Now? Some people have their heart ripped out, others have their heart ripped out.</p>
          
          <p>That's the tightening in your chest, the sinking sensation. The dreaded void.</p>
          
          <p>Will you run? Will you fight? Will you decide before it's too late?</p>
          
          <p>All an illusion. There's no real choice.</p>
          
          <p>It only feels like time is standing still. It is not.</p>
          
          <p>You're gonna run. Go! GO!</p>
          
          <p>…</p>
          
          <p>All quiet now.</p>
        </div>
      </div>

      <!-- Chapter 1 -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-gray-900 mb-8">Chapter 1</h3>
        <div class="prose prose-lg max-w-none text-lg leading-relaxed space-y-6">
          <p>Rowan Hawthorn keeps his eyes fixed on the winding path ahead, this time the dirty road through Pine Ridge. Heading south, the morning sun warms his face. Rowan's black hair doesn't worry about a strong breeze from an open window, and neither does he.</p>
          
          <p>In the passenger seat, Lawson Wright works in Rowan's shadow. His finger traces a paper map, "Should be just over those mountains. Pine Ridge. Quaint little town, if you believe the reports."</p>
          
          <p>Rowan nodded, a casual one-handed grip on the steering wheel. "Small town, small problems? That it? Let's see how long that keeps up. Guess we could use a plain Jane case for once."</p>
          
          <p>"This straight shot looks a little dodgy," Lawson tapped the map. "The highway will take a wee bit longer, roundabout as it is, but it'll get us there without any headaches. Bear to the right at the fork up here."</p>
          
          <p>Rowan nodded, grinned, and kept going straight.</p>
          
          <p>The car roared upward, climbing, revving, straining against that relentless slope, kept pushing, onward! it toiled and battled against cruel twists and deaddrop turns, onward!</p>
          
          <p>A sharp bend reshaped the view. Sunlight became a blade that stabbed through the windshield, and punished Rowan's eyes. He squinted. Motes of fractured color. His peripheral, blind. He had to focus or they'd fly off a cliff. Lawson was saying something, but it faded to nothing as Rowan focused round the dangerous turn.</p>
          
          <p>After the crest, the descent began. The shadow of the Ridge brought clarity. He started to see. There were trees, orange, yellows, reds. And evergreen pines. And that small, insignificant-looking town. Those roads and cabins clung on to the east valley ridge. Continuing down, his vision cleared more.</p>
          
          <p>There was a lake, too.</p>
          
          <p>Rowan read aloud the words on a hand-carved wooden sign as the car whizzed by: "Pine Ridge, population 5,134."</p>

          <p>"There," Lawson pointed, "looks like a filling station. We should top up before heading into town."</p>
          
          <p>Rowan rolled in slowly beside the lone pump while the station's bell rattled out like old bones. The clanging drew out a lanky attendant with a grease-smudged forehead — couldn't have been older than twenty.</p>
          
          <p>"I'll handle this." Rowan stepped out of the car. "Need to stretch my legs anyway."</p>
          
          <p>The attendant nodded a greeting. "Good afternoon, sir. Fill 'er up?"</p>
          
          <p>The sign above the pump read <em>'REGULAR 27¢/GAL'</em></p>
          
          <p>Rowan replied with a swagger, "Yes, please. And I'll settle the bill inside."</p>
          
          <p>Gasoline pumping, price ticker spinning, Rowan made his way into the store. Above the door, another bell clanged.</p>
          
          <p>Fluorescents hummed overhead. Light reflected off the counter chrome. A radio perched on a high shelf sang a soft doo-wop. Crisp, newly printed magazines vied for attention over the locally made knickknacks and penny candies.</p>
          
          <p>On the wall behind the counter, a framed newspaper clip headlined: <em>'A PIECE OF FISHSTORY'</em> with a picture of a man smiling while holding a particularly large trout.</p>
          
          <p>The caption read: <em>'Mayor Coolidge congratulates Ted Larson on record catch!'</em> But someone had circled certain letters in red pen, then hastily attempted to erase the marks.</p>
          
          <p>Rowan noted that the pictured Troutman was the shopkeeper who just greeted him. "Afternoon," Rowan responded. "How much for the gas?"</p>
          
          <p>The shopkeeper answered as the store's bell jingled again.</p>
          
          <p>A man stumbled in. The bandanna was red and paisley. <em>Paisley!</em> Like some dime-novel outlaw's idea of a menacing mask. His clothes hung loose on his frame, perhaps "borrowed" from someone larger and too slow to catch him.</p>
          
          <p>His hand, though shaky, <em>did</em> brandish a revolver.</p>
          
          <p>"Hands up! Money in the bag, now!" the man yelled.</p>
          
          <p>The shopkeeper put his hands up quickly, then asked, "What bag? You got one for me or..."</p>
          
          <p>Rowan's chin flicked upward sharp as a switchblade. Not worried, but amused. Amused by the robber's dime-novel demeanor and kid-cowboy mask.</p>
          
          <p>He swung the gun towards Rowan. "I said hands up!"</p>
          
          <p>Swift but relaxed, Rowan stepped forward. He snatched the culprit's wrist and threw him on the ground. The gun clattered pathetically to the floor as the robber yelped in pain, <em>"Aieee, ow, ow, ow! Gyaaah</em> — <em>mercy! Uncle!"</em></p>
          
          <p>Before the man knew what happened, Rowan had him back on his feet, face-down on the counter, arm twisted behind his back. The whole kerfuffle lasted barely enough time to be a kerf.</p>
          
          <p>"Got any rope?" Rowan asked the gawking shopkeeper.</p>
          
          <p>"What?!? You gonna hang him?"</p>
          
          <p>"No. To tie him up. What kind of town is this?"</p>
          
          <p>"Small town. No rope. Got duct tape, though." The shopkeeper reached under the counter and tossed a roll to Rowan.</p>
          
          <p>Rowan bound the failed robber's hands. He then retrieved the fallen gun, clicked on the safety, and pocketed it.</p>
          
          <p>"Now then," Rowan turned to the shopkeeper, his tone conversational, "how much for the gas, again?" He glanced at the bound man, "let's add a bottle of pop for our unexpected guest."</p>
          
          <p>"Duct tape, too?" grinned the shopkeeper.</p>
          
          <p>Rowan chuckled and paid the tab, then hauled the trussed-up robber out, Coke bottle dangling from his free hand like a cheap brown trophy.</p>
          
          <p>As Rowan opened the back door of the car and ushered the bound man inside, Lawson inquired, "Geez. Was that on sale?"</p>
          
          <p>"Small town. Already making new friends," Rowan replied.</p>
          
          <p>He slid into the driver's seat, started the engine, and moseyed away from the gas station, the crime scene, and two gobsmacked yokels.</p>
          
          <p>Back on the winding road, Lawson turned in his seat to eye their straggly captive, then back to his partner. "Rowan," he said slowly, "We are here about the disappearances. Not to play beat cops."</p>
          
          <p>Rowan didn't reply.</p>
          
          <p>Lawson sighed and looked ahead. "We are headed to see Chief Travis anyway. I guess we could drop off some trash while we were there."</p>
          
          <p>Rowan looked up to the rearview mirror and said, "So, care to explain yourself, friend?"</p>
          
          <p>The bound man shifted uncomfortably in his seat. "First off, my name's not 'friend,' it's Bennet," he grumbled. Then, his voice dropping to a near-whisper, he added, "And I did it because I needed dough for the protection fee..."</p>
          
          <p>Lawson's eyes narrowed. "Protection fee? What are you talking about?"</p>
          
          <p>Bennet looked out the window, his face reflective. "You're new in town, ain't ya? Don't know how things work here in Pine Ridge."</p>
          
          <p>Rowan side-eyed Lawson, a silent communication passing between them. This could be exactly the kind of information they had come to Pine Ridge to uncover.</p>
          
          <p>"Is it story time already?" Rowan asked, his tone gentle but firm.</p>
          
          <p>Bennet took a deep breath. "About two months ago the goons got more serious about the occasional light envelope. Before that it was more subtle. A little short just meant eatin' a knuckle sandwich. But then, everyone got put on this strict weekly drop. And if you don't pay..."</p>
          
          <p>He trailed off, his voice choked with emotion.</p>
          
          <p>"What happens if you can't pay?" Rowan pressed.</p>
          
          <p>"Someone you love gets grabbed," Bennet said, voice low and jagged. "Wife, kid, mom — they're gone 'til you pay up. And if you can't get square? That special <em>someone</em> gets offed right in front of 'ya."</p>
          
          <p>Silence slammed into the car, thick and cold. Rowan's knuckles gleamed white as ice on the wheel.</p>
          
          <p>"That's why I stuck up the joint," Bennet continued. "My fiancée... they said she looked too pretty for the gal of a broke mug like me. Promised to make the world right if I didn't pony up by tonight. I couldn't let that happen. I just couldn't!"</p>
          
          <p>"Hmm," was all Lawson Wright replied, a look of skepticism on his face.</p>
          
          <p>Rowan pulled the car up to a charming two-story building, its rustic face a warm welcome to weary travelers.</p>
          
          <p>"I'll wait here with our guest," Lawson said. "You go book us a room."</p>
          
          <p>Glaring coldly at Bennet in the backseat, Rowan said, "Alright. Stay put. Got it, knucklehead?"</p>
          
          <p>Rowan stepped out and the autumn breeze wafted through the air, rustling the trees that lined the street. The Pine Ridge Inn loomed over them; its wooden facade weathered to a soft gray.</p>
          
          <p>The crunch of leaves under boots punctuated the eerie stillness that blanketed Pine Ridge. As he stepped inside, the scent of wood polish and something floral greeted him. Behind a counter stood a man in his mid-forties, his friendly face creased with laugh lines that spoke of a life well-lived. Despite his genial appearance, Rowan noted the man's broad shoulders and the hint of muscle beneath his rolled-up sleeves.</p>
          
          <p>"Welcome to Pine Ridge Inn." His voice flowed. His eyes pierced. The chair creaked and groaned as the innkeeper rose, "What brings you to our neck of the woods?"</p>
          
          <p>Rowan leaned casually against the counter. "Exploring. Thought I'd get off the main road, and experience some of this countryside."</p>
          
          <p>"Always good to broaden your horizons. You never know what nuggets of wisdom you might find... or what purpose you might fulfill."</p>
          
          <p>Rowan sighed slightly. "What are you going on about?"</p>
          
          <p>The innkeeper chuckled and waved a hand dismissively. "Oh, don't mind me. Small town. Big imagination. How long will you be staying?"</p>
          
          <p>"Six nights, if you have the room. Two beds, please."</p>
          
          <p>The innkeeper checked the ledger. Rowan's gaze wandered. Photos lined the walls — smiling families, local landmarks, a younger version of the innkeeper with his arm around a pretty woman.</p>
          
          <p>His gaze bounced from the photos to a glass jar on the counter, filled with small, individually wrapped, sweet, sweet candies. His eyes lingered, curiosity piqued.</p>
          
          <p>The innkeeper noticed Rowan's interest and nodded. "Ah, you've spotted our little specialty," he tapped the jar. "Plum candies — made right here in Pine Ridge. Go ahead, take as many as you like."</p>
          
          <p>Rowan reached for the jar, pulling out a candy with a hint of hesitation. He unwrapped it and popped it into his mouth, savoring the burst of flavor. "Sweet," he remarked, almost to himself. "Though it's got quite the bitter kick at the end."</p>
          
          <p>The innkeeper chuckled. "Some say they're the taste of the town. Keeps folks coming back."</p>
          
          <p>Rowan smiled, letting the candy dissolve slowly as he looked around the cozy inn. It was really good! — harsh, but strangely satisfying.</p>
          
          <p>"You're in luck," the innkeeper said, sliding a key across the counter. "Room 7, top of the stairs. Best view in the house. Enjoy your stay, Mr...?"</p>
          
          <p>"Rowan. Just Rowan."</p>
          
          <p>"Enjoy your stay, Just Rowan," the innkeeper said, "and if you need anything — advice, directions, a good cup of joe — you know where to find me."</p>
          
          <p>Rowan took a fistful of candies, nodded, and strode out. Just as he left the inn, a soft weight on his foot gave him pause. Glancing down, he found himself under the scrutiny of a small cat. Its fluffy white and light gray fur gleamed in the sunlight. Bright blue eyes, filled with feline intelligence, gazed up at Rowan curiously.</p>
          
          <p>Gently, Rowan scooped up the little feline. "I'm afraid I don't have any food for you," he told the cat. The cat tilted its head, seemingly confused by the interaction. He put it down, smiled, and gave it one final scratch on the head before leaving.</p>
          
          <p>Rowan walked back to the car and slid back into the driver's seat, his expression neutral as he adjusted the rearview mirror. The failed robber shifted in in the backseat, his bound hands denied any comfort.</p>
          
          <p>"So," he ventured, voice tinged with desperation, "you're not actually taking me to jail, right? Because then she's good as gone."</p>
          
          <p>Rowan chuckled and exchanged a glance with Lawson. "No jail. Not yet."</p>
          
          <p>Relief softened Bennet's face. Bound hands rose hopeful, pathetic but hopeful. "Then... can I make tracks?"</p>
          
          <p>"Not so fast." Lawson turned to face him. "How exactly are you planning on getting that money?"</p>
          
          <p>Rowan didn't say anything and simply looked at him through the rearview mirror.</p>
          
          <p>"Suppose I could get my piece back?" he contemplated, "It'd still have time to—"</p>
          
          <p>"Get serious," Lawson said. "You really think we'd let you go rob someone else?"</p>
          
          <p>Rowan scoffed. "Not a chance, jackass."</p>
          
          <p>"But my fiancée!" Bennet's voice cracked.</p>
          
          <p>Rowan's eyes narrowed slightly. "Is this fiancée of yours close by? Where's she staying?"</p>
          
          <p>"Huh?" Bennet asked.</p>
          
          <p>"Where does your broad live?" Rowan said slowly, enunciating every word, like he was talking to a slow child, or a sputtering suspect. "We're going to help out with your... about-to-be-kidnapped-princess problem."</p>
          
          <p>Bennet opened his mouth to argue, but his words stuck in his throat when he caught Rowan's glare in the rearview mirror. There was something in those eyes — the confidence, the danger — that made Bennet recall how effortlessly he'd been subdued. Suddenly, the idea of a stranger helping didn't seem so far-fetched.</p>
          
          <p>He slumped back in his seat, "Bang a right at the next corner." Despite the chill, sweat was beading Bennet's brow in the rearview mirror.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Book Club Guide Section -->
  <section id="bookclub" class="bg-[#331638] text-white py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- The Setup: The Official Dossier -->
      <h2 class="text-5xl font-bold text-white mb-8 text-center">The Setup: The Official Dossier</h2>

      <div class="prose prose-lg prose-invert max-w-none text-lg leading-relaxed space-y-8">
        <p class="text-xl font-semibold">Let's get one thing straight.</p>
        
        <p>The author has one job, first and foremost: hold our attention.</p>
        
        <p>If at any point we're thinking, "let's move it along," they're losing. If we get bored, we're out. It's that simple. We need to care, or nothing else matters.</p>
        
        <p>Only if they succeed at that do we even bother with the puzzle.</p>
        
        <p>A great mystery is a contract. The author plays fair. We play for the thrill of the solve.</p>
        
        <p>But before we begin, a mandatory briefing.</p>
        
        <div class="bg-red-900/30 border-l-4 border-red-500 p-6 my-8">
          <p class="text-xl font-bold text-red-300 mb-4">WARNING:</p>
          <p>The author is toying with you. Do not be fooled by her pretty smile.</p>
          <p>She is playing a game you are not prepared for, and she will make you feel as if you have it all figured out.</p>
          <p>She will play fair.</p>
          <p>And you and your reading group will lose.</p>
          <p>You will feel that loss.</p>
        </div>
        
        <p>That's where this guide comes in. Think of it as the official scoreboard. It's here to make sure neither side cheats and that no one misremembers how things really went down.</p>
        
        <p>So gather your party.</p>
        
        <p>And get ready to battle the final boss of Mystery Novels.</p>

        <h3 class="text-3xl font-bold text-purple-200 mt-12 mb-6">Preface: The Author's Opening Gambit</h3>
        
        <p>An author's opening is a calculated move. It sets the board and reveals their strategy. Let's analyze it as such.</p>

        <h4 class="text-2xl font-bold text-purple-300 mt-8 mb-4">Decoding the Message (The Themes)</h4>
        
        <ol class="list-decimal list-inside space-y-4">
          <li><strong>The Opening Promise:</strong> The first line of a book is often workshopped endlessly. The one here is: "Is it really a betrayal if you should have seen it coming?" What, if anything, is the author's promise to you with this line? What does it signal about the kind of story we are about to read?</li>
          <li><strong>The Thematic Tagline:</strong> The Japanese tagline for the book is 表面は甘く、中は苦い. This roughly translates to "Sweet on the outside, bitter on the inside." How does this preface taste to you?</li>
          <li><strong>The Nature of Choice:</strong> The narrator says, "Will you run? Will you fight? ... All an illusion. There's no real choice." What the heck is this claptap? Freshman philosophy class?</li>
        </ol>

        <h4 class="text-2xl font-bold text-purple-300 mt-8 mb-4">Deconstructing the Author's Playbook (The Craft)</h4>
        
        <ol class="list-decimal list-inside space-y-4" start="4">
          <li><strong>The Second-Person Gamble:</strong> Using "you" is a high-risk, high-reward technique. What are the potential benefits of this perspective for an author? What are the potential drawbacks? In this specific case, what effect did it have on your reading experience?</li>
          <li><strong>The Cliché Question:</strong> The author uses some classic thriller tropes: "Hair stands up," "crawling sensation up your spine," "heart ripped out." Is this a sign of lazy writing, or is the author using these phrases intentionally as some kind of trick?</li>
          <li><strong>The Unseen:</strong> What key information is conspicuously absent from this scene? What does the author gain by leaving the setting and the source of the threat so undefined?</li>
        </ol>

        <h4 class="text-2xl font-bold text-purple-300 mt-8 mb-4">Situational Intel (Your Reaction)</h4>
        
        <ol class="list-decimal list-inside space-y-4" start="7">
          <li><strong>Familiar Footprints:</strong> What movie, show, or book does the preface make you think of? Is <em>Plum Candy</em> a clever homage or a shameless rip-off?</li>
          <li><strong>The Burning Questions:</strong> What are the top 2-3 questions this preface has raised that you absolutely need to have answered as the story unfolds?</li>
        </ol>

        <h4 class="text-2xl font-bold text-purple-300 mt-8 mb-4">Your Preliminary Verdict (Making the Call)</h4>
        
        <ol class="list-decimal list-inside space-y-4" start="9">
          <li><strong>Final Verdict:</strong> Is the author a genius playing with our expectations, or a novice trying a bit too hard?</li>
          <li><strong>The Grand Unified Theory of Plum Candy:</strong> In one sentence, what is this book <em>really</em> about? We write these down now.</li>
        </ol>

        <h3 class="text-3xl font-bold text-purple-200 mt-12 mb-6">Case File: 001 - PINE RIDGE - Chapter 1</h3>
        
        <p><strong>Debrief:</strong> The game is afoot. But the author's choices are... suspect. Let's get into it.</p>

        <h4 class="text-2xl font-bold text-purple-300 mt-8 mb-4">Author's M.O. (Style & Craft)</h4>
        
        <ol class="list-decimal list-inside space-y-4" start="11">
          <li>The book starts with "You" in the preface. The first paragraphs of this chapter are present tense. The rest is past tense. What's with the author jumping all over the place? Is this a rookie mistake, or are we supposed to be paying attention to it?</li>
          <li>You notice that car ride up and down the mountain? The author uses all this dramatic language—"toiled and battled," "sunlight became a blade"—but Rowan isn't in any real danger. The style is all over the place from poetic to sentence fragments. What's up with that?</li>
          <li>Critical eye: Which scenes felt authentic? Which felt like familiar genre tropes?</li>
          <li>What made you smile or chuckle?</li>
        </ol>

        <h4 class="text-2xl font-bold text-purple-300 mt-8 mb-4">Evidence & Red Herrings (The Plot)</h4>
        
        <ol class="list-decimal list-inside space-y-4" start="15">
          <li>Awfully convenient running into someone doing a crime because of some extortion racket the second they roll into town. If Pine Ridge has a population of 5,134, is that chance encounter plausible?</li>
          <li>What was suspicious? What are some possible clues or red herrings?</li>
          <li>The plum candy makes its appearance. So now we know where the title comes from. But are there any other metaphors in this chapter that actually worked for you?</li>
          <li>What's up with the cat? Why bother?</li>
        </ol>

        <h4 class="text-2xl font-bold text-purple-300 mt-8 mb-4">Persons of Interest (The Characters)</h4>
        
        <ol class="list-decimal list-inside space-y-4" start="19">
          <li>Let's take a look at how Rowan interacts with the Innkeeper. For example:
            <div class="bg-gray-800/50 p-4 my-4 rounded italic">
              <p>"Rowan. Just Rowan."</p>
              <p>"Enjoy your stay, Just Rowan," the innkeeper said, "and if you need anything — advice, directions, a good cup of joe — you know where to find me."</p>
            </div>
            What does how Rowan handles the people he meets there (and earlier) say about him? And this Innkeeper —oddball, typical small town yokel, or super sus?
          </li>
          <li>Now let's look at this exchange:
            <div class="bg-gray-800/50 p-4 my-4 rounded italic">
              <p>Rowan chuckled and exchanged a glance with Lawson. "No jail. Not yet."</p>
              <p>Relief softened Bennet's face. Bound hands rose hopeful, pathetic but hopeful. "Then... can I make tracks?"</p>
              <p>"Not so fast." Lawson turned to face him. "How exactly are you planning on getting that money?"</p>
              <p>Rowan didn't say anything and simply looked at him through the rearview mirror.</p>
              <p>"Suppose I could get my piece back?" he contemplated, "It'd still have time to—"</p>
              <p>"Get serious," Lawson said. "You really think we'd let you go rob someone else?"</p>
              <p>Rowan scoffed. "Not a chance, jackass."</p>
              <p>"But my fiancée!" Bennet's voice cracked.</p>
            </div>
            What does this say about the characters?
          </li>
        </ol>

        <h4 class="text-2xl font-bold text-purple-300 mt-8 mb-4">Forward Momentum (Pacing & The Hook)</h4>
        
        <ol class="list-decimal list-inside space-y-4" start="21">
          <li>How's the pacing? What are the hooks? Do you want to know what happens next? Or do you already know?</li>
        </ol>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#220f25] text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto text-center">
      <p class="text-sm">
        &copy; {new Date().getFullYear()} Aaliyah Corley. All rights reserved.
      </p>
    </div>
  </footer>
</div>
