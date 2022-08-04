<script lang="ts">
  import { css, globalCss } from '@stitches/core';
  import {
    createFontWeights,
    createGoogleFonts,
    createHeadingFontSizes,
    FontWeightToken,
  } from '../../src';
  import Break from '../lib/Break.svelte';

  const FONT_FAMILY = 'Roboto Flex';

  const fontWeights = createFontWeights();
  const headingFontSizes = createHeadingFontSizes();

  globalCss({
    '@import': createGoogleFonts({
      family: FONT_FAMILY,
      weight: { min: 100, max: 1000 },
    }),
  })();

  const type = (token: FontWeightToken) => {
    return css({
      fontWeight: fontWeights[token],
      fontFamily: FONT_FAMILY,
    })();
  };
  const titleStyles = css({
    fontSize: headingFontSizes.title,
  });
</script>

<span class={`${titleStyles()} ${type('title')}`}>Title</span>

<Break />

<h1 class={type('heading')}>Heading 1</h1>
<h2 class={type('heading')}>Heading 2</h2>
<h3 class={type('heading')}>Heading 3</h3>
<h4 class={type('heading')}>Heading 4</h4>
<h5 class={type('heading')}>Heading 5</h5>
<h6 class={type('heading')}>Heading 6</h6>

<Break />

<p class={type('paragraph')}>
  The paragraph font weight is above the default 400; it's {fontWeights.paragraph}.
</p>
<p class={type('paragraph')}>
  Ullamco ullamco ut sunt incididunt et proident eiusmod. Adipisicing amet non
  ut aliquip laboris eu magna id anim ut. Ullamco voluptate cupidatat
  consectetur dolor. Ea aliquip dolore consequat cupidatat occaecat enim fugiat
  eiusmod irure dolore. Laboris ex excepteur sunt nostrud culpa excepteur id do
  quis ut ut ut aute amet ipsum. Amet commodo qui enim eiusmod ut incididunt
  qui. Sit consequat reprehenderit nisi veniam.
</p>
<p class={type('paragraph')}>
  Amet do duis cupidatat velit adipisicing Lorem. Laborum consequat culpa ipsum
  aliquip tempor eiusmod in tempor voluptate nostrud id deserunt et velit.
  Consequat id laborum id eu nulla nulla nisi sunt. Lorem et Lorem non. Culpa
  aliquip nisi eiusmod id voluptate sit cupidatat nulla esse non cillum
  adipisicing excepteur.
</p>

<Break />

<pre>
<code class={type('code')}>
{`class CodeFontWeight {
  about = Math.round(${fontWeights.code}) // -ish;
  feels = new Feeling('thin');
}`}
</code>
</pre>

<Break />

<button>A normal button</button>
<button class={type('callToAction')}>A call-to-action button</button>
