$(function() {
     $('.slider__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      
        prevArrow:'<button type="button" class=" slick-btn slick-prev"><img src="images/chevron-left.svg" alt=""></button>',
        nextArrow:'<button type="button" class=" slick-btn slick-next"><img src="images/chevron-right.svg" alt=""></button>'
      });

      var secondarySlider = new Splide( '.secondary-slider', {
        rewind      : true,
        fixedWidth  : 150,
        fixedHeight : 80,
        isNavigation: true,
        gap         : 12,
        focus       : 'center',
        pagination  : false,
        cover       : true,
        arrows     : false,
        
        breakpoints : {
          '600': {
            fixedWidth  : 66,
            fixedHeight : 40,
          }
        }
      } ).mount();
      
      // Create the main slider.
      var primarySlider = new Splide( '.primary-slider', {
        
        fixedWidth  : 1170,
        fixedHeight : 600,
        pagination : false,
        arrows     : false,
        cover      : true,
      } );
      
      // Set the thumbnails slider as a sync target and then call mount.
      primarySlider.sync( secondarySlider ).mount();


});

   

