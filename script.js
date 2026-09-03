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

(function(){
  var wiringObj = document.getElementById('wiringDiagram');
  var toggleBtns = document.querySelectorAll('.keypad-toggle-btn');
  if(!wiringObj || !toggleBtns.length) return;

  function setMode(mode){
    // contentDocument is only reachable when the SVG and the page share an origin
    var svgDoc = wiringObj.contentDocument;
    if(!svgDoc) return;
    var keypadText = svgDoc.getElementById('keypad_text');
    if(!keypadText) return;
    keypadText.classList.toggle('mode-arrows', mode === 'arrows');
    toggleBtns.forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });
  }

  toggleBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      setMode(btn.getAttribute('data-mode'));
    });
  });
})();