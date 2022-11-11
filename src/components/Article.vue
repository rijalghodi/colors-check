<template>
  <article class="shrink md:w-4/5 lg:w-3/5 text-center md:text-left">
    <h1 class="text-5xl font-bold mb-8 md:mb-10">Welcome to Colors Check!</h1>
    <p class="mb-5 md:mb-8 pr-5 md:leading-8 tracking-wider">
      Here, you can test your color combination and save it into pallete
      collection!
    </p>
    <p class="mb-5 md:mb-8 pr-5 md:leading-8 tracking-wider">
      This test follows the 60-30-10 rule to choose colors. Acording to this
      rule, you just need <span class="bold">three colors</span> to style your
      web. 60 percent of your web must be covered by the
      <span class="bold">neutral color</span>. Use it for whitespaces and
      backgrounds. The next 30 percent is
      <span class="bold">primary color</span>, by where you style texts and
      lines. And the last 10 percent is <span class="bold">accent color</span>.
      It should be unique and user-attention attractor. It is used for buttons
      and important texts.
    </p>
    <p class="mb-5 md:mb-8 pr-5 md:leading-8 tracking-wider">
      Try to insert three custom colors following 60-30-10 rule to style this
      site. Apply, evaluate, and save it if you like. Feel free to use the
      collection of color palletes to open your ideas.
    </p>

    <div class="flex gap-3 justify-center md:justify-start">
      <button class="px-5 py-1 w-150 primary-button">Primary</button>
      <button class="px-5 py-1 w-150 secondary-button">Secondary</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "ArticleVue",
};
</script>
