<script lang="ts">
  import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";

  const ProService = {
    YES: 1,
    NO: 0,
  } as const;

  type ProServiceType = typeof ProService[keyof typeof ProService];

  interface ServiceProps {
    title: string;
    pro: ProServiceType;
    description: string;
  }

  const serviceList: ServiceProps[] = [
    {
      title: "Real Recommendations",
      description:
        "Craving the best birria tacos in London? Just ask. Our foodie community shares tips that actually deliver.",
      pro: 0,
    },
    {
      title: "Spot Discovery, Upgraded",
      description:
        "Think you’ve tried everything in your city? Think again. Nibloop helps you find trending, local-loved, and underrated gems.",
      pro: 0,
    },
    {
      title: "Save the Spots You Love",
      description: "Whether it’s date night, solo bites, or group feasts — create lists and come back to them anytime.",
      pro: 0,
    },
    {
      title: "Deals That Stick With You",
      description: "No more screenshots and forgotten links. Nibloop keeps your favorite offers handy and ready when hunger strikes.",
      pro: 0,
    },
  ];
</script>

<section id="services" class="container py-24 sm:py-32">
  <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    More Than Just Tasty Deals
  </h2>
  <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    From finding the right spots to saving your favorites and asking the community what’s actually good — we’ve built this for food lovers like you.
  </h3>

  <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
    {#each serviceList as { title, description, pro }}
      <Card class="bg-muted/60 dark:bg-card h-full pb-6 relative">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {#if pro === ProService.YES}
          <Badge variant="secondary" class="absolute -top-2 -right-3">
            PRO
          </Badge>
        {/if}
      </Card>
    {/each}
  </div>
</section>
