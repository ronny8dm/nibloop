<script lang="ts">
  import {
    Crown,
    Sparkles,
    Ghost,
    Puzzle,
    HandMetal,
    Cookie,
    Drama,
  } from "lucide-svelte";

  interface SponsorsProps {
    icon:
      | "crown"
      | "sparkles"
      | "ghost"
      | "puzzle"
      | "hand-metal"
      | "cookie"
      | "drama";
    name: string;
  }

  const sponsors: SponsorsProps[] = [
    { icon: "crown", name: "Discovery" },
    { icon: "sparkles", name: "Exclusivity" },
    { icon: "ghost", name: "Community" },
    { icon: "puzzle", name: "Authenticity" },
    { icon: "hand-metal", name: "Taste" },
    { icon: "cookie", name: "Support Local" },
    { icon: "drama", name: "Trust" },
  ];

  const iconMap = {
    crown: Crown,
    sparkles: Sparkles,
    ghost: Ghost,
    puzzle: Puzzle,
    "hand-metal": HandMetal,
    cookie: Cookie,
    drama: Drama,
  };
</script>

<section id="sponsors" class="max-w-[100%] mx-auto pb-24 sm:pb-32">
  <h2 class="text-lg md:text-xl text-center mb-6">Our Values</h2>

  <div class="mx-auto overflow-hidden">
    <div class="flex animate-marquee gap-12">
      {#each Array(2) as _, i}
        {#each sponsors as { icon, name }}
        <div
          class="flex items-center text-xl md:text-2xl font-medium whitespace-nowrap"
        >
          <svelte:component this={iconMap[icon]} class="mr-2" strokeWidth={3} />
          {name}
        </div>
        
      {/each}
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .animate-marquee {
    animation: marquee 5s linear infinite;
  }

  .animate-marquee:hover {
    animation-play-state: paused;
  }
</style>
