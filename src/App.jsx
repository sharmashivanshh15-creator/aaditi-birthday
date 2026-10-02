import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowDown } from "lucide-react";
import "./App.css";

function App() {
  return (
    <main className="birthday-page">

      {/* Floating hearts and sparkles */}
      <div className="floating-hearts">
        <Heart className="heart heart-1" />
        <Heart className="heart heart-2" />
        <Heart className="heart heart-3" />
        <Heart className="heart heart-4" />

        <Sparkles className="sparkle sparkle-1" />
        <Sparkles className="sparkle sparkle-2" />
      </div>


      {/* =========================================
    HERO — CINEMATIC OPENING
========================================= */}

<section className="hero">

  {/* Floating hearts */}
  <div className="hero-hearts">
    <span>♡</span>
    <span>✦</span>
    <span>♡</span>
    <span>✧</span>
    <span>♡</span>
    <span>·</span>
  </div>

  <motion.div
    className="hero-content"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.25
        }
      }
    }}
  >

    {/* Small intro */}
    <motion.p
      className="hero-eyebrow"
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          filter: "blur(8px)"
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1.2
          }
        }
      }}
    >
      A little something made just for you
    </motion.p>


    {/* NAME */}
    <motion.h1
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: "blur(12px)"
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
    >
      Aaditi
    </motion.h1>


    {/* 18 */}
    <motion.div
      className="hero-number"
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.5,
          filter: "blur(15px)"
        },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
    >
      18
    </motion.div>


    {/* Subtitle */}
    <motion.p
      className="hero-subtitle"
      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.2
          }
        }
      }}
    >
      Today is all about you. ❤️
    </motion.p>


    {/* Button */}
    <motion.button
      className="hero-button"
      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1
          }
        }
      }}
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.97
      }}
      onClick={() =>
        document
          .getElementById("story")
          ?.scrollIntoView({
            behavior: "smooth"
          })
      }
    >
      Open Your Surprise
      <ArrowDown size={16} />
    </motion.button>

  </motion.div>


  {/* Scroll indicator */}
  <motion.div
    className="scroll-indicator"
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1
    }}
    transition={{
      delay: 3,
      duration: 1
    }}
  >
    <span>SCROLL</span>

    <motion.div
      animate={{
        y: [0, 8, 0]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ArrowDown size={15} />
    </motion.div>
  </motion.div>

</section>


      {/* ================================
          OUR STORY
      ================================= */}

      <section id="story" className="story-section">

        <motion.div
          className="story-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <p className="section-label">
            CHAPTER ONE
          </p>


          <h2>
            A little story
            <br />
            about <span>us.</span>
          </h2>


          <p className="story-intro">
            Some of my favorite memories aren't big moments.
            They're the tiny things that somehow became ours.
          </p>

        </motion.div>


        {/* TIMELINE */}

        <div className="timeline">


          {/* MEMORY 1 */}

          <motion.div
            className="memory memory-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="memory-dot"></div>

            <div className="memory-card">

              <p className="memory-number">
                01
              </p>

              <h3>
                The Beginning
              </h3>

              <p>
                It started so simply. A comment on her story “both of you look very cute” and somehow, that tiny moment became the beginning of something that would mean so much to me.
              </p>

            </div>

          </motion.div>


          {/* MEMORY 2 */}

          <motion.div
            className="memory memory-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="memory-dot"></div>

            <div className="memory-card">

              <p className="memory-number">
                02
              </p>

              <h3>
                The Little Things
              </h3>

              <p>
                I think I realised I liked you before I ever found the courage to say it. Then came that little poem I wrote for you, and somehow we ended up talking until 4 a.m. That night, you told me about your mom for the first time, and I remember feeling like I was getting to know a much deeper part of you.
              </p>

            </div>

          </motion.div>


          {/* MEMORY 3 */}

          <motion.div
            className="memory memory-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="memory-dot"></div>

            <div className="memory-card">

              <p className="memory-number">
                03
              </p>

              <h3>
                Everything In Between
              </h3>

              <p>
                We’ve had beautiful days, difficult days, and even a three-month chapter where we had to find our way through being apart. It wasn’t easy. But through all of it, I got to watch you grow becoming more confident, stronger, doing better for yourself, academically and socially, and becoming more and more the person you’re meant to be..
              </p>

            </div>

          </motion.div>


          {/* MEMORY 4 */}

          <motion.div
            className="memory memory-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="memory-dot"></div>

            <div className="memory-card">

              <p className="memory-number">
                04
              </p>

              <h3>
                And Then There Was You
              </h3>

              <p>
                Somewhere along the way, you became so much more than someone I loved. You became my safe place, my light on the difficult days, and one of the greatest gifts life has ever given me. Every moment with you feels like a memory worth keeping. You mean the world to me
              </p>

            </div>

          </motion.div>


        </div>

      </section>
            {/* ================================
          CHAPTER TWO — 18 THINGS
      ================================= */}

      <section className="things-section">

        <motion.div
          className="things-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <p className="section-label">
            CHAPTER TWO
          </p>

          <h2>
            18 little things
            <br />
            I love <span>about you.</span>
          </h2>

          <p>
            I could probably keep going forever...
            but for now, here's eighteen.
          </p>

        </motion.div>


        <div className="things-grid">


          {/* 01 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>01</span>

            <h3>
              The way you smile.
            </h3>

            <p>
              Somehow it makes even the most ordinary
              moments feel a little brighter.
            </p>

          </motion.div>


          {/* 02 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>02</span>

            <h3>
              Your kindness.
            </h3>

            <p>
              The way you care about people,
              even when nobody asks you to.
            </p>

          </motion.div>


          {/* 03 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>03</span>

            <h3>
              Tumhare New New Muh.
            </h3>

            <p>
              The way you make those cute 
              cute faces while we are on vc.
            </p>

          </motion.div>


          {/* 04 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>04</span>

            <h3>
              The way you care.
            </h3>

            <p>
              You have this beautiful way of making
              people feel important especially me.
            </p>

          </motion.div>


          {/* 05 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>05</span>

            <h3>
              Tumhari Aawaz.
            </h3>

            <p>
              Tumhari Daant bhi pyaari lagti hai
              All thanks to that beautiful voice of
              yours baby, it relaxes my soul to the core.
            </p>

          </motion.div>


          {/* 06 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>06</span>

            <h3>
              The way you make me laugh.
            </h3>

            <p>
              I mean OMG babyy 
              Tumhari cuteness is the reason ki main hasta bhi hunn
              Sometimes intentionally.
              Sometimes definitely not.
            </p>

          </motion.div>


          {/* 07 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>07</span>

            <h3>
              Your eyes.
            </h3>

            <p>
              Sometimes I look at you and forget what I was about to say. 
              Your eyes really do have that effect on me.
            </p>

          </motion.div>


          {/* 08 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>08</span>

            <h3>
              Your little moods.
            </h3>

            <p>
              Even your random moods, 
              your tiny complaints and your dramatic moments have somehow
               become some of my favourite things.
            </p>

          </motion.div>


          {/* 09 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>09</span>

            <h3>
              Your hugs.
            </h3>

            <p>
              The kind that make everything else
              disappear for a moment.
            </p>

          </motion.div>


          {/* 10 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>10</span>

            <h3>
              Your silly side.
            </h3>

            <p>
              I love the version of you that is completely unserious, 
              goofy and just being yourself.
            </p>

          </motion.div>


          {/* 11 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>11</span>

            <h3>
              The way you grow
            </h3>

            <p>
              Watching you grow into the person 
              you are becoming has been one of the most beautiful things
               I've had the privilege of seeing.
            </p>

          </motion.div>


          {/* 12 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>12</span>

            <h3>
              Your dreams.
            </h3>

            <p>
              I love hearing you talk about the things
              you want from life.
            </p>

          </motion.div>


          {/* 13 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>13</span>

            <h3>
              Your ambition.
            </h3>

            <p>
              The person you're becoming makes me
              incredibly happy to watch.
            </p>

          </motion.div>


          {/* 14 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>14</span>

            <h3>
              Your laugh.
            </h3>

            <p>
              One of those sounds I could listen to
              way too many times.
            </p>

          </motion.div>


          {/* 15 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>15</span>

            <h3>
              The way you listen.
            </h3>

            <p>
              You make even the smallest things
              I say feel worth hearing.
            </p>

          </motion.div>


          {/* 16 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>16</span>

            <h3>
              The way you understand me
            </h3>

            <p>
              Sometimes you understand what I'm trying to say even before
              I know how to say it myself.
            </p>

          </motion.div>


          {/* 17 */}

          <motion.div
            className="thing-card"
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span>17</span>

            <h3>
              The person you are.
            </h3>

            <p>
              Not just how you look,
              but everything that makes you you.
            </p>

          </motion.div>


          {/* 18 */}

          <motion.div
            className="thing-card special-card"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >

            <Heart
              size={25}
              fill="currentColor"
            />

            <span>18</span>

            <h3>
              Simply... you.
            </h3>

            <p>
              Because after everything,
              you're still the person I'd choose
              to have beside me.
            </p>

          </motion.div>


        </div>

      </section>

{/* =========================================
    CHAPTER THREE — MEMORIES
========================================= */}

<section className="memory-gallery">

  <motion.div
    className="memory-gallery-header"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >

    <p className="section-label">
      CHAPTER THREE
    </p>

    <h2>
      Little moments,
      <br />
      <span>big memories.</span>
    </h2>

    <p className="memory-gallery-intro">
      Some moments are small,
      <br />
      but somehow they stay with us forever.
    </p>

  </motion.div>


  <div className="memory-grid">

    {/* PHOTO 1 */}
    <motion.div
      className="memory-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <img
        src="/photos/IMG_1560.JPG"
        alt="A memory"
      />

      <p>One of my favorite days.</p>
    </motion.div>


    {/* PHOTO 2 */}
    <motion.div
      className="memory-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <img
        src="/photos/IMG_1561.JPG"
        alt="A memory"
      />

      <p>A moment worth remembering.</p>
    </motion.div>


    {/* PHOTO 3 */}
    <motion.div
      className="memory-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <img
        src="/photos/IMG_1562.JPG"
        alt="A memory"
      />

      <p>Just us being us.</p>
    </motion.div>


    {/* PHOTO 4 */}
    <motion.div
      className="memory-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <img
        src="/photos/IMG_1563.JPG"
        alt="A memory"
      />

      <p>A memory I never want to forget.</p>
    </motion.div>


    {/* PHOTO 5 */}
    <motion.div
      className="memory-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <img
        src="/photos/IMG_1564.jpg"
        alt="A memory"
      />

      <p>And many more to come.</p>
    </motion.div>

  </div>

</section>

           {/* =========================================
    CHAPTER FOUR — LETTER
========================================= */}

<section className="letter-section">

  <motion.div
    className="letter-wrapper"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >

    <p className="section-label">
      CHAPTER FOUR
    </p>

    <h2 className="letter-heading">
      A letter
      <br />
      <span>for Aaditi.</span>
    </h2>

    <motion.div
      className="letter-card"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 1 }}
    >

      <div className="letter-top">
        <span>04 · 10 · 2026</span>
        <Heart size={18} fill="currentColor" />
      </div>

      <div className="letter-body">

        <p className="letter-greeting">
          My love,
        </p>

        <p>
          You are, in the simplest words I can say, one of the most beautiful things that has ever happened to me.

I love you in so many different ways that sometimes it feels impossible to put just one meaning behind the word love. I love your smile, your voice, your little habits, your way of talking, your random moods, the way you laugh, and even the little things you probably don’t realise I notice..
        </p>

        <p>
          But more than all of that, I love you for who you are.

I adore the person you are your heart, your kindness, your softness, your strength, and the way you keep growing into an even more beautiful version of yourself. Watching you become more confident, more independent and more sure of yourself makes me incredibly proud.
        </p>

        <p className="letter-highlight">
          You mean so much more to me than just being the person I love.

You are my comfort.
My happiness.
My favourite person.
My light on the days that feel a little darker..
        </p>

        <p>
          There are so many moments when I just look at you and think about how lucky I am that somehow, out of all the people in this world, I got you.

You make the smallest things feel special. You make ordinary days better just by being a part of them. And there is something about having you in my life that makes everything feel a little warmer, a little happier, and a lot more meaningful.
        </p>

        <p>
          You are my greatest gift from God, and I don’t think I’ll ever stop being grateful for you.

So on your eighteenth birthday, I don’t just want to wish you happiness.

I want to be there for it.

I want to see you achieve everything you dream about. I want to watch you grow, laugh with you, annoy you, make memories with you, and love you through every version of yourself that is yet to come.

Because if there’s one thing I’m certain about, it’s this

I adore you.
I choose you.
I need you.
And I love you more than I could ever fit into a letter.

Happy 18th, my love.

You will always have a very special place in my heart.
        </p>

        <div className="letter-signature">
          <span>Always yours,</span>
          <strong>Shivansh ❤️</strong>
        </div>

      </div>

    </motion.div>

  </motion.div>

</section>
            {/* ================================
          CHAPTER FIVE — OUR SONG
      ================================= */}

      <section className="song-section">

        <motion.div
          className="song-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <p className="section-label">
            CHAPTER FIVE
          </p>

          <div className="vinyl-wrapper">

            <motion.div
              className="vinyl"
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="vinyl-center">
                <Heart
                  size={24}
                  fill="currentColor"
                />
              </div>
            </motion.div>

          </div>


          <p className="song-caption">
            Our little soundtrack
          </p>

          <h2>
            One song.
            <br />
            <span>A thousand memories.</span>
          </h2>

          <p className="song-description">
            There's always that one song that somehow
            starts sounding different once it becomes
            associated with someone you love.
          </p>


          <button
            className="play-button"
            onClick={() => {
              const audio = document.getElementById("our-song");

              if (audio.paused) {
                audio.play();
              } else {
                audio.pause();
              }
            }}
          >
            <span className="play-icon">
              ▶
            </span>

            Play our song
          </button>


          <audio
            id="our-song"
            loop
            src="/music/Samjhawan Humpty Sharma Ki Dulhania 128 Kbps.mp3"
          />

        </motion.div>

      </section>
{/* =========================================
    FINAL CHAPTER — AADITI'S 18TH
========================================= */}

<section className="final-section">

  {/* FLOATING LIGHTS */}

  <div className="final-particles">

    <span className="particle p1">✦</span>
    <span className="particle p2">·</span>
    <span className="particle p3">✧</span>
    <span className="particle p4">·</span>
    <span className="particle p5">✦</span>
    <span className="particle p6">·</span>
    <span className="particle p7">✧</span>
    <span className="particle p8">·</span>

  </div>


  <motion.div
    className="final-content"
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
      amount: 0.45
    }}
  >

    {/* SECTION LABEL */}

    <motion.p
      className="section-label"
      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },

        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1
          }
        }
      }}
    >
      THE FINAL CHAPTER
    </motion.p>


    {/* 18 */}

    <motion.div
      className="birthday-number cinematic-eighteen"
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.3,
          filter: "blur(15px)"
        },

        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",

          transition: {
            duration: 1.6,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
    >
      <span>18</span>
    </motion.div>


    {/* SMALL LINE */}

    <motion.p
      className="final-small"
      variants={{
        hidden: {
          opacity: 0
        },

        visible: {
          opacity: 1,

          transition: {
            duration: 1,
            delay: 1.3
          }
        }
      }}
    >
      A new chapter begins
    </motion.p>


    {/* BIRTHDAY TITLE */}

    <motion.h2
      variants={{
        hidden: {
          opacity: 0,
          y: 40
        },

        visible: {
          opacity: 1,
          y: 0,

          transition: {
            duration: 1.2,
            delay: 1.6
          }
        }
      }}
    >
      HAPPY
      <br />

      <span>BIRTHDAY</span>
      <br />

      AADITI
    </motion.h2>


    {/* HEART */}

    <motion.div
      className="final-heart"
      variants={{
        hidden: {
          opacity: 0,
          scale: 0
        },

        visible: {
          opacity: 1,
          scale: 1,

          transition: {
            duration: 0.8,
            delay: 2.5,
            type: "spring"
          }
        }
      }}
    >
      <Heart
        size={30}
        fill="currentColor"
      />
    </motion.div>


    {/* MESSAGE */}

    <motion.p
      className="final-message"
      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },

        visible: {
          opacity: 1,
          y: 0,

          transition: {
            duration: 1,
            delay: 2.8
          }
        }
      }}
    >
      Here's to eighteen,
      <br />

      and to everything beautiful
      <br />

      that's waiting for you.
    </motion.p>


    {/* LAST BUTTON */}

    <motion.button
      className="last-button"

      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },

        visible: {
          opacity: 1,
          y: 0,

          transition: {
            duration: 1,
            delay: 3.4
          }
        }
      }}

      onClick={() => {
        const lastMessage =
          document.getElementById("last-message");

        if (lastMessage) {
          lastMessage.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }}
    >
      One last thing...

      <Heart
        size={16}
        fill="currentColor"
      />
    </motion.button>

  </motion.div>

</section>


{/* =========================================
    FINAL MESSAGE
========================================= */}

<section
  id="last-message"
  className="last-message-section"
>

  <motion.div
    className="last-message-content"

    initial={{
      opacity: 0,
      y: 50
    }}

    whileInView={{
      opacity: 1,
      y: 0
    }}

    viewport={{
      once: true
    }}

    transition={{
      duration: 1.2
    }}
  >

    <Heart
      className="last-heart"
      size={32}
      fill="currentColor"
    />


    <p className="section-label">
      JUST ONE MORE THING
    </p>


    <h2>
      And if there is one thing 
      <br />
      I want you to remember from all of this…
    </h2>


    <p className="last-text">

      It’s that you are deeply, endlessly loved..

      <br />
      <br />

      I hope you always know how precious you are to me, how much I adore you, and how grateful I am that I get to call you mine.

      <br />
      <br />

      You are my favourite person, my happiest place, and one of the greatest gifts my life has ever given me.

    </p>


    <div className="last-signature">

      <span>
        Happy 18th, Aaditi.
      </span>

      <strong>
        I love you. ❤️
      </strong>

    </div>


    <div className="end-mark">
      ✦
    </div>

  </motion.div>

</section>

    </main>
  );
}

export default App;