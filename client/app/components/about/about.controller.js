class AboutController {
  constructor(Item) {
    this.Item = Item;
    // this.Item.test();
    this.listItems = [];
    this.getList();
    this.currentItem = null;
    this.editMode = null;
  }
  getList() {
    this.Item.list().then(response => {
      this.listItems = response.data;
      console.log(this.listItems);
    });
  }
  addToList() {
    this.Item.add(this.itemInput).then(response => {
      this.itemInput.id = response.data;
      this.listItems.push(this.itemInput);
      this.itemInput = null;
    });
  }
  remove(id) {
    this.Item.remove(id).then(response => {
      for (let i = 0; i < this.listItems.length; i++) {
        if (this.listItems[i].id === id) {
          this.listItems.splice(i, 1);
        }
      }
    });
  }
  setEdit(item) {
    this.editMode = item.id;
    this.currentItem = {
      title: item.title,
      description: item.description,
      id: item.id,
    };
  }
  cancelEdit() {
    this.editMode = null;
  }
  saveEdit() {
    this.Item.edit(this.currentItem).then(response => {
      for (let i = 0; i < this.listItems.length; i++) {
        if (this.listItems[i].id === this.currentItem.id) {
          this.listItems.splice(i, 1, this.currentItem);
        }
      }
      this.currentItem = null;
      this.editMode = null;
    })
  }
}

AboutController.$inject = ['Item'];

export default AboutController;