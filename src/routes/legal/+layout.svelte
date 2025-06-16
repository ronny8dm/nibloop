<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="flex min-h-screen flex-col">
    <Navbar />
    
    <main class="flex-1">
        <div class="container max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <!-- Breadcrumb navigation -->
            <nav class="flex mb-8 text-sm" aria-label="Breadcrumb">
                <ol class="flex items-center space-x-2">
                    <li>
                        <a href="/" class="text-muted-foreground hover:text-foreground">Home</a>
                    </li>
                    <li class="text-muted-foreground">/</li>
                    <li>
                        <a href="/legal" class="text-muted-foreground hover:text-foreground">Legal</a>
                    </li>
                </ol>
            </nav>
            
            <!-- Page content will be inserted here -->
            <slot />
            
            <!-- Legal navigation -->
            <div class="mt-10 pt-6 border-t">
                <div class="flex justify-between items-center">
                    <Button variant="outline" href="/">Back to Home</Button>
                    
                </div>
            </div>
        </div>
    </main>
    
    <Footer />
</div>