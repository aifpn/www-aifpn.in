<script lang="ts">
    import { derived } from "svelte/store";

    import { page } from "$app/stores";

    import { cfg } from "$lib/config";

    import Header from "$ui/Header.svelte";
    import NavBar from "$ui/NavBar.svelte";
    import Content from "$ui/Content.svelte";
    import Footer from "$ui/Footer.svelte";

    const t = derived(page, ($page) => {
        // locale: english (en)
        let data: {
            title: string;
            sub_title: string;
            page_path: string;
            localize: (path: string) => string;
        } = {
            title: "All India Food Processing Nigam",
            sub_title: "उन्नत किसान उन्नत भारत",
            page_path: $page.url.pathname,
            localize: (path) => {
                return `/${$page.params.locale}${path}`;
            },
        };

        switch ($page.params.locale) {
            case "hi":
                data.title = "अखिल भारतीय खाद्य प्रसंस्करण निगम";
        }

        return data;
    });

    $: links = [
        {
            name: "Home",
            href: $t.localize(""),
            is_home: true,
        },
        {
            name: "About Us",
            href: $t.localize("/about"),
            childs: [
                {
                    name: "History",
                    href: $t.localize("/about/history"),
                },
                {
                    name: "Importance",
                    href: $t.localize("/about/importance"),
                },
                {
                    name: "Objectives",
                    href: $t.localize("/about/objectives"),
                },
                {
                    name: "Key Persons",
                    href: $t.localize("/about/key-persons"),
                },
            ],
        },
        {
            name: "Food Processing",
            href: $t.localize("/food-processing"),
        },
        {
            name: "Gallery",
            href: $t.localize("/gallery"),
        },
        {
            name: "BPF",
            href: "https://bpf.aifpn.in",
        },
    ];
</script>

{#key $t.page_path}
    <Header styles="p-4 w-full h-full flex-cij sm:flex-row">
        <!-- logo -->
        <img slot="logo" src="{`${cfg.base_url}/logo.png`}" alt="aifpn-logo" />

        <!-- title -->
        <span slot="title" class="text-lg sm:text-2xl sm:my-1 md:text-3xl md:my-2 text-center font-extrabold">
            {$t.title}
        </span>

        <!-- sub-title -->
        <span slot="sub_title" class="my-2 md:text-2xl text-blue-800 font-extrabold">{$t.sub_title}</span>
    </Header>

    <NavBar links="{links}" path="{$t.page_path}" />

    <Content styles="py-8 px-12 w-full min-h-screen flex flex-col">
        <slot />
    </Content>

    <Footer styles="p-4 w-full h-full flex-cij" />
{/key}
