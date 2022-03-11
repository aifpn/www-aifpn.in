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
            desc: string;
            content: { t: string; d: string; l?: { k: string; v: string }[] }[];
            keywords: string[];
        } = {
            title: "Ghee Processing",
            desc: "Ghee is a special kind of butter which has been used in the Indian subcontinent a food ingredient since ancient times. It is used in place of edible oil in Indian cuisine. It is made from butter and cream.",
            content: [
                {
                    t: "Introduction",
                    d: "Ghee is a fat substance which is made from the milk of cow, buffalo etc. Ghee can also be made from the milk of goat and sheep. But such milk is rarely available for this reason ghee is not made from it. Ghee is made from butter which is first made from milk. The indigenous method of making ghee is to first form curd from milk and then churn its cream to extract ghee.",
                },
                {
                    t: "Usage",
                    d: "Ghee has been used in India since Vedic times. The use of Ghee is mandatory in worship. Ghee is used in making many medicines. Ghee, especially old ghee, is also used here in the form of medicine in Ayurvedic medicine. Butter and Ghee are essential parts of the human diet. These bring nutrition and richness to the diet. And in terms of weight, maximum energy is generated.",
                },
                {
                    t: "Vitamins",
                    d: "Ghee contains vitamin-A, vitamin-C and vitamin-D. The amount of vitamin-C does not remain the same in all seasons. When animals get more green grass then the amount of vitamin increases in the ghee of rain and winter.",
                },
                {
                    t: "Khoya Production",
                    d: "Mawa or khoya is a solid substance made from milk. From which sweets and other dishes are made. It is a widely used ingredient in Indian sweets. It is made by heating milk and burning its water.",
                    l: [
                        {
                            k: "Batti Khoya",
                            v: "This khoya remains very tightly packed. In this the milk is thickened more. About one-fifth of the milk is left with the cooked khoya. After the khoya is made, the khoya is stored in a bowl shaped mould. This khoya is used for making laddus and barfi.",
                        },
                        {
                            k: "Smoothie Khoya",
                            v: "This khoya is also called the khoya of the dao. This khoya is made just like batti khoa. But it is not allowed to become thick as Batti Khoya. Khoya looks thick like pudding. This khoya is used for making rasgulla.",
                        },
                        {
                            k: "Granulated Khoya",
                            v: "This khoya is also made from milk. But it is made granular by adding a little tartaric powder or lemon juice to it while boiling the milk. Only the artisans who make khoya can make it well. This khoya kalakand is used for making laddus and barfi.",
                        },
                    ],
                },
            ],
            keywords: ["ghee processing", "what is ghee processing", "ghee processing at aifpn"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "घी प्रसंस्करण";
                data.desc =
                    "घी एक विशेष प्रकार का मक्खन है जिसका उपयोग भारतीय उपमहाद्वीप में प्राचीन काल से एक खाद्य सामग्री में किया जाता रहा है। भारतीय व्यंजनों में खाद्य तेल के स्थान पर इसका प्रयोग किया जाता है। इसे मक्खन और क्रीम से बनाया जाता है।";
                data.content = [
                    {
                        t: "परिचय",
                        d: "घी एक वसायुक्त पदार्थ है जो गाय, भैंस आदि के दूध से बनता है। घी बकरी और भेड़ के दूध से भी बनाया जा सकता है। लेकिन ऐसा दूध कम ही मिलता है इस वजह से इससे घी नहीं बनता है। घी मक्खन से बनता है जिसे सबसे पहले दूध से बनाया जाता है। घी बनाने का देसी तरीका है कि पहले दूध से दही बनाया जाए और फिर उसकी मलाई को मथकर घी निकाला जाए।",
                    },
                    {
                        t: "उपयोग",
                        d: "भारत में घी का प्रयोग वैदिक काल से होता आ रहा है। पूजा में घी का प्रयोग अनिवार्य है। घी का इस्तेमाल कई दवाइयां बनाने में किया जाता है। घी, विशेष रूप से पुराने घी का उपयोग यहां आयुर्वेदिक चिकित्सा में औषधि के रूप में भी किया जाता है। मक्खन और घी मानव आहार के आवश्यक अंग हैं। ये आहार में पोषण और समृद्धि लाते हैं। और वजन की दृष्टि से सबसे ज्यादा ऊर्जा उत्पन्न होती है।",
                    },
                    {
                        t: "विटामिन",
                        d: "घी में विटामिन-ए, विटामिन-सी और विटामिन-डी होता है। विटामिन-सी की मात्रा सभी मौसमों में एक समान नहीं रहती है। जब जानवरों को हरी घास अधिक मिलती है तो बारिश और सर्दी के घी में विटामिन की मात्रा बढ़ जाती है।",
                    },
                    {
                        t: "खोआ उत्पादन",
                        d: "मावा या खोआ दूध से बना एक ठोस पदार्थ है। जिससे मिठाइयां और अन्य व्यंजन बनाए जाते हैं। यह भारतीय मिठाइयों में व्यापक रूप से इस्तेमाल किया जाने वाला घटक है। यह दूध को गर्म करके उसके पानी को जलाकर बनाया जाता है।",
                        l: [
                            {
                                k: "बट्टी खोआ",
                                v: "यह खोआ काफी कड़ा जमा हुआ रहता है। इसमें दूध को अधिक गाढ़ा किया जाता है। बना हुआ खोआ दूध का करीब पांचवा हिस्सा रह जाता है। खोया बनने के बाद कटोरे के आकार के मोल्ड में खोया जमा दिया जाता है। इस खोया को लड्डू और बर्फी बनाने के काम में लिया जाता है।",
                            },
                            {
                                k: "चिकना खोआ",
                                v: "इस खोआ को दाव का भी खोआ कहा जाता है। यह खोआ, बट्टी खोआ की ही तरह बनता है। लेकिन इसे बट्टी खोआ जितना गाढ़ा नहीं होने दिया जाता है। खोआ देखने में हलवा जैसा गाढ़ा होता है। यह खोआ रसगुल्ले बनाने के काम में आता है।",
                            },
                            {
                                k: "दानेदार खोआ",
                                v: "यह खोआ भी दूध से बनता है। लेकिन दूध को उबालते समय इसमें थोड़ा सा टार्टरिक पाउडर या नींबू का रस मिलाकर इसे दानेदार बनाया जाता है। खोआ बनाने वाले कारीगर ही इसे अच्छे से बना सकते हैं। इस खोये कलाकंद का इस्तेमाल लड्डू और बर्फी बनाने के लिए किया जाता है।",
                            },
                        ],
                    },
                ];
                data.keywords = ["घी प्रसंस्करण", "घी प्रसंस्करण क्या है", "एआईएफपीएन में घी प्रसंस्करण"];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/activities/ghee-processing`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [401, 402];
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<p class="my-2">{$t.desc}</p>

{#each $t.content as c}
    <span class="my-2 text-xl font-bold text-gray-600">{c.t}:</span>
    <p class="my-2">{c.d}</p>

    {#if c.l}
        <ol>
            {#each c.l as li, idx (idx)}
                <li><span class="font-bold text-gray-600">{idx + 1}. {li.k}: </span>{li.v}</li>
            {/each}
        </ol>
    {/if}
{/each}

<div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each images as img_id}
        <img
            class="w-full h-60 rounded-xl"
            src="{`${cfg.base_url}/images/img-${img_id}.jpeg`}"
            alt="{`img-${img_id}`}"
        />
    {/each}
</div>
