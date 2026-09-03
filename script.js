(function(){
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var closeBtn = document.getElementById('lightboxClose');

  document.querySelectorAll('.thumb').forEach(function(btn){
    btn.addEventListener('click', function(){
      var full = btn.getAttribute('data-full');
      var alt = btn.querySelector('img').getAttribute('alt');
      lightboxImg.src = full;
      lightboxImg.alt = alt;
      lightbox.showModal();
    });
  });

  closeBtn.addEventListener('click', function(){
    lightbox.close();
  });
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox) lightbox.close();
  });
  // Fires on every close path — button, backdrop click, or native Escape handling.
  lightbox.addEventListener('close', function(){
    lightboxImg.src = '';
  });
})();