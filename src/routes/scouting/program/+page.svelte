<script>
	function scrollToEagles() {
		const eaglesSection = document.getElementById('eagles-section');
		if (eaglesSection) {
			eaglesSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>Eagle Court of Honor Program - Aaliyah Corley</title>
	<meta name="description" content="Court of Honor program celebrating Aaliyah Corley's Eagle Scout achievement with Troop 163G on August 23, 2025." />
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-purple-50 to-gray-50">
	<!-- Hero Section -->
	<section class="relative py-16 px-4 bg-gradient-to-r from-[#441e4b] via-purple-800 to-purple-700">
		<div class="absolute inset-0 bg-black/20"></div>
		<div class="relative max-w-4xl mx-auto text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
				An Eagle Court of Honor
			</h1>
			<div class="w-24 h-1 bg-purple-300 mx-auto mb-6"></div>
			<p class="text-2xl text-purple-100 mb-2">Celebrating</p>
			<p class="text-3xl font-bold text-white mb-2">Aaliyah Corley</p>
			<p class="text-xl text-purple-200 mb-4">Troop 163G</p>
			<p class="text-lg text-purple-300">August 23, 2025</p>
		</div>
	</section>

	<!-- Added link to Aaliyah's Scouting journey at top of program -->
	<section class="py-8 px-4 bg-white">
		<div class="max-w-4xl mx-auto text-center">
			<a href="/scouting" class="inline-flex items-center px-6 py-3 bg-[#441e4b] text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
				Aaliyah's Scouting Journey
			</a>
		</div>
	</section>

	<!-- Program Content -->
	<section class="py-12 px-4">
		<div class="max-w-4xl mx-auto space-y-8">
			
			<!-- Eagle Scout Award Section -->
			<div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#441e4b]">
				<h2 class="text-3xl font-bold text-[#441e4b] mb-6">The Eagle Scout Award</h2>
				<div class="text-lg leading-relaxed text-gray-700 space-y-4">
					<p>
						The rank of Eagle Scout is the highest and most prestigious achievement a Scout can earn. It is a culmination of years of dedication, leadership, and service.
					</p>
					<p>
						To become an Eagle Scout, a Scout must earn a minimum of 21 merit badges, serve in a troop leadership position, and successfully plan, develop, and lead a significant service project for their community.
					</p>
					<p>
						The journey to Eagle is a long and challenging one. Today, we celebrate Aaliyah as she joins the distinguished group of Scouts who have reached the summit of this trail.
					</p>
					<p class="text-xl font-semibold text-[#441e4b] text-center italic">
						"Once an Eagle, Always an Eagle."
					</p>
					<p class="text-center">
						<!-- Changed link to button with scroll action -->
						<button onclick={scrollToEagles} class="inline-flex items-center px-6 py-3 bg-[#441e4b] text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
							See All the Eagles that Troop 163 produced
						</button>
					</p>
				</div>
			</div>

			<!-- Program Schedule -->
			<div class="bg-white rounded-lg shadow-lg overflow-hidden">
				<div class="bg-gradient-to-r from-[#441e4b] to-purple-600 px-6 py-4">
					<h2 class="text-2xl font-bold text-white text-center">Program</h2>
				</div>
				
				<div class="p-6 space-y-6">
					
					<!-- Welcome -->
					<div class="border-l-4 border-purple-300 pl-6">
						<h3 class="text-xl font-bold text-[#441e4b] mb-2">Welcome</h3>
						<p class="text-gray-700">Mr. Steve Bo, Scoutmaster, Troop 163G</p>
						<p class="text-gray-700">Mr. Jeff Roberts, Scoutmaster, Troop 163B</p>
					</div>

					<!-- Opening Ceremony -->
					<div class="border-l-4 border-purple-300 pl-6">
						<h3 class="text-xl font-bold text-[#441e4b] mb-2">Opening Ceremony & Presentation of the Colors</h3>
						<p class="text-gray-700 mb-2">Led by Constance Mayers, Senior Patrol Leader, Troop 163G</p>
						<p class="text-gray-600">The formal opening of the Court of Honor, beginning with the Pledge of Allegiance and a reaffirmation of the Scout Oath and Scout Law, the guiding principles of Scouting.</p>
					</div>

					<!-- Trail to Eagle -->
					<div class="border-l-4 border-purple-300 pl-6">
						<h3 class="text-xl font-bold text-[#441e4b] mb-2">The Trail to Eagle</h3>
						<p class="text-gray-700 mb-2">Narrated by Eagle Scout Rebecca Sult</p>
						<p class="text-gray-600">A symbolic journey that visually represents the path a Scout takes through the ranks, from the first step as a Scout to the final pinnacle of Eagle.</p>
					</div>

					<!-- Eagle Pledge -->
					<div class="border-l-4 border-purple-300 pl-6">
						<h3 class="text-xl font-bold text-[#441e4b] mb-2">The Eagle Pledge and Presentation of the Award</h3>
						<p class="text-gray-600">This is the heart of the ceremony. Aaliyah will be formally presented with the Eagle Scout Award and will take the Eagle Pledge, a solemn vow to uphold the high ideals of this rank for the rest of her life.</p>
					</div>

					<!-- Guest Speeches -->
					<div class="border-l-4 border-purple-300 pl-6">
						<h3 class="text-xl font-bold text-[#441e4b] mb-2">Guest Speeches</h3>
						<p class="text-gray-600">Words of recognition and encouragement from community leaders, mentors, and friends. If you have a speech you would like to give, this would be the time.</p>
					</div>

					<!-- Mentor and Parent Pins -->
					<div class="border-l-4 border-purple-300 pl-6">
						<h3 class="text-xl font-bold text-[#441e4b] mb-2">Presentation of Mentor and Parent Pins</h3>
						<p class="text-gray-600">An Eagle Scout does not walk the trail alone. This is Aaliyah's opportunity to present special pins to her parents and a chosen mentor in recognition of their invaluable guidance, support, and encouragement.</p>
					</div>

					<!-- Closing -->
					<div class="border-l-4 border-purple-300 pl-6">
						<h3 class="text-xl font-bold text-[#441e4b] mb-2">Closing & Retiring of the Colors</h3>
						<p class="text-gray-600">The formal conclusion of our Court of Honor.</p>
					</div>

				</div>
			</div>

			<!-- Special Thanks -->
			<div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#441e4b]">
				<h2 class="text-2xl font-bold text-[#441e4b] mb-6 text-center">Special Thanks to Today's Participants</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
					<div>
						<p><strong>Scoutmasters:</strong> Steve Bo & Jeff Roberts</p>
						<p><strong>Senior Patrol Leader:</strong> Constance Mayers</p>
					</div>
					<div>
						<p><strong>Narrator:</strong> Rebecca Sult</p>
						<p><strong>Scouts:</strong> Troop 163B and 163G</p>
					</div>
				</div>
			</div>

		</div>
	</section>

	<!-- Added id to Eagle Scouts section for scroll targeting -->
	<section id="eagles-section" class="py-12 px-4 bg-gradient-to-b from-transparent to-purple-50">
		<div class="max-w-6xl mx-auto">
			<div class="bg-white rounded-lg shadow-lg overflow-hidden">
				<div class="bg-gradient-to-r from-[#441e4b] to-purple-600 px-6 py-4">
					<p class="text-lg text-purple-100 mb-2 text-center">That list is more than just a list. Each name represents a journey, and no one walks that trail to Eagle alone.</p>
					<p class="text-purple-100 mb-2 text-center">Behind every scout is a troop, a family, and a community. For every late-night project plan, there was a parent who stayed up to listen. For every tough skill to master, there was a leader who offered guidance and another scout who offered a hand. For every service project that bettered our town, there was a local organization that said, "Yes, how can we help?"</p>
					<p class="text-purple-100 mb-4 text-center">Troop 163 is a special place because of this incredible network of support. We get to watch good kids become great leaders, and we are mighty thankful to every single person who helps them along the way.</p>
					<h2 class="text-2xl font-bold text-white text-center">
						Complete Honor Roll - 1934 to Present
					</h2>
				</div>
				
				<div class="p-6">
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<!-- Column 1: First 40 names -->
						<div class="space-y-3">
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Thomas North (June 22, 1934)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Paul Murphy (December 21, 1937)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Charles Carlson (February 10, 1938)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Leo Zimmermann (February 10, 1938)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Andrew Murphy (August 18, 1939)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Donald Ross (September 2, 1942)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Harry Ward (May 12, 1943)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">John Murphy (August 24, 1944)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Daniel P. Murphy (February 12, 1948)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Robert Sasseen (November 4, 1948)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Thomas Donahue (November 28, 1954)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Kevin Joyce (May 27, 1955)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Peter Smith (May 2, 1957)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Richard Dwyer (February 9, 1959)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Paul Joyce (January 20, 1960)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">James Dwyer (March 8, 1962)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Keith (June 10, 1963)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Robert Ryan (November 4, 1963)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Dwyer (February 10, 1964)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Bruce Lowen (June 15, 1969)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Richard Gogarty (June 15, 1972)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Kevin Webb (June 10, 1973)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Thomas Grech (June 20, 1978)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Brennan (September 25, 1979)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Mark Brophy (May 5, 1981)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Thomas Brennan (April 5, 1982)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Thomas Raab (April 9, 1985)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Borut (September 10, 1985)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Laurence Altenberg (December 3, 1985)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Charles Sikorski (January 6, 1986)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">E. Timothy Kenneally (April 21, 1986)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">William Minick, Jr. (August 19, 1986)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">James Saville (August 21, 1986)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Robert Garofalo (October 2, 1987)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Paul Longo (May 25, 1988)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">David DeMilt (November 21, 1988)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Murphy (November 21, 1988)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Eugene DaVoli (March 21, 1989)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Smyth (January 7, 1993)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">David Alternburg (January 14, 1993)</p>
							</div>
						</div>
						
						<!-- Column 2: Next 40 names -->
						<div class="space-y-3">
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">John Quinterno III (April 21, 1994)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">William DaVoli (May 12, 1994)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Joseph LaSpina (March 4, 1996)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Anthony Mazzitelli (August 28, 1996)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">William Karasz (January 6, 2000)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Anthony Sansone (February 3, 2000)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Sean McDonagh (July 12, 2000)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Adam Papazoglou (April 3, 2001)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Robert Ennis (May 29, 2002)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">James Votke (February 25, 2003)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Charles Lancellotti (January 7, 2004)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Paul Ryan (April 21, 2004)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Andrew Gulino (July 26, 2004)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Daniel Votke (January 4, 2005)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Kieran Morris (January 4, 2005)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Matthew Quinterno (December 4, 2006)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Ryan (October 9, 2007)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Joseph Katz (April 29, 2008)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Bucaria (June 3, 2008)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">David Campmier (September 16, 2008)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Alexander Kane (September 16, 2008)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Mark Bevilacqua (December 2, 2008)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Jonathan Davis (October 27, 2009)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Connor Hillery (April 21, 2010)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Thomas Maloney (August 18, 2010)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Ryan Arning (January 13, 2011)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Will Ferraro (April 20, 2011)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Richard E. Willi III (May 17, 2011)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Mara (August 18, 2011)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">John Crozier (November 2, 2011)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Paul Reilly O'Brien (November 2, 2011)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Robby Yuskevich (November 30, 2011)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Thomas Koppinger III (February 16, 2012)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Edward Seganti (June 4, 2012)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Thomas Palazzolo (August 22, 2012)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Nils De Stefano (January 24, 2013)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Daniel O'Brien (January 24, 2013)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Sean Manning (May 23, 2013)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Brian Carroll (August 7, 2013)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Daniel Fisk (December 12, 2013)</p>
							</div>
						</div>
						
						<!-- Column 3: Final 41 names including Aaliyah highlighted -->
						<div class="space-y-3">
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Nic Marcotrigiano (January 28, 2014)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Christopher Bartoldus (March 25, 2014)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Christopher Steiner (March 25, 2014)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Paul Steiner (March 25, 2014)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Brendan Fisk (November 14, 2014)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Connor Brown (March 3, 2015)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Andrew Mohacsi (April 21, 2015)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Christopher O'Brien (December 16, 2015)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Jack O'Brien (December 16, 2015)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Ryan Brown (May 25, 2016)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">James Hart (July 27, 2016)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">William Hoffman (March 15, 2017)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Robert Pederson (May 16, 2017)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Dominic Norton (August 23, 2017)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">William Richter (November 9, 2017)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Ryan McGurren (January 22, 2018)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Joshua Mercado (February 8, 2018)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Timothy Bartoldus (October 22, 2018)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Kieran Brown (November 21, 2018)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Benjamin Richter (November 28, 2018)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Matthew Trani (November 28, 2018)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">William Palazzolo (February 6, 2019)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Daniel Finning (February 28, 2019)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Robert Maina (July 16, 2019)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Christopher Barker (July 25, 2019)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Lucas Rogan (March 28, 2020)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Matthew Bo (April 7, 2020)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Christopher Bo (April 7, 2020)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Patrick Burke (August 18, 2021)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Catherine Farrell (November 17, 2021)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">William Deevy (March 31, 2022)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Paul Davi (April 13, 2022)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Joe Farrell (June 23, 2022)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Megan Coogan (December 21, 2022)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Mark Bo (February 20, 2023)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Michael Bo (February 20, 2023)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Cara Bo (February 20, 2023)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Jeffrey D. Roberts (May 22, 2023)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">James G. Curry IV (June 14, 2023)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Matthew Meaney (August 8, 2023)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Riley Trani (August 23, 2023)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Shudi Chanda (November 27, 2023)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Joseph Hart (January 11, 2024)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Kenny Albrecht (February 15, 2024)</p>
							</div>
							<div class="p-3 bg-gradient-to-r from-[#441e4b] to-purple-600 rounded border-l-4 border-yellow-400 shadow-lg">
								<p class="font-bold text-white text-lg">Aaliyah Corley (January 16, 2025)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Alexis Ricoy (July 1, 2025)</p>
							</div>
							<div class="p-3 bg-purple-50 rounded border-l-4 border-purple-300">
								<p class="font-medium text-gray-800">Liam Kirwan (July 21, 2025)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Added One Hundred Scouts story -->
	<section class="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#441e4b]">
				<h2 class="text-3xl font-bold text-[#441e4b] mb-8 text-center">One Hundred Scouts</h2>
				
				<div class="prose prose-lg max-w-none text-gray-700 space-y-6">
					<p>
						One hundred scouts have walked through the doors of Troop 163. One hundred young people have tied their first knot, earned their first merit badge, and learned what it means to be trustworthy, loyal, helpful, kind, obedient, cheerful, thrifty, brave, clean, and reverent.
					</p>
					
					<p>
						Some stayed for a few months. Others stayed for years. Some earned a handful of merit badges. Others earned dozens. Some served as patrol leaders. Others preferred to follow. But every single one of them left a mark on this troop, and this troop left a mark on them.
					</p>
					
					<p>
						They learned to tie bowlines and clove hitches. They learned to start fires without matches and to leave no trace in the wilderness. They learned that a Scout's honor is not just a phrase—it's a way of life. They learned that helping others isn't something you do when it's convenient; it's something you do because it's right.
					</p>
					
					<p>
						They went on campouts where they got rained on, where they burned the dinner, where they stayed up too late telling stories around the campfire. They went on service projects where they painted fences, cleaned parks, and helped neighbors. They went on adventures that took them to places they'd never been and showed them things they'd never seen.
					</p>
					
					<p>
						Some of those one hundred scouts became doctors, teachers, engineers, and business owners. Some became parents who taught their own children the Scout Oath and Law. Some became leaders in their communities, carrying forward the lessons they learned in this troop.
					</p>
					
					<p>
						And some of those one hundred scouts became Eagle Scouts—the highest rank in Scouting, a rank that requires not just skill and knowledge, but character and leadership. They planned and led service projects that made their communities better. They demonstrated that they could be trusted with responsibility and that they understood what it means to serve others.
					</p>
					
					<p>
						Today, we celebrate one more Eagle Scout joining that distinguished group. But we also celebrate something bigger: we celebrate the fact that for nearly a century, Troop 163 has been a place where young people can grow, learn, and become the leaders our world needs.
					</p>
					
					<p>
						One hundred scouts. One hundred stories. One hundred reasons to be proud of what we've built together.
					</p>
					
					<p class="text-xl font-semibold text-[#441e4b] text-center italic">
						And the story continues...
					</p>
				</div>
			</div>
		</div>
	</section>

</main>

<!-- Footer -->
<footer class="bg-[#441e4b] text-gray-300 py-8 px-4">
	<div class="max-w-6xl mx-auto text-center">
		<p class="text-sm">
			© 2025 Aaliyah Corley. All rights reserved. | 
			<a href="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a> | 
			<a href="/return-policy" class="hover:text-white transition-colors">Return Policy</a> | 
			<a href="/terms-conditions" class="hover:text-white transition-colors">Terms & Conditions</a>
		</p>
	</div>
</footer>
