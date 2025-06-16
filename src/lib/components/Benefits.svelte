<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import {
    Bell,
    Tag,
    Paintbrush,
    Lock,
    Star,
    MessageCircleIcon,
  } from "lucide-svelte";

  interface BenefitsProps {
    icon: 'bell' | 'tag' | 'paintbrush' | 'lock' | 'star' | 'messageCircle';
    title: string;
    description: string;
  }

  const benefitList: BenefitsProps[] = [
    {
      icon: "lock",
      title: "Unlock Early Access",
      description:
        "Get ahead of the crowd with first dibs on trending restaurants and limited-time offers.",
    },
    {
      icon: "star",
      title: "Exclusive Member Perks",
      description:
        "From 2-for-1 dishes to surprise drops, only waitlist members get early perks.",
    },
    {
      icon: "messageCircle",
      title: "Shape the Experience",
      description:
        "Help us build the ultimate foodie app by sharing feedback and testing features.",
    },
    {
      icon: "bell",
      title: "Stay in the Loop",
      description:
        "We’ll keep you updated with launch progress, invites, and insider-only updates.",
    },
  ];

  const iconMap = {
    bell: Bell,
    tag: Tag,
    paintbrush: Paintbrush,
    lock: Lock,
    star: Star,
    messageCircle: MessageCircleIcon,
  };
</script>

<section id="benefits" class="container py-24 sm:py-32">
  <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
    <div>
      <h2 class="text-lg text-primary mb-2 tracking-wider"></h2>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Be the First to Taste What’s Next
      </h2>
      <p class="text-xl text-muted-foreground mb-8">
        Join our foodie community and get early access to exclusive restaurant deals, hidden gems, and new features before anyone else.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-4 w-full">
      {#each benefitList as { icon, title, description }, index}
        <Card class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number">
          <CardHeader>
            <div class="flex justify-between">
              <svelte:component 
                this={iconMap[icon]} 
                class="size-8 mb-6 text-primary"
              />
              <span class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                0{index + 1}
              </span>
            </div>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {description}
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
