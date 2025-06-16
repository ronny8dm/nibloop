<script lang="ts">
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "$lib/components/ui/dialog";
    import { Button } from "$lib/components/ui/button";

    export let open = false; // Modal state
    export let onClose: () => void; // Callback to close the modal

    // Replace with your actual Typeform ID
    const typeformUrl = "https://form.typeform.com/to/KdVSvHVM";
</script>

<Dialog bind:open>
    <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
            <DialogTitle>Thank You for Joining the Waitlist!</DialogTitle>
            <DialogDescription>
                We'd love to hear your thoughts. Please complete this short survey to help us validate the idea.
            </DialogDescription>
        </DialogHeader>
        <div class="mt-4">
            <iframe
                src={typeformUrl}
                class="w-full h-[500px] rounded-md border"
                title="Survey"
            ></iframe>
        </div>
        <div class="mt-4 flex justify-end">
            <button 
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                on:click={onClose}
            >
                Close
            </button>
        </div>
    </DialogContent>
</Dialog>