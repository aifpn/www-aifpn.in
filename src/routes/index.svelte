<script lang="ts">
    import { derived } from "svelte/store";
    import { locale } from "$lib/stores/locale";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const i18n = derived(locale, ($locale) => {
        // locale: english (en)
        let strings: {
            page_title: string;
        } = {
            page_title: "Home",
        };

        switch ($locale) {
            case "hi":
                strings.page_title = "होम";
        }

        return strings;
    });

    const metaData: Partial<IMeta> = {
        title: $i18n.page_title,
    };

    let image: number = 1;
</script>

<Meta metaData="{metaData}" />

<article class="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
    <figure class="h-96">
        <img
            src="{`/images/img-${image}.jpeg`}"
            alt="{`img-${image}.jpeg`}"
            class="absolute inset-0 z-10 h-full w-full object-cover opacity-70"
        />
    </figure>

    <div class="absolute p-4 w-full h-full flex-ri justify-between">
        <button
            on:click|preventDefault="{() => (image = image === 1 ? image : image - 1)}"
            class="w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
        >
            <svg
                class=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"> </path>
            </svg>
        </button>
        <button
            on:click|preventDefault="{() => (image = image === 6 ? image : image + 1)}"
            class="w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
        >
            <svg
                class=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
        </button>
    </div>
</article>

{#each ["Forms", "Announcements", "More..."] as item}
    <span class="w-full shadow-cyan-600 shadow-md p-4 my-2 rounded-lg">{item}</span>
{/each}
