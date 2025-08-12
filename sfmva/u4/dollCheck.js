// Get current date
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1; // Months are zero-based
var year = date.getFullYear();

var dateString = month + "/" + day + "/" + year;

// Load the doll state from local storage
var dollState = localStorage.getItem("dollState");
if (dollState == null)
	dollState = {};
else
	dollState = JSON.parse(dollState);

var hasSeen = dollState.hasSeen !== undefined;
var seenDate = dollState.seenDate;

// Check for altsite
if (dateString !== seenDate)
{
	if (Math.random() > (hasSeen ? 0.95 : 0.7))
	{
		dollState.hasSeen = true;
		dollState.hasSeenDoll = undefined;
		dollState.seenDate = dateString;
		localStorage.setItem("dollState", JSON.stringify(dollState));
	}
}
