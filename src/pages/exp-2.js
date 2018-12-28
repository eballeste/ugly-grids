import React from 'react'

import Layout from 'components/layout'
import Header from 'components/header'

import styles from 'styles/pages/exp-2.module.scss'

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <Header link='/'><h1>Responsive Magazine Layout</h1></Header>
      <section className={styles.description}>
        <div className={styles.description__text}><p>Build a responsive magazine layout based on an <a href="https://www.behance.net/gallery/51296679/Computer-Arts-Magazine-layout-design" rel="noopener noreferrer" target="_blank">art direction mockup</a>.</p></div>
      </section>
      <main className={styles.magazine}>
        <div className={styles.magazine__header}><h2><span><span>1</span><span>2</span></span> rules <span><span>of type</span></span></h2></div>
        <div className={styles.magazine__left}>
          <div className={`${styles.magazine__block} ${styles.magazine__first}`}>
            <h3><span>1.</span> Accurate texts</h3>
            <p>In the beginning, the author creates the words, but the words are without form. It is the work of the typographer to give the words physical shape and make sure they are literally accurate and that all iniquities have been blotted out before the words can be given typographic structure. If the text is not right then the typography cannot be right and if the typography is not right then life will become difficult for the reader. Typographers should commit to presenting works in an unambiguous manner, helpful to the reader, and to make the communication of the author’s ideas easily understood, direct and pleasant.</p>
          </div>
          <div className={styles.magazine__block}>
            <h3><span>2.</span> Consistency</h3>
            <p>Set your typographic house in order to ensure consistency of style in composition so the words make both visual and literal sense: inconstant composition will only serve to set the readers’ teeth on edge. Base textual treatments on sound typographic governances and stick to those decisions throughout: spellings, headings, captions, numbered lists all need to be treated with uniformity. An elementary example: (a) and (b) must be followed by (c) not (C). A badly organised and inconsistent design can obscure – or even change – the meaning of the text, while a well laid-out design will make sense of the text.</p>
          </div>
          <div className={`${styles.magazine__block} ${styles.magazine__bar}`}>
            <h3><span>3.</span> Dropped initials</h3>
            <p>Don’t leave your dropped initials crying in the wilderness, rather they should sit snuggly with the ensuing text. Letters with a projecting left-hand stem (T, V, W, Y) should overhang into the margin, and where an upper-case J has a large bowl, also allow this to project into the margin. Where the initial is the first letter of a word, avoid a gap between the initial and following letters to make a neat fit. The beginnings of the second and third lines should range clear of the initial. If a quotation mark is required before a drop initial, it too should be set in the margin. If used correctly, ‘dropped’ and ‘stand-up’ initials add visual interest to a text; if badly positioned they are typographic abominations.</p>
          </div>
          <div className={styles.magazine__block}>
            <h3><span>4.</span> Effects</h3>
            <p>Always be disciplined in your use of effects such as tints, blends, drop shadows and other horrors. Don’t be led into typographic temptation and deliver your design from the evil of too many graphic gimmicks in a single document. Don’t sacrifice your work at the altar of PostScript effects or your design will simply become more difficult to read and will be judged as amateurish. Good and faithful typography will speak for itself, but if you do feel the urge to use typographic special effects, be restrained in your application, make sure they are fit for purpose and remember that, almost always, less is more.</p>
          </div>
          <div className={styles.magazine__block}>
            <h3><span>5.</span> Figures</h3>
            <p>Mixing old-style and modern figures in the same text is a cardinal typographic sin; and the wage of sin is design death. Reserve modern figures for which they were designed – tabular matter – and banish them from continuous text where they overpower the narrative and destroy the ‘colour’ of the page. Old-style figures are numerals that resemble a typeface’s lower-case characters in that they have an x-height and ascenders and descenders, as opposed to lining figures, which all match the height of the caps. Old-style figures harmonize with and sit far more comfortably with upper and lower-case text.</p>
          </div>
          <div className={`${styles.magazine__block} ${styles.magazine__pink}`}>
            <h3><span>6.</span> Ligatures</h3>
            <p>Ligatures are not merely typographic novelties; they are both requisite and necessary. Don’t forget to use these special characters because ligatures look better than setting the same character combinations individually, they help achieve an even colour on the page, and solve the problem of character combinations jost-ling each other for space. However, there is a time and place for everything and ligatures should be avoided if you are going to adjust the overall letter-spacing of the text. This is because a ligature is a single character, and if you adjust the overall letter-spacing the internal spacing of the ligature will remain unchanged. If the ligatures don’t match the overall spacing of the your text, don’t use them.</p>
          </div>
        </div>
        <div className={styles.magazine__right}>
          <div className={`${styles.magazine__block} ${styles.magazine__bar}`}>
            <h3><span>7.</span> Punctuation</h3>
            <p>When it comes to punctuation we have all done things we ought not to have done: and hyphens and dashes in particular are more sinned against than sinning, the unfortunate victims of typographic abuse. The hyphen (-) is used in compounds to clarify the unification of sense (‘a well-known statesman’) or where a noun and adjective are used attributively (‘a poverty-stricken family’). Dashes have a wholly different function: the en-dash (–) is used to donate a span (pp 10–52) or connect two terminal dates (the 1939–45 war). Em-dashes — an example of which is given here — are used to show the words they enclose are to be read parenthetically. </p>
          </div>
          <div className={styles.magazine__block}>
            <h3><span>8.</span> Small capitals</h3>
            <p>Always use proper small caps rather than dissembling and cloaking with simulated small capital letters. True small caps were specifically created to tone with the weight, colour and proportion of the upper-case letters and to sit comfortably with the lower-case letters. On the other hand, computer-generated capitals of a smaller size are invariably too light and too narrow and lack the essential design features, such as adjustments to proportions, stroke weights, length of serifs and other details that contribute to the legibility and aesthetics of small caps. It’s a subtle sophistication that separates the typographic wheat from the chaff.</p>
          </div>
          <div className={`${styles.magazine__block} ${styles.magazine__pink}`}>
            <h3><span>9.</span> Spacing</h3>
            <p>Using inappropriate sizes of type for the measure is a common typographic transgression that will provoke your readers’ wrath. Uneven and widely spaced words are the result of too large a type size on too short a measure; too small a type size on too long a measure makes it difficult for the eye to follow. In all circumstances words must be evenly spaced and close setting is to be preferred. Words should only be as far apart as the width of the letter ‘I’ and there should be more space between the lines than the words. Double spacing after a full-point is an abomination of typists and should have no place in typography and so only the space of the line should appear after the full-point.</p>
          </div>
          <div className={`${styles.magazine__block} ${styles.magazine__bar}`}>
            <h3><span>10.</span> Typeface selection</h3>
            <p>Tame the devices and desires of clients for hideous and quirky typefaces, steer them instead towards the restrained and legible. Unholy mixes of typefaces should be avoided with greater reliance placed on design families. Choosing typefaces with an extended family is both logical and helpful as it is an easy way to simplify the typeface selection process. It is also a safe and effective way of mixing typefaces while keeping a client’s project looking clean and uncluttered. Persuade clients that using type’s full armory of upper and lower-case, caps, upper and upper-case italic, italic caps, upper and upper-case bold, bold caps and true small caps is a better alternative to introducing yet another font into the text. </p>
          </div>
          <div className={`${styles.magazine__block} ${styles.magazine__pink}`}>
            <h3><span>11.</span> Underlining</h3>
            <p>There should be a total proscription on underlining words to indicate emphasis. This is an archaic habit practiced by typists in the days when manual typewriters offered no other facility for emphasis. It is a naïve habit, which also looks ugly as it simply severs the descending characters: don’t be caught transgressing. There are so many other tools in the typographic box that can be used to magnify the words: consider using bold, caps, small caps or italics to draw attention to a word depending on the circumstances. In addition varying the type size, making good use of white space and coloured text can also be considered. </p>
          </div>
          <div className={styles.magazine__quote}>
            <p>Don’t sacrifice your work at the altar of PostScript effects or your design will simply become more difficult to read</p>
          </div>
          <div className={`${styles.magazine__block} ${styles.magazine__last}`}>
            <h3><span>12.</span> Widows and orphans</h3>
            <p>Have mercy on widows and orphans. A widow is a very short line – usually one word, or the end of a hyphenated word – at the end of a paragraph or column. A widow is considered poor typography because it leaves too much white space between paragraphs or at the bottom of a page. This interrupts the reader’s eye, diminishes readability and destroys the colour of the page. But widows can once again be reunited with the text either by some judicious editing or subtly adjusting the word space. Like a widow, an orphan is a single word, part of a word or very short line, except it appears at the beginning of a column or a page. This results in poor horizontal alignment at the top of the column or page. Orphans can be brought back in line by the same means as widows.</p>
          </div>
        </div>
      </main>
    </div>
  </Layout>
)

export default IndexPage
