var hair = document.getElementById('hair');
hair.addEventListener('mouseover', detailsabouthair, false);
hair.addEventListener('mouseout', donotdisplay, false);
var nails = document.getElementById('nails');
nails.addEventListener('mouseover', detailsaboutnails, false);
nails.addEventListener('mouseout', donotdisplay, false);
var facemask = document.getElementById('facemask');
facemask.addEventListener('mouseover', detailsaboutfacemask, false);
facemask.addEventListener('mouseout', donotdisplay, false);
var bodyhair = document.getElementById('bodyhair');
bodyhair.addEventListener('mouseover', detailsaboutbodyhair, false);
bodyhair.addEventListener('mouseout', donotdisplay, false);



function detailsabouthair () {

document.getElementById("jobscontent").innerHTML = "<br>Hairdressing can be seen as a simple duty, however could also be a way to assume your personality. Don't be afraid, there's so much you can do with your hair. The mantra is: HAIR GROWS! Therapy is very expensive, change now, get a haircut!";

}

function detailsaboutnails () {

document.getElementById("jobscontent").innerHTML = "<br>Manicure is a magical moment! Your nails will discover their personality and start to talk to you about the bad treatment you gave them until this moment. Explore your creativity: pastel tones, bright tones, glitter or any other crazy thing that you have in mind, we are here to make your nails incredible.";

}

function detailsaboutfacemask () {


document.getElementById("jobscontent").innerHTML = "<br>Beauty therapy will give your skin and hair a new life. How amazing it will be for you to discover that your skin can look amazing without photoshop! Get ready to use cucumber, honey, milk and other breakfast secrets like you've never seen before!";

}

function detailsaboutbodyhair () {

document.getElementById("jobscontent").innerHTML = "<br>Waxing is the most painful party you can have! Just a very, very powerful mind will stop you from runing after the first pull of wax or thread. We all know it's worth it...it makes our skin looking magical afterwards, moreover, it greatly decreases our day-to-day concerns - whatever they may be.";

}

function donotdisplay() {
 document.getElementById("jobscontent").innerHTML=""


}