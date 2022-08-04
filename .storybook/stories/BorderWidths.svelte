<script lang="ts">
  import { css } from '@stitches/core';
  import {
    BorderWidthToken,
    createBorderWidths,
  } from '../../src/creators/createBorderWidths';

  const borderWidths = createBorderWidths();

  const type = (token: BorderWidthToken) =>
    css({
      borderWidth: borderWidths[token],
    })();
</script>

<button class={type('default')}>Default</button>
<button class={type('subtle')}>Subtle</button>
<button class={type('strong')}>Strong</button>
