<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import { ArrowRight } from "lucide-svelte";
    import { mode } from "mode-watcher";
    import { onMount } from 'svelte';
    import Newsletter from "$lib/components/Newsletter.svelte";

    let imageSrc = 'Natural-Titanium.png';
    
    onMount(() => {
        mode.subscribe(currentMode => {
            imageSrc = currentMode === 'dark' ? 'Natural-Titanium.png' : 'Natural-Titanium.png';
        });
    });

</script>

<section class="container">
    <div
        class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
        <div class="text-center space-y-8">
            <Badge variant="outline" class="text-sm py-2">
                <span class="mr-2 text-primary">
                    <Badge>New</Badge>
                </span>
                <span>Launching Soon</span>
            </Badge>

            <div
                class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold font-new_spirit"
            >
                <h1>
                    Discover new dining experiences
                    <span
                        class="text-transparent bg-gradient-to-l from-[#D247BF] to-primary bg-clip-text"
                    >
                        for less
                    </span>
                    
                </h1>
            </div>

            <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground font-roc-grotesk">
                Get access to exclusive dining deals, curated spots, and real recommendations from people who love great food as much as you do.
            </p>

            <div class="space-y-4 md:space-y-0 md:space-x-4">
                <!-- <Button class="w-5/6 md:w-1/4 font-bold group/arrow">
                    Join The Waitlist
                    <ArrowRight
                        class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
                    />
                    
                </Button> -->

                <Newsletter />

                <!-- <Button variant="secondary" class="w-5/6 md:w-1/4 font-bold">
                    <a
                        href="https://github.com/Zxce3/shadcn-sveltekit-landing-page.git"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github repository
                    </a>
                </Button> -->
            </div>
        </div>

        <div class="relative group mt-14">
            <div
                class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
            ></div>

            <img
                class="w-full md:w-full mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
                src={imageSrc}
                alt="dashboard using shadcn-svelte"
            />

            <div
                class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
            ></div>
        </div>
    </div>
</section>

<style>
    .img-shadow-animation {
        animation-name: img-shadow-animation;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-direction: alternate;
    }

    .img-border-animation {
        animation-name: img-border-animation;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-direction: alternate;
    }

    @keyframes img-shadow-animation {
        from {
            opacity: 0.5;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @keyframes img-border-animation {
        from {
            @apply border-t-primary/10;
        }

        to {
            @apply border-t-primary/60;
        }
    }
</style>
