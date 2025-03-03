<script lang="ts">
  import HomepageLinkList from '$lib/components/HomepageLinkList.svelte'
  import Main from '$lib/components/Main.svelte'
</script>


<svelte:head>
	<title>Josh Collinsworth</title>
	<meta property="og:title" content="Josh Collinsworth" />
	<meta data-key="description" property="og:description" name="description" content="Front-end developer, designer, teacher and writer">
  <meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<Main>
  <div class="intro">
    <div class="intro__headline">
      <h2>Hi, I’m Josh.</h2>
      
      <p class="subhead">
        I'm a front-end developer, designer, teacher,&nbsp;and&nbsp;writer.
      </p>
    </div>

    <div class="intro__body"> 
      <h3>Professionally:</h3>

      <p>
        Senior frontend developer at <a href="https://shopify.com">Shopify</a>;
        maker and designer of the word games <i>Quina</i>
        (<a href="https://apps.apple.com/us/app/quina/id1636895462">iOS</a>/<a href="https://play.google.com/store/apps/details?id=app.quina.collinsworth">Android</a>/<a href="https://quina.app">web</a>) 
        and <i>Hondo</i> 
        (<a href="https://apps.apple.com/us/app/hondo/id1636016699?platform=iphone">iOS</a>/<a href="https://play.google.com/store/apps/details?id=com.playhondo.www.twa">Android</a>/<a href="https://playhondo.com">web</a>);
        writer of the CSS Tricks series <a href="https://css-tricks.com/a-complete-beginners-guide-to-npm/">A Complete Beginner's Guide to NPM</a>;
	tech blog author (both <a href="/writing-and-speaking">freelance</a> and <a href="blog">hobbyist</a>);
        author of an open-source SvelteKit static blog starter
        (<a href="https://github.com/josh-collinsworth/sveltekit-blog-starter">repo</a>/<a href="https://sveltekit-static-starter.netlify.app">demo</a>);
        occasional freelance developer/designer.
      </p>

      <h3>Previously:</h3>
      <p>
        Senior JavaScript developer at <a href="https://aware3.com">Aware3</a>;
        front-end engineer at <a href="https://wpengine.com">WP Engine</a>;
        senior support lead at <a href="https://getflywheel.com">Flywheel</a>;
        course instructor for <a href="https://interfaceschool.com">AIM Code School</a>;
        graphic designer;
        seasoned bartender who makes a pretty good old fashioned.
      </p>

      <h3>Personally:</h3>
      <p>
        Hobby coder;
        font hoarder;
        husband;
        dad (jokes/bod);
        accessibility advocate;
        cold brew consumer;
        DEI accomplice;
        occasional public speaker;
        pun enthusiast;
        curious learner;
        dog person;
        Nintendo fan;
        musician/guitarist/hack pianist;
        Omaha, Nebraska resident;
        liberal abuser of semicolons.
      </p>
    
    </div>
    <HomepageLinkList />
  </div>
</Main>

<div class="big-boi">
  Wow, your screen is really wide.
</div>

<style lang="scss">
.intro {
  width: 100%;
  position: relative;
  margin-top: var(--wholeNote);
  max-width: var(--maxWidth);

  @media (min-width: vars.$xl) {
    width: 100%;
    max-width: unset;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 0 calc(var(--wholeNote) * 2);

    &__body {
      max-width: 30rem;
      grid-row: 1 / 3;
      grid-column: 2 / 3;

      p {
        margin: 0;
      }
    }
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: var(--quarterNote);

    @media (min-width: vars.$xs) {
      font-size: 3rem;
    }

    @media (min-width: vars.$md) {
      font-size: 4rem;
    }

    @media (min-width: vars.$lg) {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    margin: 0 0 calc(var(--quarterNote) / 2);
    position: relative;
    z-index: 1;

    ~ h3 {
      margin-top: var(--halfNote) ;
    }
  }

  .subhead {
    font-size: 1.4rem;
    margin: 0 0 4rem;
    max-width: 20em;
    line-height: 1.2;
    font-family: var(--headingFont);

    @media (min-width: vars.$md) {
      font-size: 1.7rem;
      margin-bottom: var(--wholeNote) ;
    }

    @media (min-width: vars.$xl) {
      font-size: 1.8rem;
    }
  }
}	

.big-boi {
  display: none;
  float: right;
  font-size: 0.6rem;
  font-family: var(--headingFont);

  @media (min-width: vars.$xxxl) {
    display: block;
  }
}
</style>
