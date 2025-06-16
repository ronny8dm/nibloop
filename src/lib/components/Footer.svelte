<script lang="ts">
  import { ChevronsDown } from "lucide-svelte";
  import { Separator } from "$lib/components/ui/separator";
</script>

<footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
  <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl ">
    <div
      class="flex flex-col md:flex-row justify-between items-center"
    >
      <div class="col-span-full xl:col-span-2">
        <a href="/" class="font-bold text-lg flex items-center">
          <img src="/nibloop-02.png" alt="Nibloop Logo" class="w- h-16 mr-2" />
        </a>
      </div>

      <div class="flex gap-6">
        <a 
          href="/legal/privacy" 
          class="text-sm text-muted-foreground hover:text-primary transition-colors"
         data-sveltekit-reload>
          Privacy Policy
        </a>
        <a 
          href="/legal/terms" 
          class="text-sm text-muted-foreground hover:text-primary transition-colors"
         data-sveltekit-reload>
          Terms of Service
        </a>
        <a 
          href="/legal/cookies" 
          class="text-sm text-muted-foreground hover:text-primary transition-colors"
         data-sveltekit-reload>
          Cookie Policy
        </a>
      </div>

      <!-- <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Contact</h3>
        <div>
          <a href="https://github.com" class="opacity-60 hover:opacity-100"
            >Github</a
          >
        </div>
        <div>
          <a href="https://twitter.com" class="opacity-60 hover:opacity-100"
            >Twitter</a
          >
        </div>
        <div>
          <a href="https://instagram.com" class="opacity-60 hover:opacity-100"
            >Instagram</a
          >
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Platforms</h3>
        <div>
          <span class="opacity-60 hover:opacity-100 cursor-default">iOS</span>
        </div>
        <div>
          <span class="opacity-60 hover:opacity-100 cursor-default"
            >Android</span
          >
        </div>
        <div>
          <span class="opacity-60 hover:opacity-100 cursor-default">Web</span>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Help</h3>
        <div>
          <a href="#contact" class="opacity-60 hover:opacity-100">Contact Us</a>
        </div>
        <div><a href="#faq" class="opacity-60 hover:opacity-100">FAQ</a></div>
        <div>
          <a href="#contact" class="opacity-60 hover:opacity-100">Feedback</a>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Socials</h3>
        <div>
          <a href="https://twitch.tv" class="opacity-60 hover:opacity-100"
            >Twitch</a
          >
        </div>
        <div>
          <a href="https://discord.com" class="opacity-60 hover:opacity-100"
            >Discord</a
          >
        </div>
        <div>
          <a href="https://dribbble.com" class="opacity-60 hover:opacity-100"
            >Dribbble</a
          >
        </div>
      </div> -->
    </div>

    <Separator class="my-6" />

    <section>
      <h3>
        &copy; Nibloop 2025 
        
      </h3>
    </section>
  </div>
</footer>

