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
            title: "Objectives",
            content:
                "A strong and progressive food processing sector, reducing wastage of perishable agricultural produce, increasing shelf life of food products, ensuring value addition to agricultural produce, diversification and commercialization of agriculture, employment generation, increasing farmers' income and plays an important role in generating surplus for export of agricultural and processed foods. In the era of economic liberalization, all sectors including private, public and cooperative sectors have to play prescribed roles and All India Food Processing Nigam is also doing its work in the field of food processing. Aiming to make food processing a developing initiative, the All India Food Processing Nigam has a vision to achieve these objectives by facilitating the process and acting as a catalyst to distribute quality food items from within India and abroad as well. There is a clear goal. With these overall objectives, All India Food Processing Nigam aims to :-",
            points: [
                "Increase in income of farmers by better utilization and value addition of agricultural produce.",
                "Minimizing wastage at all levels of the food processing chain by developing infrastructure for the storage, transportation and processing of agricultural food produce.",
                "Processing of food from both domestic and external sources Bringing modern technology to the food processing industry.",
                "To encourage R&D in food processing for product and process development and packing advancement.",
                "Policy support for the growth of this sector, assistance for creation of infrastructure, capacity expansion/upgradation and other collaborative measures.",
                "Promotion of export of processed food products.",
            ],
            keywords: ["about aifpn", "aifpn objectives", "objectives of all india food processing nigam"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "उद्देश्य";
                data.content =
                    "एक मजबूत और प्रगतिशील खाद्य प्रसंस्करण क्षेत्र, खराब होने वाली कृषि उपज की बर्बादी को कम करना, खाद्य उत्पादों के शेल्फ जीवन को बढ़ाना, कृषि उत्पादों का मूल्यवर्धन सुनिश्चित करना, कृषि का विविधीकरण और व्यावसायीकरण, रोजगार सृजन, किसानों की आय बढ़ाना और अधिशेष पैदा करने में महत्वपूर्ण भूमिका निभाता है। कृषि और प्रसंस्कृत खाद्य पदार्थों के निर्यात के लिए। आर्थिक उदारीकरण के युग में निजी, सार्वजनिक और सहकारी क्षेत्रों सहित सभी क्षेत्रों को निर्धारित भूमिका निभानी है और अखिल भारतीय खाद्य प्रसंस्करण निगम भी खाद्य प्रसंस्करण के क्षेत्र में अपना काम कर रहा है। खाद्य प्रसंस्करण को एक विकासशील पहल बनाने के उद्देश्य से, अखिल भारतीय खाद्य प्रसंस्करण निगम के पास भारत और विदेशों में भी गुणवत्ता वाले खाद्य पदार्थों को वितरित करने के लिए प्रक्रिया को सुविधाजनक बनाने और उत्प्रेरक के रूप में कार्य करके इन उद्देश्यों को प्राप्त करने का एक दृष्टिकोण है। एक स्पष्ट लक्ष्य है। इन समग्र उद्देश्यों के साथ, अखिल भारतीय खाद्य प्रसंस्करण निगम का लक्ष्य है :-";
                data.points = [
                    "कृषि उपज के बेहतर उपयोग तथा मूल्यवर्धन द्वारा किसानों की आय में बढ़ोतरी।",
                    "कृषि खाद्य उपज के भंडारण, परिवहन तथा प्रसंस्करण हेतु अवसंरचना के विकास द्वार खाद्य प्रसंस्करण श्रंखला के सभी स्तरों पर बर्बादी को न्यूनतम रखना।",
                    "घरेलू एवं बाहरी दोनों स्रोतों से खाद्य से प्रसंस्करण खाद्य प्रसंस्करण उद्योग में आधुनिक प्रौद्योगिकी लाना।",
                    "उत्पाद एवं प्रक्रिया विकास तथा उन्नति पैकिंग के लिए खाद्य प्रसंस्करण में अनुसंधान एवं विकास को प्रोत्साहित करना।",
                    "इस क्षेत्र की वृद्धि से नीतिगत सहायता, अवसंरचना के सृजन हेतु सहायता,  क्षमता विस्तार/उन्नयन तथा अन्य सहयोगात्मक उपाय करना।",
                    "प्रसंस्कृत खाद्य उत्पादों के निर्यात का संवर्धन करना।",
                ];
                data.keywords = [
                    "एआईएफपीएन के बारे में",
                    "एआईएफपीएन के उद्देश्य",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम के उद्देश्य",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `${$page.params.locale}/about/objectives`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [4, 7, 8, 11, 12, 5];
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
