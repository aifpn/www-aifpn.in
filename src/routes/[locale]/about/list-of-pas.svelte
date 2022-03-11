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
            content: string[][];
            keywords: string[];
        } = {
            title: "List of Personal Assistants",
            cols: [
                "S.No.",
                "Name",
                "Date Of Birth",
                "Designation",
                "Date of Joining",
                "Posting State",
                "Contact Number",
                "Officer Office",
            ],
            content: [
                [
                    "Ram Raheesh",
                    "05-07-1992",
                    "Personal Assistant",
                    "02-01-2022",
                    "Uttar Pradesh",
                    "+91 9509485271",
                    "CEO",
                ],
            ],
            keywords: [
                "about aifpn",
                "list of personal assistants in aifpn",
                "list of personal assistants in all india food processing nigam",
            ],
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "निजी सहायकों की सूची";
                data.cols = [
                    "S.No.",
                    "नाम",
                    "जन्म की तिथि",
                    "पद",
                    "शामिल होने की तिथि",
                    "पोस्टिंग स्टेट",
                    "संपर्क संख्या",
                    "अधिकारी कार्यालय",
                ];
                data.content = [
                    ["राम रहीश", "05-07-1992", "निजी सहायक", "02-01-2022", "उत्तर प्रदेश", "+91 9509485271", "सीईओ"],
                ];
                data.keywords = [
                    "एफ़पीएन के बारे में",
                    "एआईएफपीएन में निजी सहायकों की सूची",
                    "अखिल भारतीय खाद्य प्रसंस्करण निगम में निजी सहायकों की सूची",
                ];
        }

        return data;
    });

    const metaData: Partial<IMeta> = {
        url: `${$page.params.locale}/about/list-of-pas`,
        title: $t.title,
        keywords: $t.keywords,
    };
</script>

<Meta metaData="{metaData}" />

<div name="list-of-pas" class="w-full max-w-fit mx-auto my-4 bg-white shadow-xl rounded-xl border border-gray-200">
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
                    {#each $t.content as x, idx (idx)}
                        <tr>
                            <td class="p-4 text-center">
                                {idx + 1}
                            </td>
                            {#each x as data}
                                <td class="p-4 text-center">
                                    {data}
                                </td>
                            {/each}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
