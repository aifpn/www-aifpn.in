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
            points: string[];
            keywords: string[];
        } = {
            title: "Importance",
            content: "Importance of All India Food Processing Nigam :-",
            points: [
                "To eliminate harmful germs from milk meat sea food and add other nutrients to them to make them edible.",
                "To increase the survivability of foods.",
                "To ensure additional benefit to the farmers.",
                "To promote new economic activities.",
                "To create new employment opportunities.",
                "Improving the nutritional level.",
                "Ensuring food security.",
                "Promoting diversity in agriculture.",
                "Promotion of export earnings.",
            ],
            keywords: ["about aifpn", "aifpn importance", "importance of all india food processing nigam"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "महत्व";
                data.content = "अखिल भारतीय खाद्य प्रसंस्करण निगम का महत्व :-";
                data.points = [
                    "दूध मांस समुद्री खाद्य पदार्थों में से हानिकारक कीटाणुओं को समाप्त कर उनमें अन्य पोषक तत्व मिला कर खाने योग्य बनाने के लिए।",
                    "खाद्य पदार्थों की उत्तरजीविता को बढ़ाने के लिए।",
                    "किसानों का अतिरिक्त लाभ सुनिश्चित करने के लिए।",
                    "नई आर्थिक क्रियाओं को बढ़ावा देने के लिये।",
                    "रोजगार के नये अवसर सृजित करने हेतु।",
                    "पोषण स्तर में सुधार करना।",
                    "खाद्य सुरक्षा सुनिश्चित करना।",
                    "क्रषि में विविधता को बढ़ावा देना।",
                    "निर्यात आय को बढ़ावा देना।",
                ];
                data.keywords = [
                    "एआईएफपीएन के बारे में",
                    "एआईएफपीएन का महत्व",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम का महत्व",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/about/importance`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [2, 3, 7, 12, 13, 11];
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<p class="my-2">{$t.content}</p>
<ol>
    {#each $t.points as item, idx}
        <li>{idx + 1}. {item}</li>
    {/each}
</ol>

<div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each images as img_id}
        <img
            class="w-full h-60 rounded-xl"
            src="{`${cfg.base_url}/images/img-${img_id}.jpeg`}"
            alt="{`img-${img_id}`}"
        />
    {/each}
</div>
