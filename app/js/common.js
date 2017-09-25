$(function() {

    // $("#slider").slider({
    //     min: 0,
    //     max: 100,
    //     step: 1,
    //     values: [10, 90],
    //     slide: function(event, ui) {
    //         for (var i = 0; i < ui.values.length; ++i) {
    //             $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
    //         }
    //     }
    // });

    $('.sorting-form__select, .select').select2({
        minimumResultsForSearch: Infinity
            });

            

    $('.slider-input').jRange({
        from: -2.0,
        to: 2.0,
        step: 0.5,
        scale: [-2.0,-1.0,0.0,1.0,2.0],
        format: '%s',
        width: 300,
        showLabels: true,
        snap: true
    });
    
    $("input.sliderValue").change(function() {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });


});
//filters slider example code
// http://nitinhayaran.github.io/jRange/demo/
