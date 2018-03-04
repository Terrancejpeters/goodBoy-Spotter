
  function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = sheet.getLastRow() - 1;   // Number of rows to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, 6)
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  var last = data[sheet.getLastRow() - 2];
  var time = last[4].toString().substring(16,21);
  var hour = time.substring(0,2);
  var min = time.substring(2,5);
  var hourInt = parseInt(hour);
  var stamp = "am"
    
    if (hourInt > 12){
      hourInt = hourInt - 12;
      stamp = "pm"
    }
   
    
  //The main email component
  var time2 = last[4].toString().substring(24,27);
  for (i in data) {
    var row = data[i];
    var emailAddress = row[1];
    
    if (last[5] != ""){
      var message = "Hello!\n\nWe wanted to let you know a DOG was spotted at " + hourInt + min + stamp + " near " + last[3] + "! This pup was a " + last[2] + " and a very good dog."
      + " Our expert sources suggestion that he was heading towards " + last[5] + ". Go get some good pets in! \n\nBest,\nThe GoodPups Team";  
    }
    else{
      var message = "Hello!\n\nWe wanted to let you know a DOG was spotted at " + hourInt + min + stamp + " near " + last[3] + "! This pup was a " + last[2] + " and a very good dog."
      + " Go get some good pets in! \n\nBest,\nThe GoodPups Team \n\n PS The Date and Time is " + last[0];  
    }
    var subject = "A DOG HAS BEEN SPOTTED";
    MailApp.sendEmail(emailAddress, subject, message);
  }
}


function removeEmail(email){
  
}
