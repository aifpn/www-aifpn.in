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
            content: { t: string; d: string }[];
            keywords: string[];
        } = {
            title: "Beet Sugar Processing",
            content: [
                {
                    t: "Harvesting and Distribution",
                    d: "During September October comes the harvesting season in different regions. The storage time of beetroot after harvesting should be minimal so that the sugar content of beetroot can be kept. Requires more storage time. Split pile storage would be suitable for temporary preservation. Which is divided to help with ventilation and slow respiration. The beetroot delivery time between harvesting and processing in the factory should also be minimized in order to maximize sugar yields. Processing factories in general are usually located near the fields of sugar beet fields to reduce time.",
                },
                {
                    t: "Wash and Peel",
                    d: "After being uploaded in the factory, the beetroot will be cleaned with a root vegetable washing peeler machine. The machine's equipped brush rollers are suitable for removing surface soil sand stones and weeds while cleaning. The peeled beetroot can be washed clearly at the same time by washing with spray water.",
                },
                {
                    t: "Slicing",
                    d: "The beet is sent to a directional vegetable cutting machine to be cut into slices or strips in order to disperse the higher sugar content. Please note that the cutting thickness is adjustable by increasing or decreasing the machine spacer. With the high slicing rate, the cutting machine can process 1000kg of beet slices per hour.",
                },
                {
                    t: "Juicing",
                    d: "The strips will be mixed with hot water so that the sugar inside can be dissolved and extracted. Beet juice is extracted by the extractor through crushing, juicing, passing from a perforated screen and is charged from the beet pulp. The extraction process is fully automated. Beet pulp can be further processed into pet food. Beet juice still contains impurities like mineral salts and betaine which cannot be filtered by perforated screen. The extracted juice needs to be purified by low temperature phosphorus flotation and carbonation process. First, add phosphoric acid lime milk and flocculant to the beet juice until its pH is between 7.2-8.0. Then move the horizontal paddle to slowly remove the floating impurities and separate the clear juice from the bottom.",
                },
                {
                    t: "Evaporation",
                    d: "Pure juice still contains 80% water which must be evaporated. In the factory, people use evaporators to rapidly boil the beet juice and convert the juice into syrup by heating the evaporator to evaporate the juice and lowering the boiling point. After evaporation, the percentage of sugar in the syrup will be up to 65 percent. Filter and boil the sugar syrup to remove any remaining impurities from the sugar, then add a mixture of milled sugar powder and isopropyl alcohol in a vacuum pan until the sugar crystals form. By adjusting the temperature and alcohol content the crystal is gradually grown to the desired size. However the finished products are still mixed with little liquid. Which can be separated by centrifugal dewatering machine. Put the mixture into the dehydrating machine then the liquid will be centrifuged in the outer shell which can be used in the form of jaggery and the crystals are dropped into the inner basket.",
                },
                {
                    t: "Drying",
                    d: "The crystallized sugar is still moist after crystallization. Therefore, beet sugar needs to be transferred to rotary drying drum and dried by convection air flow. The rotary dryer employs a central pipe during the drying process that sends hot air and the drum temperature will be controlled as the requirement of the receiver. Large and wet sugar particles are micronized by centrifugation, shear collision and friction. And with it will rise hot air and dry out. Rotary drying drum equipped with counter current air fan and strong cylindrical drum and temperature controlled system is suitable for mass production in beet sugar industry, pharmaceutical industry, chemical industry etc.",
                },
                {
                    t: "Packing",
                    d: "After filtering, grading and weighing, the sugar is packed into bags or other special packages before shipping and storage. Products such as cube, icing sugar, packed beet sugar can be stored for many months in a cool, dark and dry area.",
                },
                {
                    t: "By-Product",
                    d: "Many by-products are produced when beet sugar is processed such as pulp and molasses which are nutritious animal feed. For example :- beet pulp, the dried residue after removing sugar from beet slices, can be dried and made into pellets to be used as animal feed. Beet molasses is produced after crystallization it is used in the production of animal feed as well as industrial brewer's yeast and organic chemicals.",
                },
            ],
            keywords: ["beet sugar processing", "what is beet sugar processing", "beet sugar processing at aifpn"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "चुकंदर चीनी प्रसंस्करण";
                data.content = [
                    {
                        t: "कटाई और वितरण",
                        d: "अक्टूबर के दौरान विभिन्न क्षेत्रों में कटाई का मौसम आता है। कटाई के बाद चुकंदर का भंडारण समय न्यूनतम होना चाहिए ताकि चुकंदर की चीनी सामग्री को रखा जा सके। अधिक भंडारण समय की आवश्यकता होती है। विभाजित ढेर भंडारण अस्थायी संरक्षण के लिए उपयुक्त होगा। जिसे वेंटिलेशन और धीमी श्वसन में मदद करने के लिए विभाजित किया गया है। चीनी की पैदावार को अधिकतम करने के लिए कारखाने में कटाई और प्रसंस्करण के बीच चुकंदर की डिलीवरी का समय भी कम से कम होना चाहिए। प्रसंस्करण कारखाने आमतौर पर समय कम करने के लिए चुकंदर के खेतों के पास स्थित होते हैं। ।",
                    },
                    {
                        t: "धोएं और छीलें",
                        d: "कारखाने में अपलोड होने के बाद, चुकंदर को रूट वेजिटेबल वॉशिंग पीलर मशीन से साफ किया जाएगा। मशीन से लैस ब्रश रोलर्स सफाई के दौरान सतह की मिट्टी के रेत के पत्थरों और खरपतवारों को हटाने के लिए उपयुक्त हैं। छिलके वाली चुकंदर को साफ किया जा सकता है। उसी समय स्प्रे पानी से धोकर।",
                    },
                    {
                        t: "स्लाइसिंग",
                        d: "बीट को उच्च चीनी सामग्री को फैलाने के लिए स्लाइस या स्ट्रिप्स में काटने के लिए एक दिशात्मक सब्जी काटने की मशीन पर भेजा जाता है। कृपया ध्यान दें कि मशीन स्पेसर को बढ़ाकर या घटाकर काटने की मोटाई समायोज्य है। उच्च स्लाइसिंग दर के साथ , काटने की मशीन प्रति घंटे 1000 किलो चुकंदर के स्लाइस को संसाधित कर सकती है।",
                    },
                    {
                        t: "जूसिंग",
                        d: "स्ट्रिप्स को गर्म पानी के साथ मिलाया जाएगा ताकि अंदर की चीनी को घोलकर निकाला जा सके। चुकंदर के रस को एक छिद्रित स्क्रीन से कुचलकर, रस निकालकर निकाला जाता है और चुकंदर के गूदे से चार्ज किया जाता है। निष्कर्षण प्रक्रिया पूरी तरह से स्वचालित है। चुकंदर के गूदे को आगे पालतू भोजन में संसाधित किया जा सकता है। चुकंदर के रस में अभी भी खनिज लवण और बीटािन जैसी अशुद्धियाँ होती हैं जिन्हें छिद्रित स्क्रीन द्वारा फ़िल्टर नहीं किया जा सकता है। निकाले गए रस को कम तापमान फॉस्फोरस प्लवनशीलता और कार्बोनेशन प्रक्रिया द्वारा शुद्ध करने की आवश्यकता होती है। पहला, चुकंदर के रस में फॉस्फोरिक एसिड लाइम मिल्क और फ्लोकुलेंट मिलाएं जब तक कि इसका पीएच 7.2-8.0 के बीच न हो जाए। फिर क्षैतिज पैडल को धीरे-धीरे तैरती अशुद्धियों को दूर करने के लिए ले जाएं और साफ रस को नीचे से अलग करें।",
                    },
                    {
                        t: "वाष्पीकरण",
                        d: "शुद्ध रस में अभी भी 80% पानी होता है जिसे वाष्पित किया जाना चाहिए। कारखाने में, लोग चुकंदर के रस को तेजी से उबालने के लिए बाष्पीकरणकर्ताओं का उपयोग करते हैं और रस को वाष्पित करने के लिए बाष्पीकरण को गर्म करके और क्वथनांक को कम करके रस को सिरप में परिवर्तित करते हैं। वाष्पीकरण के बाद चाशनी में चीनी का प्रतिशत 65 प्रतिशत तक होगा। चीनी से किसी भी शेष अशुद्धियों को दूर करने के लिए चीनी की चाशनी को छान लें और उबाल लें, फिर चीनी के क्रिस्टल बनने तक एक वैक्यूम पैन में पिसा हुआ चीनी पाउडर और आइसोप्रोपिल अल्कोहल का मिश्रण डालें। तापमान और अल्कोहल की मात्रा को समायोजित करके क्रिस्टल को धीरे-धीरे वांछित आकार में उगाया जाता है। हालांकि तैयार उत्पादों को अभी भी थोड़ा तरल के साथ मिलाया जाता है। जिसे सेंट्रीफ्यूगल डीवाटरिंग मशीन द्वारा अलग किया जा सकता है। मिश्रण को डीहाइड्रेटिंग मशीन में डालें तो तरल होगा बाहरी खोल में सेंट्रीफ्यूज किया जाता है जिसे गुड़ के रूप में इस्तेमाल किया जा सकता है और क्रिस्टल को आंतरिक टोकरी में गिरा दिया जाता है।",
                    },
                    {
                        t: "सुखाने",
                        d: "क्रिस्टलीकरण के बाद भी क्रिस्टलीकृत चीनी अभी भी नम है। इसलिए, चुकंदर चीनी को रोटरी सुखाने वाले ड्रम में स्थानांतरित करने और संवहन वायु प्रवाह द्वारा सूखने की आवश्यकता होती है। रोटरी ड्रायर सुखाने की प्रक्रिया के दौरान एक केंद्रीय पाइप को नियोजित करता है जो गर्म हवा और ड्रम तापमान भेजता है। रिसीवर की आवश्यकता के रूप में नियंत्रित किया जाएगा। बड़े और गीले चीनी कणों को सेंट्रीफ्यूजेशन, कतरनी टक्कर और घर्षण द्वारा माइक्रोनाइज़ किया जाता है। और इसके साथ गर्म हवा उठेगी और सूख जाएगी। काउंटर करंट एयर फैन और मजबूत बेलनाकार ड्रम से लैस रोटरी सुखाने वाला ड्रम और तापमान नियंत्रित प्रणाली चुकंदर चीनी उद्योग, दवा उद्योग, रासायनिक उद्योग आदि में बड़े पैमाने पर उत्पादन के लिए उपयुक्त है।",
                    },
                    {
                        t: "पैकिंग",
                        d: "फ़िल्टरिंग, ग्रेडिंग और वजन के बाद, शिपिंग और भंडारण से पहले चीनी को बैग या अन्य विशेष पैकेजों में पैक किया जाता है। क्यूब, आइसिंग शुगर, पैक बीट शुगर जैसे उत्पादों को ठंडे, अंधेरे और सूखे क्षेत्र में कई महीनों तक संग्रहीत किया जा सकता है। ।",
                    },
                    {
                        t: "उप-उत्पाद",
                        d: "चुकंदर चीनी को संसाधित करते समय कई उप-उत्पाद उत्पन्न होते हैं जैसे लुगदी और गुड़ जो पौष्टिक पशु चारा हैं। उदाहरण के लिए: चुकंदर का गूदा, चुकंदर के स्लाइस से चीनी निकालने के बाद सूखे अवशेषों को सुखाया जा सकता है और छर्रों में बनाया जा सकता है। पशु चारा के रूप में इस्तेमाल किया जा सकता है। चुकंदर के गुड़ का उत्पादन क्रिस्टलीकरण के बाद किया जाता है, इसका उपयोग पशु चारा के साथ-साथ औद्योगिक शराब बनाने वाले के खमीर और कार्बनिक रसायनों के उत्पादन में किया जाता है।",
                    },
                ];
                data.keywords = [
                    "चुकंदर चीनी प्रसंस्करण",
                    "चुकंदर चीनी प्रसंस्करण क्या है",
                    "एआईएफपीएन में चुकंदर चीनी प्रसंस्करण",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/activities/beet-sugar-processing`,
        title: $t.title,
        keywords: $t.keywords,
    };

    const images = [107, 1071];
</script>

<Meta metaData="{metaData}" />

<span class="my-4 text-2xl font-bold text-gray-600">{$t.title}:</span>
{#each $t.content as c}
    <span class="my-2 text-xl font-bold text-gray-600">{c.t}:</span>
    <p class="my-2">{c.d}</p>
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
