import icons from 'url:../../img/icons.svg';
import View from './View.js';
import generatePreviewMarkup from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _icons = icons;

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(generatePreviewMarkup).join('');
  }
}

export default new BookmarksView();