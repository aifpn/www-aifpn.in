<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            details: { t: string; c: string }[];
            title2: string;
            content2: {
                d: string;
                a: { k: string; v: string }[];
            };
            content: {
                desc: string;
                table: {
                    name: string;
                    headers: string[];
                    data: {
                        sub: string;
                        n_q: string;
                        marks: string;
                        time_limit?: string;
                        topics: string[];
                    }[];
                    footer?: {
                        total: string;
                        n_q: string;
                        marks: string;
                        time_limit: string;
                    };
                };
            };
            keywords: string[];
        } = {
            title: "PA: Personal Assistant",
            details: [
                {
                    t: "Qualifications",
                    c: "Candidates must be in the age group of 18-27 years. Candidate must have cleared 8th or Matriculation or equivalent from recognised Board. English shorthand speed 80 - 100 word per minute.",
                },
            ],
            title2: "Exam Pattern",
            content2: {
                d: "",
                a: [
                    { k: "1", v: "There will be 120 multiple choice type questions" },
                    { k: "2", v: "The duration of the exam will be 180 minutes" },
                    { k: "3", v: "4 marks will be awarded for each correct answer" },
                    { k: "4", v: "For every worng answer there will be negative marking of 1 mark" },
                    {
                        k: "5",
                        v: "Candidates qualified in the written test will be called for skill test in steno typing",
                    },
                ],
            },
            content: {
                desc: "",
                table: {
                    name: "Exam Syllabus",
                    headers: ["Subject", "No. of Questions", "Marks", "Time Limit"],
                    data: [
                        {
                            sub: "General Intelligence: This section has both Verbal and Non-verbal types of questions.",
                            n_q: "25",
                            marks: "25",
                            time_limit: "3 hrs",
                            topics: [
                                "Semantic Analogy",
                                "Symbolic Operations",
                                "Symbolic / Number Analogy",
                                "Trends / Figural Analogy",
                                "Space Orientation",
                                "Semantic Classification",
                                "Drawing Inferences",
                                "Figural Classification",
                                "Punched Hole / Pattern Folding & Unfolding",
                                "Semantic Series",
                                "Figural Pattern Folding and Completion",
                                "Number Series",
                                "Embedded Figures",
                                "Figural Series",
                                "Critical Thinking",
                                "Problem Solving",
                                "Emotional Intelligence",
                                "Word Building",
                                "Social Intelligence",
                                "Coding and De-Coding",
                                "Numerical Operations",
                                "other sub-topics, if any ...",
                            ],
                        },
                        {
                            sub: "General Awareness: Questions are designed to test the candidate's general awareness of the environment around him and its application to society. Questions are also designed to test knowledge of current events and of such matters of everyday observation and experience in their scientific aspect as may be  expected of an educated person. The test will also include questions relating to india and its neighbouring countries.",
                            n_q: "25",
                            marks: "25",
                            topics: [
                                "History",
                                "Culture",
                                "Economy Science",
                                "Geography",
                                "General Political Information",
                                "Important National/International Agencies/Institutional Bodies",
                                "Scientific Research etc;",
                            ],
                        },
                        {
                            sub: "Computer Literacy: The candidate is expected to be able to handle all regular office work on computers.",
                            n_q: "30",
                            marks: "30",
                            topics: [
                                "Knowledge of MS Office (word, excel, Powerpoint) including basic commands",
                                "Google Docs",
                                "Emails",
                                "Digital Signature",
                                "Commonly Used Social Media Platforms (WhatsApp, Facebook, Twitter, etc.)",
                            ],
                        },
                        {
                            sub: "English Language",
                            n_q: "15",
                            marks: "15",
                            topics: [
                                "Spot the Error",
                                "Fill in the Blanks",
                                "Synonyms / Homonyms",
                                "Antonyms",
                                "Spelling / Detecting misspelled words",
                                "Idioms & Phrases",
                                "One Word Substitution",
                                "Improvement of Sentences",
                                "Active / Passive Voice of Verbs",
                                "Conversion into direct / indirect narration",
                                "Shuffling of sentences in a passage",
                                "Cloze Passage",
                                "Comprehension Passage",
                                "Parts of Speech",
                            ],
                        },
                        {
                            sub: "Quantitative Aptitude",
                            n_q: "25",
                            marks: "25",
                            topics: [
                                "Number Systems",
                                "Computation of Whole Number",
                                "Decimal and Fractions",
                                "Relationship Between Numbers",
                                "Fundamental Arithmetical Operations",
                                "Percentages",
                                "Ratio & Proportion",
                                "Square Roots",
                                "Averages",
                                "Interest (Simple and Compound)",
                                "Profit and Loss",
                                "Discount",
                                "Partnership Business",
                                "Mixture and Allegation",
                                "Time and Distance",
                                "Time and Work",
                                "Mensuration (area, perimeter, volume)",
                            ],
                        },
                    ],
                    footer: {
                        total: "Total",
                        n_q: "120",
                        marks: "120",
                        time_limit: "3 hrs",
                    },
                },
            },
            keywords: [
                "join aifpn",
                "aifpn jobs",
                "aifpn recruitment",
                "aifpn pa job",
                "aifpn pa exam syllabus",
                "aifpn personal assistant job",
                "aifpn personal assistant exam syllabus",
                "all india food processing nigam pa job",
                "all india food processing nigam pa exam syllabus",
                "all india food processing nigam personal assistant job",
                "all india food processing nigam personal assistant exam syllabus",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "पीए: व्यक्तिगत सहायक";
                data.details = [
                    {
                        t: "योग्यता",
                        c: "उम्मीदवारों की आयु 18-27 वर्ष होनी चाहिए। उम्मीदवार को मान्यता प्राप्त बोर्ड से 8वीं या मैट्रिक या समकक्ष उत्तीर्ण होना चाहिए। अंग्रेजी शॉर्टहैंड गति 80 - 100 शब्द प्रति मिनट।",
                    },
                ];
                data.title2 = "परीक्षा पैटर्न";
                data.content2 = {
                    d: "",
                    a: [
                        { k: "1", v: "120 बहुविकल्पीय प्रकार के प्रश्न होंगे" },
                        { k: "2", v: "परीक्षा की अवधि 180 मिनट होगी" },
                        { k: "3", v: "प्रत्येक सही उत्तर के लिए 4 अंक दिए जाएंगे" },
                        { k: "4", v: "हर खराब उत्तर के लिए 1 अंक की नकारात्मक अंकन होगी" },
                        {
                            k: "5",
                            v: "लिखित परीक्षा में उत्तीर्ण उम्मीदवारों को स्टेनो टाइपिंग में कौशल परीक्षा के लिए बुलाया जाएगा",
                        },
                    ],
                };
                data.content = {
                    desc: "",
                    table: {
                        name: "परीक्षा पाठ्यक्रम",
                        headers: ["विषय", "प्रश्नों की संख्या", "अंक", "समय सीमा"],
                        data: [
                            {
                                ...data.content.table.data[0],
                                sub: "सामान्य बुद्धि: इस खंड में मौखिक और गैर-मौखिक दोनों प्रकार के प्रश्न हैं।",
                                time_limit: "3 घंटे",
                                topics: [
                                    "सिमेंटिक सादृश्य",
                                    "प्रतीकात्मक संचालन",
                                    "प्रतीकात्मक / संख्या सादृश्य",
                                    "रुझान / चित्र सादृश्य",
                                    "अंतरिक्ष अभिविन्यास",
                                    "शब्दार्थ वर्गीकरण",
                                    "आरेखण निष्कर्ष",
                                    "आकृति वर्गीकरण",
                                    "छिद्रित छेद / पैटर्न तह और खोलना",
                                    "सिमेंटिक सीरीज़",
                                    "फिगरल पैटर्न फोल्डिंग एंड कंप्लीशन",
                                    "संख्या श्रृंखला",
                                    "एम्बेडेड आंकड़े",
                                    "आकृति श्रृंखला",
                                    "महत्वपूर्ण सोच",
                                    "समस्या को सुलझाना",
                                    "भावनात्मक बुद्धि",
                                    "शब्द निर्माण",
                                    "सामाजिक बुद्धिमत्ता",
                                    "कोडिंग और डी-कोडिंग",
                                    "संख्यात्मक संचालन",
                                    "अन्य उप-विषय, यदि कोई हो ...",
                                ],
                            },
                            {
                                ...data.content.table.data[1],
                                sub: "सामान्य जागरूकता: प्रश्नों को उनके आस-पास के वातावरण और समाज में इसके अनुप्रयोग के बारे में उम्मीदवार की सामान्य जागरूकता का परीक्षण करने के लिए डिज़ाइन किया गया है। प्रश्नों को वर्तमान घटनाओं के ज्ञान और उनके वैज्ञानिक पहलू में रोजमर्रा के अवलोकन और अनुभव के ऐसे मामलों के ज्ञान का परीक्षण करने के लिए भी डिज़ाइन किया गया है। एक शिक्षित व्यक्ति से उम्मीद की जा सकती है। परीक्षा में भारत और उसके पड़ोसी देशों से संबंधित प्रश्न भी शामिल होंगे।",
                                topics: [
                                    "इतिहास",
                                    "संस्कृति",
                                    "अर्थव्यवस्था विज्ञान",
                                    "भूगोल",
                                    "सामान्य राजनीतिक जानकारी",
                                    "महत्वपूर्ण राष्ट्रीय/अंतर्राष्ट्रीय एजेंसियां/संस्थागत निकाय",
                                    "वैज्ञानिक अनुसंधान आदि;",
                                ],
                            },
                            {
                                ...data.content.table.data[2],
                                sub: "कंप्यूटर साक्षरता: उम्मीदवार से कंप्यूटर पर सभी नियमित कार्यालय के काम को संभालने में सक्षम होने की उम्मीद की जाती है।",
                                topics: [
                                    "मूल कमांड सहित एमएस ऑफिस (वर्ड, एक्सेल, पावरपॉइंट) का ज्ञान",
                                    "गूगल दस्तावेज",
                                    "ईमेल",
                                    "अंगुली का हस्ताक्षर",
                                    "आमतौर पर इस्तेमाल किए जाने वाले सोशल मीडिया प्लेटफॉर्म (व्हाट्सएप, फेसबुक, ट्विटर, आदि)",
                                ],
                            },
                            {
                                ...data.content.table.data[3],
                                sub: "अंग्रेजी भाषा",
                                topics: [
                                    "त्रुटि का पता लगाएं",
                                    "रिक्त स्थान भरें",
                                    "समानार्थी / समानार्थी शब्द",
                                    "विलोम शब्द",
                                    "वर्तनी / गलत वर्तनी वाले शब्दों का पता लगाना",
                                    "मुहावरे और वाक्यांश",
                                    "एक शब्द प्रतिस्थापन",
                                    "वाक्य सुधार",
                                    "क्रियाओं की सक्रिय / निष्क्रिय आवाज",
                                    "प्रत्यक्ष/अप्रत्यक्ष कथन में रूपांतरण",
                                    "एक मार्ग में वाक्यों का फेरबदल",
                                    "क्लोज़ पैसेज",
                                    "समझ मार्ग",
                                    "शब्दभेद",
                                ],
                            },
                            {
                                ...data.content.table.data[4],
                                sub: "मात्रात्मक योग्यता",
                                topics: [
                                    "नंबर सिस्टम",
                                    "पूर्ण संख्या की गणना",
                                    "दशमलव और अंश",
                                    "संख्याओं के बीच संबंध",
                                    "मौलिक अंकगणितीय संचालन",
                                    "प्रतिशत",
                                    "अनुपात और अनुपात",
                                    "वर्गमूल",
                                    "औसत",
                                    "ब्याज (सरल और चक्रवृद्धि)",
                                    "लाभ और हानि",
                                    "छूट",
                                    "साझेदारी व्यवसाय",
                                    "मिश्रण और आरोप",
                                    "समय और दूरी",
                                    "समय और काम",
                                    "मासिकता (क्षेत्र, परिधि, आयतन)",
                                ],
                            },
                        ],
                        footer: {
                            ...data.content.table.footer,
                            total: "टोटल",
                            time_limit: "3 घंटे",
                        },
                    },
                };
                data.keywords = [
                    "एआईएफपीएन में शामिल हों",
                    "एआईएफपीएन जॉब्स",
                    "एआईएफपीएन भर्ती",
                    "एआईएफपीएन पीए जॉब",
                    "एआईएफपीएन पीए परीक्षा पाठ्यक्रम",
                    "एआईएफपीएन व्यक्तिगत सहायक जॉब",
                    "एआईएफपीएन व्यक्तिगत सहायक परीक्षा पाठ्यक्रम",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम पीए जॉब",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम पीए परीक्षा पाठ्यक्रम",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम व्यक्तिगत सहायक जॉब",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम व्यक्तिगत सहायक परीक्षा पाठ्यक्रम",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/recruitment/pa`,
        title: $t.title,
        keywords: $t.keywords,
    };

    let open = 0;
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}</span>
<p class="my-2">{$t.content.desc}</p>

{#each $t.details as d, idx (idx)}
    <span class="my-2 text-2xl font-bold text-gray-600">{d.t}:</span>
    <p class="my-2 flex-cj">{@html d.c}</p>
{/each}

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title2}:</span>
<p class="my-2">{$t.content2.d}</p>
<ul class="ml-2">
    {#each $t.content2.a as item, idx (idx)}
        <li>•<span class="font-bold mx-2">{item.k}:</span>{item.v}</li>
    {/each}
</ul>

<!-- table-1 -->
<div name="written-paper-pattern" class="w-full mx-auto my-4 bg-white shadow-xl rounded-xl border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">{$t.content.table.name}</h2>
    </header>
    <div class="p-3">
        <div class="overflow-x-auto">
            <table class="table-auto w-full">
                <thead class="text-sm font-semibold uppercase text-gray-500 bg-slate-200">
                    <tr>
                        {#each $t.content.table.headers as header (header)}
                            <th class="p-4">
                                {header}
                            </th>
                        {/each}
                    </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                    {#each $t.content.table.data as tdata, idx (idx)}
                        <tr
                            on:click="{() => (open = open === idx ? -1 : idx)}"
                            class="cursor-pointer hover:bg-gray-300"
                        >
                            <td class="p-4 flex flex-row">
                                <span class="h-6 w-6 flex-rij text-teal-500">
                                    {#if open === idx}
                                        <svg
                                            class="w-3 h-3 fill-current"
                                            viewBox="0 -192 469.33333 469"
                                            xmlns="http://www.w3.org/2000/svg"
                                            ><path
                                                d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"
                                            ></path></svg
                                        >
                                    {:else}
                                        <svg
                                            class="w-3 h-3 fill-current"
                                            viewBox="0 0 469.33333 469.33333"
                                            xmlns="http://www.w3.org/2000/svg"
                                            ><path
                                                d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"
                                            ></path></svg
                                        >
                                    {/if}
                                </span>
                                <span class="ml-2">{tdata.sub}</span>
                            </td>
                            <td class="p-4 text-center">
                                {tdata.n_q}
                            </td>
                            <td class="p-4 text-center">
                                {tdata.marks}
                            </td>
                            {#if tdata.time_limit}
                                <td
                                    rowspan="{$t.content.table.data.length + (open === idx ? 1 : 0)}"
                                    class="p-4 text-center"
                                >
                                    {tdata.time_limit}
                                </td>
                            {/if}
                        </tr>
                        {#if open === idx}
                            <tr>
                                <td colspan="3" class="p-4">
                                    <ol class="m-2">
                                        {#each tdata.topics as topic, idx}
                                            <li>{idx + 1}: {topic}</li>
                                        {/each}
                                    </ol>
                                </td>
                            </tr>
                        {/if}
                    {/each}
                </tbody>
                {#if $t.content.table.footer}
                    <tfoot class="text-sm font-semibold uppercase text-gray-600 bg-slate-200">
                        <tr>
                            <th class="p-2 whitespace-nowrap">{$t.content.table.footer.total}:</th>
                            <th class="p-2 whitespace-nowrap">{$t.content.table.footer.n_q}</th>
                            <th class="p-2 whitespace-nowrap">{$t.content.table.footer.marks}</th>
                            <th class="p-2 whitespace-nowrap">{$t.content.table.footer.time_limit}</th>
                        </tr>
                    </tfoot>
                {/if}
            </table>
        </div>
    </div>
</div>
