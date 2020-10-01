jQuery(function() {
    var gj = 0.70,
      gassell = 420,
      date = 6,
      gjout = 90,
      rent = 0,
      gjtxt = 420,
      monthstxt = 10
    function recount() {
      // Расчитываем стоимость
      rent = ((gassell * gjout) * gj);
      // Переписываем так чтобы были разделяющие знаки
      jQuery("#rent").html('$' + String((rent).toFixed(2)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,'));
      // Цифры из слайдера в последний блок
      jQuery("#gjtxt").html(String((gjtxt).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') + ' GJ/day');
      jQuery("#monthstxt").html(monthstxt + ' months');
    };
    recount();
    // Данные из слайдера
    $(document).on("change keyup", "#gassell", function() {
      gassell = +$(this).val();
      $("#gas-slider").slider("value", gassell);
      recount();
    });
    $(document).on("change keyup", "#gjtxt", function() {
      gjtxt = +$(this).val();
      $("#gas-slider").slider("value", gjtxt);
      recount();
    });
    $(document).on("change keyup", "#date", "#monthstxt", function() {
      date,
      monthstxt = +$(this).val();
      $("#date-slider").slider("value", date, monthstxt);
      recount();
    });
    // /Данные из слайдера
  });
  // Слайдер 1
  $(function() {
    $("#gas-slider").slider({
      range: "min",
      value: 420,
      min: 200,
      max: 10000,
      animate: 800,
      slide: function(event, ui) {
        $('#gassell').val(ui.value).trigger("change");
        $('#gjtxt').val(ui.value).trigger("change");
      }
    });
    $("#gassell").val($("#gas-slider").slider("value"));
    $("#gjtxt").val($("#gas-slider").slider("value"));
  });
  // Слайдер 2
  $(function() {
    $("#date-slider").slider({
      range: "min",
      value: 10,
      min: 6,
      max: 60,
      animate: 800,
      slide: function(event, ui) {
        $("#date").val(ui.value).trigger("change");
        $("#monthstxt").val(ui.value).trigger("change");
      }
    });
    $("#date").val($("#date-slider").slider("value"));
    $("#monthstxt").val($("#date-slider").slider("value"));
  });