function myFunction() {

  const SubscriberSpreadsheet = 'XXX';
  const SubscriberParams = "XXX"
  const ImageFolder = "XXX";
  
  let spreadsheet = SpreadsheetApp.openById(SubscriberSpreadsheet).getSheetByName(SubscriberParams);
  let jsonObj = JSON.parse(spreadsheet.getRange("XX").getValue());

  
  let folder = DriveApp.getFolderById(ImageFolder);
  let findfile = folder.getFilesByName(jsonObj.special+".jpg");
  let file = null;
  if (findfile.hasNext()) {
    file=findfile.next();
  } else {
    file=folder.getFilesByName(jsonObj.baseImage).next();
  }
  
  let slide = SlidesApp.getActivePresentation().getSlides()[0];
  //removes yesterday image
  slide.getImages()[0].remove();
  //creates the new image
  let image = slide.insertImage(file.getBlob());
  let w = image.getWidth();
  let h = image.getHeight();
  //check current aspect ratio
  let ratio = w/h;
  //sets the new image in the center
  image.replace(file.getBlob(),true).setHeight(400).setHeight(w/ratio);
  image.alignOnPage(SlidesApp.AlignmentPosition.CENTER);
  //color of the slide
  //slide.getPageElements()[0].asShape().getFill().setSolidFill(codeColor[jsonObj.color]);
  for (let i in slide.getPageElements()) {
    if (slide.getPageElements()[i].getPageElementType() == "SHAPE") {
      slide.getPageElements()[0].asShape().getFill().setSolidFill(codeColor[jsonObj.color]);
    }
  }

}

const codeColor= {
  G:"#008000",
  V:"#8000FF",
  W:"#FFD700",
  R:"#A61022",
  S:"#E75480",
  B:"#FFFFFF",
  A:"#ABCDEF",
  X:"#AAAAAA"
}
