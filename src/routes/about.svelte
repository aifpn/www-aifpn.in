<script lang="ts">
    import { derived } from "svelte/store";
    import { locale } from "$lib/stores/locale";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const i18n = derived(locale, ($locale) => {
        // locale: english (en)
        let strings: {
            page_title: string;
            history_title: string;
            history_content: string;
            objectives_title: string;
            objectives_content: string;
            objectives_points: string[];
            key_persons_title: string;
            key_persons_details: {
                name: string;
                image: string;
                designation: string;
            }[];
        } = {
            page_title: "About Us",
            history_title: "History:",
            history_content:
                "All India Food Processing Nigam is a Public Sector Undertaking (PSU) dealing in the processing of food material. In order to ensure food safety and processing in India, it buys food grains and distributes them in the market by packaging them. It was incorporated on 8th of Sep. 2021",
            objectives_title: "Objectives:",
            objectives_content:
                "A strong and progressive food processing sector, reducing wastage of perishable agricultural produce, increasing shelf life of food products, ensuring value addition to agricultural produce, diversification and commercialization of agriculture, employment generation, increasing farmers' income and plays an important role in generating surplus for export of agricultural and processed foods. In the era of economic liberalization, all sectors including private, public and cooperative sectors have to play prescribed roles and All India Food Processing Nigam is also doing its work in the field of food processing. Aiming to make food processing a developing initiative, the All India Food Processing Nigam has a vision to achieve these objectives by facilitating the process and acting as a catalyst to distribute quality food items from within India and abroad as well. There is a clear goal. With these overall objectives, All India Food Processing Nigam aims to :-",
            objectives_points: [
                "Increase in income of farmers by better utilization and value addition of agricultural produce.",
                "Minimizing wastage at all levels of the food processing chain by developing infrastructure for the storage, transportation and processing of agricultural food produce.",
                "Processing of food from both domestic and external sources Bringing modern technology to the food processing industry.",
                "To encourage R&D in food processing for product and process development and packing advancement.",
                "Policy support for the growth of this sector, assistance for creation of infrastructure, capacity expansion/upgradation and other collaborative measures.",
                "Promotion of export of processed food products.",
            ],
            key_persons_title: "Key Persons:",
            key_persons_details: [
                {
                    name: "Mr. Surendra Pal",
                    image: "/images/mr-surendra-pal.jpeg",
                    designation: "Chief Executive Officer",
                },
            ],
        };

        switch ($locale) {
            case "hi":
                strings.page_title = "संस्था के बारे में";
                strings.history_title = "इतिहास:";
                strings.history_content =
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम एक सार्वजनिक उपक्रम है जो खाद्य सामग्री के प्रसंस्करण में काम करता है। भारत में खाद्य सुरक्षा तथा प्रसंस्करण को सुनिश्चित करने हेतु यह खाद्यान्नों का क्रय करके उन्हें पैकेजिंग करके बाजार में वितरित करता है। इसे 8 सितंबर 2021 को शामिल किया गया था।";
                strings.objectives_title = "उद्देश्य:";
                strings.objectives_content =
                    "एक मजबूत और प्रगतिशील खाद्य प्रसंस्करण क्षेत्र, खराब होने वाली कृषि उपज की बर्बादी को कम करना, खाद्य उत्पादों के शेल्फ जीवन को बढ़ाना, कृषि उत्पादों का मूल्यवर्धन सुनिश्चित करना, कृषि का विविधीकरण और व्यावसायीकरण, रोजगार सृजन, किसानों की आय बढ़ाना और अधिशेष पैदा करने में महत्वपूर्ण भूमिका निभाता है। कृषि और प्रसंस्कृत खाद्य पदार्थों के निर्यात के लिए। आर्थिक उदारीकरण के युग में निजी, सार्वजनिक और सहकारी क्षेत्रों सहित सभी क्षेत्रों को निर्धारित भूमिका निभानी है और अखिल भारतीय खाद्य प्रसंस्करण निगम भी खाद्य प्रसंस्करण के क्षेत्र में अपना काम कर रहा है। खाद्य प्रसंस्करण को एक विकासशील पहल बनाने के उद्देश्य से, अखिल भारतीय खाद्य प्रसंस्करण निगम के पास भारत और विदेशों में भी गुणवत्ता वाले खाद्य पदार्थों को वितरित करने के लिए प्रक्रिया को सुविधाजनक बनाने और उत्प्रेरक के रूप में कार्य करके इन उद्देश्यों को प्राप्त करने का एक दृष्टिकोण है। एक स्पष्ट लक्ष्य है। इन समग्र उद्देश्यों के साथ, अखिल भारतीय खाद्य प्रसंस्करण निगम का लक्ष्य है :-";
                strings.objectives_points = [
                    "कृषि उपज के बेहतर उपयोग तथा मूल्यवर्धन द्वारा किसानों की आय में बढ़ोतरी।",
                    "कृषि खाद्य उपज के भंडारण, परिवहन तथा प्रसंस्करण हेतु अवसंरचना के विकास द्वार खाद्य प्रसंस्करण श्रंखला के सभी स्तरों पर बर्बादी को न्यूनतम रखना।",
                    "घरेलू एवं बाहरी दोनों स्रोतों से खाद्य से प्रसंस्करण खाद्य प्रसंस्करण उद्योग में आधुनिक प्रौद्योगिकी लाना।",
                    "उत्पाद एवं प्रक्रिया विकास तथा उन्नति पैकिंग के लिए खाद्य प्रसंस्करण में अनुसंधान एवं विकास को प्रोत्साहित करना।",
                    "इस क्षेत्र की वृद्धि से नीतिगत सहायता, अवसंरचना के सृजन हेतु सहायता,  क्षमता विस्तार/उन्नयन तथा अन्य सहयोगात्मक उपाय करना।",
                    "प्रसंस्कृत खाद्य उत्पादों के निर्यात का संवर्धन करना।",
                ];
                strings.key_persons_title = "प्रमुख व्यक्ति:";
                strings.key_persons_details = [
                    {
                        ...strings.key_persons_details[0],
                        name: "श्री सुरेंद्र पाल",
                        designation: "मुख्य कार्यकारी अधिकारी",
                    },
                ];
        }

        return strings;
    });

    const metaData: Partial<IMeta> = {
        title: $i18n.page_title,
    };
</script>

<Meta metaData="{metaData}" />

<section id="history" class="my-4 w-3/4 flex flex-col">
    <span class="my-2 text-2xl font-bold text-gray-600">{$i18n.history_title}</span>
    <p>{$i18n.history_content}</p>
</section>

<section id="objectives" class="my-4 w-3/4 flex flex-col">
    <span class="my-2 text-2xl font-bold text-gray-600">{$i18n.objectives_title}</span>
    <p class="my-2">{$i18n.objectives_content}</p>
    <ol>
        {#each $i18n.objectives_points as item, idx}
            <li>{idx + 1}. {item}</li>
        {/each}
    </ol>
</section>

<section id="key-persons" class="my-4 w-3/4 flex flex-col">
    <span class="my-4 text-2xl font-bold text-gray-600">{$i18n.key_persons_title}</span>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {#each $i18n.key_persons_details as person}
            <div class="w-full bg-blue-900 rounded-xl overflow-hidden flex-cij">
                <img
                    class="m-6 md:m-4 w-32 h-32 rounded-full border-4 border-yellow-400"
                    src="{person.image}"
                    alt="{person.name}"
                />
                <div class="p-6 md:p-4 w-full text-left text-white flex-cij">
                    <span class="text-xl font-bold">{person.name}</span>
                    <span class="text-base font-normal">{person.designation}</span>
                </div>
            </div>
        {/each}
    </div>
</section>
