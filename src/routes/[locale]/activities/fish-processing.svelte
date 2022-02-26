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
            title3: string;
            content3: string;
            title4: string;
            content4: { d: string; p: string[] };
            keywords: string[];
        } = {
            title: "Fish Processing",
            content:
                "The term fish processing refers to the processes involving fish and fish products when fish are caught or harvested, and the final product is delivered to customers. The term refers to fish, in practice it is expanded to cover any aquatic animal harvested for commercial purposes, caught in wild fisheries or harvested from aquaculture or fish farming.",
            title2: "The Method",
            content2:
                "The fresh fish obtained is immediately washed in clean sea water to remove the smudges, sticky dirt etc. It is then taken to the fish cleaning yard. Where great care is taken to maintain the hygienic condition and quality of goods. Unlike the traditional method, all further processing is done on a clean table to avoid contamination by sand, dirt etc.",
            title3: "Fish Farming",
            content3:
                "Fish farming means raising fish to increase its size and rearing the fish produced from them. It is called fish farming.",
            title4: "Fish Species in India",
            content4: {
                d: "The following are the species of fish in India:",
                p: [
                    "Rohu",
                    "Catla",
                    "Murrel",
                    "Tuna",
                    "Grass Sharp",
                    "And the species of Hisla fishes are mainly found.",
                ],
            },
            keywords: ["fish processing", "what is fish processing", "fish processing at aifpn"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "मछली प्रसंस्करण";
                data.content =
                    "मछली प्रसंस्करण शब्द मछली और मछली उत्पादों से जुड़ी प्रक्रियाओं को संदर्भित करता है जब मछली पकड़ी जाती है या कटाई की जाती है, और ग्राहकों को अंतिम उत्पाद दिया जाता है। यह शब्द रूप से मछली को संदर्भित करता है, व्यवहार में इसे व्यवसायिक उद्देश्यों के लिये काटे गए किसी भी जलीय जीवों को कवर करने के लिये विस्तारित किया जाता है, वह जंगली मत्स्य पालन में पकड़ा गया हो या जलीय कृषि या मछली पालन से काटा गया हो।";
                data.title2 = "विधि";
                data.content2 =
                    "प्राप्त की गई ताजी मछलियों को तुरंत स्वच्छ समुद्री पानी में धोया जाता है ताकि स्माइल, चिपकी गंदगी आदि को निकाला जा सके।  इसे फिर मछली सफाई यार्ड में ले जाया जाता है। जहां स्वास्थ्यपरक स्थिति और समान की गुणवत्ता बनाये रखने के लिए बहुत अधिक सावधानी बरती जाती है। पारंपरिक विधि के विपरित, आगे की सभी प्रक्रियाएं  एक साफ टेबल के ऊपर की जाती है ताकि बालू, गंदगी आदि से संदूषित होने से बचा सके।";
                data.title3 = "मछली पालन";
                data.content3 =
                    "मछली पालन का मतलब मछली को पालकर उसका आकार बढ़ाना एवं उनसे पैदा होने वाली मछलियों को पालना है। मछली पालन कहलाता है।";
                data.title4 = "भारत में मछलियों की प्रजातियां";
                data.content4 = {
                    d: "भारत में मछलियों की निम्नलिखित प्रजातियां हैं:",
                    p: [
                        "रोहू",
                        "कटला",
                        "मुरेल",
                        "टूना",
                        "ग्रास शार्प",
                        "और हिसला मछलियों की प्रजातियाँ मुख्य रूप से पाई जाती हैं।",
                    ],
                };
                data.keywords = ["मछली प्रसंस्करण", "मछली प्रसंस्करण क्या है", "एआईएफपीएन में मछली प्रसंस्करण"];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/activities/fish-processing`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [102, 301, 302];
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<p class="my-2">{$t.content}</p>

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title2}:</span>
<p class="my-2">{$t.content2}</p>

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title3}:</span>
<p class="my-2">{$t.content3}</p>

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title4}:</span>
<p class="my-2">{$t.content4.d}</p>
<ol>
    {#each $t.content4.p as item, idx (idx)}
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
