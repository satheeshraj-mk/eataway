import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  
  public dinnerList: Array<any>;
  public snacksList: Array<any>;
  public lunchList: Array<any>;

  constructor() {
    this.dinnerList=this.initDinnerList();
    this.snacksList=this.initSnacksList();
    this.lunchList=this.initLunchList();
  }
  getDinnerList(){
    return this.dinnerList;
  }
  getSnacksList(){
    return this.snacksList;
  }
  getLunchList(){
    return this.lunchList;
  }
  initLunchList(){
    return  [{
      'itemId':'l1',
      'imgPath': "../../assets/imgs/nadansadhya.jpg",
      'price': '60',
      'quantity': '1',
      'title': 'Nadan Oonu',
      'type': 'Y',
      'description': 'Nadan Oonu is a feast consisting of a variety of traditional vegetarian dishes usually served on a banana leaf in Kerala, India ... It is eaten in certain ritual style and environment preceded and succeeded by vanchippatu.'
    }, {
      'itemId':'l2',
      'imgPath': '../../assets/imgs/biriyani.jpg',
      'price': '80',
      'quantity': '1',
      'title': 'Biriyani',
      'type': 'N',
      'description': 'Biriyani is a delicacy popular in Virudhunagar, the South Indian state of Tamil Nadu. It is made using parotta, egg, meat, and salna, a spicy sauce. Other variants of kothu parotta are Muttai kothu parotta, chilli parotta.'
  
    }, {
      'itemId':'l3',
      'imgPath': '../../assets/imgs/Thyru Sadam.jpg',
      'price': '20',
      'quantity': '3',
      'title': 'Thyru sadam',
      'type': 'Y',
      'description': 'Thyru Sadam, is an unleavened flatbread from the Indian Subcontinent and staple in India, Nepal.'
    }, {
      'itemId':'l4',
      'imgPath': '../../assets/imgs/Chiken Roast.jpg',
      'price': '125',
      'quantity': '2',
      'title': 'Chicken Roast',
      'type': 'N',
      'description': 'Chicken Roast is a recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy.'
    }];
  }
  initSnacksList(){
    return  [{
      'itemId':'s1',
      'imgPath': "../../assets/imgs/BananaChips.jpg",
      'price': '120',
      'quantity': '1',
      'title': 'Banana Chips',
      'type': 'Y',
      'description': 'Banana Chips Kerala Style Meat with Rice is an easier take on Biryani. Some might call it a Beef or Mutton Biryani.'
    }, {
      'itemId':'s2',
      'imgPath': '../../assets/imgs/Kappa.jpg',
      'price': '80',
      'quantity': '1',
      'title': 'Kappa',
      'type': 'Y',
      'description': 'Kappa is a delicacy popular in Virudhunagar, the South Indian state of Tamil Nadu. It is made using parotta, egg, meat, and salna, a spicy sauce. Other variants of kothu parotta are Muttai kothu parotta, chilli parotta.'
  
    }, {
      'itemId':'s3',
      'imgPath': '../../assets/imgs/paripVada.jpg',
      'price': '20',
      'quantity': '3',
      'title': 'Parip Vada',
      'type': 'Y',
      'description': 'Parip Vada , is an unleavened flatbread from the Indian Subcontinent and staple in India, Nepal.'
    }, {
      'itemId':'s4',
      'imgPath': '../../assets/imgs/Achapam.jpg',
      'price': '25',
      'quantity': '2',
      'title': 'Achappam',
      'type': 'Y',
      'description': 'Achappam is a recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy.'
    }];
  }
  initDinnerList(){
    return [{
      'itemId':'d1',
      'imgPath': "../../assets/imgs/irachichoru.jpg",
      'price': '120',
      'quantity': '1',
      'title': 'Erachi Choru',
      'type': 'N',
      'description': 'Erachi Choru or Kerala Style Meat with Rice is an easier take on Biryani. Some might call it a Beef or Mutton Biryani.'
    }, {
      'itemId':'d2',
      'imgPath': '../../assets/imgs/dining1.jpg',
      'price': '80',
      'quantity': '1',
      'title': 'Kothu Porata',
      'type': 'Y',
      'description': 'Kothu parotta is a delicacy popular in Virudhunagar, the South Indian state of Tamil Nadu. It is made using parotta, egg, meat, and salna, a spicy sauce. Other variants of kothu parotta are Muttai kothu parotta, chilli parotta.'
  
    }, {
      'itemId':'d3',
      'imgPath': '../../assets/imgs/chappathi.jpg',
      'price': '20',
      'quantity': '3',
      'title': 'Chappathi',
      'type': 'Y',
      'description': 'Chapati also known as roti, safati, shabaati and (in the Maldives) roshi, is an unleavened flatbread from the Indian Subcontinent and staple in India, Nepal.'
    }, {
      'itemId':'d4',
      'imgPath': '../../assets/imgs/special Doash.jpg',
      'price': '25',
      'quantity': '2',
      'title': 'Special Dosha',
      'type': 'Y',
      'description': 'Special Dosa is a recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy.'
    }];
  }

}
