<script>
  import { css } from '@stitches/core';
  import { createFontSizes } from '../../src';

  $: fontSizes = createFontSizes();

  const type = (token) =>
    css({
      fontSize: fontSizes[token],
    });
</script>

<span class={type('title')}>Title</span>

<br />

<p class={type('paragraph')}>Paragraph</p>

<br />

<pre>
  <code class={type('code')}>
{`// code
function StitchesDye() {
  return new SavedTime();
}`}
  </code>
</pre>

<br />

<p class={type('paragraph')}>
  Inline code fits in well with paragraphs <code class={type('codeInline')}
    >createFontSizes().codeInline</code
  > like SpongeBob in his Squarepants
</p>

<br />

<span class={type('footnote')}>Smol footnote</span>
