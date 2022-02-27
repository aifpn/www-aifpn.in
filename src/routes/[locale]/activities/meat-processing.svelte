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
            title2: string;
            content2: string;
            keywords: string[];
        } = {
            title: "Meat Processing",
            content:
                "The meat processing industry includes any business, person or entity that has a hand in the processing of meat, the distribution and sale of the final product, and even the advertising of those products. The processing of meat involves slaughtering animals, cutting meat, ensuring it is safe for consumption. Packaging it, processing it into other products such as sausage or lunch meat. Distribute it in stores. and sell it to customers. Ranchers who raise animals can also be considered an integral part of the meat processing industry. Because they will supply raw materials to make other food products.",
            title2: "Butcher Meat Processing",
            content2:
                "Butchers are an important part of the meat processing industry, as they are responsible for cleaning and cutting meat from animal carcasses. Butchers often work in slaughterhouses, places where cattle and other animals are killed, skinned, and cleaned so the meat can be used for food. A butcher may also work in a grocery store or meat market, cutting meat ordered from distributors. The meat processing industry is a separate entity from the meat packing industry, whereas processing involves taking meat in its raw form and turning it into another product that is marketable, safe for consumption, and attractive to consumers. So the butcher also has a hand in this processing.",
            keywords: [
                "meat processing",
                "butcher meat processing",
                "what is meat processing",
                "meat processing at aifpn",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "मांस प्रसंस्करण";
                data.content =
                    "मांस प्रसंस्करण उद्योग में कोई भी व्यवसाय, व्यक्ति या संस्था शामिल है जिसका मांस के प्रसंस्करण, अंतिम उत्पाद के वितरण और बिक्री और यहां तक ​​कि उन उत्पादों के विज्ञापन में हाथ है। मांस के प्रसंस्करण में जानवरों को मारना, मांस काटना शामिल है, यह सुनिश्चित करना कि यह उपभोग के लिए सुरक्षित है। इसकी पैकेजिंग, इसे अन्य उत्पादों जैसे सॉसेज या लंच मीट में संसाधित करना। इसे दुकानों में वितरित करें। और इसे ग्राहकों को बेचें। पशु पालने वाले पशुपालकों को भी मांस प्रसंस्करण उद्योग का एक अभिन्न अंग माना जा सकता है। क्योंकि वे अन्य खाद्य उत्पाद बनाने के लिए कच्चे माल की आपूर्ति करेंगे।";
                data.title2 = "कसाई मांस प्रसंस्करण";
                data.content2 =
                    "कसाई मांस प्रसंस्करण उद्योग का एक महत्वपूर्ण हिस्सा हैं, क्योंकि वे जानवरों के शवों से मांस को साफ करने और काटने के लिए जिम्मेदार हैं। कसाई अक्सर बूचड़खानों में काम करते हैं, जहां मवेशी और अन्य जानवरों को मार दिया जाता है, चमड़ी और साफ किया जाता है ताकि मांस का उपयोग किया जा सके। भोजन के लिए। एक कसाई किराने की दुकान या मांस बाजार में भी काम कर सकता है, वितरकों से आदेशित मांस काट सकता है। मांस प्रसंस्करण उद्योग मांस पैकिंग उद्योग से एक अलग इकाई है, जबकि प्रसंस्करण में मांस को उसके कच्चे रूप में लेना और इसे दूसरे में बदलना शामिल है उत्पाद जो विपणन योग्य, उपभोग के लिए सुरक्षित और उपभोक्ताओं के लिए आकर्षक है। इसलिए इस प्रसंस्करण में कसाई का भी हाथ है।";

                data.keywords = [
                    "मांस प्रसंस्करण",
                    "कसाई मांस प्रसंस्करण",
                    "मांस प्रसंस्करण क्या है",
                    "एआईएफपीएन में मांस प्रसंस्करण",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/activities/meat-processing`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [108, 109];
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<p class="my-2">{$t.content}</p>

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title2}:</span>
<p class="my-2">{$t.content2}</p>

<div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each images as img_id}
        <img
            class="w-full h-60 rounded-xl"
            src="{`${cfg.base_url}/images/img-${img_id}.jpeg`}"
            alt="{`img-${img_id}`}"
        />
    {/each}
</div>
