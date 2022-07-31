<script>
  import { css } from '@stitches/core';
  import { createFontSizes } from '../../src';
  import Break from '../lib/Break.svelte';

  $: fontSizes = createFontSizes();

  const type = (token) =>
    css({
      fontSize: fontSizes[token],
    });
</script>

<p class={type('paragraph')}>Paragraph</p>

<Break />

<pre>
  <code class={type('code')}>
{`// code
function ThemePark() {
  return new SavedTime();
}`}
  </code>
</pre>

<Break />

<p class={type('paragraph')}>
  Inline code fits in well with paragraphs <code class={type('codeInline')}
    >createFontSizes().codeInline</code
  > like SpongeBob in his Squarepants
</p>
<p class={type('paragraph')}>
  This is because the size is always <code class={type('codeInline')}
    >0.125rem</code
  >
  (or <code class={type('codeInline')}>2px</code>) smaller than
  <code class={type('codeInline')}>1em</code>, the parent font size
</p>

<Break />

<span class={type('label')}>Label</span>
<br />
<button class={type('componentInteractive')}>I have a label!</button>

<Break />

<button class={type('componentInteractive')}>Normal</button>
<button class={type('componentCompact')}>Compact</button>
<button class={type('componentCallToAction')}>Call to Action</button>
<br />
<br />
<input class={type('componentInteractive')} placeholder="Normal" />
<input class={type('componentCompact')} placeholder="Compact" />
<input class={type('componentCallToAction')} placeholder="Call to Action" />

<Break />

<span class={type('footnote')}>Smol footnote</span>
