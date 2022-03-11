<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import { cfg } from "$lib/config";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";
    import Link from "$ui/Link.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            content: { d: string; a: { img: number; name: string; link: string }[] };
            keywords: string[];
        } = {
            title: "Activities",
            content: {
                d: "The industries and practices of All India Food Processing Nigam include the following:",
                a: [
                    { img: 101, name: "canning", link: `/${$page.params.locale}/activities/food-processing` },
                    { img: 102, name: "fish processing", link: `/${$page.params.locale}/activities/fish-processing` },
                    {
                        img: 103,
                        name: "vegetable packing plant",
                        link: `/${$page.params.locale}/activities/food-processing`,
                    },
                    { img: 104, name: "fruit processing", link: `/${$page.params.locale}/activities/food-processing` },
                    { img: 105, name: "grain processing", link: `/${$page.params.locale}/activities/food-processing` },
                    {
                        img: 107,
                        name: "beet sugar processing",
                        link: `/${$page.params.locale}/activities/beet-sugar-processing`,
                    },
                    { img: 108, name: "slaughterhouse", link: `/${$page.params.locale}/activities/meat-processing` },
                    {
                        img: 109,
                        name: "meat packing plant",
                        link: `/${$page.params.locale}/activities/meat-processing`,
                    },
                    { img: 110, name: "spice processing", link: `/${$page.params.locale}/activities/food-processing` },
                ],
            },
            keywords: [
                "activities at aifpn",
                "what does aifpn do",
                "what is the work of all india food processing nigam",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "खाद्य प्रसंस्करण";
                data.content = {
                    d: "अखिल भारतीय खाद्य प्रसंस्करण निगम के उद्योगों और प्रथाओं में निम्नलिखित शामिल हैं:",
                    a: [
                        { ...data.content.a[0], name: "डिब्बाबंदी" },
                        { ...data.content.a[1], name: "मछली प्रसंस्करण" },
                        { ...data.content.a[2], name: "सब्जी पैकिंग संयंत्र" },
                        { ...data.content.a[3], name: "फल प्रसंस्करण" },
                        { ...data.content.a[4], name: "अनाज प्रसंस्करण" },
                        { ...data.content.a[5], name: "औद्योगिक प्रतिपादन" },
                        { ...data.content.a[6], name: "चुकंदर चीनी प्रसंस्करण" },
                        { ...data.content.a[7], name: "कसाईखाना" },
                        { ...data.content.a[8], name: "मांस पैकिंग संयंत्र" },
                        { ...data.content.a[9], name: "मसाला प्रसंस्करण" },
                    ],
                };
                data.keywords = [
                    "एआईएफपीएन पर गतिविधियां",
                    "एआईएफपीएन क्या करता है",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम का कार्य क्या है",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `/${$page.params.locale}/activities`,
        title: $t.title,
        keywords: $t.keywords,
    };
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>
<p class="my-2">{$t.content.d}</p>

<div class="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each $t.content.a as item, idx (idx)}
        <Link href="{item.link}">
            <card class="w-full flex-cij capitalize rounded-xl hover:shadow-xl">
                <img
                    class="w-full h-40 rounded-t-xl"
                    src="{`${cfg.base_url}/images/img-${item.img}.jpeg`}"
                    alt="{`img-${item.img}`}"
                />
                <span class="py-4 px-2 w-full bg-blue-500 text-white text-center rounded-b-xl">{item.name}</span>
            </card>
        </Link>
    {/each}
</div>
