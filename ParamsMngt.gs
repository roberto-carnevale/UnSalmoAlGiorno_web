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

function getCalendarData() {
  return JSON.parse(readParams().getRange("B7").getValue());
}

function lastVerse() {
  return (parseInt(readParams().getRange("B2").getValue()));
}

function getAllUsers() {
  return getTelegramSubcribers()+getFacebookLikes()+getTwitterFollowers();
}

function getLiturgicDay() {
  return JSON.parse(readParams().getRange("B7").getValue());
}