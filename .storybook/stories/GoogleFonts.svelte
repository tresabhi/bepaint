<script>
  import { css, globalCss } from '@stitches/core';
  import { createGoogleFonts } from '../../src';

  export let fontFamily;

  globalCss({
    '@import': createGoogleFonts(fontFamily),
  })();

  const heading = css({ fontFamily })();
</script>

<h1 class={heading}>The quick brown fox jumps over the lazy dog</h1>
<h2 class={heading}>The quick brown fox jumps over the lazy dog</h2>
<h3 class={heading}>The quick brown fox jumps over the lazy dog</h3>
<h4 class={heading}>The quick brown fox jumps over the lazy dog</h4>
<h5 class={heading}>The quick brown fox jumps over the lazy dog</h5>
<h6 class={heading}>The quick brown fox jumps over the lazy dog</h6>

<b>
  <h1 class={heading}>The quick brown fox jumps over the lazy dog</h1>
  <h2 class={heading}>The quick brown fox jumps over the lazy dog</h2>
  <h3 class={heading}>The quick brown fox jumps over the lazy dog</h3>
  <h4 class={heading}>The quick brown fox jumps over the lazy dog</h4>
  <h5 class={heading}>The quick brown fox jumps over the lazy dog</h5>
  <h6 class={heading}>The quick brown fox jumps over the lazy dog</h6>
</b>

<i>
  <h1 class={heading}>The quick brown fox jumps over the lazy dog</h1>
  <h2 class={heading}>The quick brown fox jumps over the lazy dog</h2>
  <h3 class={heading}>The quick brown fox jumps over the lazy dog</h3>
  <h4 class={heading}>The quick brown fox jumps over the lazy dog</h4>
  <h5 class={heading}>The quick brown fox jumps over the lazy dog</h5>
  <h6 class={heading}>The quick brown fox jumps over the lazy dog</h6>
</i>

<u>
  <h1 class={heading}>The quick brown fox jumps over the lazy dog</h1>
  <h2 class={heading}>The quick brown fox jumps over the lazy dog</h2>
  <h3 class={heading}>The quick brown fox jumps over the lazy dog</h3>
  <h4 class={heading}>The quick brown fox jumps over the lazy dog</h4>
  <h5 class={heading}>The quick brown fox jumps over the lazy dog</h5>
  <h6 class={heading}>The quick brown fox jumps over the lazy dog</h6>
</u>
