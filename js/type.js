$(function () {
    $(".typed").typed({
        strings: ["Reparation af mobil og tablet",
                  "Reparation hos dig eller i butik",
                  "Vi klarer det inden for 48 timer",
                  "... som regel inden for en time!",
                  "2 års garanti på alt vi laver"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 20,
        // time before typing starts
        startDelay: 100,
        // backspacing speed
        backSpeed: 10,
        // time before backspacing
        backDelay: 2000,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });
});
