<script lang="ts">
  import { css } from '@stitches/core';
  import { createHeadingFontSizes } from '../../src';
  import Break from '../lib/Break.svelte';

  $: headingFontSizes = createHeadingFontSizes();

  $: heading = (size: 1 | 2 | 3 | 4 | 5 | 6) => {
    return css({
      fontSize: headingFontSizes[`heading${size}`],
    })();
  };
  $: subheading = css({
    fontSize: headingFontSizes.subheading,
  });
  $: title = css({
    fontSize: headingFontSizes.title,
  });
</script>

<span class={title()}>Title</span>
<h1 class={heading(1)}>Heading 1</h1>
<h2 class={heading(2)}>Heading 2</h2>
<h3 class={heading(3)}>Heading 3</h3>
<h4 class={heading(4)}>Heading 4</h4>
<h5 class={heading(5)}>Heading 5</h5>
<h6 class={heading(6)}>Heading 6</h6>

<Break />

<h1 class={heading(1)}>Heading 1</h1>
<span class={subheading()}>Subheading</span>
