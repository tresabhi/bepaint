<script lang="ts">
  import { createSpaces } from '../../src';
  import Space from '../lib/Space.svelte';

  const spaces = createSpaces() as any;
  const prefixes = [
    'gapRelated',
    'gapUnrelated',
    'marginRelated',
    'marginUnrelated',
    'padding',
  ];
  const suffixes = ['', 'Major', 'Minor'];
</script>

{#each prefixes as prefix}
  {#each suffixes as suffix}
    <Space label={`${prefix}${suffix}`} space={spaces[`${prefix}${suffix}`]} />
  {/each}
{/each}
