<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import type { IMeta } from "$lib/types";

    import Meta from "$ui/Meta.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            cols: string[];
            content: {
                post: string;
                persons: {
                    name: string;
                    department: string;
                    contact?: {
                        phone?: string;
                        email?: string;
                        address?: string;
                    };
                    state?: string;
                }[];
            }[];
            keywords: string[];
        } = {
            title: "Directory of Officers",
            cols: ["Post", "Department", "Name", "Posting State", "Contact Details"],
            content: [
                {
                    post: "Chief Executive Officer",
                    persons: [
                        {
                            name: "Mr. Surendra Pal",
                            department: "",
                            state: "All",
                            contact: { phone: "+91 9415934691" },
                        },
                    ],
                },
                /*{ post: "Chief Technical Officer", persons: [{ name: "N/A", department: "Technology" }] },
                { post: "Chief Financial Officer", persons: [{ name: "N/A", department: "Finance" }] },
                { post: "Chief Legal Officer", persons: [{ name: "N/A", department: "Legal" }] },
                { post: "Chief Information Officer", persons: [{ name: "N/A", department: "IT" }] },
                { post: "Chief Accountant Officer", persons: [{ name: "N/A", department: "Accounts" }] },
                { post: "Chief Purchasing Officer", persons: [{ name: "N/A", department: "Purchase" }] },
                { post: "Chief Sales Officer", persons: [{ name: "N/A", department: "Sales" }] },
                {
                    post: "General Manager",
                    persons: [
                        { name: "N/A", department: "IT" },
                        { name: "N/A", department: "Sales" },
                        { name: "N/A", department: "Finance" },
                        { name: "N/A", department: "Accounts" },
                        { name: "N/A", department: "Purchase" },
                        { name: "N/A", department: "Legal" },
                    ],
                },
                {
                    post: "Deputy General Manager",
                    persons: [
                        { name: "N/A", department: "IT" },
                        { name: "N/A", department: "Sales" },
                        { name: "N/A", department: "Finance" },
                        { name: "N/A", department: "Accounts" },
                        { name: "N/A", department: "Purchase" },
                        { name: "N/A", department: "Legal" },
                    ],
                },
                {
                    post: "Assistant General Manager",
                    persons: [
                        { name: "N/A", department: "IT" },
                        { name: "N/A", department: "Sales" },
                        { name: "N/A", department: "Finance" },
                        { name: "N/A", department: "Accounts" },
                        { name: "N/A", department: "Purchase" },
                        { name: "N/A", department: "Legal" },
                    ],
                },
                {
                    post: "Chief Engineer",
                    persons: [
                        { name: "N/A", department: "Civil" },
                        { name: "N/A", department: "Mechanical" },
                        { name: "N/A", department: "Electrical" },
                        { name: "N/A", department: "Computer Science" },
                        { name: "N/A", department: "Chemical" },
                        { name: "N/A", department: "Food Technology" },
                        { name: "N/A", department: "Information Technology" },
                    ],
                },
                {
                    post: "Superintendent Engineer",
                    persons: [
                        { name: "N/A", department: "Civil" },
                        { name: "N/A", department: "Mechanical" },
                        { name: "N/A", department: "Electrical" },
                        { name: "N/A", department: "Computer Science" },
                        { name: "N/A", department: "Chemical" },
                        { name: "N/A", department: "Food Technology" },
                        { name: "N/A", department: "Information Technology" },
                    ],
                },*/
            ],
            keywords: [
                "about aifpn",
                "directory of officers in aifpn",
                "directory of officers in all india food processing nigam",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "अधिकारियों की निर्देशिका";
                data.cols = ["पोस्ट", "विभाग", "नाम", "तैनाती राज्य", "संपर्क विवरण"];
                data.content = [
                    {
                        post: "मुख्य कार्यकारी अधिकारी",
                        persons: [
                            {
                                name: "श्री सुरेंद्र पाल",
                                department: "",
                                state: "सभी",
                                contact: { phone: "+91 9415934691" },
                            },
                        ],
                    },
                    /*{ post: "मुख्य तकनीकी अधिकारी", persons: [{ name: "उपलब्ध नहीं है", department: "प्रौद्योगिकी" }] },
                    { post: "मुख्य वित्तीय अधिकारी", persons: [{ name: "उपलब्ध नहीं है", department: "वित्त" }] },
                    { post: "मुख्य कानूनी अधिकारी", persons: [{ name: "उपलब्ध नहीं है", department: "कानूनी" }] },
                    { post: "मुख्य सूचना अधिकारी", persons: [{ name: "उपलब्ध नहीं है", department: "आईटी" }] },
                    { post: "मुख्य लेखाकार अधिकारी", persons: [{ name: "उपलब्ध नहीं है", department: "लेखा" }] },
                    { post: "मुख्य खरीद अधिकारी", persons: [{ name: "उपलब्ध नहीं है", department: "खरीद" }] },
                    { post: "मुख्य बिक्री अधिकारी", persons: [{ name: "उपलब्ध नहीं है", department: "बिक्री" }] },
                    {
                        post: "महाप्रबंधक",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "आईटी" },
                            { name: "उपलब्ध नहीं है", department: "बिक्री" },
                            { name: "उपलब्ध नहीं है", department: "वित्त" },
                            { name: "उपलब्ध नहीं है", department: "लेखा" },
                            { name: "उपलब्ध नहीं है", department: "खरीद" },
                            { name: "उपलब्ध नहीं है", department: "कानूनी" },
                        ],
                    },
                    {
                        post: "उप महाप्रबंधक",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "आईटी" },
                            { name: "उपलब्ध नहीं है", department: "बिक्री" },
                            { name: "उपलब्ध नहीं है", department: "वित्त" },
                            { name: "उपलब्ध नहीं है", department: "लेखा" },
                            { name: "उपलब्ध नहीं है", department: "खरीद" },
                            { name: "उपलब्ध नहीं है", department: "कानूनी" },
                        ],
                    },
                    {
                        post: "सहायक महाप्रबंधक",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "आईटी" },
                            { name: "उपलब्ध नहीं है", department: "बिक्री" },
                            { name: "उपलब्ध नहीं है", department: "वित्त" },
                            { name: "उपलब्ध नहीं है", department: "लेखा" },
                            { name: "उपलब्ध नहीं है", department: "खरीद" },
                            { name: "उपलब्ध नहीं है", department: "कानूनी" },
                        ],
                    },
                    {
                        post: "मुख्य अभियंता",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "सिविल" },
                            { name: "उपलब्ध नहीं है", department: "यांत्रिक" },
                            { name: "उपलब्ध नहीं है", department: "विद्युत" },
                            { name: "उपलब्ध नहीं है", department: "कंप्यूटर विज्ञान" },
                            { name: "उपलब्ध नहीं है", department: "रासायनिक" },
                            { name: "उपलब्ध नहीं है", department: "खाद्य प्रौद्योगिकी" },
                            { name: "उपलब्ध नहीं है", department: "सूचना प्रौद्योगिकी" },
                        ],
                    },
                    {
                        post: "अधीक्षक अभियंता",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "सिविल" },
                            { name: "उपलब्ध नहीं है", department: "यांत्रिक" },
                            { name: "उपलब्ध नहीं है", department: "विद्युत" },
                            { name: "उपलब्ध नहीं है", department: "कंप्यूटर विज्ञान" },
                            { name: "उपलब्ध नहीं है", department: "रासायनिक" },
                            { name: "उपलब्ध नहीं है", department: "खाद्य प्रौद्योगिकी" },
                            { name: "उपलब्ध नहीं है", department: "सूचना प्रौद्योगिकी" },
                        ],
                    },*/
                ];
                data.keywords = [
                    "एआईएफपीएन के बारे में",
                    "एआईएफपीएन में अधिकारियों की निर्देशिका",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम में अधिकारियों की निर्देशिका",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `${$page.params.locale}/about/officers-directory`,
        title: $t.title,
        keywords: $t.keywords,
    };
</script>

<Meta metaData="{metaData}" />

<div
    name="officers-directory"
    class="w-full max-w-4xl mx-auto my-4 bg-white shadow-xl rounded-xl border border-gray-200"
>
    <header class="px-5 py-4 border-b border-gray-100">
        <h2 class="text-2xl font-bold text-gray-800">{$t.title}</h2>
    </header>
    <div class="p-3">
        <div class="overflow-x-auto">
            <table class="table-auto w-full">
                <thead class="text-sm font-semibold uppercase text-gray-500 bg-slate-200">
                    <tr>
                        {#each $t.cols as col (col)}
                            <th class="p-4">
                                {col}
                            </th>
                        {/each}
                    </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-200">
                    {#each $t.content as tdata, idx (idx)}
                        <tr>
                            <td rowspan="{tdata.persons.length}" class="p-4 text-center">
                                {tdata.post}
                            </td>
                            <td class="p-4 text-center">
                                {tdata.persons[0].department}
                            </td>
                            <td class="p-4 text-center">
                                {tdata.persons[0].name}
                            </td>
                            {#if tdata.persons[0].state}
                                <td class="p-4 text-center">
                                    {tdata.persons[0].state}
                                </td>
                            {:else}
                                <td class="p-4 text-center"> N/A </td>
                            {/if}
                            {#if tdata.persons[0].contact}
                                <td class="p-4 flex-cij">
                                    {#if tdata.persons[0].contact.address}
                                        <span>Address: {tdata.persons[0].contact.address}</span>
                                    {/if}
                                    {#if tdata.persons[0].contact.email}
                                        <span>E-Mail: {tdata.persons[0].contact.email}</span>
                                    {/if}
                                    {#if tdata.persons[0].contact.phone}
                                        <span>Phone: {tdata.persons[0].contact.phone}</span>
                                    {/if}
                                </td>
                            {:else}
                                <td class="p-4 text-center"> N/A </td>
                            {/if}
                        </tr>
                        {#each tdata.persons as x, idx (idx)}
                            {#if idx !== 0}
                                <tr>
                                    <td class="p-4 text-center">
                                        {x.department}
                                    </td>
                                    <td class="p-4 text-center">
                                        {x.name}
                                    </td>
                                    {#if x.state}
                                        <td class="p-4 text-center">
                                            {x.state}
                                        </td>
                                    {:else}
                                        <td class="p-4 text-center"> N/A </td>
                                    {/if}
                                    {#if x.contact}
                                        <td class="p-4 flex-cij">
                                            {#if x.contact.address}
                                                <span>Address: {x.contact.address}</span>
                                            {/if}
                                            {#if x.contact.email}
                                                <span>E-Mail: {x.contact.email}</span>
                                            {/if}
                                            {#if x.contact.phone}
                                                <span>Phone: {x.contact.phone}</span>
                                            {/if}
                                        </td>
                                    {:else}
                                        <td class="p-4 text-center"> N/A </td>
                                    {/if}
                                </tr>
                            {/if}
                        {/each}
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
