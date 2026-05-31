import icons from 'url:../../img/icons.svg';
import View from './View.js';
import generatePreviewMarkup from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _icons = icons;

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return this._data.map(generatePreviewMarkup).join('');
  }
}

export default new ResultsView();