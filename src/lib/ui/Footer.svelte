<script lang="ts">
    import Link from "$ui/Link.svelte";

    export let styles: string = "";
</script>

<footer class="{`${styles} bg-slate-800 text-white`}">
    <span class="my-2 font-bold text-slate-400">
        AIFPN - <span class="text-slate-200">उन्नत किसान उन्नत भारत</span>
    </span>
    <span class="text-sm text-center">Copyright © All India Food Processing Nigam - 2021</span>
    <span class="my-2 text-sm text-center">
        Powered by: <Link
            href="https://about.intacht.com"
            styles="font-bold text-slate-300 hover:text-cyan-500"
            external="true">InTacht Industries Pvt. Ltd.</Link
        >
    </span>
</footer>
