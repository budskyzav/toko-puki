// Contoh: Alert saat tombol ditekan
document.addEventListener('DOMContentLoaded', () => {
  const btnCall = document.querySelector('.btn-call');
  if (btnCall) {
    btnCall.addEventListener('click', () => {
      alert("Anda akan diarahkan ke panggilan telepon...");
    });
  }
});
