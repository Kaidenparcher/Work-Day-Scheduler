// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const getCurrentTime = () => {
    return dayjs().format('MMM DD, YYYY [at] hh:mm:ss A');
  }
  
  // Select the p element where the current time will be displayed
  const currentTimeElement = document.getElementById('currentTime');
  
  // Update the current time element every second
  setInterval(() => {
    // Get the current time and format it using Day.js
    const currentTime = getCurrentTime();
    
    // Update the text content of the current time element
    currentTimeElement.textContent = currentTime;
  }, 1000);
  
    // Select the save buttons
    var saveButtons = $('.saveBtn');

    // Add a click event listener to each save button
    saveButtons.on('click', function() {
    // Get the user input from the textarea
    var userInput = $(this).siblings('.description').val();
  
    // Get the id of the containing time-block
    var timeBlockId = $(this).parent().attr('id');
  
    // Save the user input in local storage using the time-block id 
    localStorage.setItem(timeBlockId, userInput);
  
    });

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  