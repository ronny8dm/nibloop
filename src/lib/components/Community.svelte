<script lang="ts">
  import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter,
    CardContent,
  } from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import DiscordIcon from "$lib/icons/DiscordIcon.svelte";
  import {Mail} from "lucide-svelte";
  import Newsletter from "./Newsletter.svelte";
</script>

<section id="community" class="py-12">
  <hr />
  <div class="container py-20 sm:py-20">
    <div class="lg:w-[60%] mx-auto">
      <Card class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0">
        <CardHeader>
          <CardTitle class="text-4xl md:text-5xl font-bold">
            <Mail class="w-20 h-20 m-auto mb-4" />
            Ready to join the 
            <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              waitlist?
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
          Don’t miss your chance to be one of the first to explore exclusive deals, discover hidden foodie gems, and shape the future of Nibloop. 🚀
        </CardContent>

        <CardFooter>
          <Newsletter/>
        </CardFooter>
      </Card>
    </div>
  </div>
  <hr />
</section>
