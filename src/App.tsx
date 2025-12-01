import HeroScene from './components/HeroScene';
import { motion } from 'framer-motion';
import layer0Image from './assets/layer0.png';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white font-['Roboto_Mono'] overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>

        {/* Navbar */}
        <header className="relative z-10 flex justify-between items-center p-6 md:p-10">
          <div className="text-2xl md:text-3xl font-bold tracking-widest font-['Orbitron'] text-white select-none drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]">
            NEXUS <span className="text-[#00FF00]">GUARD</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Story', 'Gameplay', 'Features', 'Levels'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest text-gray-400 hover:text-[#00FF00] transition-colors duration-300">
                {item}
              </a>
            ))}
          </nav>
          <button className="px-6 py-2 border border-[#00FF00]/50 rounded-none text-sm text-[#00FF00] hover:bg-[#00FF00]/10 hover:shadow-[0_0_15px_rgba(0,255,0,0.4)] transition-all backdrop-blur-sm uppercase tracking-wider">
            Connect
          </button>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter font-['Orbitron'] mb-4"
          >
            NEXUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#FF8C00]">GUARD</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 tracking-wide"
          >
            A VR Roguelite Tower Defense Experience.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="group relative px-12 py-4 bg-transparent overflow-hidden transition-all hover:scale-105 cursor-pointer"
          >
            <div className="absolute inset-0 w-full h-full bg-[#00FF00]/10 group-hover:bg-[#00FF00]/20 transition-colors"></div>
            <div className="absolute inset-0 w-full h-full border border-[#00FF00] group-hover:shadow-[0_0_20px_rgba(0,255,0,0.6)] transition-all"></div>
            <span className="relative text-lg font-bold tracking-[0.2em] text-white font-['Orbitron'] uppercase">
              Enter the Nexus
            </span>
          </motion.button>
        </main>
        
        {/* Scroll Indicator */}
        <div className="relative z-10 pb-10 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#00FF00] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Creator Statement */}
      <section className="py-16 px-6 md:px-20 bg-[#080808] border-b border-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Info */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-['Orbitron'] text-white mb-4">
              PROJECT <span className="text-[#00FF00]">ORIGINS</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#00FF00] shadow-[0_0_5px_#00FF00]"></div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  All functions within the <span className="text-white font-bold">Nexus Level</span> are independently developed by the creator.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#FF8C00] shadow-[0_0_5px_#FF8C00]"></div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Exclusive <span className="text-white font-bold">Layer 0</span> Blueprints and Materials were personally crafted for this simulation.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#00F2FE] shadow-[0_0_5px_#00F2FE]"></div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  The environment utilizes <span className="text-white font-bold">3DGS Technology</span> (3D Gaussian Splatting) to scan and reconstruct a real-world classroom with high fidelity.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex-1 w-full">
            <div className="relative w-full aspect-video bg-[#111] border border-gray-800 rounded-lg overflow-hidden flex items-center justify-center group hover:border-[#00FF00]/50 transition-colors shadow-lg">
              <img 
                src={layer0Image} 
                alt="3DGS Classroom Scan" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-xs text-[#00FF00] tracking-[0.2em] uppercase block font-bold drop-shadow-md">3DGS Classroom Scan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 px-6 md:px-20 bg-[#050505] border-b border-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-4 text-white">
            TACTICAL <span className="text-[#FF0000]">FEED</span>
          </h2>
          <p className="text-gray-500 mb-12 tracking-[0.3em] text-sm font-bold">
            // OFFICIAL GAMEPLAY DEMONSTRATION
          </p>
          
          <div className="relative w-full aspect-video bg-black border border-gray-800 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.1)] group">
            {/* YouTube Placeholder / Iframe */}
            <iframe 
              className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&rel=0" 
              title="NEXUS GUARD Gameplay Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            
            {/* Overlay for "Coming Soon" feel if needed */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 px-6 md:px-20 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FF00]/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-8 text-[#FF8C00]">THE SIMULATION BEGINS</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 border-l-4 border-[#00FF00] pl-6 text-left bg-white/5 p-6 rounded-r-lg">
            "It started at the <span className="text-[#00FF00]">UNSW Moog VR Lab</span>. You put on a headset and were transported to a mysterious underground world. A voice echoes in your mind: 
            <br/><br/>
            <span className="italic text-white">'Guard the central NEXUS, and you can return to reality.'</span>"
          </p>
        </div>
      </section>

      {/* Core Gameplay Loop */}
      <section id="gameplay" className="py-20 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-16 text-center">CORE DIRECTIVES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#111] border border-gray-800 p-8 hover:border-[#00FF00] transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24 text-[#00FF00]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-['Orbitron'] text-[#00FF00] mb-4">THE MISSION</h3>
              <p className="text-gray-400">Defend the <span className="text-[#FF8C00]">Crystal NEXUS</span> from incoming Drones. If Nexus HP hits 0, the simulation ends. Failure is not an option.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111] border border-gray-800 p-8 hover:border-[#FF4500] transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24 text-[#FF4500]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-['Orbitron'] text-[#FF4500] mb-4">THE ENEMY</h3>
              <p className="text-gray-400">Drones spawn and rush the Nexus. They explode on impact. Neutralize them before they breach the perimeter.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#111] border border-gray-800 p-8 hover:border-[#00FF00] transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24 text-[#00FF00]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05 1.18 1.7 2.64 1.7 1.76 0 2.53-1.11 2.53-2.03 0-1.01-.75-1.7-2.78-2.16-2.43-.55-3.77-1.59-3.77-3.6 0-1.83 1.41-2.95 3.07-3.29V3h2.67v1.9c1.7.35 2.96 1.48 3.03 3.34H14.9c-.14-.93-1.13-1.52-2.38-1.52-1.54 0-2.29.94-2.29 1.85 0 .95.78 1.55 2.65 2.02 2.66.67 3.91 1.76 3.91 3.72 0 1.96-1.66 3.18-3.38 3.58z"/></svg>
              </div>
              <h3 className="text-2xl font-bold font-['Orbitron'] text-[#00FF00] mb-4">THE ECONOMY</h3>
              <p className="text-gray-400">Earn credits by eliminating threats. Access the <span className="text-[#FF8C00]">Store</span> between waves to upgrade your arsenal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-6 md:px-20 bg-[#050505] relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-8">SYSTEM FEATURES</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded bg-[#00FF00]/10 flex items-center justify-center border border-[#00FF00] shrink-0">
                    <span className="text-2xl">⌚</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Immersive Wrist UI</h4>
                    <p className="text-gray-400 text-sm">Real-time display of Coins and Wave count. Features "Lift to Wake" interaction using dot-product vector math.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded bg-[#FF8C00]/10 flex items-center justify-center border border-[#FF8C00] shrink-0">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">The Store</h4>
                    <p className="text-gray-400 text-sm">Time-freezing shop menu. Purchase "Damage Up" or "Health Up" ($50 each) to survive longer.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded bg-[#00FF00]/10 flex items-center justify-center border border-[#00FF00] shrink-0">
                    <span className="text-2xl">🔫</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">VR Combat</h4>
                    <p className="text-gray-400 text-sm">Haptic feedback pistol mechanics with precise line-trace shooting.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Representation (Abstract UI) */}
            <div className="relative h-96 border border-gray-800 bg-[#0a0a0a] rounded-lg p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="border border-[#00FF00]/30"></div>
                ))}
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <div className="border border-[#00FF00] px-4 py-2 bg-[#00FF00]/10 text-[#00FF00] font-bold text-xs tracking-widest">
                  WAVE: 05
                </div>
                <div className="border border-[#FF8C00] px-4 py-2 bg-[#FF8C00]/10 text-[#FF8C00] font-bold text-xs tracking-widest">
                  HP: 85%
                </div>
              </div>
              <div className="relative z-10 self-center text-center">
                <div className="text-6xl mb-2">🎯</div>
                <div className="text-xs text-gray-500 tracking-[0.3em]">TARGET LOCKED</div>
              </div>
              <div className="relative z-10 flex justify-between items-end">

                <div className="text-xs text-right text-gray-500">
                  CREDITS <br/> <span className="text-xl text-[#FF8C00]">$450</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Analysis */}
      <section id="blueprint" className="py-20 px-6 md:px-20 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-8 text-center">TECHNICAL INSIGHT: DRONE LOGIC</h2>
          
          {/* Drone Description */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 leading-relaxed">
              The <span className="text-[#FF8C00] font-bold">Drone</span> is the sole adversary in this level. It spawns within a 1000-unit radius of the player and immediately navigates toward the NEXUS. Upon reaching proximity, it self-destructs, dealing damage proportional to the current wave number.
            </p>
            <p className="text-gray-400 text-sm">
              As illustrated below, the Drone architecture is primarily composed of <span className="text-[#00FF00]">Init Stats</span>, <span className="text-[#FF8C00]">Bind Event to Damage</span>, and <span className="text-[#00FF00]">Start Movement</span> sequences.
            </p>
          </div>
          
          {/* Blueprint Iframe */}
          <div className="w-full aspect-video border border-[#00FF00]/30 rounded-lg overflow-hidden relative bg-black/50 shadow-[0_0_30px_rgba(0,255,0,0.1)] mb-12">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#00FF00]/10 border-b border-[#00FF00]/30 flex items-center px-4 space-x-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-[#00FF00] font-mono ml-4">bp_drone.uasset</span>
            </div>
            <iframe 
              src="https://blueprintue.com/render/w4o9rom1/" 
              scrolling="no" 
              allowFullScreen 
              className="absolute inset-0 w-full h-full pt-8"
            />
          </div>

          {/* Logic Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Init Stats */}
            <div className="bg-[#111] p-6 border-l-2 border-[#00FF00] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#00FF00] mb-3 font-['Orbitron']">01. INIT STATS</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Initializes health based on the current wave number. It uses a <span className="text-white font-mono">Clamp</span> function to ensure health never drops below zero and calculates the percentage (Current/Max) to update the HUD health bar dynamically.
              </p>
            </div>

            {/* Movement Logic */}
            <div className="bg-[#111] p-6 border-l-2 border-[#FF8C00] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#FF8C00] mb-3 font-['Orbitron']">02. MOVEMENT AI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Directs the Drone to move straight toward the NEXUS. During transit, the Drone's RGB emission shifts to <span className="text-red-500">Red</span> to signal aggression. Upon reaching the target, it inflicts damage equal to the current wave number.
              </p>
            </div>

            {/* Explosion Event */}
            <div className="bg-[#111] p-6 border-l-2 border-red-500 hover:bg-[#161616] transition-colors md:col-span-2">
              <h3 className="text-xl font-bold text-red-500 mb-3 font-['Orbitron']">03. EXPLODE SEQUENCE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The destruction handler triggered when Health reaches 0 or the Drone reaches the NEXUS. It executes a sequence: plays explosion SFX/VFX, awards <span className="text-[#FF8C00]">Coins</span> to the player, and finally destroys the actor to free memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Analysis 2: Spawner */}
      <section id="blueprint-spawner" className="py-20 px-6 md:px-20 bg-[#050505] border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-8 text-center">TECHNICAL INSIGHT: WAVE SYSTEM</h2>
          
          {/* Spawner Description */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Centralized control for the simulation's difficulty curve. The <span className="text-[#00FF00] font-bold">BP_droneSpawn</span> manages enemy waves, regulating spawn rates and tracking progression towards the next simulation layer.
            </p>
          </div>
          
          {/* Blueprint Iframe */}
          <div className="w-full aspect-video border border-[#FF8C00]/30 rounded-lg overflow-hidden relative bg-black/50 shadow-[0_0_30px_rgba(255,140,0,0.1)] mb-12">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#FF8C00]/10 border-b border-[#FF8C00]/30 flex items-center px-4 space-x-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-[#FF8C00] font-mono ml-4">bp_droneSpawn.uasset</span>
            </div>
            <iframe 
              src="https://blueprintue.com/render/cexm6688/" 
              scrolling="no" 
              allowFullScreen 
              className="absolute inset-0 w-full h-full pt-8"
            />
          </div>

          {/* Logic Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wave Init */}
            <div className="bg-[#111] p-6 border-l-2 border-[#00FF00] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#00FF00] mb-3 font-['Orbitron']">01. WAVE INITIALIZATION</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The <span className="text-white font-mono">StartNewWave</span> event sets <span className="text-[#FF8C00]">Current Wave</span> and spawn counts. It initiates a 2-second timer loop to deploy Drones and synchronizes real-time wave data to the player's Wrist UI (<span className="text-white font-mono">VRPawn_NG</span>).
              </p>
            </div>

            {/* Progression */}
            <div className="bg-[#111] p-6 border-l-2 border-[#FF8C00] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#FF8C00] mb-3 font-['Orbitron']">02. PROGRESSION LOGIC</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The <span className="text-white font-mono">On Enemy Killed</span> event tracks casualties. When the wave is cleared, the system spawns the <span className="text-[#00FF00] font-bold">HMD Artifact</span>. Interacting with this object triggers the transition to the next Level Layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Analysis 3: Pistol */}
      <section id="blueprint-weapon" className="py-20 px-6 md:px-20 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-8 text-center">TECHNICAL INSIGHT: WEAPONRY</h2>
          
          {/* Weapon Description */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Modified from the standard UE5 VR template, the <span className="text-[#FF4500] font-bold">Pistol</span> logic has been overhauled for combat. It replaces physical projectiles with precise hitscan mechanics and integrates a progressive damage scaling system.
            </p>
          </div>
          
          {/* Blueprint Iframe */}
          <div className="w-full aspect-video border border-[#FF4500]/30 rounded-lg overflow-hidden relative bg-black/50 shadow-[0_0_30px_rgba(255,69,0,0.1)] mb-12">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#FF4500]/10 border-b border-[#FF4500]/30 flex items-center px-4 space-x-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-[#FF4500] font-mono ml-4">bp_pistol.uasset</span>
            </div>
            <iframe 
              src="https://blueprintue.com/render/l5qdn7oy/" 
              scrolling="no" 
              allowFullScreen 
              className="absolute inset-0 w-full h-full pt-8"
            />
          </div>

          {/* Logic Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fire Sequence */}
            <div className="bg-[#111] p-6 border-l-2 border-[#FF4500] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#FF4500] mb-3 font-['Orbitron']">01. FIRE SEQUENCE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Triggered by Enhanced Input Actions. The sequence executes: <span className="text-white">Haptic Feedback</span> (Controller Vibration) &rarr; Muzzle Flash VFX &rarr; Gunshot SFX &rarr; Recoil Animation. This ensures immediate, visceral feedback for every shot.
              </p>
            </div>

            {/* Hitscan & Damage */}
            <div className="bg-[#111] p-6 border-l-2 border-[#00FF00] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#00FF00] mb-3 font-['Orbitron']">02. HITSCAN & SCALING</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Instead of physical projectiles, a <span className="text-white font-mono">Line Trace</span> determines hits instantly. Damage is calculated with a base multiplier of 2x. Every point of "Attack Damage" purchased in the store increases output by 2 actual damage points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Analysis 4: Nexus Core */}
      <section id="blueprint-nexus" className="py-20 px-6 md:px-20 bg-[#050505] border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-8 text-center">TECHNICAL INSIGHT: THE NEXUS CORE</h2>
          
          {/* Nexus Description */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 leading-relaxed">
              The <span className="text-[#00F2FE] font-bold">NEXUS</span> is the heart of the simulation, represented by a crystalline structure. It serves as the primary defense objective and the central state manager for win/loss conditions.
            </p>
          </div>
          
          {/* Blueprint Iframe */}
          <div className="w-full aspect-video border border-[#00F2FE]/30 rounded-lg overflow-hidden relative bg-black/50 shadow-[0_0_30px_rgba(0,242,254,0.1)] mb-12">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#00F2FE]/10 border-b border-[#00F2FE]/30 flex items-center px-4 space-x-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-[#00F2FE] font-mono ml-4">bp_nexus.uasset</span>
            </div>
            <iframe 
              src="https://blueprintue.com/render/00u9f68m/" 
              scrolling="no" 
              allowFullScreen 
              className="absolute inset-0 w-full h-full pt-8"
            />
          </div>

          {/* Logic Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Integrity */}
            <div className="bg-[#111] p-6 border-l-2 border-[#00F2FE] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#00F2FE] mb-3 font-['Orbitron']">01. CORE INTEGRITY</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Monitors structural health. If HP drops to zero, the <span className="text-red-500 font-bold">GAME OVER</span> sequence initiates: a "BAD" status icon flashes, followed by a 1-second delay before resetting the player to the current level's start state.
              </p>
            </div>

            {/* Victory Condition */}
            <div className="bg-[#111] p-6 border-l-2 border-[#FF8C00] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#FF8C00] mb-3 font-['Orbitron']">02. VICTORY PROTOCOL</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                (Managed via Spawner) Surviving 4 waves triggers the spawn of the <span className="text-[#00FF00] font-bold">HMD Artifact</span>. Physically grabbing this object acts as the "Key" to unlock and transition to the next simulation layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Analysis 5: Store */}
      <section id="blueprint-store" className="py-20 px-6 md:px-20 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-8 text-center">TECHNICAL INSIGHT: THE STORE</h2>
          
          {/* Store Description */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 leading-relaxed">
              The tactical pause between waves. The <span className="text-[#D946EF] font-bold">Menu_Store</span> UI appears upon wave completion, reducing global time dilation to near-zero (0.01x) to allow strategic decision-making without pressure.
            </p>
          </div>
          
          {/* Blueprint Iframe */}
          <div className="w-full aspect-video border border-[#D946EF]/30 rounded-lg overflow-hidden relative bg-black/50 shadow-[0_0_30px_rgba(217,70,239,0.1)] mb-12">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#D946EF]/10 border-b border-[#D946EF]/30 flex items-center px-4 space-x-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-[#D946EF] font-mono ml-4">bp_menu_store.uasset</span>
            </div>
            <iframe 
              src="https://blueprintue.com/render/-frjlorr/" 
              scrolling="no" 
              allowFullScreen 
              className="absolute inset-0 w-full h-full pt-8"
            />
          </div>

          {/* Logic Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Temporal Stasis */}
            <div className="bg-[#111] p-6 border-l-2 border-[#D946EF] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#D946EF] mb-3 font-['Orbitron']">01. TEMPORAL STASIS</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Upon activation, the system sets <span className="text-white font-mono">Global Time Dilation</span> to 0.01. This creates a "Time Freeze" effect, suspending all physics and AI logic until the player manually triggers the <span className="text-white font-mono">Start New Wave</span> event.
              </p>
            </div>

            {/* Upgrade Logic */}
            <div className="bg-[#111] p-6 border-l-2 border-[#00FF00] hover:bg-[#161616] transition-colors">
              <h3 className="text-xl font-bold text-[#00FF00] mb-3 font-['Orbitron']">02. SYSTEM UPGRADES</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white font-bold">Attack Boost:</span> Increases Base Damage (Actual Dmg = Base * Weapon Coeff, e.g., Pistol x2).<br/>
                <span className="text-white font-bold">Core Reinforcement:</span> Instantly heals the Nexus and permanently increases its Maximum Health pool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Level System */}
      <section id="levels" className="py-20 px-6 md:px-20 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] mb-12">LINEAR LAYER SYSTEM</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-2 overflow-x-auto pb-8">
            {['LAYER 0', 'LAYER 1', 'LAYER 2', 'LAYER 3', 'LAYER 4', 'REAL LIFE'].map((layer, index) => (
              <div key={index} className="flex items-center">
                <div className={`
                  px-6 py-3 border rounded-sm font-bold text-sm whitespace-nowrap
                  ${index === 5 ? 'bg-white text-black border-white' : 'bg-[#111] text-gray-400 border-gray-700'}
                  ${index < 5 ? 'hover:border-[#00FF00] hover:text-[#00FF00] transition-colors' : ''}
                `}>
                  {layer}
                </div>
                {index < 5 && (
                  <div className="h-8 w-px bg-gray-700 md:h-px md:w-8 mx-2"></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4 italic">"Linear progression without backtracking."</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-900 text-center">
        <p className="text-gray-600 text-sm font-['Roboto_Mono']">
          Copyright © 2025 UNSW M11A - VR TEAM.
        </p>
      </footer>
    </div>
  );
}

export default App;
