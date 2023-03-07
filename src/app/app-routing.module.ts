import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import {HomeComponent} from "./components/home/home.component";
import {CropComponent} from "./components/crop/crop.component";
import {DiseaseComponent} from "./components/disease/disease.component";
import {FertilizerComponent} from "./components/fertilizer/fertilizer.component";
import {ShopComponent} from "./components/shop/shop.component";
import {BlogComponent} from "./components/blog/blog.component";
const routes: Routes = [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'shop', component: ShopComponent
    },
    {
      path: 'blog', component: BlogComponent
    },
    {
      path: 'crop', component: CropComponent
    },
    {
      path: 'disease', component: DiseaseComponent
    },
    {
      path: 'fertilizer', component: FertilizerComponent
    },
    {
      path: 'register', component: RegisterComponent
    },
    {
      path: 'cart', component: CartComponent
    },
    {
      path: 'checkout', component: CheckoutComponent
    },
    {
      path: 'thankyou', component: ThankyouComponent
    }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
