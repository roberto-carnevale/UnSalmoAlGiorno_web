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
    Logger.log("WWW");
    let sog = new SalmiOnGoogle();
    htmlProlog = sog.niceVerseForWeb();
  }
  let htmlOutput = HtmlService.createHtmlOutput(htmlProlog);
  htmlOutput.setSandboxMode(HtmlService.SandboxMode.IFRAME)
  htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
  return htmlOutput;
}

