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
