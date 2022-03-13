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
            title: "Meat Processing",
            desc: "The meat processing industry includes any business or individual entity. It involves the processing of meat, the distribution and sale of the final product, and even the advertising of those products. Slaughter of animals in the processing of meat. Cutting meat to ensure it is safe for consumption. Packaging it, processing it into other products such as sausage or lunch meat. Distribute it in stores and sell it to customers. Ranchers that raise animals can also be considered an integral part of meat processing. Because they supply raw materials to make other food products.",
            content: [
                {
                    t: "Butcher Meat Processing",
                    d: "Butchers are an important part of the meat processing industry. Because these people are responsible for cleaning and cutting meat from animal carcasses. Butchers often work in slaughterhouses. Places where cattle and other animals are killed. They are brightened. and is cleaned. So that the meat can be used for food. A butcher may also work in a grocery store or meat market. Can cut meat ordered from distributors. The meat processing industry is a separate entity from the meat packing industry. Processing involves taking meat in its raw form and turning it into another product that is marketable. is safe for consumption. and attractive to consumers. So the butcher also has a hand in this processing.",
                },
                {
                    t: "Packaging",
                    d: "Packaging is often an important part of the meat processing industry. Because processed meats are often in this form. Which is not a natural shape. For example, sansage is sometimes sold in a tube-like package with a metal casing at the end. Hot dogs are sold in bunches of eight in many cases. And they are usually contained in a plastic bag. Lunch may be sold depending on the size and quantity of meats.",
                },
                {
                    t: "Meat Processing Machinery",
                    d: "The following machinery is required for manufacturing various value added meat products like emulsion products, reconstituted meat products, cured smoked products etc.",
                    l: [
                        {
                            k: "Slicer",
                            v: "Meat and meat products are cut in the form of thin slices for different needs. This is done by a reciprocating blade. Which can be adjusted to obtain slices of different thickness. Meat slicers There is also a built-in blade sharpener already fitted for Slicers. A range of capacities and types of slicers are available for various products.",
                        },
                        {
                            k: "Mincer",
                            v: "It is used to reduce the size of the meat into different particle sizes. With the help of grinder plates of different hole sizes (3, 5, 8 and 13 mm) the meat is cut into the required particles as per the requirement of the product. Can be reduced in size. Minced meat is used for preparing various value added meat products especially emulsion / reconstituted type products. Blades and knives are used to achieve better mincing and complete production. It is important to maintain a low temperature of the meat during proper fixing and mincing.",
                        },
                        {
                            k: "Bowl Chomper",
                            v: "Bowl Chomper is used to make the meat emulsion. Which has many sharp multiple blades with rotating bowl. The minced is done during chopping. The meat turns into a fine paste. And all the ingredients ( The binder converts seasoning mixes (spices etc.) into meat emulsion batter, which is used to make gourmet burger nuggets and sausages. Most of these actions result in lipid oxidation, which affects the quality of the emulsion. Hence the vacuum bowl. It is advisable to use a chamfer, in which all operations will be carried out in vacuum.",
                        },
                        {
                            k: "Tumbler",
                            v: "It helps in the fragmentation of the meat fibers due to the pressure caused by the repeated dropping of the meat pieces and through it the proteins from the meat pieces come out to the surface. It consists of a drum. Inside which the paddles When the cylinder rotates with the meat, the impact from the fall will help the mixture of curing ingredients penetrate the meat. The use of a vacuum tumbler will reduce lipid oxidation. The tumbler is a great tool for preparing reconstituted meat products. important requirement.",
                        },
                        {
                            k: "Mixer/Massager",
                            v: "Used in the manufacture of ground meat products. Here the minced meat is mixed with all other non-meat ingredients and seasonings inside a steel drum with rotating paddles.",
                        },
                        {
                            k: "Sausage Filler",
                            v: "It is used in the preparation of sausages to fill meat emulsions into natural or synthetic casings. Hydraulic operated and manual sausage fillers are both available. The unit consists of a cylinder filler tube (nozzle) with a lid. The upward/parallel movement of the piston helps to fill the emulsion into the casing.",
                        },
                        {
                            k: "Automatic Patty Forming & Meat Ball Forming Machine",
                            v: "Definite mass/size meat emulsion can be molded into patties or meat balls under continuous operation.",
                        },
                        {
                            k: "Blade Tenderizer",
                            v: "It is a physical method of softening tough meat. Here the pieces of steak are pressed between several sets of blades. This causes tissue disintegration.",
                        },
                        {
                            k: "Brine Injector",
                            v: "Brine is a solution. In which penetration of various curing solutions like salt, phosphate, nitrate, ascorbate, sugar takes longer time. Therefore penetration can be accelerated by injecting brine into pieces. Cured like bacon and ham And it is necessary in the preparation of smoked meat products.",
                        },
                    ],
                },
            ],
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
                data.desc =
                    "मांस प्रसंस्करण उद्योग में कोई भी व्यवसाय या व्यक्ति संस्था शामिल है। जिसमें मांस के प्रसंस्करण अंतिम उत्पाद के वितरण और बिक्री और यहां तक कि उन उत्पादों के विज्ञापन में भी हाथ होता है। मांस के प्रसंस्करण में पशुओं का वध करना। मांस काटना यह सुनिश्चित करना कि यह उपभोग के लिए सुरक्षित है। इसकी पैकेजिंग करें, इसे अन्य उत्पादों जैसे सांसेज या लंच मीट में संसाधित करें। इसे स्टोरों में वितरित करें और इसे ग्राहकों को बेच दें। जानवरों को पालने वाले रैंकरों को भी मांस प्रसंस्करण का एक अभिन्न अंग माना जा सकता है। क्योंकि वे अन्य खाद्य उत्पादों को बनाने के लिए कच्चे माल की आपूर्ति करें।";
                data.content = [
                    {
                        t: "कसाई मांस प्रसंस्करण",
                        d: "कसाई मांस प्रसंस्करण उद्योग का एक महत्वपूर्ण हिस्सा है। क्योंकि ये लोग जानवरों के शव से मांस को साफ करने और काटने के लिए जिम्मेदार है। कसाई अक्सर बूचड़खानों में काम करते है। जिन स्थानों पर मवेशी और अन्य जानवर मारे जाते है। उन्हें चमकाया जाता है। और साफ किया जाता है। ताकि मांस का उपयोग भोजन के लिए किया जा सके। एक कसाई एक किराने एक किराने की दुकान या मांस बाजार में भी काम कर सकता है। वितरकों से आर्डर किए गए मांस को काट सकता है। मांस प्रसंस्करण उद्योग मांस पैकिंग उद्योग से एक अलग इकाई है। प्रसंस्करण में मांस को अपने कच्चे रूप में लेना और इसे अन्य उत्पाद में बदलना, जो विपणन योग्य है। उपभोग के लिए सुरक्षित है। और उपभोक्ताओं के लिए आकर्षक है। इसलिए इस प्रसंस्करण में कसाई का भी हाथ होता है।",
                    },
                    {
                        t: "पैकेजिंग",
                        d: "पैकेजिंग अक्सर मांस प्रसंस्करण उद्योग का एक महत्वपूर्ण हिस्सा है। क्योंकि संसाधित मीट अक्सर ऐसे रूप में होते है। जो प्राकृतिक आकार नहीं होते है। उदाहरण के लिए सांसेज को कभी कभी धातु के आवरण के साथ अंत में सील किए गए ट्यूब जैसे पैकेज में बेचा जाता है। गर्म कुत्तों को कई मामलों में आठ गुच्छा में बेचा जाता है। और वे आमतौर पर एक प्लास्टिक थैली में निहित होते है। दोपहर के भोजन को मीट के आकार और मात्रा के आधार पर बेचा जा सकता है।",
                    },
                    {
                        t: "मांस प्रसंस्करण मशीनरी",
                        d: "विभिन्न मूल्य संवर्धित मांस उत्पादों जैसे इमल्शन उत्पाद, पुनर्गठित मांस उत्पाद, क्योर्ड स्मोक्ड उत्पाद आदि के बनाने के लिए निम्नलिखित मशीनरी आवश्यक है।",
                        l: [
                            {
                                k: "स्लाइसर",
                                v: "मांस और मांस उत्पादों को विभिन्न आवश्यकताओं के लिए पतली स्लाइस के रूप में काटा जाता है। यह एक घूमने वाले ब्लेड द्वारा किया जाता है। जिसे विभिन्न मोटाई के स्लाइस प्राप्त करने के लिए समायोजित किया जा सकता है। मांस के टुकड़े करने के लिए पहले से ही फिट किए गए निर्मित ब्लेड शार्पनर भी उपलब्ध है। विभिन्न उत्पादों के लिए क्षमताओं और प्रकारों के स्लाइसर उपलब्ध है।",
                            },
                            {
                                k: "मिन्सर",
                                v: "इसका उपयोग मांस के आकार के विभिन्न कणों के आकार में कम करने के लिए किया जाता है। विभिन्न छेद आकार (3, 5, 8 और 13 मिमी) की ग्राइंडर प्लेटों की मदद से मांस को उत्पाद की आवश्यकता के अनुसार आवश्यक कण आकार में छोटा किया जा सकता है। कीमा बनाया हुआ मांस का उपयोग विभिन्न मूल्य संवर्धित मांस उत्पादों विशेष रूप से इमल्शन / पुनर्गठित प्रकार के उत्पादों को तैयार करने के लिए किया जाता है। बेहतर मिनसिंग और संपूर्ण उत्पादन प्राप्त करने के लिए ब्लेड और चाकू की उचित फिक्सिंग और मिन्सिंग के समय मांस का कम तापमान बनाए रखना महत्वपूर्ण है।",
                            },
                            {
                                k: "बाउल चांपर",
                                v: "मांस को इमल्शन बनाने के लिए बाउल चांपर का उपयोग किया जाता है। जिसमें घूमने वाले बाउल के साथ कई तेज कई ब्लेड होते है। चापिंग के दौरान कीमा बनाया हुआ है। मांस बारीक पेस्ट में बदल जाता है। और सभी सामग्री (बाइंडर मसाला मिश्रण मसालें आदि) को मीट इमल्शन बैटर में बदल जाता है। जिसका पेटी बर्गर नगेट्स और सासेज बनाने के लिए किया जाता है। इनमें से अधिकांश कार्यों में लिपिड आक्सीकरण होता है। जो इमल्शन की गुणवत्ता को प्रभावित करता है। इसलिए वैक्यूम बाउल चांपर का उपयोग करने की सलाह दी जाती है। जिसमें सभी आपरेशन वैक्यूम में किए जायेंगे।",
                            },
                            {
                                k: "टम्बलर",
                                v: "यह मांस के टुकड़ों को बार बार गिराने के कारण होने वाले दबाव के कारण मांस के तंतुओं के विखंडन और इसके माध्यम से मांस के टुकड़ों से प्रोटीन निकलकर सतह पर निकलने में मदद करता है। इसमें एक ड्रम होता है। जिसके अन्दर पैडल होते है। जब सिलेंडर मांस के साथ घूमता है। तो गिरने से होने वाले प्रभाव से क्योरिंग सामग्री के मिश्रण की मांस में प्रवेश में मदद मिलेगी। वैक्यूम टंबलर का उपयोग लिपिड आक्सीकरण को कम करेगा। पुनर्गठित मांस उत्पादों को तैयार करने के लिए टम्बलर एक महत्वपूर्ण आवश्यकता है।",
                            },
                            {
                                k: "मिक्सर/मसाजर",
                                v: "ग्राउंड मीट उत्पादों के निर्माण में उपयोग किया जाता है। यहां कीमा बनाया हुआ मांस अन्य सभी गैर मांस सामग्री और सीजनिंग के साथ स्टील ड्रम के अन्दर मिलाया जाता है। जिसमें घूमने वाले पैडल होते है।",
                            },
                            {
                                k: "सांसेज फिलर",
                                v: "इसका उपयोग सासेज की तैयारी में मांस के इमल्शन को प्राकृतिक या सिंथेटिक केसिंग में भरने के लिए किया जाता है। हाइड्रोलिक संचालित और  मैनुअल सांसेज फिलर्स दोनों उपलब्ध है। यूनिट में सिलेंडर फिलर ट्यूब (नोजल) एक ढक्कन होता है। सिलेंडर में पिस्टन के ऊपर/ समानांतर संचलन इमल्शन को केसिंग में भरने में मदद करता है।",
                            },
                            {
                                k: "स्वचालित पैटी बनाने और मीट बाल बनाने की मशीन",
                                v: "निरंतर संचालन में निश्चित व जन/ आकार के मांस इमल्शन को पैटी या मीट बाल के रूप में ढाला जा सकता है।",
                            },
                            {
                                k: "ब्लेड टेंडरिजर",
                                v: "यह सख्त मांस को नर्म बनाने की एक भौतिक विधि है। यहां मांस के टुकड़ों स्टेक को कई ब्लेडों के सेट के बीच दबाया जाता है। जिससे ऊतक विघटन होता है।",
                            },
                            {
                                k: "ब्राइन इंजेक्टर",
                                v: "ब्राइन एक साल्यूशन है। जिसमें नमक, फास्फेट, नाइट्रेट, अस्कोरबेट, शक्कर जैसे विभिन्न क्योरिंग साल्यूशन के प्रवेश में अधिक समय लगता है। इसलिए ब्राइन को टुकड़ों में इंजेक्ट करके प्रवेश को तेज किया जा सकता है। बेकन और हैम जैसे क्योर्ड और स्मोक्ड मांस उत्पादों की तैयारी में यह आवश्यक है।",
                            },
                        ],
                    },
                ];
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

    const images = [109, 1091];
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
