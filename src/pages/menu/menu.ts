import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommunicationProvider } from '../../providers/communication/communication';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  dinnerList = [{
    'imgPath': "../../assets/imgs/irachichoru.jpg",
    'price': '120',
    'Quantity': '1',
    'title': 'Erachi Choru',
    'type': 'N',
    'description': 'Erachi Choru or Kerala Style Meat with Rice is an easier take on Biryani. Some might call it a Beef or Mutton Biryani.'
  }, {
    'imgPath': '../../assets/imgs/dining1.jpg',
    'price': '80',
    'Quantity': '1',
    'title': 'Kothu Porata',
    'type': 'Y',
    'description': 'Kothu parotta is a delicacy popular in Virudhunagar, the South Indian state of Tamil Nadu. It is made using parotta, egg, meat, and salna, a spicy sauce. Other variants of kothu parotta are Muttai kothu parotta, chilli parotta.'

  }, {
    'imgPath': '../../assets/imgs/chappathi.jpg',
    'price': '20',
    'Quantity': '3',
    'title': 'Chappathi',
    'type': 'Y',
    'description': 'Chapati also known as roti, safati, shabaati and (in the Maldives) roshi, is an unleavened flatbread from the Indian Subcontinent and staple in India, Nepal.'
  }, {
    'imgPath': '../../assets/imgs/special Doash.jpg',
    'price': '25',
    'Quantity': '2',
    'title': 'Special Dosha',
    'type': 'Y',
    'description': 'Special Dosa is a recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy.'
  }];
  snacksList = [{
    'imgPath': "../../assets/imgs/BananaChips.jpg",
    'price': '120',
    'Quantity': '1',
    'title': 'Banana Chips',
    'type': 'Y',
    'description': 'Banana Chips Kerala Style Meat with Rice is an easier take on Biryani. Some might call it a Beef or Mutton Biryani.'
  }, {
    'imgPath': '../../assets/imgs/Kappa.jpg',
    'price': '80',
    'Quantity': '1',
    'title': 'Kappa',
    'type': 'Y',
    'description': 'Kappa is a delicacy popular in Virudhunagar, the South Indian state of Tamil Nadu. It is made using parotta, egg, meat, and salna, a spicy sauce. Other variants of kothu parotta are Muttai kothu parotta, chilli parotta.'

  }, {
    'imgPath': '../../assets/imgs/paripVada.jpg',
    'price': '20',
    'Quantity': '3',
    'title': 'Parip Vada',
    'type': 'Y',
    'description': 'Parip Vada , is an unleavened flatbread from the Indian Subcontinent and staple in India, Nepal.'
  }, {
    'imgPath': '../../assets/imgs/Achapam.jpg',
    'price': '25',
    'Quantity': '2',
    'title': 'Achappam',
    'type': 'Y',
    'description': 'Achappam is a recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy.'
  }];
  lunchList = [{
    'imgPath': "../../assets/imgs/nadansadhya.jpg",
    'price': '60',
    'Quantity': '1',
    'title': 'Nadan Oonu',
    'type': 'Y',
    'description': 'Nadan Oonu is a feast consisting of a variety of traditional vegetarian dishes usually served on a banana leaf in Kerala, India ... It is eaten in certain ritual style and environment preceded and succeeded by vanchippatu.'
  }, {
    'imgPath': '../../assets/imgs/biriyani.jpg',
    'price': '80',
    'Quantity': '1',
    'title': 'Biriyani',
    'type': 'N',
    'description': 'Biriyani is a delicacy popular in Virudhunagar, the South Indian state of Tamil Nadu. It is made using parotta, egg, meat, and salna, a spicy sauce. Other variants of kothu parotta are Muttai kothu parotta, chilli parotta.'

  }, {
    'imgPath': '../../assets/imgs/Thyru Sadam.jpg',
    'price': '20',
    'Quantity': '3',
    'title': 'Thyru sadam',
    'type': 'Y',
    'description': 'Thyru Sadam, is an unleavened flatbread from the Indian Subcontinent and staple in India, Nepal.'
  }, {
    'imgPath': '../../assets/imgs/Chiken Roast.jpg',
    'price': '125',
    'Quantity': '2',
    'title': 'Chicken Roast',
    'type': 'N',
    'description': 'Chicken Roast is a recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy.'
  }];

  private activeMenu: String;
  private itemList;
  private itemCount:number;
  constructor(public navCtrl: NavController,private communicationService:CommunicationProvider) {
    this.activeMenu = 'Dinner';
    this.itemList = this.dinnerList;
    this.itemCount=0;
    console.log("sf " + this.activeMenu);
  }
  addToCart(item) {
    this.communicationService.updateItemsCount(item);
  }
  changeMenu(menuName) {
    this.activeMenu = menuName;
    this.itemList = [];

    if (this.activeMenu === 'Dinner') {
      this.itemList = this.dinnerList;
    } else if (this.activeMenu === 'Snacks') {
      this.itemList = this.snacksList;
    } else {
      this.itemList = this.lunchList;
    }


  }

}
