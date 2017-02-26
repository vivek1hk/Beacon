// Initialize a new plugin instance for all
// e.g. $('input[type="range"]') elements.

$(document).ready(function () {
    $("#calendar").jqxCalendar({ width: 220, height: 220, theme: 'arctic' });
});
$(document).ready(function () {
    var restrictedDates = new Array();
    var date = new Date();
    date.setHours(0, 0, 0);
    date.setDate(2);
    var date2 = new Date();
    date2.setHours(0, 0, 0);
    date2.setDate(3);
    restrictedDates.push(date);
    restrictedDates.push(date2);
    $("#calendar").jqxCalendar({
        theme: 'energyblue',
        width: '200px',
        height: '200px',
        restrictedDates: restrictedDates
    });
});
