<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each Array(6) as _, i}
        <img class="w-full h-44" src="{`/images/img-${i + 1}.jpeg`}" alt="{`img-${i + 1}`}" />
    {/each}
</div>
