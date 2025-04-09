export class CloseButton {
  public static create(onClick: () => void): HTMLButtonElement {
    const button = document.createElement('button');
    button.className = 'btn-close';
    button.innerHTML = '<img src="images/close_icon.webp" alt="x">';
    button.addEventListener('click', () => onClick());

    return button;
  }
}
