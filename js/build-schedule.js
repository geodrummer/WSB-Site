//only attempt to edit the html after the document has loaded
$(document).ready(function () {
    //load shifts 
    $.getJSON("schedule/shifts.json", function (shifts) {
        //load schedule
        $.getJSON("schedule/schedule.json", function (entireSchedule) {
            //helper function
            function buildHTML(person) {
                $("#table-schedule-body").append(
                    '<tr><th>' + person.name + '</th><td>'
                    + shifts[person.schedule.monday] + '</td><td>'
                    + shifts[person.schedule.tuesday] + '</td><td>'
                    + shifts[person.schedule.wednesday] + '</td><td>'
                    + shifts[person.schedule.thursday] + '</td><td>'
                    + shifts[person.schedule.friday] + '</td><td>'
                    + shifts[person.schedule.saturday] + '</td>'
                    + '</tr>');
            }

            //add supervisors
            entireSchedule.supervisors.forEach(supervisor => {
                buildHTML(supervisor);
            });

            //add divider
            $("#table-schedule-body").append('<tr><td colspan="7">&nbsp;</td></tr>')

            //add employees
            entireSchedule.employees.forEach(employee => {
                buildHTML(employee);
            });
        });
    });
});

