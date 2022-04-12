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
            title: "Milk Processing",
            content:
                "Milk is a valuable nutritious food. Shelf life is short and requires careful handling. Milk is going to be very perishable. Because it is an excellent medium for the growth of microorganisms especially bacterial pathogens. Which can cause spoilage and diseases in the consumers. Milk processing allows milk to be preserved for days, weeks or even months. and helps reduce foodborne illness.",
            keywords: ["milk processing", "what is milk processing", "milk processing at aifpn"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "दूध प्रसंस्करण";
                data.content =
                    "दूध एक मूल्यवान पौष्टिक भोजन है। शेल्फ लाइफ कम होती है और इसे सावधानीपूर्वक संभालने की आवश्यकता होती है। दूध अत्यधिक खराब होने वाला है। क्योंकि यह सूक्ष्मजीवों विशेष रूप से जीवाणु रोगजनकों के विकास के लिए एक उत्कृष्ट माध्यम है। जो उपभोक्ताओं में खराब होने और बीमारियों का कारण बन सकता है। दूध प्रसंस्करण दूध को दिनों हफ्तों या महीनों के लिए संरक्षित करने की अनुमति देता है। और खाद्य जनित बीमारी को कम करने में मदद करता है।";
                data.keywords = ["दूध प्रसंस्करण", "दूध प्रसंस्करण क्या है", "एआईएफपीएन में दूध प्रसंस्करण"];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/activities/milk-processing`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [2, 4, 5, 6, 9];
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}</span>
<p>{$t.content}</p>

<!--div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each images as img_id}
        <img
            class="w-full h-60 rounded-xl"
            src="{`${cfg.base_url}/images/img-${img_id}.jpeg`}"
            alt="{`img-${img_id}`}"
        />
    {/each}
</div-->
