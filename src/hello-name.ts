export class HelloName{
  public name = 'Person';
  public agree = false;
  public items = [];

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

  public send() {
    console.log('Send');
  }

}