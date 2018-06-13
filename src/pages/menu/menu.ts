import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  dinnerList=[{
    'imgPath':"../../assets/imgs/irachichoru.jpg",
    'price':'120',
    'Quantity':'1',
    'title':'Erachi Choru',
    'description':'Erachi Choru or Kerala Style Meat with Rice is an easier take on Biryani. Some might call it a Beef or Mutton Biryani.'
  },{
    'imgPath':'../../assets/imgs/dining1.jpg',
    'price':'80',
    'Quantity':'1',
    'title':'Kothu Porata',
    'description':'Kothu parotta is a delicacy popular in Virudhunagar, the South Indian state of Tamil Nadu. It is made using parotta, egg, meat, and salna, a spicy sauce. Other variants of kothu parotta are Muttai kothu parotta, chilli parotta.'
    
  },{
    'imgPath':'../../assets/imgs/chappathi.jpg',
    'price':'20',
    'Quantity':'3',
    'title':'Chappathi',
    'description':'Chapati also known as roti, safati, shabaati and (in the Maldives) roshi, is an unleavened flatbread from the Indian Subcontinent and staple in India, Nepal.'
  },{
    'imgPath':'../../assets/imgs/special Doash.jpg',
    'price':'25',
    'Quantity':'2',
    'title':'Special Dosha',
    'description':'Special Dosa is a recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy.'
  }];
  snacksList=[{
    'imgPath':"../../assets/imgs/BananaChips.jpg",
    'price':'120',
    'Quantity':'1',
    'title':'Banana Chips',
    'description':'Banana Chips Kerala Style Meat with Rice is an easier take on Biryani. Some might call it a Beef or Mutton Biryani.'
  },{
    'imgPath':'../../assets/imgs/Kappa.jpg',
    'price':'80',
    'Quantity':'1',
    'title':'Kappa',
    'description':'Kappa is a delicacy popular in Virudhunagar, the South Indian state of Tamil Nadu. It is made using parotta, egg, meat, and salna, a spicy sauce. Other variants of kothu parotta are Muttai kothu parotta, chilli parotta.'
    
  },{
    'imgPath':'../../assets/imgs/paripVada.jpg',
    'price':'20',
    'Quantity':'3',
    'title':'Parip Vada',
    'description':'Parip Vada , is an unleavened flatbread from the Indian Subcontinent and staple in India, Nepal.'
  },{
    'imgPath':'../../assets/imgs/Achapam.jpg',
    'price':'25',
    'Quantity':'2',
    'title':'Achappam',
    'description':'Achappam is a recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy.'
  }];
  lunchList=[{'imgPath':"../../assets/imgs/nadansadhya.jpg",
    'price':'60',
    'Quantity':'1',
    'title':'Nadan Oonu',
    'description':'Nadan Oonu is a feast consisting of a variety of traditional vegetarian dishes usually served on a banana leaf in Kerala, India ... It is eaten in certain ritual style and environment preceded and succeeded by vanchippatu.' 
  },{
    'imgPath':'../../assets/imgs/biriyani.jpg',
    'price':'80',
    'Quantity':'1',
    'title':'Biriyani',
    'description':'Biriyani is a delicacy popular in Virudhunagar, the South Indian state of Tamil Nadu. It is made using parotta, egg, meat, and salna, a spicy sauce. Other variants of kothu parotta are Muttai kothu parotta, chilli parotta.'
    
  },{
    'imgPath':'../../assets/imgs/Thyru Sadam.jpg',
    'price':'20',
    'Quantity':'3',
    'title':'Thyru sadam',
    'description':'Thyru Sadam, is an unleavened flatbread from the Indian Subcontinent and staple in India, Nepal.'
  },{
    'imgPath':'../../assets/imgs/Chiken Roast.jpg',
    'price':'125',
    'Quantity':'2',
    'title':'Chicken Roast',
    'description':'Chicken Roast is a recipe with finely chopped onion topping over the dosa which gives the plain dosa a very yummy.'
  }];
  
  private activeMenu:String;
  private itemList;
  constructor(public navCtrl: NavController) {
    this.activeMenu='Dinner';
    this.itemList=this.dinnerList;
    console.log("sf "+this.activeMenu);
  }
  
  changeMenu(menuName){
    this.activeMenu=menuName;
    this.itemList=[];
    
    if(this.activeMenu==='Dinner'){
      this.itemList=this.dinnerList;
    }else if(this.activeMenu==='Snacks'){
      this.itemList=this.snacksList;
    }else {
      this.itemList=this.lunchList;
    }
    
    
  }

}
