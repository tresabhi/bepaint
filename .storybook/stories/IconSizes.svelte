<script lang="ts">
  import { css } from '@stitches/core';
  import { createIconSizes, CSSUnit, IconSizeToken } from '../../src';
  import gearIcon from '../assets/icons/gear.svg';
  import speakerLoudIcon from '../assets/icons/speaker-loud.svg';

  export let unit: CSSUnit = 'rem';
  $: iconSizes = createIconSizes({ unit });

  const type = (token: IconSizeToken) => {
    return css({
      width: iconSizes[token],
    })();
  };
</script>

<p>Icons</p>
<img class={type('icon')} src={gearIcon} alt="gear icon" />
<img class={type('icon')} src={speakerLoudIcon} alt="speaker loud icon" />

<p>Major icons</p>
<img class={type('iconMajor')} src={gearIcon} alt="gear icon" />
<img class={type('iconMajor')} src={speakerLoudIcon} alt="speaker loud icon" />

<p>Minor icons</p>
<img class={type('iconMinor')} src={gearIcon} alt="gear icon" />
<img class={type('iconMinor')} src={speakerLoudIcon} alt="speaker loud icon" />

<h1>
  Icon in text
  <img class={type('iconInText')} src={gearIcon} alt="gear icon" />
  fits all types of texts
</h1>
<h2>
  This works since the icon
  <img
    class={type('iconInText')}
    src={speakerLoudIcon}
    alt="speaker loud icon"
  />
  is always 80% of <code>1em</code> (the parent font size)
</h2>
<h3>
  Which is a relative unit
  <img class={type('iconInText')} src={gearIcon} alt="gear icon" />
  of the parent font size
</h3>
<p>
  Though you may need to mess with the baseline styles
  <img
    class={type('iconInText')}
    src={speakerLoudIcon}
    alt="speaker loud icon"
  />
  as the icon appears above the text
</p>
