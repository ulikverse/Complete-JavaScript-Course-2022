import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recepies found for your query! Please try again :D';
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
