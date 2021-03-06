function readParams() {
  return SpreadsheetApp.openById(SubscriberSpreadsheet).getSheetByName(SubscriberParams);
}

function getTwitterFollowers() {
  return (parseInt(readParams().getRange("B5").getValue()) + parseInt(readParams().getRange("B15").getValue()));
}

function getTelegramSubcribers() {
  return SpreadsheetApp.openById(SubscriberSpreadsheet).getSheetByName("Subscribers").getDataRange().getNumRows();
}

function getFacebookLikes() {
  return (parseInt(readParams().getRange("B6").getValue()) + parseInt(readParams().getRange("B14").getValue()));
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

function lastVerseFull() {
  return readParams().getRange("B8").getValue();
}

function getdayFull() {
  return readParams().getRange("B9").getValue();
}