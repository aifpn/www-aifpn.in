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
            page_title: "Gallery",
        };

        switch ($locale) {
            case "hi":
                strings.page_title = "दीर्घा";
        }

        return strings;
    });

    const metaData: Partial<IMeta> = {
        url: "/gallery",
        title: $i18n.page_title,
        keywords: [
            "aifpn gallery",
            "एआईएफपीएन गैलरी",
            "all india food processing nigam gallery",
            "अखिल भारतीय खाद्य प्रसंस्करण निगम गैलरी",
            "photos of all india food processing nigam",
            "अखिल भारतीय खाद्य प्रसंस्करण निगम की तस्वीरें",
        ],
    };
</script>

<Meta metaData="{metaData}" />

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each Array(6) as _, i}
        <img class="w-full h-44" src="{`/images/img-${i + 1}.jpeg`}" alt="{`img-${i + 1}`}" />
    {/each}
</div>
