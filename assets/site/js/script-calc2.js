jQuery(function() {
    var th = 33000,
      thsell = 0.70,
      date2 = 6,
      gjout = 90,
      rent2 = 37800,
      thtxt = 33000,
      monthstxt2 = 10
    function recount() {
      // Расчитываем стоимость
      rent2 = ((th * gjout) * thsell);
      // Переписываем так чтобы были разделяющие знаки
      jQuery("#rent2").html('$' + String((rent2).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,'));
      // Цифры из слайдера в последний блок
      jQuery("#thtxt").html(String((thtxt).toFixed()).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,') + ' TH');
      jQuery("#monthstxt2").html(monthstxt2 + ' months');
    };
    recount();
    // Данные из слайдера
    $(document).on("change keyup", "#th", function() {
      th = +$(this).val();
      $("#th-slider").slider("value", th);
      recount();
    });
    $(document).on("change keyup", "#thtxt", function() {
      thtxt = +$(this).val();
      $("#th-slider").slider("value", thtxt);
      recount();
    });
    $(document).on("change keyup", "#date2", "#monthstxt2", function() {
      date2,
      monthstxt2 = +$(this).val();
      $("#date-slider2").slider("value", date2, monthstxt2);
      recount();
    });
    // /Данные из слайдера
  });
  // Слайдер 1
  $(function() {
    $("#th-slider").slider({
      range: "min",
      value: 33000,
      min: 1000,
      max: 1000000,
      animate: 800,
      slide: function(event, ui) {
        $('#th').val(ui.value).trigger("change");
        $('#thtxt').val(ui.value).trigger("change");
      }
    });
    $("#th").val($("#th-slider").slider("value"));
    $("#thtxt").val($("#th-slider").slider("value"));
  });
  // Слайдер 2
  $(function() {
    $("#date-slider2").slider({
      range: "min",
      value: 12,
      min: 6,
      max: 36,
      animate: 800,
      slide: function(event, ui) {
        $("#date2").val(ui.value).trigger("change");
        $("#monthstxt2").val(ui.value).trigger("change");
      }
    });
    $("#date2", ).val($("#date-slider2").slider("value"));
    $("#monthstxt2").val($("#date-slider2").slider("value"));
  });