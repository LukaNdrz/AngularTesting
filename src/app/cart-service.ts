import { computed, Injectable, signal } from '@angular/core';
import {Item} from './item.model'
@Injectable({
  providedIn: 'root',
})
export class CartService {

  readonly products = signal<Item[]>([
    {
      id:1, 
      name:"ყავ", 
      price:4.5
    }, 
    {
      id:2, 
      name:"წიგნი", 
      price:12.99
    }, 
    {
      id:3, 
      name:"კალამი", 
      price:2
    }

  ])

  items=signal<Item[]>([])
  total = computed(()=>this.items().reduce((s,i)=>s+i.price, 0))

  add(item:Item){
    this.items.update(value=>[...value,item])
  }

  remove(id:number){
    this.items.update(v=>v.filter(i=>i.id!==id))
  }

  clear(){
    this.items.set([])
  }
  
}
