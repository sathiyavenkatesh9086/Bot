import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ok } from 'assert';
import { ChatbotService } from '../chatbot.service';
import { Pizza } from '../Pizza';
import { User } from '../User';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  constructor(private api: ChatbotService) {}

  store: any = [];
  user1: any = [];
  data: any = [];
  pizza = new Pizza();
  user = new User();
  show = 1;
  goodname: any;
  name: string;
 

  ngOnInit(): void {
    this.message()

  }

  message(message: any="fire") {
    this.data = message.split(' ');
  
    this.api.getMessage().subscribe((data) => {
      this.store = data;
      for (let i = 0; i < this.data.length; i++) {
        for (let j = 0; j < this.store.length; j++) {
          if (this.data[i] == this.store[j].answer) {
            var answer = document.createElement('div');
            answer.innerHTML = this.store[j].question;
            answer.id = 'answer';
            answer.className = 'chatarea-inner chatbot';
            document.getElementById('message').appendChild(answer);
          }
        }
      }

      if (this.data != '' && this.data != null && this.show === 1) {
        this.show += 1;
        this.venky();
        this.orderType();
      }
    });
  }

  orderType() {
    let valueone = ['Order a pizza', 'Check Order Status'];
    for (let i = 0; i < valueone.length; i++) {
      let btnn = document.createElement('button');
      btnn.innerHTML = valueone[i];
      btnn.className = 'btn btn-warning';
      btnn.id = 'order' + i;
      btnn.addEventListener('click', (e: Event) => this.operation(i));
      document.getElementById('message').appendChild(btnn);
    }
  }

  operation(i) {
    if (i == 0) {
      this.message('OrderAPizza');
      this.orderdisable();
      setTimeout(() => {
        this.orderTypePizza();
      }, 800);
    } else {
      this.status();
      this.orderdisable2();
      setTimeout(() => {
      location.reload();
      }, 5000);
    }
  }

  orderTypePizza() {
    let valueone = ['Veg Pizza', 'NonVeg Pizza'];
    for (let i = 0; i < valueone.length; i++) {
      let btnn = document.createElement('button');
      btnn.innerHTML = valueone[i];
      btnn.className = 'btn btn-warning';
      btnn.id = 'answer' + i;
      btnn.addEventListener('click', (e: Event) => this.operation1(i));
      document.getElementById('message').appendChild(btnn);
    }
  }

  operation1(i) {
    if (i == 0) {
      this.message('Veg');
      this.pizza.type = 'Veg';
      this.disable1();
      setTimeout(() => {
        this.Veg();
      }, 800);
    } else {
      this.message('NonVeg');
      this.pizza.type = 'NonVeg';
      this.disable1();
      setTimeout(() => {
        this.Nonveg();
      }, 800);
    }
  }

  Veg() {
    let valuetwo = [
      'Double Cheese Margherita',
      'Peppy Panneer',
      'Veg Extravaganza Pizza',
      'Mushroom Pizza',
      'Mexican Greenwave Pizza',
    ];

    for (let i = 0; i < valuetwo.length; i++) {
      let btn1 = document.createElement('button');
      btn1.innerHTML = valuetwo[i];
      btn1.className = 'btn btn-warning';
      btn1.id = 'vegdisable' + i;
      btn1.addEventListener('click', (e: Event) => this.operation2(i));
      document.getElementById('message').appendChild(btn1);
    }
  }
  operation2(i) {
    if (i == 0) {
      this.pizza.veg = 'Double Cheese Margherita';
      this.message('DoubleCheeseMargherita');
      this.disableveg();
      setTimeout(() => {
        this.size();
      }, 800);
    } else if (i == 1) {
      this.pizza.veg = 'Peppy Panneer';
      this.message('PeppyPanneer');
      this.disableveg();
      setTimeout(() => {
        this.size();
      }, 800);
    } else if (i == 2) {
      this.pizza.veg = 'Veg Extravaganza Pizza';
      this.message('VegExtravaganzaPizza');
      this.disableveg();
      setTimeout(() => {
        this.size();
      }, 800);
    } else if (i == 3) {
      this.pizza.veg = 'Mushroom Pizza';
      this.message('MushroomPizza');
      this.disableveg();
      setTimeout(() => {
        this.size();
      }, 800);
    } else if (i == 4) {
      this.pizza.veg = 'Mexican Greenwave Pizza';
      this.message('MexicanGreenwavePizza');
      this.disableveg();
      setTimeout(() => {
        this.size();
      }, 800);
    }
  }

  Nonveg() {
    let valuetwo = [
      'Chicken Dominator',
      'Chicken Fiesta',
      'Chicken Golden Delight',
      'Tandoori Pizza',
      'Barbecue pizza',
    ];

    for (let i = 0; i < valuetwo.length; i++) {
      let btn3 = document.createElement('button');
      btn3.innerHTML = valuetwo[i];
      btn3.className = 'btn btn-warning';
      btn3.id = 'nonvegdisable' + i;
      btn3.addEventListener('click', (e: Event) => this.operation12(i));
      document.getElementById('message').appendChild(btn3);
    }
  }
  operation12(i) {
    if (i == 0) {
      this.pizza.nonveg = 'Chicken Dominator';
      this.message('ChickenDominator');
      this.nonvegdisable();
      setTimeout(() => {
        this.size();
      }, 800);
    } else if (i == 1) {
      this.pizza.nonveg = 'Chicken Fiesta';
      this.message('ChickenFiesta');
      this.nonvegdisable();
      setTimeout(() => {
        this.size();
      }, 800);
    } else if (i == 2) {
      this.pizza.nonveg = 'Chicken Golden Delight';
      this.message('ChickenGoldenDelight');
      this.nonvegdisable();
      setTimeout(() => {
        this.size();
      }, 800);
    } else if (i == 3) {
      this.pizza.nonveg = 'Tandoori Pizza';
      this.message('TandooriPizza');
      this.nonvegdisable();
      setTimeout(() => {
        this.size();
      }, 800);
    } else if (i == 4) {
      this.pizza.nonveg = 'Barbecue pizza';
      this.message('Barbecuepizza');
      this.nonvegdisable();
      setTimeout(() => {
        this.size();
      }, 800);
    }
  }

  size() {
    let sizee = ['Regular', 'Medium', 'Large'];

    for (let i = 0; i < sizee.length; i++) {
      let btn4 = document.createElement('button');
      btn4.innerHTML = sizee[i];
      btn4.className = 'btn btn-warning';
      btn4.id = 'size' + i;
      btn4.addEventListener('click', (e: Event) => this.operation20(i));
      document.getElementById('message').appendChild(btn4);
    }
  }

  operation20(i) {
    if (i == 0) {
      this.pizza.size = 'Regular';
      this.message('Regular');
      this.sizedisable();
      setTimeout(() => {
        this.customise();
      }, 800);
    } else if (i == 1) {
      this.pizza.size = 'Medium';
      this.message('Medium');
      this.sizedisable();
      setTimeout(() => {
        this.customise();
      }, 800);
    } else if (i == 2) {
      this.pizza.size = 'Large';
      this.message('Large');
      this.sizedisable();
      setTimeout(() => {
        this.customise();
      }, 800);
    }
  }

  customise() {
    let valueee = ['Crusttype', 'Toppings', 'Addons'];

    for (let i = 0; i < valueee.length; i++) {
      let btn5 = document.createElement('button');
      btn5.innerHTML = valueee[i];
      btn5.className = 'btn btn-warning';
      btn5.id = 'custom' + i;
      btn5.addEventListener('click', (e: Event) => this.operation4(i));
      document.getElementById('message').appendChild(btn5);
    }
  }
  operation4(i) {
    if (i == 0) {
      this.pizza.customize = 'Crusttype';
      this.message('Crusttype');
      this.disable4();
      setTimeout(() => {
        this.crust();
      }, 800);
    } else if (i == 1) {
      this.pizza.customize = 'Toppings';
      this.message('Toppings');
      this.disable4();
      setTimeout(() => {
        this.toppingg();
      }, 800);
    } else if (i == 2) {
      this.pizza.customize = 'Addons';
      this.message('Addons');
      this.disable4();
      setTimeout(() => {
        this.addon();
      }, 800);
    }
  }
  crust() {
    let crustt = ['Italian crust', 'Wheat burst', 'Double Cheese crunch'];

    for (let i = 0; i < crustt.length; i++) {
      let btn6 = document.createElement('button');
      btn6.innerHTML = crustt[i];
      btn6.className = 'btn btn-warning';
      btn6.id = 'crust' + i;
      btn6.addEventListener('click', (e: Event) => this.operation5(i));
      document.getElementById('message').appendChild(btn6);
    }
  }

  operation5(i) {
    if (i == 0) {
      this.pizza.crusttype = 'Italian crust';
      this.message('Italiancrust');
      this.crustdisable();
      setTimeout(() => {
        this.quantity();
      }, 800);
    }

    if (i == 1) {
      this.pizza.crusttype = 'Wheat burst';
      this.message('Wheatburst');
      this.crustdisable();
      setTimeout(() => {
        this.quantity();
      }, 800);
    }

    if (i == 2) {
      this.pizza.crusttype = 'Double Cheese crunch';
      this.message('DoubleCheesecrunch');
      this.crustdisable();
      setTimeout(() => {
        this.quantity();
      }, 800);
    }
  }
  toppingg() {
    let toppingg = ['Panneer', 'Mushroom', 'Onion'];

    for (let i = 0; i < toppingg.length; i++) {
      let btn7 = document.createElement('button');
      btn7.innerHTML = toppingg[i];
      btn7.className = 'btn btn-warning';
      btn7.id = 'topping' + i;
      btn7.addEventListener('click', (e: Event) => this.operation7(i));
      document.getElementById('message').appendChild(btn7);
    }
  }

  operation7(i) {
    if (i == 0) {
      this.pizza.toppings = 'Panneer';
      this.message('Panneer');
      this.toppningdisable();
      setTimeout(() => {
        this.quantity();
      }, 800);
    } else if (i == 1) {
      this.pizza.toppings = 'Mushroom';
      this.message('Mushroom');
      this.toppningdisable();
      setTimeout(() => {
        this.quantity();
      }, 800);
    } else if (i == 2) {
      this.pizza.toppings = 'Onion';
      this.message('Onion');
      this.toppningdisable();
      setTimeout(() => {
        this.quantity();
      }, 800);
    }
  }

  addon() {
    let addd = ['Extra cheese', 'Extra sauce'];

    for (let i = 0; i < addd.length; i++) {
      let btn8 = document.createElement('button');
      btn8.innerHTML = addd[i];
      btn8.className = 'btn btn-warning';
      btn8.id = 'addon' + i;
      btn8.addEventListener('click', (e: Event) => this.operation8(i));
      document.getElementById('message').appendChild(btn8);
    }
  }

  operation8(i) {
    if (i == 0) {
      this.pizza.addons = 'Extra cheese';
      this.message('Extracheese');
      this.addondisable();
      setTimeout(() => {
        this.quantity();
      }, 800);
    }

    if (i == 1) {
      this.pizza.addons = 'Extra sauce';
      this.message('Extrasauce');
      this.addondisable();
      setTimeout(() => {
        this.quantity();
      }, 800);
    }
  }

  quantity() {
    let quant = ['1', '2', '3', '4', '5'];

    for (let i = 0; i < quant.length; i++) {
      let btn9 = document.createElement('button');
      btn9.innerHTML = quant[i];
      btn9.className = 'btn btn-warning';
      btn9.id = 'quantitydisable' + i;
      btn9.addEventListener('click', (e: Event) => this.operation30(i));
      document.getElementById('message').appendChild(btn9);
    }
  }

  operation30(i) {
    if (i == 0) {
      this.pizza.quantity = '1';
      this.message('1');
      this.quantitydisable();
      setTimeout(() => {
        this.more();
      }, 800);
    } else if (i == 1) {
      this.pizza.quantity = '2';
      this.message('2');
      this.quantitydisable();
      setTimeout(() => {
        this.more();
      }, 800);
    } else if (i == 2) {
      this.pizza.quantity = '3';
      this.message('3');
      this.quantitydisable();
      setTimeout(() => {
        this.more();
      }, 800);
    } else if (i == 3) {
      this.pizza.quantity = '4';
      this.message('4');
      this.quantitydisable();
      setTimeout(() => {
        this.more();
      }, 800);
    } else if (i == 4) {
      this.pizza.quantity = '5';
      this.message('5');
      this.quantitydisable();
      setTimeout(() => {
        this.more();
      }, 800);
    }
  }

  more() {
    let pizz = ['Yes', 'No'];

    for (let i = 0; i < pizz.length; i++) {
      let btn10 = document.createElement('button');
      btn10.innerHTML = pizz[i];
      btn10.className = 'btn btn-warning';
      btn10.id = 'yes' + i;
      btn10.addEventListener('click', (e: Event) => this.operation47(i));
      document.getElementById('message').appendChild(btn10);
    }
  }

  operation47(i) {
    if (i == 0) {
      this.message('Yes');
      this.yesdisable();
      setTimeout(() => {
        this.orderType1();
      }, 200);
    
    }
    if (i == 1) {
      this.message('No');
      this.yesdisable();
      setTimeout(() => {
        this.confirmation();
      }, 800);
    }
  }

  information() {
    this.goodname = prompt('Enter the name');
    this.name = this.goodname;
    this.user.name = this.goodname;
    if (this.goodname != null && this.goodname != '') {
      var addresss = prompt('Enter the Address');
      this.user.address = addresss;
    }
    if (addresss != null && addresss != '') {
      var mobilenumber = prompt('Enter the Contactnumber');
      this.user.contactNo = mobilenumber;
    }
    const regex =  "^[0-9]*$";
    var pattern = new RegExp(regex);
    var isValidMobileNumber = pattern.test(mobilenumber);
    if (mobilenumber != null && mobilenumber != '' && isValidMobileNumber)
     {
      this.addPizza(this.pizza);
      this.addUserInfo();
      this.orderConfirmed();
    } else if(!isValidMobileNumber) {
     alert("Enter a valid id");
     this.information();
    }
  }

  addUserInfo() {
    this.orderplace();
    let random =
      Math.floor(Math.random() * (9 * Math.pow(10, 5))) + Math.pow(10, 5);
    this.user.id = random;
    return this.api.addUser(this.user).subscribe(
      (data) => {
        console.log('addedd user');
      },
      (error) => {
        console.log('User not added');
      }
    );
  }

  confirmation() {
    let conf = ['Confirm', 'Cancel'];

    for (let i = 0; i < conf.length; i++) {
      let btn11 = document.createElement('button');
      btn11.innerHTML = conf[i];
      btn11.className = 'btn btn-warning';
      btn11.id = 'confirmdisable' + i;
      btn11.addEventListener('click', (e: Event) => this.operation13(i));
      document.getElementById('message').appendChild(btn11);
    }
  }

  operation13(i) {
    if (i == 0) {
      this.information();
      this.confirmdisable();
    } else {
      this.close();
      this.confirmdisable();
    }
  }

  addPizza(pizza: Pizza) {
    return this.api.addPizzaInData(this.pizza).subscribe(
      
      (data) => {
        console.log('added pizza ');
      },
      (error) => console.log('not added pizza')
    );
  }

  status() {
    let id = prompt('Enter your ID: ');
    if (id != '' && id != null) {
      this.api.getStatus(id).subscribe((user) => {
        this.user1 = user;
        if (this.user1[0].id == parseInt(id)) {
          let h3 = document.createElement('h5');
          h3.innerHTML =
            'Hello ' +
            this.user1[0].name +
            '<br/> Your food is preparing and it will be delivered soon';
            h3.id = 'heading1';
          document.getElementById('message').append(h3);
          setTimeout(() => {
            location.reload();
          }, 8000);
        }
      });
    } else {
      alert('Enter the Id');
    }
  }

  orderConfirmed() {
    let h4 = document.createElement('h5');
    h4.innerHTML =
      'Hello ' +
      this.user.name +
      ' Your Id is ' +
      this.user.id +
      '<br/> Thanks for ordering!!<br>Your hot pizza is on the way..';
    document.getElementById('message').append(h4);
    setTimeout(() => {
      location.reload();
    }, 6000);
  }

  orderType1() {
    let valueorder = 'Order a pizza';
    let btnn12 = document.createElement('button');
    btnn12.innerHTML = valueorder;
    btnn12.className = 'btn btn-warning';
    btnn12.id = 'orderr';
    btnn12.addEventListener('click', (e: Event) => this.operationn());
    document.getElementById('message').appendChild(btnn12);
  }

  operationn() {
    this.message('OrderAPizza');
    this.order1disable();
    setTimeout(() => {
      this.orderTypePizza();
    }, 200);
  }

  venky() {
    let h6 = document.createElement('h3');
    h6.innerHTML = "WELCOME TO VENKY'S PIZZA";
    h6.id = 'headi';
    document.getElementById('message').append(h6);
  }

  orderplace() {
    let h7 = document.createElement('h2');
    h7.innerHTML = 'Winner Winner Pizza Dinner!!';
    h7.id = 'dinner';
    document.getElementById('message').append(h7);
  }

  close() {
    let cancel = document.createElement('h3');
    cancel.innerHTML = 'SORRY!!Your order is Cancelled!';
    cancel.id = 'cancel';
    document.getElementById('message').append(cancel);
    setTimeout(() => {
      location.reload();
    }, 4000);
  }

  disableveg() {
    (<HTMLInputElement>document.getElementById('vegdisable0')).disabled = true;
    (<HTMLInputElement>document.getElementById('vegdisable1')).disabled = true;
    (<HTMLInputElement>document.getElementById('vegdisable2')).disabled = true;
    (<HTMLInputElement>document.getElementById('vegdisable3')).disabled = true;
    (<HTMLInputElement>document.getElementById('vegdisable4')).disabled = true;
  }

  orderdisable2() {
    (<HTMLInputElement>document.getElementById('order0')).disabled = true;
  }

  nonvegdisable() {
    (<HTMLInputElement>(
      document.getElementById('nonvegdisable0')
    )).disabled = true;
    (<HTMLInputElement>(
      document.getElementById('nonvegdisable1')
    )).disabled = true;
    (<HTMLInputElement>(
      document.getElementById('nonvegdisable2')
    )).disabled = true;
    (<HTMLInputElement>(
      document.getElementById('nonvegdisable3')
    )).disabled = true;
    (<HTMLInputElement>(
      document.getElementById('nonvegdisable4')
    )).disabled = true;
  }

  sizedisable() {
    (<HTMLInputElement>document.getElementById('size0')).disabled = true;
    (<HTMLInputElement>document.getElementById('size1')).disabled = true;
    (<HTMLInputElement>document.getElementById('size2')).disabled = true;
  }

  disable1() {
    (<HTMLInputElement>document.getElementById('answer1')).disabled = true;
    (<HTMLInputElement>document.getElementById('answer0')).disabled = true;
  }
  
  quantitydisable() {
    (<HTMLInputElement>(
      document.getElementById('quantitydisable0')
    )).disabled = true;
    (<HTMLInputElement>(
      document.getElementById('quantitydisable1')
    )).disabled = true;
    (<HTMLInputElement>(
      document.getElementById('quantitydisable2')
    )).disabled = true;
    (<HTMLInputElement>(
      document.getElementById('quantitydisable3')
    )).disabled = true;
    (<HTMLInputElement>(
      document.getElementById('quantitydisable4')
    )).disabled = true;
  }

  confirmdisable() {
    (<HTMLInputElement>(
      document.getElementById('confirmdisable0')
    )).disabled = true;
    (<HTMLInputElement>(
      document.getElementById('confirmdisable1')
    )).disabled = true;
  }

  toppningdisable() {
    (<HTMLInputElement>document.getElementById('topping0')).disabled = true;
    (<HTMLInputElement>document.getElementById('topping1')).disabled = true;
    (<HTMLInputElement>document.getElementById('topping2')).disabled = true;
  }

  crustdisable() {
    (<HTMLInputElement>document.getElementById('crust0')).disabled = true;
    (<HTMLInputElement>document.getElementById('crust1')).disabled = true;
    (<HTMLInputElement>document.getElementById('crust2')).disabled = true;
  }

  addondisable() {
    (<HTMLInputElement>document.getElementById('addon0')).disabled = true;
    (<HTMLInputElement>document.getElementById('addon1')).disabled = true;
  }

  yesdisable() {
    (<HTMLInputElement>document.getElementById('yes0')).disabled = true;
    (<HTMLInputElement>document.getElementById('yes1')).disabled = true;
  }

  disable4() {
    (<HTMLInputElement>document.getElementById('custom1')).disabled = true;
    (<HTMLInputElement>document.getElementById('custom0')).disabled = true;
    (<HTMLInputElement>document.getElementById('custom2')).disabled = true;
  }

  order1disable() {
    (<HTMLInputElement>document.getElementById('orderr')).disabled = true;
  }

  orderdisable() {
    (<HTMLInputElement>document.getElementById('order0')).disabled = true;
    (<HTMLInputElement>document.getElementById('order1')).disabled = true;
  }
}
