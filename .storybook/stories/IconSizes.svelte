<script>
  import { css } from '@stitches/core';
  import { createFontSizes, createIconSizes } from '../../src';
  import gearIcon from '../assets/icons/gear.svg';
  import speakerLoudIcon from '../assets/icons/speaker-loud.svg';

  $: iconSizes = createIconSizes();
  const fontSizes = createFontSizes();

  const type = (token) =>
    css({
      width: iconSizes[token],
    });
  const labelStyles = css({ fontSize: fontSizes.label });

  const textType = (token) =>
    css({
      fontSize: fontSizes[token],
    });
</script>

<p class={labelStyles()}>Icons</p>
<img class={type('icon')} src={gearIcon} alt="gear icon" />
<img class={type('icon')} src={speakerLoudIcon} alt="speaker loud icon" />

<p class={labelStyles()}>Major icons</p>
<img class={type('iconMajor')} src={gearIcon} alt="gear icon" />
<img class={type('iconMajor')} src={speakerLoudIcon} alt="speaker loud icon" />

<p class={labelStyles()}>Minor icons</p>
<img class={type('iconMinor')} src={gearIcon} alt="gear icon" />
<img class={type('iconMinor')} src={speakerLoudIcon} alt="speaker loud icon" />

<h1 class={textType('heading1')}>
  Icon in text
  <img class={type('iconInText')} src={gearIcon} alt="gear icon" />
  fits all types of texts
</h1>
<h2 class={textType('heading2')}>
  This works since the icon
  <img
    class={type('iconInText')}
    src={speakerLoudIcon}
    alt="speaker loud icon"
  />
  is <code class={textType('codeInline')}>1em</code>
</h2>
<h3 class={textType('heading3')}>
  Which is a relative unit
  <img class={type('iconInText')} src={gearIcon} alt="gear icon" />
  of the parent font size
</h3>
<p class={textType('paragraph')}>
  Though you may need to mess with the baseline styles
  <img
    class={type('iconInText')}
    src={speakerLoudIcon}
    alt="speaker loud icon"
  />
  as the icon appears above the text
</p>
