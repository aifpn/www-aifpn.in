<script lang="ts" context="module">
    export async function load({ page }) {
        return {
            props: {
                path: page.path,
            },
        };
    }
</script>

<script lang="ts">
    // import <TW_CSS>: For Dev

    import { blur } from "svelte/transition";
    import { cfg } from "$lib/config";

    import Header from "$ui/Header.svelte";
    import Nav from "$ui/Nav.svelte";
    import Footer from "$ui/Footer.svelte";

    export let path = "/";
</script>

<svelte:head>
    {#if !cfg.is_dev}
        <link rel="stylesheet" href="/tailwind.css" />
    {/if}
</svelte:head>

{#key path}
    <Header styles="p-4 w-full h-full flex-cij sm:flex-row" />
    <Nav
        path="{path}"
        styles="text-white flex-rij rounded-xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
    />
    <section
        id="content"
        class="p-8 w-full min-h-screen flex-ci"
        in:blur="{{ duration: 300, delay: 300, amount: 5 }}"
        out:blur="{{ duration: 300 }}"
    >
        <slot />
    </section>
    <Footer styles="p-4 w-full h-full flex-cij" />
{/key}
