function SalmiOnGoogle() {
  //set up tab
  this.tabData = SpreadsheetApp.openById(SalmiDBSpreadsheet).getSheetByName(SalmiDBByTypeTab);
}


SalmiOnGoogle.prototype.getVerseData = function(seedT) {
  //gets the verse
  return this.tabData.getRange("A"+seedT.toString()+":D"+seedT.toString()).getValues();
}

SalmiOnGoogle.prototype.niceVerseForWeb = function() {
  let seedW = lastVerse();
  let verseRaw = this.tabData.getRange("A"+seedW+":D"+seedW).getValues();
  let dayObj = getLiturgicDay();
  let dayName = "";
  let stringsHoly = "";
  if (dayObj.name) {dayName=dayObj.name;}
  if (dayObj.holy) {stringsHoly=stringsHoly[dayObj.holy];}
  let htmlVerse = "Preghiamo "+stringsTempo[dayObj.tempo]+stringsHoly+dayName+"<br/><br/>";
  htmlVerse += verseRaw[0][0]+","+verseRaw[0][2] + "<br/>" + verseRaw[0][3].toString().replace(/###/g,"<br/>");
  Logger.log(htmlVerse);
  return htmlVerse;
}

function test() {var s = new SalmiOnGoogle(); s.niceVerseForWeb()}