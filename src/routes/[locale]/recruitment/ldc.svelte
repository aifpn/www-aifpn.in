<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
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
            title: "LDC: Lower Division Clerk",
            content: {
                desc: "The syllabus of Lower Division Clerk by All India Food Processing Nigam is shown.",
                table: {
                    name: "Paper Pattern",
                    headers: ["Subject", "No. of Questions", "Marks", "Time Limit"],
                    data: [
                        {
                            sub: "General Knowledge & Current Affairs",
                            n_q: "-",
                            marks: "-",
                            time_limit: "-",
                            topics: [
                                "Important Days",
                                "Indian History",
                                "Book and Authors",
                                "Indian National Movement",
                                "Awards and Honors",
                                "Budget and Five Years Plan",
                                "General Polity",
                                "Current Affairs - National & International",
                                "Indian Economy",
                                "Capitals of India",
                                "International & National Organization's",
                                "Science - Inventions & Discoveries",
                                "Science & Technology",
                                "Sports",
                                "Abbreviations",
                                "Countries & Capitals",
                            ],
                        },
                        {
                            sub: "Reasoning Ability",
                            n_q: "-",
                            marks: "-",
                            topics: [
                                "Verbal and Non-Verbal Reasoning",
                                "Verbal and Figure Classification",
                                "Arithmetical Number",
                                "Analogies",
                                "Judgement",
                                "Decision Making",
                                "Visual Memory",
                                "Discrimination",
                                "Similarities",
                                "Differences",
                                "Space Visualization",
                                "Problem Solving",
                                "Analysis",
                                "Observation",
                                "Relationship Concepts",
                            ],
                        },
                        {
                            sub: "Numerical Ability",
                            n_q: "-",
                            marks: "-",
                            topics: [
                                "Simplification",
                                "Decimal & Functions",
                                "L.C.M & H.C.F",
                                "Number Systems",
                                "Simple & Compound Interest",
                                "Mensuration",
                                "Time & Work",
                                "Data Interpretation",
                                "Ratio & Proportion",
                                "Percentage",
                                "Average",
                                "Profit & Loss",
                                "Discount",
                                "Time & Distance",
                                "Tables & Graphs",
                            ],
                        },
                        {
                            sub: "English",
                            n_q: "-",
                            marks: "-",
                            topics: [
                                "Verb",
                                "Tenses",
                                "Voice",
                                "Subject - Verb Agreement",
                                "Articles",
                                "Comprehension",
                                "Fill in the Blanks",
                                "Adverb",
                                "Error Correction",
                                "Sentence Rearrangement",
                                "Unseen Passages",
                                "Vocabulary",
                                "Antonyms",
                                "Synonyms",
                                "Grammar",
                                "Idioms & Phrases",
                            ],
                        },
                        {
                            sub: "Hindi",
                            n_q: "-",
                            marks: "-",
                            topics: [
                                "संधि एवं संधि विच्छेद",
                                "समास",
                                "उपसर्ग",
                                "पर्यायवाची शब्द",
                                "विलोम शब्द",
                                "युग्म शब्द",
                                "शब्द शुद्धि",
                                "वाक्य शुद्धि",
                                "वाच्य",
                                "क्रिया",
                                "अनेक शब्दों के लिये एक शब्द",
                                "मुहावरे एवं लोकोक्तियां",
                                "अशुद्ध शब्दों का शुद्धिकरण और शब्दर्त अशुद्धि का कारण",
                                "वाच्य",
                                "क्रिया",
                                "वाकयांश के लिये के लिये एक शब्द",
                                "मुहावरे एवं लोकोक्तियां",
                                "अंग्रेजी के परिभाषिक शब्दों के समानार्थक हिंदी शब्द",
                            ],
                        },
                    ],
                },
            },
            keywords: [
                "join aifpn",
                "aifpn jobs",
                "aifpn recruitment",
                "aifpn ldc job",
                "aifpn ldc exam syllabus",
                "aifpn lower division clerk job",
                "aifpn lower division clerk exam syllabus",
                "all india food processing nigam ldc job",
                "all india food processing nigam ldc exam syllabus",
                "all india food processing nigam lower division clerk job",
                "all india food processing nigam lower division clerk exam syllabus",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "एलडीसी: लोअर डिवीजन क्लर्क";
                data.content = {
                    desc: "अखिल भारतीय खाद्य प्रसंस्करण निगम द्वारा लोअर डिवीजन क्लर्क का पाठ्यक्रम दिखाया गया है।",
                    table: {
                        name: "पेपर पैटर्न",
                        headers: ["विषय", "प्रश्नों की संख्या", "अंक", "समय सीमा"],
                        data: [
                            {
                                ...data.content.table.data[0],
                                sub: "सामान्य ज्ञान और करंट अफेयर्स",
                                topics: [
                                    "महत्वपूर्ण दिन",
                                    "भारतीय इतिहास",
                                    "पुस्तक और लेखक",
                                    "भारतीय राष्ट्रीय आंदोलन",
                                    "पुरस्कार और सम्मान",
                                    "बजट और पंचवर्षीय योजना",
                                    "सामान्य राजनीति",
                                    "करंट अफेयर्स - राष्ट्रीय और अंतर्राष्ट्रीय",
                                    "भारतीय अर्थव्यवस्था",
                                    "भारत की राजधानियाँ",
                                    "अंतर्राष्ट्रीय और राष्ट्रीय संगठन",
                                    "विज्ञान - आविष्कार और खोज",
                                    "विज्ञान प्रौद्योगिकी",
                                    "खेल",
                                    "संक्षिप्तता",
                                    "देश और राजधानियाँ",
                                ],
                            },
                            {
                                ...data.content.table.data[1],
                                sub: "तर्क क्षमता",
                                topics: [
                                    "मौखिक और गैर-मौखिक तर्क",
                                    "मौखिक और चित्र वर्गीकरण",
                                    "अंकगणितीय संख्या",
                                    "सादृश्य",
                                    "निर्णय",
                                    "निर्णय लेना",
                                    "दृश्य स्मृति",
                                    "भेदभाव",
                                    "समानता",
                                    "मतभेद",
                                    "अंतरिक्ष विज़ुअलाइज़ेशन",
                                    "समस्या को सुलझाना",
                                    "विश्लेषण",
                                    "अवलोकन",
                                    "रिलेशनशिप कॉन्सेप्ट्स",
                                ],
                            },
                            {
                                ...data.content.table.data[2],
                                sub: "संख्यात्मक क्षमता",
                                topics: [
                                    "सरलीकरण",
                                    "दशमलव और कार्य",
                                    "एल.सी.एम और एच.सी.एफ",
                                    "नंबर सिस्टम",
                                    "साधारण और चक्रवृद्धि ब्याज",
                                    "मासिक धर्म",
                                    "कार्य समय",
                                    "आंकड़ा निर्वचन",
                                    "अनुपात और अनुपात",
                                    "प्रतिशत",
                                    "औसत",
                                    "लाभ हानि",
                                    "छूट",
                                    "समय और दूरी",
                                    "टेबल्स और ग्राफ़",
                                ],
                            },
                            {
                                ...data.content.table.data[3],
                                sub: "अंग्रेजी",
                                topics: [
                                    "क्रिया",
                                    "काल",
                                    "आवाज़",
                                    "कर्ता क्रिया समझौता",
                                    "लेख",
                                    "समझ",
                                    "रिक्त स्थान भरें",
                                    "क्रिया विशेषण",
                                    "गलतीयों का सुधार",
                                    "वाक्य पुनर्व्यवस्था",
                                    "अदृश्य मार्ग",
                                    "शब्दावली",
                                    "विलोम शब्द",
                                    "समानार्थी शब्द",
                                    "व्याकरण",
                                    "मुहावरे और वाक्यांश",
                                ],
                            },
                            {
                                ...data.content.table.data[4],
                                sub: "हिंदी",
                            },
                        ],
                    },
                };
                data.keywords = [
                    "एआईएफपीएन में शामिल हों",
                    "एआईएफपीएन जॉब्स",
                    "एआईएफपीएन भर्ती",
                    "एआईएफपीएन एलडीसी जॉब",
                    "एआईएफपीएन एलडीसी परीक्षा पाठ्यक्रम",
                    "एआईएफपीएन लोअर डिवीजन क्लर्क जॉब",
                    "एआईएफपीएन लोअर डिवीजन क्लर्क परीक्षा पाठ्यक्रम",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम एलडीसी नौकरी",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम एलडीसी परीक्षा पाठ्यक्रम",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम लोअर डिवीजन क्लर्क जॉब",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम लोअर डिवीजन क्लर्क परीक्षा पाठ्यक्रम",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/recruitment/ldc`,
        title: $t.title,
        keywords: $t.keywords,
    };

    let open = 0;
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}</span>
<p class="my-2">{$t.content.desc}</p>

<!-- table -->
<div name="paper-pattern" class="w-full mx-auto my-4 bg-white shadow-xl rounded-xl border border-gray-200">
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
                                <td rowspan="{$t.content.table.data.length}" class="p-4 text-center">
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
