<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            content: { t: string; d?: string }[];
            keywords: string[];
        } = {
            title: "Staff List",
            content: [
                { t: "General Manager (IT)" },
                { t: "General Manager (Sales)" },
                { t: "General Manager (Finance)" },
                { t: "General Manager (Accounts)" },
                { t: "General Manager (Purchase)" },
                { t: "Assistant General Manager (IT)" },
                { t: "Assistant General Manager (Sales)" },
                { t: "Assistant General Manager (Finance)" },
                { t: "Assistant General Manager (Accounts)" },
                { t: "Assistant General Manager (Purchase)" },
                /*{ t: "Manager (IT)" },
                { t: "Manager (Sales)" },
                { t: "Manager (Finance)" },
                { t: "Manager (Accounts)" },
                { t: "Manager (Purchase)" },
                { t: "Manager (Legal)" },
                { t: "Assistant Manager (IT)" },
                { t: "Assistant Manager (Sales)" },
                { t: "Assistant Manager (Finance)" },
                { t: "Assistant Manager (Accounts)" },
                { t: "Assistant Manager (Purchase)" },
                { t: "Assistant Manager (Legal)" },
                { t: "Assistant Engineer (Civil)" },
                { t: "Assistant Engineer (Mechanical)" },
                { t: "Assistant Engineer (Electrical)" },
                { t: "Assistant Engineer (Computer Science)" },
                { t: "Assistant Engineer (Chemical)" },
                { t: "Assistant Engineer (Food Technology)" },
                { t: "Assistant Engineer (Information Technology)" },
                { t: "Junior Engineer (Civil)" },
                { t: "Junior Engineer (Mechanical)" },
                { t: "Junior Engineer (Electrical)" },
                { t: "Junior Engineer (Computer Science)" },
                { t: "Junior Engineer (Chemical)" },
                { t: "Junior Engineer (Food Technology)" },
                { t: "Junior Engineer (Information Technology)" },*/
                { t: "Data Entry Operator" },
                { t: "Lower Division Clerk" },
                { t: "Personal Assistant" },
                //{ t: "Sorting Assistant" },
                { t: "Postal Assistant" },
                //{ t: "Orderly Peon" },
                { t: "Peon" },
                { t: "Driver" },
                /*{ t: "Electrician" },
                { t: "Wireman" },
                { t: "Mechanic" },
                { t: "Welder" },
                { t: "Carpenter" },
                { t: "Painter" },
                { t: "Operator" },
                { t: "Watchman" },*/
                { t: "Gardner" },
                { t: "Motor Cleaner" },
                { t: "Dhobi" },
                { t: "Barber" },
                { t: "Sweeper" },
                { t: "Operator" },
                { t: "Mechanic" },
                { t: "Welder" },
                { t: "Electrician" },
                { t: "Stenographer" },
                { t: "Daftary" },
                { t: "Mistry" },
                //{ t: "Waterman" },
            ],
            keywords: ["about aifpn", "aifpn staff list", "list of staff in all india food processing nigam"],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "स्टाफ सूची";
                data.content = [
                    { t: "महाप्रबंधक (आईटी)" },
                    { t: "महाप्रबंधक (बिक्री)" },
                    { t: "महाप्रबंधक (वित्त)" },
                    { t: "महाप्रबंधक (लेखा)" },
                    { t: "महाप्रबंधक (खरीद)" },
                    { t: "सहायक महाप्रबंधक (आईटी)" },
                    { t: "सहायक महाप्रबंधक (बिक्री)" },
                    { t: "सहायक महाप्रबंधक (वित्त)" },
                    { t: "सहायक महाप्रबंधक (लेखा)" },
                    { t: "सहायक महाप्रबंधक (खरीद)" },
                    /*{ t: "प्रबंधक (आईटी)" },
                    { t: "प्रबंधक (बिक्री)" },
                    { t: "प्रबंधक (वित्त)" },
                    { t: "प्रबंधक (लेखा)" },
                    { t: "प्रबंधक (खरीद)" },
                    { t: "प्रबंधक (कानूनी)" },
                    { t: "सहायक प्रबंधक (आईटी)" },
                    { t: "सहायक प्रबंधक (बिक्री)" },
                    { t: "सहायक प्रबंधक (वित्त)" },
                    { t: "सहायक प्रबंधक (लेखा)" },
                    { t: "सहायक प्रबंधक (खरीद)" },
                    { t: "सहायक प्रबंधक (कानूनी)" },
                    { t: "सहायक अभियंता (सिविल)" },
                    { t: "सहायक अभियंता (मैकेनिकल)" },
                    { t: "सहायक अभियंता (विद्युत)" },
                    { t: "सहायक अभियंता (कंप्यूटर विज्ञान)" },
                    { t: "सहायक अभियंता (रासायनिक)" },
                    { t: "सहायक अभियंता (खाद्य प्रौद्योगिकी)" },
                    { t: "सहायक अभियंता (सूचना प्रौद्योगिकी)" },
                    { t: "जूनियर इंजीनियर (सिविल)" },
                    { t: "जूनियर इंजीनियर (मैकेनिकल)" },
                    { t: "जूनियर इंजीनियर (इलेक्ट्रिकल)" },
                    { t: "जूनियर इंजीनियर (कंप्यूटर साइंस)" },
                    { t: "जूनियर इंजीनियर (केमिकल)" },
                    { t: "जूनियर इंजीनियर (खाद्य प्रौद्योगिकी)" },
                    { t: "जूनियर इंजीनियर (सूचना प्रौद्योगिकी)" },*/
                    { t: "डेटा एंट्री ऑपरेटर" },
                    { t: "लोअर डिवीजन क्लर्क" },
                    { t: "निजी सहायक" },
                    //{ t: "सॉर्टिंग असिस्टेंट" },
                    { t: "डाक सहायक" },
                    //{ t: "अर्दली चपरासी" },
                    { t: "चपरासी" },
                    { t: "चालक" },
                    /*{ t: "इलेक्ट्रीशियन" },
                    { t: "वायरमैन" },
                    { t: "मैकेनिक" },
                    { t: "वेल्डर" },
                    { t: "बढ़ई" },
                    { t: "पेंटर" },
                    { t: "ऑपरेटर" },
                    { t: "चौकीदार" },*/
                    { t: "गार्डनर" },
                    { t: "मोटर क्लीनर" },
                    { t: "धोबी" },
                    { t: "नाई" },
                    { t: "स्वीपर" },
                    { t: "ऑपरेटर" },
                    { t: "मैकेनिक" },
                    { t: "वेल्डर" },
                    { t: "इलेक्ट्रीशियन" },
                    { t: "आशुलिपिक" },
                    { t: "दफ्तारी" },
                    { t: "मिस्त्री" },
                    //{ t: "वाटरमैन" },
                ];
                data.keywords = [
                    "एआईएफपीएन के बारे में",
                    "एआईएफपीएन स्टाफ सूची",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम में कर्मचारियों की सूची",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `${$page.params.locale}/about/staff-list`,
        title: $t.title,
        keywords: $t.keywords,
    };
</script>

<Meta metaData="{metaData}" />

<span class="my-2 text-2xl font-bold text-gray-600">{$t.title}:</span>

<ol class="flex flex-col p-4">
    {#each $t.content as post, idx (idx)}
        <li
            class="my-2 flex items-center transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-blue-400"
        >
            <span class="mx-1 text-xl text-blue-500">
                <svg x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"
                    ><polygon class="fill-current" points="0,255 127.5,0 255,255"></polygon></svg
                >{idx + 1}
            </span>
            <span class="mx-2 text-justify text-xl">{post.t}</span>
        </li>
    {/each}
</ol>
