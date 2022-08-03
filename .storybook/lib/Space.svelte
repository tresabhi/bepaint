<script lang="ts">
  import { css } from '@stitches/core';
  import { createFontSizes } from '../../src';

  export let space = '0';
  export let label = 'unlabeled';
  const fontSizes = createFontSizes();

  const containerStyles = css({
    display: 'flex',
  });
  const boxStyles = css({
    width: '0.5rem',
    height: '1rem',
    backgroundColor: 'CadetBlue',
    margin: 0,
  });
  $: spaceStyles = css({
    width: space,
    height: '1rem',
    backgroundColor: 'LightGray',
    margin: 0,
  });
  const labelStyles = css({ fontSize: fontSizes.label });
</script>

<span class={labelStyles()}>{label}</span>
<div class={containerStyles()}>
  <div class={boxStyles()} />
  <div class={spaceStyles()} />
  <div class={boxStyles()} />
</div>

<br />
