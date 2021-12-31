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
            objectives_content: string[];
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
                "All India Food Processing Nigam is a PSU dealing in the processing of food material. It was incorporated on 8th of Sep. 2021",
            objectives_title: "Objectives:",
            objectives_content: [
                "We aim to provide best in class processing facilities.",
                "Provide Faster Packaging and Delivery.",
                "Our goal is to help in the growth of farmers of our country.",
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
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम एक सार्वजनिक उपक्रम है जो खाद्य सामग्री के प्रसंस्करण में काम करता है। इसे 8 सितंबर 2021 को शामिल किया गया था।";
                strings.objectives_title = "उद्देश्य:";
                strings.objectives_content = [
                    "हमारा लक्ष्य श्रेणी प्रसंस्करण सुविधाओं में सर्वश्रेष्ठ प्रदान करना है।",
                    "तेजी से पैकेजिंग और वितरण प्रदान करें।",
                    "हमारा लक्ष्य हमारे देश के किसानों के विकास में मदद करना है।",
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
    <ol>
        {#each $i18n.objectives_content as item, idx}
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
