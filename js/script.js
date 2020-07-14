var teamMembers = [{name:"Anna", email:"anna@cfsalon.com",image:"images/anna.jpg"},{name:"Georg",email:"georg@cfsalon.com",image:"images/georg.jpg"},{name:"Bruno", email:"bruno@cfsalon.com",image:"images/Bruno.jpg"}, {name:"Thomas", email:"thomas@cfsalon.com",image:"images/Thomas.jpg"}];

var profession = ["Hairdresser", "Beauty Therapist", "Waxer", "Manicurist"]
var hobby = ["sailing, climbing, hiking", "gaming, movies", "dating, food", "travelling, reading"]
var description = ["Anna is from Rio de Janeiro, at the age of twenty she decided to travel the world with just a backpack. She doesn't know how, but suddenly she found herself cutting people's hair on the road to earn money to keep the trip going. After months in London and later in Hong Kong, she fell in love with underground culture.<br>She doesn't remember her first cuts very well... Maybe she doesn't remember most of them. But she does remembers many colors and is a little deaf in one ear, the result of days of loud music where she did not notice the hours passing. Thanks to all these moments, Anna became an expert in stylized and colorful haircuts: mohawks, side cuts, pixies, chelsias or a beautiful bald cut? Anna is the right person! Do not expect to find an exotic-looking woman...<br><br>PS: she would also love to help you with your big-chop and get rid of all that chemistry!", 
                    "Georg was born in Graz and graduated in 2001 as a lawyer. Why is he here then? Thank god he QUIT his job to follow his passion: the power of natural food and plants in our body and skin. Georg travelled to India and China to learn the ancient Ayurveda. Were three years living in a mountain sanctuary - one of those years having taken a vow of silence to find the truth about human existence (truth that he doesn't tell us). <br>Then more few years using his wisdom to help people in small villages in the Himalayas. After many years of practice and study, he returned to our worldly capitalist life. Now he graces us with his treatments using ONLY natural and ORGANIC products. Get ready not only for his hydration and nutrition masks for your skin and hair, but also to leave our salon light and with a clean head, thanks to his wonderful energy.", 
                    "Waxing your legs is important for the practise of biking. For esthetic reson it is key to have a proper skin and also to avoid infection in case of injuries. Being a proper waxer man is not an easy task, Bruno will make you to suffer - he know it's hard - but he is going to help you to overcome this pain and to make waxing an important ritual for a nice moment. <br> Bruno is not just a simple waxer, he learned the practice of sugar waxing coming from ancient Persia, he know the famous practice of waxing with bee wax, that he learned in Brazil. He will help you to choose the way of waxing (with bee wax, with sugar or with thread) depending on your personnality and your needs: believe me, he's aewsome on reading people. After a long training in France he has long years experience and has the ability to work with male and female customer.", 
                    "Thomas didn't start as nail artist, he started as software engineer. But due to the fact, that software engineers are very popular amongst women, he experienced many adventures. During these exciting times he came in touch with nails a lot. Sometimes through nice, more or less 'little' scratches on his back and arms, sometimes through attempted murder or mutilation due to unresponded feelings. Thomas slowly began to distinguish the different kinds of nails as he felt them on his body, increasing his fascination for those pieces of art to an unlimited extent. <br> He then quit the field of software engineering to follow his passion and became nail artist. Although his popularity amongst women decreased, he managed to find his first ex-wife in this period of time, who tought him a lot about nails. But as he couldn't learn from her nails anymore Thomas left and searched for other challenges. After conscientious examination of fingernails of 5 more ex-wives he is proud to consider himself as a professional nail artist and wholesome member of our team."]
var teamdescr = "In our salon, talent is not enough. The years of road and cultural baggage of our professionals is what makes them and their services an experience that you can only find here. From personal experiences - perhaps too personal - to the undergrouds of Hong Kong and from there, to the Himalayas and their ancient wisdom. From the secrets of French beauty to practices originated in ancient Persia or by the indigenous people of Brazil: our professionals have a lot to share."
var jobs = ["Hairdressing", "Beauty Therapy", "Bodyhair Removal", "Manicure"]

for (var i=0; i<teamMembers.length; i++){
    teamMembers[i].profession = profession[i]
    teamMembers[i].hobby = hobby[i]
    teamMembers[i].description = description[i]
}

if (document.body.contains(document.getElementById("teamdescription"))) {
    document.getElementById("teamdescription").innerHTML = "<h1>CF BeautySalon</h1><br><p>"+teamdescr+"</p>"
    document.getElementById("hair").innerHTML = `<h3>`+jobs[0]+`</h3><br><img src="images/coloredhair.jpg">`
    document.getElementById("nails").innerHTML = `<h3>`+jobs[3]+`</h3><br><img src="images/nail.jpg">`
    document.getElementById("facemask").innerHTML = `<h3>`+jobs[1]+`</h3><br><img src="images/cocumber.jpg">`
    document.getElementById("bodyhair").innerHTML = `<h3>`+jobs[2]+`</h3><br><img src="images/wax.jpg">`

    for (var i=0; i<teamMembers.length; i++) {  
        document.getElementById("member"+(i+1)).innerHTML+="<a href='team/"+teamMembers[i].name+".html'><img src='"+teamMembers[i].image+"'></a>";
        document.getElementById("name"+(i+1)).innerHTML="<b>Name:</b> "+teamMembers[i].name;
        document.getElementById("prof"+(i+1)).innerHTML="<b>Profession:</b> "+teamMembers[i].profession;
        document.getElementById("email"+(i+1)).innerHTML+="<b>Email:</b> "+teamMembers[i].email;
    }
}

    for (var i=0; i<teamMembers.length; i++) {
        if (document.body.contains(document.getElementById(teamMembers[i].name))) {
            document.getElementById(teamMembers[i].name).innerHTML = "<h1>What about "+teamMembers[i].name+", our amazing "+teamMembers[i].profession+"!</h1>"
            document.getElementById(teamMembers[i].name).innerHTML += "<p><strong>Name:</strong> "+teamMembers[i].name+"</p>"
            document.getElementById(teamMembers[i].name).innerHTML += "<p><strong>Email:</strong> "+teamMembers[i].email+"</p>"
            document.getElementById(teamMembers[i].name).innerHTML += "<p><strong>Hobbys:</strong> "+teamMembers[i].hobby+"</p>"
            document.getElementById(teamMembers[i].name).innerHTML += "<p><strong>About:</strong> "+teamMembers[i].description+"</p>"
        }
    }

document.getElementById("contactbutton").onclick=function(){
    document.getElementById("contact").style.display="unset"
    document.getElementById("contactbutton").style.display="none"
}

document.getElementById("minimize").onclick=function(){
    document.getElementById("contact").style.display="none"
    document.getElementById("contactbutton").style.display="unset"
}