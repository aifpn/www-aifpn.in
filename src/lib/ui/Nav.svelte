<script lang="ts">
    import Link from "$ui/Link.svelte";

    export let path: string = "/";
    export let styles: string = "";
</script>

<nav class="{styles}">
    <Link href="/" styles="{`px-4 py-2 ${path === '/' ? '' : 'bg-blue-500 border-2 border-white'}`}">Home</Link>
    <Link href="/about" styles="{`px-4 py-2 ${path.startsWith('/about') ? '' : 'bg-blue-500 border-2 border-white'}`}"
        >About Us</Link
    >
    <Link
        href="/gallery"
        styles="{`px-4 py-2 ${path.startsWith('/gallery') ? '' : 'bg-blue-500 border-2 border-white'}`}">Gallery</Link
    >
</nav>
