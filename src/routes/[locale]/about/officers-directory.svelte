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
                }[];
            }[];
            keywords: string[];
        } = {
            title: "Directory of Officers",
            cols: ["Post", "Department", "Name", "Contact Details"],
            content: [
                { post: "Chairman", persons: [{ name: "N/A", department: "" }] },
                {
                    post: "Chief Executive Officer",
                    persons: [{ name: "Mr. Surendra Pal", department: "", contact: { phone: "+91 9415934691" } }],
                },
                { post: "Chief Financial Officer", persons: [{ name: "N/A", department: "" }] },
                { post: "Chief Vigilance Officer", persons: [{ name: "N/A", department: "" }] },
                {
                    post: "Executive Director",
                    persons: [
                        { name: "N/A", department: "IT" },
                        { name: "N/A", department: "Sales" },
                        { name: "N/A", department: "Finance" },
                        { name: "N/A", department: "Purchase" },
                    ],
                },
                {
                    post: "Chief General Manager",
                    persons: [
                        { name: "N/A", department: "Sales" },
                        { name: "N/A", department: "Finance" },
                        { name: "N/A", department: "Purchase" },
                    ],
                },
                {
                    post: "General Manager",
                    persons: [
                        { name: "N/A", department: "IT" },
                        { name: "N/A", department: "Funds" },
                        { name: "N/A", department: "Legal" },
                        { name: "N/A", department: "Sales" },
                        { name: "N/A", department: "Finance/Bills" },
                        { name: "N/A", department: "Purchase" },
                    ],
                },
                {
                    post: "Deputy General Manager",
                    persons: [
                        { name: "N/A", department: "IT" },
                        { name: "N/A", department: "Funds" },
                        { name: "N/A", department: "Legal" },
                        { name: "N/A", department: "Sales" },
                        { name: "N/A", department: "Accounts" },
                        { name: "N/A", department: "Finance/Bills" },
                        { name: "N/A", department: "Purchase" },
                    ],
                },
                {
                    post: "Assistant General Manager",
                    persons: [
                        { name: "N/A", department: "IT" },
                        { name: "N/A", department: "Funds" },
                        { name: "N/A", department: "Legal" },
                        { name: "N/A", department: "Sales" },
                        { name: "N/A", department: "Finance" },
                        { name: "N/A", department: "Bills" },
                        { name: "N/A", department: "Purchase" },
                        { name: "N/A", department: "General" },
                        { name: "N/A", department: "Hindi" },
                        { name: "N/A", department: "Civil" },
                    ],
                },
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
                data.cols = ["पोस्ट", "विभाग", "नाम", "संपर्क विवरण"];
                data.content = [
                    { post: "अध्यक्ष", persons: [{ name: "उपलब्ध नहीं है", department: "" }] },
                    {
                        post: "मुख्य कार्यकारी अधिकारी",
                        persons: [{ name: "श्री सुरेंद्र पाल", department: "" }],
                    },
                    { post: "मुख्य वित्तीय अधिकारी", persons: [{ name: "उपलब्ध नहीं है", department: "" }] },
                    { post: "मुख्य सतर्कता अधिकारी", persons: [{ name: "उपलब्ध नहीं है", department: "" }] },
                    {
                        post: "कार्यकारी निदेशक",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "आईटी" },
                            { name: "उपलब्ध नहीं है", department: "बिक्री" },
                            { name: "उपलब्ध नहीं है", department: "वित्त" },
                            { name: "उपलब्ध नहीं है", department: "खरीद" },
                        ],
                    },
                    {
                        post: "मुख्य महाप्रबंधक",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "बिक्री" },
                            { name: "उपलब्ध नहीं है", department: "वित्त" },
                            { name: "उपलब्ध नहीं है", department: "खरीद" },
                        ],
                    },
                    {
                        post: "महाप्रबंधक",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "आईटी" },
                            { name: "उपलब्ध नहीं है", department: "निधि" },
                            { name: "उपलब्ध नहीं है", department: "कानूनी" },
                            { name: "उपलब्ध नहीं है", department: "बिक्री" },
                            { name: "उपलब्ध नहीं है", department: "वित्त/बिल" },
                            { name: "उपलब्ध नहीं है", department: "खरीद" },
                        ],
                    },
                    {
                        post: "उप महाप्रबंधक",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "आईटी" },
                            { name: "उपलब्ध नहीं है", department: "निधि" },
                            { name: "उपलब्ध नहीं है", department: "कानूनी" },
                            { name: "उपलब्ध नहीं है", department: "बिक्री" },
                            { name: "उपलब्ध नहीं है", department: "खाता" },
                            { name: "उपलब्ध नहीं है", department: "वित्त/बिल" },
                            { name: "उपलब्ध नहीं है", department: "खरीद" },
                        ],
                    },
                    {
                        post: "सहायक महाप्रबंधक",
                        persons: [
                            { name: "उपलब्ध नहीं है", department: "आईटी" },
                            { name: "उपलब्ध नहीं है", department: "निधि" },
                            { name: "उपलब्ध नहीं है", department: "कानूनी" },
                            { name: "उपलब्ध नहीं है", department: "बिक्री" },
                            { name: "उपलब्ध नहीं है", department: "वित्त" },
                            { name: "उपलब्ध नहीं है", department: "बिल" },
                            { name: "उपलब्ध नहीं है", department: "खरीद" },
                            { name: "उपलब्ध नहीं है", department: "सामान्य" },
                            { name: "उपलब्ध नहीं है", department: "हिंदी" },
                            { name: "उपलब्ध नहीं है", department: "सिविल" },
                        ],
                    },
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
