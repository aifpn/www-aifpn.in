<script lang="ts">
    import { derived } from "svelte/store";
    import { locale } from "$lib/stores/locale";

    import Link from "$ui/Link.svelte";

    export let styles: string = "";

    const i18n = derived(locale, ($locale) => {
        // locale: english (en)
        let strings: {
            title: string;
            sub_title: string;
        } = {
            title: "All India Food Processing Nigam",
            sub_title: "उन्नत किसान उन्नत भारत",
        };

        switch ($locale) {
            case "hi":
                strings.title = "अखिल भारतीय खाद्य प्रसंस्करण निगम";
        }

        return strings;
    });
</script>

<header class="{styles}">
    <Link href="/" styles="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 cursor-pointer">
        <img src="/logo.png" alt="aifpn-logo" />
    </Link>
    <div class="relative w-full h-32 sm:h-40 md:h-44 flex-cij">
        <span class="text-lg sm:text-2xl sm:my-1 md:text-3xl md:my-2 text-center font-extrabold">{$i18n.title}</span>
        <span class="my-2 md:text-2xl text-blue-800 font-extrabold">{$i18n.sub_title}</span>
        <div class="sm:absolute top-0 right-0 text-white">
            <Link
                href="#content"
                styles="px-4 py-2 m-1 text-center text-sm font-medium rounded-lg cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300"
                >Skip to Main Content</Link
            >
            <button
                type="button"
                class="px-4 py-2 m-1 text-center text-sm font-medium rounded-lg cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300"
                on:click|preventDefault="{() => ($locale === 'en' ? locale.set('hi') : locale.set('en'))}"
                >{$locale === "en" ? "Hindi" : "English"}</button
            >
            <span
                class="sm:hidden px-4 py-2 m-1 text-center font-medium rounded-lg cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 text-sm"
                ><i class="fas fa-bars"></i></span
            >
        </div>
    </div>
</header>
