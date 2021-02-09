function doGet(req) {
  var platform = req.parameter.platform;
  var htmlProlog = "";
  if (platform=="Telegram") {
    htmlProlog = "Su Telegram ci sono "+getTelegramSubcribers() +" iscritti";
  }
  if (platform=="Twitter") {
    htmlProlog = "Su Twitter ci sono "+getTwitterFollowers()+" followers";
  }
  if (platform=="Facebook") {
    htmlProlog = getFacebookLikes()+" utenti Facebook seguono la pagina";
  }
  if (platform=="Web") {
    let dayObj = getLiturgicDay();
    htmlProlog = "<font style='color:"+codeColor[dayObj.color]+"'><b>"+stringColorMailingList[dayObj.color]+"</b></font><br/>"+getdayFull().toString().replace(/###/g,"<br/>")+"<br/>";
    htmlProlog += lastVerseFull().toString().replace(/###/g,"<br/>");
  }
  let htmlOutput = HtmlService.createHtmlOutput(htmlProlog);
  htmlOutput.setSandboxMode(HtmlService.SandboxMode.IFRAME)
  htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
  return htmlOutput;
}
