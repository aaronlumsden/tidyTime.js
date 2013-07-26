$.fn.tidyTime = function (options) {

    var defaults = {
        before: '',
        after: '',
        periodOfDay: false
    };

    options = $.extend({}, defaults, options);

    return this.each(function (i, el) {

        var base = el;

        base.init = function () {


            if (!options.time) {
                d = new Date();
            } else {
                d = new Date('Tue Jul 23 2013 ' + options.time + ' GMT+0100 (GMT Daylight Time)');
            }




            base.runTime(d, el, options);



        };

        base.runTime = function (d, el, options) {



            function fomartTimeHourse(twenty4h) {

                var h = twenty4h % 12;


                if (h === 0) h = 12;

                return h < 10 ? h : h;

            }

            function is13($num) {

                if ($num == 13) {
                    return '1';
                } else {
                    return $num;
                }
            }


            var textbefore = '';
            var textafter = '';

            pastminutes = [2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 17, 18, 19, 21, 22, 23, 24, 26, 27, 28];
            tominutes = [32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 44, 47, 48, 49, 51, 52, 53, 54, 56, 57, 58, 60];
            pastOn = [5, 10, 20, 25];
            toOn = [35, 40, 50, 55];
            justgone = '';
            showmampm = '';
            var tidyTime = null;
            var h = d.getHours(); // => 9
            var m = d.getMinutes(); // =>  30
            var s = d.getSeconds(); // => 51

            var mytime = h + m;

            if (h < 12) {
                timeofday = 'in the morning';
            } else if (h < 17) {
                timeofday = 'in the afternoon';
            } else if (h < 22) {
                timeofday = 'in the evening';
            } else if (h < 24) {
                timeofday = 'at night';
            }

            h = fomartTimeHourse(h);

            var isInPast = jQuery.inArray(m, pastminutes) > -1;
            var isInFuture = jQuery.inArray(m, tominutes) > -1;

            var isPastOn = jQuery.inArray(m, pastOn) > -1;
            var istoOn = jQuery.inArray(m, toOn) > -1;




            if (istoOn) {
                thisum = 60 - m;
                thishr = h + 1;
                $tense = thisum + ' to ' + is13(thishr);
            } else if (isPastOn) {
                $tense = m + ' past ' + is13(h);
            } else if (isInPast) {
                $tense = m + ' minutes past ' + h;
            } else if (isInFuture) {
                thisum = 60 - m;
                thishr = h + 1;
                $tense = thisum + ' minutes to ' + is13(thishr);
            } else if (m == 29 || m == 30 || m == 31) {
                if (m == 31) {
                    justgone = 'just gone ';
                } else if (m == 29) {
                    justgone = 'nearly ';
                }
                $tense = justgone + 'half past ' + is13(h);
            } else if (m == 45 || m == 46) {
                if (m == 46) {
                    justgone = 'just gone ';
                }
                thishr = h + 1;
                $tense = justgone + 'a quarter to ' + is13(thishr);
            } else if (m == 14 || m == 15 || m == 16) {
                if (m == 16) {
                    justgone = 'just gone ';
                } else if (m == 14) {
                    justgone = 'nearly ';
                }
                $tense = justgone + 'a quarter past ' + is13(h);
            } else if (m === 0 && h == 12 || m == 1 && h == 12) {
                if (m == 1 & h == 12) {
                    justgone = 'just gone ';
                } else {
                    justgone = '';
                }
                $tense = justgone + h + ' noon';

            } else if (m === 0 || m == 1 || m == 59) {
                if (m == 1) {
                    justgone = 'just gone ';
                } else if (m == 59) {
                    justgone = 'nearly ';
                }
                $tense = justgone + h + ' o\'clock';
            }

            if (options.periodOfDay !== false) {
                showmampm = ' ' + timeofday;
            }

            if (m === 0 & h == 12 || m == 1 & h == 12) {
                showmampm = '';
            }



            $(el).html(options.before + $tense + showmampm + options.after);

            if (options.callback) {
                options.callback($(el), mytime, textbefore + $tense + showmampm + textafter);
            }




        };

        base.init();

    });

};