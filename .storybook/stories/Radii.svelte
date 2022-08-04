<script lang="ts">
  import { css } from '@stitches/core';
  import { createRadii, RadiiToken } from '../../src/creators/createRadii';

  const radii = createRadii();

  const type = (token: RadiiToken) =>
    css({
      borderRadius: radii[token],
    })();
</script>

<button class={type('default')}>Default</button>
<button class={type('sharp')}>Sharp</button>
<button class={type('subtle')}>Subtle</button>
<button class={type('blunt')}>Blunt</button>
<button class={type('full')}>Full</button>
