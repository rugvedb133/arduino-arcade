(function(){
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var closeBtn = document.getElementById('lightboxClose');

  // The set of images arrow-key navigation cycles through,
  // and where we currently are within it. 
  // Recomputed each time the lightbox is opened.
  var currentGroup = [];
  var currentIndex = -1;

  function showAt(index){
    if(!currentGroup.length) return;
    currentIndex = (index + currentGroup.length) % currentGroup.length; // wraps both directions
    var btn = currentGroup[currentIndex];
    lightboxImg.src = btn.getAttribute('data-full');
    lightboxImg.alt = btn.querySelector('img').getAttribute('alt');
  }

  function openFrom(btn){
    // Thumbs inside the same .gallery navigate as a set; a thumb on its
    // own (the diagrams) is just a group of one, so arrow keys no-op.
    var gallery = btn.closest('.gallery');
    currentGroup = gallery
      ? Array.prototype.slice.call(gallery.querySelectorAll('.thumb'))
      : [btn];
    showAt(currentGroup.indexOf(btn));
    lightbox.showModal();
  }

  document.querySelectorAll('.thumb').forEach(function(btn){
    btn.addEventListener('click', function(){
      openFrom(btn);
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
    currentGroup = [];
    currentIndex = -1;
  });
  lightbox.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight'){
      e.preventDefault();
      showAt(currentIndex + 1);
    } else if(e.key === 'ArrowLeft'){
      e.preventDefault();
      showAt(currentIndex - 1);
    }
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