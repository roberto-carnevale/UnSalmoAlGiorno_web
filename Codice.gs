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
  let htmlOutput = HtmlService.createHtmlOutput(htmlProlog);
  htmlOutput.setSandboxMode(HtmlService.SandboxMode.IFRAME)
  htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
  return htmlOutput;
}

function readParams() {
  return SpreadsheetApp.openById(SubscriberSpreadsheet).getSheetByName(SubscriberParams);
}

function getTwitterFollowers() {
  return (parseInt(readParams().getRange("B5").getValue()));
}

function getTelegramSubcribers() {
  return SpreadsheetApp.openById(SubscriberSpreadsheet).getSheetByName("Subscribers").getDataRange().getNumRows();
}

function getFacebookLikes() {
  return (parseInt(readParams().getRange("B6").getValue()));
}

function getAllUsers() {
  return getTelegramSubcribers()+getFacebookLikes()+getTwitterFollowers();
}