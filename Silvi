HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>

    <div id="course">
      <h1>CSE120 - Intro to programming </h1>
      <ul style="list-style-type:disc;">
        <li>Participation - <span class="percent"
        id="participationPercent">10</span>%</li>
        <li>HW -  <span class="percent"
        id="hwPercent">20</span>%</li>
        <li>Quiz - <span class="percent" id="quizPercent">10</span>%</li>
        <li>Project M1 - <span class="percent"
        id="pm1Percent">25</span>%</li>
        <li>Project M2 - <span class="percent"
        id="pm2Percent">35</span>%</li>
      </ul>
    </div>

    <div id="grades">
      <h1> Current Grade </h1>
      <ul style="list-style-type:disc;">
        <li>Participation Grade <input type="text" value=100 id="participationGrade"></li>
        <li>HW Grade <input type="text" value=100 id="hwGrade"></li>
        <li>Quiz Grade <input type="text" value=100 id="quizGrade"></li>
        <li>Project M1 Grade <input type="text" value=100 id="pm1Grade"></li>
        <li>Project M2 Grade <input type="text" value=100
        id="pm2Grade"></li>
        <h2> <small> Total Grade </small> </h2> 
        <li> <button onclick="calculatetotalgrade()"> <id="totalgrade"> Calculate </button> </li> 
      </ul>
    </div>
    <script src="script.js"></script>
  </body>
</html>

JS

function calculatetotalgrade() {

  var participationPercent = parseInt (document.getElementById("participationPercent").innerHTML)
  var hwPercent = parseInt (document.getElementById("hwPercent").innerHTML)
  var quizPercent = parseInt (document.getElementById("quizPercent").innerHTML)
  var pm1Percent = parseInt (document.getElementById("pm1Percent").innerHTML)
  var pm2Percent = parseInt (document.getElementById("pm2Percent").innerHTML)


  var participationGrade = parseFloat(document.getElementById("participationGrade").value)
  var hwGrade = parseFloat(document.getElementById("hwGrade").value)
  var quizGrade = parseFloat(document.getElementById("quizGrade").value)
  var pm1Grade = parseFloat(document.getElementById("pm1Grade").value)
  var pm2Grade = parseFloat(document.getElementById("pm2Grade").value)

  var participation = participationPercent * participationGrade / 100
  var hw = hwPercent * hwGrade / 100
  var quiz = quizPercent * quizGrade / 100
  var pm1 = pm1Percent * pm1Grade / 100
  var pm2 = pm2Percent * pm2Grade / 100
  
  var calculatetotalgrade = participation + hw + quiz + pm1 + pm2

  var totalgrade = document.getElementById("totalgrade").innerHTML;
  
} 

CSS

body, html {
  margin: 0;
}

#course {
  background-color: lavender;
  width: 300pc;
}

#course span {
  font-weight: bold;
  color: darkblue;
}

#grades {
  background-color: lavender;
  width: 300pc;
}

#grades span {
  font-weight: bold;
  color: darkblue;
}

#grades input {
  -moz-user-input: 
}
#totalgrade {
  background: lavender;
  width: 300pc;
}

#totalgrade span {
  font-weight: bold;
  color: darkblue;
}
                
