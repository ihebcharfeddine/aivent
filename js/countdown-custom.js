jQuery(document).ready(function () {
  $(function () {
    $("#defaultCountdown").countdown({ until: new Date(2025, 8, 27, 0) }); // year, month, date, hour
  });
});
