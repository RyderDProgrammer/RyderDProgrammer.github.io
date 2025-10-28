## Overview

This repository contains 6 HTML tutorial assessments demonstrating various HTML concepts and techniques. All assessment code is displayed below for easy viewing.

---

## Assessment 1: HTML Text Basics

**Topics**: Basic HTML structure, headings, paragraphs, sections
**Skills**: Using `<h1>`, `<h2>`, `<p>`, unordered lists (`<ul>`), ordered lists (`<ol>`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Test: HTML text basics</title>
</head>
<body>
    <header>
        <h1>Test: HTML text basics</h1>
        <nav>
            <a href="index.html">Back to Home</a>
        </nav>
    </header>

    <main>
        <section>
            <h1>Basic HTML Animals</h1>

            <p>This is the first paragraph in our page. It introduces our animals.</p>

            <h2>The Llama</h2>

            <p>Our Llama is a big fan of list items. When she spies a patch of them on a web page, she will eat them like sweets, licking her lips as she goes.</p>

            <h2>The Anaconda</h2>

            <p>The crafty anaconda likes to slither around the page, traveling rapidly by way of anchors to sneak up on his prey.</p>
        </section>

        <section>
            <h1>Looking at lists</h1>

            <p>Turn the following list of my favorite vegetables into an unordered list.</p>

            <ul>
                <li>Cucumber</li>
                <li>Broccoli</li>
                <li>Asparagus</li>
                <li>Pepper</li>
            </ul>

            <p>Turn the following directions into an ordered list.</p>

            <ol>
                <li>First knock on the door</li>
                <li>When prompted, say the magic word</li>
                <li>Wait for at least 5 seconds</li>
                <li>Turn the handle and push</li>
            </ol>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Ryder DeBack - TCSS 460</p>
    </footer>
</body>
</html>
```

---

## Assessment 2: Advanced HTML Text

**Topics**: Text semantics, abbreviations, subscript/superscript, dates
**Skills**: Using `<abbr>`, `<blockquote>`, `<cite>`, `<sub>`, `<sup>`, `<time>`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Test: Advanced HTML text</title>
</head>
<body>
    <header>
        <h1>Test: Advanced HTML text</h1>
        <nav>
            <a href="index.html">Back to Home</a>
        </nav>
    </header>

    <main>
        <section>
            <h1>Advanced text semantics</h1>

            <p>Let's start with a quote:</p>

            <blockquote cite="Accessibility">
                <p>
                    <abbr title="Hypertext Markup Language">HTML</abbr>, Hypertext Markup Language is by default accessible, if used correctly.
                </p>
            </blockquote>

            <p><abbr title="Cascading Style Sheets">CSS</abbr> can also be used to make web pages more, or less, accessible.</p>

            <p>Chemical Formulae: H<sub>2</sub>O (Water), C<sub>2</sub>H<sub>6</sub>O (Ethanol).</p>

            <p>
                Dates: <time datetime="2019-12-25">December 25<sup>th</sup> 2019</time> (Christmas Day), <time datetime="2019-11-02">November 2<sup>nd</sup> 2019</time> (Día de los Muertos).
            </p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Ryder DeBack - TCSS 460</p>
    </footer>
</body>
</html>
```

---

## Assessment 3: Links

**Topics**: Hyperlinks, email links, external resources
**Skills**: Using `<a>` with `href`, `title`, `target`, and `mailto:` protocols

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Test: Links</title>
</head>
<body>
    <header>
        <h1>Test: Links</h1>
        <nav>
            <a href="index.html">Back to Home</a>
        </nav>
    </header>

    <main>
        <section>
            <h1>Information on Whales</h1>

            <p>
                For more information on our conservation activities and which Whales we study,
                see our <a href="https://en.wikipedia.org/wiki/Whale" title="Information on Blue Whales and Sperm Whales" target="_blank">Whales page</a>.
            </p>

            <p>
                If you want to ask our team more questions, feel free to
                <a href="mailto:whales@example.com?subject=Question%20about%20Whales" target="_blank">email us</a>.
            </p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Ryder DeBack - TCSS 460</p>
    </footer>
</body>
</html>
```

---

## Assessment 4: Images

**Topics**: Image embedding, accessibility
**Skills**: Using `<img>` with `src`, `alt`, `width`, and `height` attributes

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Test: Images</title>
</head>
<body>
    <header>
        <h1>Test: Images</h1>
        <nav>
            <a href="index.html">Back to Home</a>
        </nav>
    </header>

    <main>
        <section>
            <h1>Basic image embed</h1>

            <img src="https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/tasks/images/images/blueberries.jpg?raw=true"
                 alt="A pile of fresh blueberries"
                 width="615"
                 height="419" />
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Ryder DeBack - TCSS 460</p>
    </footer>
</body>
</html>
```

---

## Assessment 5: Audio and Video

**Topics**: Multimedia embedding, audio controls
**Skills**: Using `<audio>` element with `controls` and fallback content

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Test: Audio and Video</title>
</head>
<body>
    <header>
        <h1>Test: Audio and Video</h1>
        <nav>
            <a href="index.html">Back to Home</a>
        </nav>
    </header>

    <main>
        <section>
            <h1>Basic audio embed</h1>

            <audio src="https://github.com/mdn/learning-area/raw/refs/heads/main/html/multimedia-and-embedding/tasks/media-embed/media/audio.mp3" controls>
                Your browser does not support the audio element.
            </audio>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Ryder DeBack - TCSS 460</p>
    </footer>
</body>
</html>
```

---

## Assessment 6: Forms and Buttons

**Topics**: Form inputs, labels, buttons
**Skills**: Using `<form>`, `<input>`, `<label>`, and `<button>` elements

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Test: Forms and Buttons</title>
</head>
<body>
    <header>
        <h1>Test: Forms and Buttons</h1>
        <nav>
            <a href="index.html">Back to Home</a>
        </nav>
    </header>

    <main>
        <section>
            <h1>Forms and Buttons</h1>

            <form>
                <ul>
                    <li>
                        <label for="user-id">User ID</label>
                        <input type="text" id="user-id" name="user-id" />
                    </li>
                    <li>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </li>
                    <li>
                        <button type="submit">Log in</button>
                    </li>
                </ul>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Ryder DeBack - TCSS 460</p>
    </footer>
</body>
</html>
```

---
© 2025 - Educational project for TCSS 460
