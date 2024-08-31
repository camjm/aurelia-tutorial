export class HelloName{
  public name = 'Person';
  public agree = false;
  public items = [];
  public promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.name)
    }, 4000);

  });
  public promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('error message!'));
    }, 5000);

  });
  // Normally don't need this template reference; it's for when you need direct DOM manipulation (e.g. third-party libraries)
  // you can do this declaratively, with less code, cleaner, without DOM queries to get elements
  private myInput : HTMLInputElement;

  constructor() {
    this.items.push({
      id: 1,
      name: 'Cam'
    });
  }

  public divClicked() {
    console.log('divClicked');
  }

  public buttonClicked() {
    console.log('buttonClicked');
  }

  public onAgreementChange() {
    console.log(this.agree);
  }

  public handleKeydown(event) {
    switch (event.key) {
      case 'Enter':
        console.log('Enter');
        break;
      case 'Escape':
        console.log('Escape');
        break;
      default:
        console.log('Other');
        break;
    }
  }

  public listClicked(event) {
    const itemId = event.target.getAttribute('data-id');
    if (itemId) {
      // Logic to handle the click event on an item
      console.log(itemId);
    }
  }

  public search(query) {
    console.log(query);
  }

  public onCtrlClick() {
    console.log('onCtrlClick');
  }

  public validate() {
    console.log('validate');
    console.log(this.myInput);
  }

  public send() {
    console.log('Send');
  }

}