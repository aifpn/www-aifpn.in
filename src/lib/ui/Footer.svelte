<script lang="ts">
    import Link from "$ui/Link.svelte";

    export let styles: string = "";
</script>

<footer class="{`${styles} bg-slate-800 text-white`}">
    <h1 class="my-2 font-bold text-slate-400">AIFPN - <span class="text-slate-200">उन्नत किसान उन्नत भारत</span></h1>
    <span class="text-sm text-center">Copyright © All India Food Processing Nigam - 2021</span>
</footer>
