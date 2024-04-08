// SLEEP FUNCTION
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// HIDE ALL EXCEPT
function hideAllExcept(except) {
  // on planque tout
  const children=document.querySelector('#display').children;
  for (let i=0; i<children.length; i++) {
      if (!children[i].className.includes('hidden')) {
          children[i].classList.add('hidden');
          children[i].classList.remove('visible'); 
      }
  }
  // on affiche l'exception
  addClass('visible',except);
}

// ADD SHOW/HIDDEN CLASS
function addClass(className,id) {
  const div=document.querySelector(id);
  if (className=='hidden') {
    div.classList.remove('visible');
    div.classList.add('hidden');
  } else if (className=='visible') {
    div.classList.remove('hidden');
    div.classList.add('visible');
  }
}