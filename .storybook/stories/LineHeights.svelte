<script lang="ts">
  import { css } from '@stitches/core';
  import {
    createLineHeights,
    LineHeightToken,
  } from '../../src/creators/createLineHeights';
  import Break from '../lib/Break.svelte';

  const lineHeights = createLineHeights();

  const type = (token: LineHeightToken) =>
    css({
      lineHeight: lineHeights[token],
    })();
</script>

<p class={type('single')}>
  <b>Single</b>: Amet aliquip exercitation duis ut incididunt consectetur
  aliquip ipsum. Consequat eu laborum adipisicing quis reprehenderit cillum aute
  minim proident exercitation deserunt labore. Amet quis id occaecat cillum
  fugiat Lorem culpa esse officia minim amet id. Nostrud fugiat ea velit
  excepteur consequat culpa occaecat proident ad do non cillum.. Cillum sint
  nisi officia officia ullamco aliqua sunt est cillum mollit quis culpa ullamco
  irure. Proident fugiat esse incididunt nulla sit minim. Eu mollit eu sint sint
  dolore incididunt. Pariatur cillum cupidatat Lorem enim. Est enim laboris
  occaecat nulla velit amet in. Officia consectetur do sit sit adipisicing do
  consectetur. .Officia aliquip sit amet sit dolore dolore nisi occaecat dolor
  commodo reprehenderit exercitation excepteur adipisicing. Occaecat et culpa
  sunt eiusmod tempor irure reprehenderit sit culpa elit consectetur. Proident
  ad fugiat esse et reprehenderit officia exercitation non et tempor. Fugiat sit
  adipisicing enim esse tempor reprehenderit ea veniam proident aliquip elit.
  Anim laboris incididunt magna nostrud ea non pariatur dolore ad deserunt
  occaecat adipisicing irure dolor. In Lorem qui ex est. Ad et irure non aute
  dolor irure ad aute ipsum incididunt enim laboris minim ex laboris.
</p>

<Break />

<p class={type('compact')}>
  <b>Compact</b>: Duis cupidatat non laborum ex veniam incididunt elit aliqua
  enim cupidatat laboris culpa commodo sunt laboris. Sint aliqua veniam ut
  occaecat labore elit et. Sit consequat irure voluptate proident et sit est
  eiusmod pariatur laboris cupidatat est. Proident enim cupidatat do id aute eu.
  Ex do quis mollit reprehenderit culpa dolor ipsum minim qui Lorem et
  reprehenderit magna culpa.. Lorem aliqua excepteur magna reprehenderit tempor
  cillum. Amet sit aute id ea Lorem. Sit ea adipisicing elit. Cupidatat fugiat
  proident ex voluptate cupidatat sit magna ea enim. Pariatur in veniam qui.
  Labore aliquip dolore eiusmod adipisicing veniam commodo elit magna elit
  pariatur commodo. Ullamco consectetur fugiat elit voluptate voluptate in magna
  dolor proident ea culpa irure nisi amet dolore. .Nulla consectetur officia ex
  sunt qui veniam magna nulla tempor fugiat officia dolore consequat. Excepteur
  exercitation quis enim veniam ex excepteur aute id id sit veniam et irure.
  Fugiat cupidatat laborum et reprehenderit commodo anim aliqua. Irure sint
  pariatur do aliqua.
</p>

<Break />

<p class={type('comfortable')}>
  <b>Comfortable</b>: Reprehenderit tempor nostrud fugiat laborum. Enim dolore
  ex et est excepteur officia pariatur do cupidatat consectetur dolore. Aute
  mollit adipisicing incididunt ea. Veniam mollit sit id qui eiusmod qui enim
  nostrud in. Velit laboris cupidatat qui deserunt cupidatat nisi sint eu velit
  nulla proident. Ipsum nulla anim non. Mollit eiusmod qui non ea nisi Lorem..
  In aliquip exercitation ullamco consectetur. Anim do labore anim duis. Et esse
  consectetur non enim reprehenderit tempor ex et excepteur nulla tempor
  aliquip. Commodo proident sunt fugiat officia do minim magna minim nulla
  Lorem. .Minim cillum tempor ad velit consequat proident cillum. Ex ipsum id
  minim do aute occaecat. Voluptate adipisicing in ex elit deserunt commodo
  deserunt Lorem ea ullamco nulla minim proident. Nostrud non occaecat
  reprehenderit amet voluptate amet laborum.
</p>

<Break />

<p class={type('double')}>
  <b>Double</b>: Amet labore laborum ea quis in nisi mollit ad sint ea laboris
  cupidatat do. Voluptate culpa ipsum sint pariatur et Lorem amet pariatur elit
  Lorem tempor. Duis anim amet eiusmod consequat amet aliquip eiusmod elit
  aliquip irure. Velit adipisicing minim anim magna non anim laboris laborum
  magna enim irure cupidatat tempor mollit consectetur. Culpa aliqua aliqua
  incididunt ex do veniam labore ut et. Fugiat in dolore labore eiusmod. Elit
  pariatur consequat tempor voluptate cupidatat tempor duis officia nisi commodo
  sit laborum. In anim consectetur aliquip eiusmod cillum enim et proident..
  Reprehenderit exercitation esse consectetur incididunt ipsum culpa fugiat
  aliqua sunt voluptate proident nulla pariatur. Sunt est magna exercitation
  laborum labore cupidatat nisi laborum mollit duis aliqua. In enim deserunt eu.
  Ad magna consectetur tempor aute. Reprehenderit id cupidatat et sint do veniam
  adipisicing exercitation minim. Non quis elit non est id id ullamco non eu.
  .Et eiusmod minim qui pariatur eu et magna minim velit nostrud dolor deserunt
  nisi ipsum ad. Laborum mollit ex excepteur id eiusmod excepteur aute do veniam
  esse aliquip fugiat in enim consequat. Reprehenderit aliquip anim mollit anim
  reprehenderit in ea enim. Labore aliquip minim duis do esse incididunt laboris
  ea aliquip id consequat consectetur proident labore laborum.
</p>
