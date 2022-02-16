<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import { cfg } from "$lib/config";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            content: string;
            keywords: string[];
        } = {
            title: "History",
            content:
                "All India Food Processing Nigam is a Public Sector Undertaking (PSU) dealing in the processing of food material. In order to ensure food safety and processing in India, it buys food grains and distributes them in the market by packaging them. It was incorporated on 8th of Sep. 2021",
            keywords: ["about aifpn", "aifpn history", "history of all india food processing nigam"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "इतिहास";
                data.content =
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम एक सार्वजनिक उपक्रम है जो खाद्य सामग्री के प्रसंस्करण में काम करता है। भारत में खाद्य सुरक्षा तथा प्रसंस्करण को सुनिश्चित करने हेतु यह खाद्यान्नों का क्रय करके उन्हें पैकेजिंग करके बाजार में वितरित करता है। इसे 8 सितंबर 2021 को शामिल किया गया था।";
                data.keywords = [
                    "एआईएफपीएन के बारे में",
                    "एआईएफपीएन का इतिहास",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम का इतिहास",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/about/history`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [5, 6];
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}</span>
<p>{$t.content}</p>

<div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each images as img_id}
        <img
            class="w-full h-60 rounded-xl"
            src="{`${cfg.base_url}/images/img-${img_id}.jpeg`}"
            alt="{`img-${img_id}`}"
        />
    {/each}
</div>
