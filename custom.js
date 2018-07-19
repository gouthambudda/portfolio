/*jslint browser: true*/
/*global $, jQuery, alert,global window*/
jQuery(document).ready(function ($) {
    "use strict";
    $(window).load(function () {
        setTimeout(function () {
            $('.se-pre-con').fadeOut('slow', function () {
                return;
            });
        }, 2000);
    });
});

$(document).ready(function () {
    "use strict";
    $('.loading').lettering();
    
});
setTimeout(function () {
    "use strict";
    $('.second').fadeIn(100);
}, 4000);

var titles = ['EDI systems',
                'Eatrev',
                 'Photography']
var sites = ['http://www.edisystemsinc.com/index.html',
               'http://www.eatrev.com',
                'http://photography.buddagoutham.com/']
var descriptions = ['EDI Systems Inc. is an EDI services provider that offers a comprehensive set of fully outsourced EDI services that helps companies to take full advantage of their EDI investment.','Eatrev is a platform for both the food lovers and who are passionate about creating healthy, delicious dishes.','Gouthams Photography is established by me with my interest in photography from my childhood with some of award winning photographs']
var myIndex=0;
var index = titles[myIndex];
var title = document.getElementById('projectTitle');
var site = document.getElementById('project');
var description = document.getElementById('description');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
project(index);
previous.addEventListener('click', function() {
    project(titles[--myIndex]);
});

next.addEventListener('click', function() {
    project(titles[++myIndex]);
});
function project(index){
    title.innerHTML = titles[myIndex];
   site.src = sites[myIndex];
   description.innerHTML = descriptions[myIndex];
    previous.disabled = myIndex <= 0;
    next.disabled = myIndex >= titles.length -1;
}
function visit(){
    document.getElementById('visit').href=document.getElementById('project').src;
}