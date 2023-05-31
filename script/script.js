    $('#recipeCarousel').carousel({
      interval: 10000
    })
    
    $('.carousel .carousel-item').each(function(){
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
              next = $(this).siblings(':first');
            }
            
            next.children(':first-child').clone().appendTo($(this));
          }
    });
    
    // Obtém a referência para a imagem
    var image = document.getElementById('my-image');
    
    // Adiciona o manipulador de evento 'mouseover' à imagem
    image.addEventListener('mouseover', function() {
      // Verifica a direção atual da imagem
      var currentScaleX = window.getComputedStyle(image).getPropertyValue('transform');
      var scaleXValue = currentScaleX.split(',')[0].split('(')[1];
      
      // Define a nova direção da imagem
      var newScaleX = (scaleXValue === '1') ? '-1' : '1';
      
      // Aplica a transformação de escala na imagem
      image.style.transform = 'scaleX(' + newScaleX + ')';
    });
    $('#recipeCarousel').carousel({
      interval: 10000
    })
    
    $('.carousel .carousel-item').each(function(){
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
              next = $(this).siblings(':first');
            }
            
            next.children(':first-child').clone().appendTo($(this));
          }
    });
    
