<template>
  <div class="container info-page">
    <h1>Legal</h1>

    <p class="statement">
      We care about your rights and your understanding of the legal framework of the services you use. So we are not hiding this information behind some out of the way link on our site. Here is a human-readable summary of the info in the Terms of Service and Privacy Policy.
    </p>

    <h4>Be a good human; don’t send us things that you don’t actually own.</h4>
    <p>We’re accepting of most definitions of <em>fair use</em>, but if the original copyright holders take issue with something you have published on our site, we have to take it down.</p>

    <h4>We strive to be good humans; we’ll NEVER reveal ANY personal information to a third-party.</h4>
    <p>That is simply not in our code. This project is open-source, so this statement is truly independently verifiable. We do share anonymized aggregated data with community leaders and businesses folks; like how many shows happened at a particular zip code and all the fun economic arguments for having Art, Theater and Music around, backed up by real data.
    </p>

    <h4>Please don’t spam us.</h4>
    <p>This is really reserved for blatant spammy stuff that is, alas, inevitable when one puts an open form up on the interwebs. But bear in mind, we’ll review the content you give us and we do reserve the right to take it down.
    </p>

    <h4>Please don’t scrape us.</h4>
    <p>As in write scripts that slurp up the data on the site. Be nice and we will give you stuff for free. Don’t slam our poor servers and increase our co$ts.
    </p>

    <h4>We ask for some rights to the things you give us, but we have really good reasons.</h4>
    <p> It’s mainly so we can promote your events everywhere; our web page, social media, printed materials, the works.
    </p>

    <h4>We do not "track" you with our cookies.</h4>
    <p>Cookies are bits of code that sit on your machine and remember the history of your site usage. We use our cookies to make your experience on our site easier and more intuitive. Like remembering your favorite setting; never spying on your activities.
    </p>

    <h4>We do use third-party software for analytics (specifically Google and Yandex) and these guys do track you... </h4>
    <p>We need them right now to get aggregated, anonymized user data. For example, we can see how many visitors we get per week, but we do not know your name or what you order at Starbucks. Or if you’ve abandoned Starbucks to go local. Aggregated data helps us when we apply for grants (we are a non-profit after all), and helps us set realistic goals for growing the site. The bits of code that these folks represent are basically on every website you visit these days. If you categorically have issues with them, we recommend using <a href="https://www.eff.org/privacybadger" target="_new">Privacy Badger</a>, <a href="https://www.ghostery.com/" target="_new">Ghostery</a>, or something similar.
    </p>

    <h4>We wrote a few custom scripts for similar analytical purposes.</h4>
    <p>These give us info on specific UI elements, like the "add to calendar" feature. This basically helps us to confirm that a specific feature is important, or if you think it’s garbage and we should abandon it for the site’s next iteration.
    </p>

    <p>
      That’s about it. The stuff below is pure legalese. Feel free to <a href="/contact">reach out</a> to us if you have any additional questions.
    </p>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Legal',
      meta: [
        { 'og:title': 'Legal - Infinite Sandbox' },
        { 'og:description': 'This is the legal page' }
      ]
    }
  }
</script>

<style scoped>
  .statement {
    font-weight: bold;
    font-size: 1.5em;
  }
  h4{
    font-family: "Open Sans", sans-serif;
    font-size: 1.1em;
    margin-bottom: 10px;
  }

  a:link, a:hover, a:visited {
    color: black;
  }
</style>
