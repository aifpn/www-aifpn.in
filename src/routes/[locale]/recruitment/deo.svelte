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
            title3: string;
            content3: string;
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
            title: "DEO: Data Entry Operator",
            details: [
                {
                    t: "Qualifications",
                    c: `<span>A passed 12th pass candidate who possess a speed of not less then 8000 key depressions per hour in elegible.</span>
                        <span><strong>Note :-</strong> All candidates required to bring their educational certificates at the time of skill test typing test.</span>`,
                },
                {
                    t: "Reservation",
                    c: "Candidates who seeking benefits for SC/ST /OBC / PH / EXS must posses certificates in the prescribed format in support of their claim at the time of skill test typing test.",
                },
                {
                    t: "Salary Package",
                    c: `<ul>
                            <li><strong>D:</strong> Data Entry Operator (in Grade Pay 2400)</li>
                            <li><strong>E:</strong> Data Entry Operator (in Grade Pay Less Than 2400)</li>
                        </ul>`,
                },
            ],
            title2: "Exam Pattern",
            content2: {
                d: "The examination is conducted in 2 stages:",
                a: [
                    { k: "Part-1", v: "Written Examination" },
                    { k: "Part-2", v: "Skill Test in Data Entry on Computer" },
                ],
            },
            title3: "Technical Exam",
            content3: "Computer exam requires data entry speed of 8000 key depressions per hour.",
            content: {
                desc: "Recruitment to the post of Data Entry Operator is done by combined secondary level exam conduct by AIFPN at India level. Minimum qualification required to appear in this exam is Intermediate passed. The following topics are essential subjects and important which are covered in DEO exam: General Intelligence & Reasoning, General Awareness, English Language and Numerical Aptitude",
                table: {
                    name: "Written Exam Pattern",
                    headers: ["Subject", "No. of Questions", "Marks", "Time Limit"],
                    data: [
                        {
                            sub: "General Intelligence & Reasoning: This section has both Verbal and Non-verbal Types of questions.",
                            n_q: "50",
                            marks: "50",
                            time_limit: "2 hrs",
                            topics: [
                                "Analogies",
                                "Similarities and Differences",
                                "Space Visualization",
                                "Problem Solving",
                                "Analysis",
                                "Judgement",
                                "Decision Making",
                                "Visual Memory",
                                "Discriminating Observation",
                                "Relationship Concepts",
                                "Arithmetical Reasoning",
                                "Verbal and Figure Classification",
                                "Arithmetical Number Series",
                                "Non Verbal series etc;",
                            ],
                        },
                        {
                            sub: "General Awareness: This section of exam covers latest happenings of all around us in entire world including our country India and called GK/GA part. The exam will also include questioning related to India and its neighbored countries.",
                            n_q: "35",
                            marks: "35",
                            topics: [
                                "History",
                                "Sports",
                                "Culture",
                                "Economy Science",
                                "Geography",
                                "General Political Information",
                                "Indian Constitution",
                                "Scientific Research etc;",
                            ],
                        },
                        {
                            sub: "English Language",
                            n_q: "15",
                            marks: "15",
                            topics: [
                                "In The competition examination mostly organizations ask questions only from grammar section of English as much  possible.",
                            ],
                        },
                        {
                            sub: "Numerical Aptitude: This section focuses math questions both qualitative and quantitative.",
                            n_q: "50",
                            marks: "50",
                            topics: [
                                "Numbers",
                                "Fundamental Arithmetical Operations",
                                "Percentage",
                                "Ratio and Proportion",
                                "Average",
                                "Interest",
                                "Profit and Loss",
                                "Discount",
                                "Tables and Graphs",
                                "Mensuration",
                                "Time and Distance",
                                "Time and Work etc;",
                            ],
                        },
                    ],
                    footer: {
                        total: "Total",
                        n_q: "150",
                        marks: "150",
                        time_limit: "2 hrs",
                    },
                },
            },
            keywords: [
                "join aifpn",
                "aifpn jobs",
                "aifpn recruitment",
                "aifpn deo job",
                "aifpn deo exam syllabus",
                "aifpn data entry operator job",
                "aifpn data entry operator exam syllabus",
                "all india food processing nigam deo job",
                "all india food processing nigam deo exam syllabus",
                "all india food processing nigam data entry operator job",
                "all india food processing nigam data entry operator exam syllabus",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "डीईओ: डाटा एंट्री ऑपरेटर";
                data.details = [
                    {
                        t: "योग्यता",
                        c: `<span>एक 12वीं पास उम्मीदवार जिसकी स्पीड कम से कम 8000 की-डिप्रेशन प्रति घंटा है।</span>
                            <span><strong>नोट :-</strong> कौशल परीक्षा टाइपिंग टेस्ट के समय सभी उम्मीदवारों को अपने शैक्षिक प्रमाण पत्र लाने होंगे।</span>`,
                    },
                    {
                        t: "आरक्षण",
                        c: "उम्मीदवार जो अनुसूचित जाति / अनुसूचित जनजाति / अन्य पिछड़ा वर्ग / पीएच / पूर्व के लिए लाभ चाहते हैं, उनके पास कौशल परीक्षण टाइपिंग टेस्ट के समय उनके दावे के समर्थन में निर्धारित प्रारूप में प्रमाण पत्र होना चाहिए।",
                    },
                    {
                        t: "वेतन पैकेज",
                        c: `<ul>
                                <li><strong>D:</strong> डाटा एंट्री ऑपरेटर (ग्रेड पे 2400 में)</li>
                                <li><strong>ई:</strong> डाटा एंट्री ऑपरेटर (2400 से कम ग्रेड पे में)</li>
                            </ul>`,
                    },
                ];
                data.title2 = "परीक्षा पैटर्न";
                data.content2 = {
                    d: "परीक्षा 2 चरणों में आयोजित की जाती है:",
                    a: [
                        { k: "भाग-1", v: "लिखित परीक्षा" },
                        { k: "भाग-2", v: "कंप्यूटर पर डाटा एंट्री में कौशल परीक्षा" },
                    ],
                };
                data.title3 = "तकनीकी परीक्षा";
                data.content3 =
                    "कंप्यूटर परीक्षा के लिए प्रति घंटे 8000 की डिप्रेशन की डेटा एंट्री स्पीड की आवश्यकता होती है।";
                data.content = {
                    desc: "डेटा एंट्री ऑपरेटर के पद पर भर्ती भारत स्तर पर एआईएफपीएन द्वारा संयुक्त माध्यमिक स्तर की परीक्षा आयोजित करके की जाती है। इस परीक्षा में उपस्थित होने के लिए आवश्यक न्यूनतम योग्यता इंटरमीडिएट उत्तीर्ण है। निम्नलिखित विषय आवश्यक विषय और महत्वपूर्ण हैं जो डीईओ परीक्षा में शामिल हैं: जनरल इंटेलिजेंस एंड रीजनिंग, जनरल अवेयरनेस, इंग्लिश लैंग्वेज एंड न्यूमेरिकल एप्टीट्यूड",
                    table: {
                        name: "लिखित परीक्षा पैटर्न",
                        headers: ["विषय", "प्रश्नों की संख्या", "अंक", "समय सीमा"],
                        data: [
                            {
                                ...data.content.table.data[0],
                                sub: "सामान्य बुद्धि और तर्क: इस खंड में मौखिक और गैर-मौखिक दोनों प्रकार के प्रश्न हैं।",
                                time_limit: "2 घंटे",
                                topics: [
                                    "सादृश्य",
                                    "समानताएं और भेद",
                                    "अंतरिक्ष विज़ुअलाइज़ेशन",
                                    "समस्या को सुलझाना",
                                    "विश्लेषण",
                                    "निर्णय",
                                    "निर्णय लेना",
                                    "दृश्य स्मृति",
                                    "भेदभावपूर्ण अवलोकन",
                                    "रिलेशनशिप कॉन्सेप्ट्स",
                                    "अंकगणितीय तर्क",
                                    "मौखिक और चित्र वर्गीकरण",
                                    "अंकगणितीय संख्या श्रृंखला",
                                    "गैर मौखिक श्रृंखला आदि;",
                                ],
                            },
                            {
                                ...data.content.table.data[1],
                                sub: "सामान्य जागरूकता: परीक्षा के इस खंड में हमारे देश भारत सहित पूरी दुनिया में हमारे आसपास की नवीनतम घटनाओं को शामिल किया गया है और जीके / जीए भाग कहा जाता है। परीक्षा में भारत और उसके पड़ोसी देशों से संबंधित प्रश्न भी शामिल होंगे।",
                                topics: [
                                    "इतिहास",
                                    "खेल",
                                    "संस्कृति",
                                    "अर्थव्यवस्था विज्ञान",
                                    "भूगोल",
                                    "सामान्य राजनीतिक जानकारी",
                                    "भारतीय संविधान",
                                    "वैज्ञानिक अनुसंधान आदि;",
                                ],
                            },
                            {
                                ...data.content.table.data[2],
                                sub: "अंग्रेजी भाषा",
                                topics: [
                                    "प्रतियोगिता परीक्षा में अधिकतर संस्थाएं यथासंभव अंग्रेजी के व्याकरण खंड से ही प्रश्न पूछती हैं।",
                                ],
                            },
                            {
                                ...data.content.table.data[3],
                                sub: "संख्यात्मक योग्यता: यह खंड गणित के प्रश्नों को गुणात्मक और मात्रात्मक दोनों पर केंद्रित करता है।",
                                topics: [
                                    "नंबर",
                                    "मौलिक अंकगणितीय संचालन",
                                    "प्रतिशत",
                                    "अनुपात और अनुपात",
                                    "औसत",
                                    "ब्याज",
                                    "लाभ और हानि",
                                    "छूट",
                                    "टेबल्स और ग्राफ़",
                                    "मासिक धर्म",
                                    "समय और दूरी",
                                    "समय और कार्य आदि;",
                                ],
                            },
                        ],
                        footer: {
                            ...data.content.table.footer,
                            total: "टोटल",
                            time_limit: "2 घंटे",
                        },
                    },
                };
                data.keywords = [
                    "एआईएफपीएन में शामिल हों",
                    "एआईएफपीएन जॉब्स",
                    "एआईएफपीएन भर्ती",
                    "एआईएफपीएन डीईओ जॉब",
                    "एआईएफपीएन डीईओ परीक्षा पाठ्यक्रम",
                    "एआईएफपीएन डाटा एंट्री ऑपरेटर जॉब",
                    "एआईएफपीएन डाटा एंट्री ऑपरेटर परीक्षा पाठ्यक्रम",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम डीईओ जॉब",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम डीईओ परीक्षा पाठ्यक्रम",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम डाटा एंट्री ऑपरेटर जॉब",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम डाटा एंट्री ऑपरेटर परीक्षा पाठ्यक्रम",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/recruitment/deo`,
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

<!-- table-2 -->
<div name="technical-exam" class="w-full mx-auto my-4 bg-white shadow-xl rounded-xl border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">{$t.title3}</h2>
    </header>
    <p class="p-4">{$t.content3}</p>
</div>
