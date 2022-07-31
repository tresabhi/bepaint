<script>
  import { css } from '@stitches/core';
  import { createHeadingFontSizes } from '../../src';
  import Break from '../lib/Break.svelte';

  export let coefficient;
  export let verticalIntercept;

  $: headingFontSizes = createHeadingFontSizes(coefficient, verticalIntercept);

  $: heading = (size) =>
    css({
      fontSize: headingFontSizes[`heading${size}`],
    });
  $: subheading = css({
    fontSize: headingFontSizes.subheading,
  });
  $: title = css({
    fontSize: headingFontSizes.title,
  });

  $: console.log(headingFontSizes.title);
</script>

<span class={title()}>A Beautiful Title</span>
<h1 class={heading(1)}>Chad Heading 1</h1>
<h2 class={heading(2)}>Bro Heading 2</h2>
<h3 class={heading(3)}>Dude Heading 3</h3>
<h4 class={heading(4)}>Pal Heading 4</h4>
<h5 class={heading(5)}>Guy Heading 5</h5>
<h6 class={heading(6)}>That Heading 6</h6>

<Break />

<h1 class={heading(1)}>A Dashing Heading 1 Above</h1>
<span class={subheading()}>An Icy Subheading Down Below</span>
