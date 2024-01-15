export function checkKeyboard(e){
    const regex = /\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_]/g;
  const a = e.key.match(regex);
  if (a == null){
    alert('Error:\nNon English keyboard layout is detected!\nPlease, set the keyboard layout to English and try to input the letter again.');
    return false;
  }
  return true;
} 