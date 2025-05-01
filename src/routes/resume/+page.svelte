<script>
    import { data, title } from '@data/resume';
    import Chip from '$lib/components/Chip/Chip.svelte';
    import CommonPage from '$lib/components/CommonPage.svelte';

    // Convert drive share link to embed link
    $: embedUrl = data?.replace('/view?usp=sharing', '/preview');
</script>

<CommonPage {title}>
    <div class="resume">
        {#if data}
            <div class="resume-container">
                <a href={data} download>
                    <Chip size={'1.25em'}>Download</Chip>
                </a>
                <div class="resume-preview">
                    <iframe
                        title="Resume Preview"
                        src={embedUrl}
                        allow="autoplay"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        {:else}
            <Chip>Ooops! no CV at the moment.</Chip>
        {/if}
    </div>
</CommonPage>

<style lang="scss">
    .resume {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        width: 100%;

        & > a {
            color: inherit;
        }
    }

    .resume-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 20px;
    }

    .resume-preview {
        width: 100%;
        max-width: 800px;
        height: 80vh;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid var(--border);

        iframe {
            border: none;
        }
    }
</style>
