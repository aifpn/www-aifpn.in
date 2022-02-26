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
            title: "Food Processing",
            content:
                "Food processing industry refers to such activities. In which value addition is done by processing primary agricultural products. For example, processing of dairy products, milk, fruits and vegetables, packaged food and beverages come under the food processing industry.",
            keywords: ["food processing", "what is food processing", "food processing at aifpn"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "खाद्य प्रसंस्करण";
                data.content =
                    "खाद्य प्रसंस्करण उद्योग ऐसी गतिविधियों को संदर्भित करता है। जिसमें प्राथमिक कृषि उत्पादों को संसाधित करके मूल्यवर्धन किया जाता है। उदाहरण के लिए, डेयरी उत्पादों का प्रसंस्करण, दूध, फल और सब्जियां, पैकेज्ड खाद्य और पेय पदार्थ खाद्य प्रसंस्करण उद्योग के अंतर्गत आते हैं।";
                data.keywords = ["खाद्य प्रसंस्करण", "खाद्य प्रसंस्करण क्या है", "एआईएफपीएन में खाद्य प्रसंस्करण"];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/activities/food-processing`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [2, 4, 5, 6, 3, 9];
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
