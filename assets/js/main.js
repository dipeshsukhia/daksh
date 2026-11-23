const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('open', !isOpen);
  });
}

const photoDialog = document.querySelector('.photo-dialog');
const photoDialogImage = document.querySelector('.photo-dialog-image');
const photoDialogCaption = document.querySelector('#photo-dialog-caption');
const photoDialogClose = document.querySelector('.photo-dialog-close');
const photoButtons = document.querySelectorAll('.gallery-image-button');

if (photoDialog && photoDialogImage && photoDialogCaption) {
  photoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      photoDialogImage.src = button.dataset.photoSrc;
      photoDialogImage.alt = button.dataset.photoAlt;
      photoDialogCaption.textContent = button.dataset.photoCaption;
      photoDialog.showModal();
    });
  });

  photoDialogClose.addEventListener('click', () => {
    photoDialog.close();
  });

  photoDialog.addEventListener('click', (event) => {
    if (event.target === photoDialog) {
      photoDialog.close();
    }
  });
}
