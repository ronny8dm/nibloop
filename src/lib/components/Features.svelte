<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import {
    Paintbrush,
    MessageCircle,
    TabletSmartphone,
    BadgeCheck,
    Goal,
    PictureInPicture,
    MousePointerClick,
    Newspaper,
  } from "lucide-svelte";

  interface FeaturesProps {
    icon: 'tabletSmartphone' | 'badgeCheck' | 'goal' | 'pictureInPicture' | 
          'paintbrush' | 'mousePointerClick' | 'messageCircle' | 'newspaper';
    title: string;
    description: string;
  }

  const featureList: FeaturesProps[] = [
    {
      icon: "tabletSmartphone",
      title: "Designed for Food Lovers",
      description:
        "Tailored for passionate eaters, not just casual diners.",
    },
    {
      icon: "badgeCheck",
      title: "Early Access Perks",
      description:
        "Be first to access offers, features, and events before public release.",
    },
    {
      icon: "goal",
      title: "Built with Community",
      description:
        "Your voice shapes the product — early users get to vote, test, and suggest.",
    },
    {
      icon: "pictureInPicture",
      title: "Curated City Maps",
      description:
        "We highlight trending, local-only, and must-try spots — no clutter.",
    },
    {
      icon: "mousePointerClick",
      title: "Real Reviews, Not Ads",
      description:
        "Every listing is recommended by real foodies, not paid placement.",
    },
    {
      icon: "newspaper",
      title: "Always Improving",
      description:
        "We're building in public — and every waitlist user helps us improve faster.",
    },
  ];

  const iconMap = {
    tabletSmartphone: TabletSmartphone,
    badgeCheck: BadgeCheck,
    goal: Goal,
    pictureInPicture: PictureInPicture,
    paintbrush: Paintbrush,
    mousePointerClick: MousePointerClick,
    messageCircle: MessageCircle,
    newspaper: Newspaper,
  };
</script>

<section id="features" class="container py-24 sm:py-32">
  <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    Why Join Nibloop Now?
  </h2>

  <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    We’re not just another food app — we’re building something fresh. Here’s why early access matters and what makes Nibloop stand out.
  </h3>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each featureList as { icon, title, description }}
      <Card class="h-full bg-background border-0 shadow-none">
        <CardHeader class="flex justify-center items-center">
          <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
            <svelte:component 
              this={iconMap[icon]} 
              class="size-6 text-primary"
            />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent class="text-muted-foreground text-center">
          {description}
        </CardContent>
      </Card>
    {/each}
  </div>
</section>
