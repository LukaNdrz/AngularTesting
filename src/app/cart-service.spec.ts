import { TestBed } from '@angular/core/testing';
import { CartService } from './cart-service';
import { provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';

describe('CartService', () => {
  let svc: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    svc = TestBed.inject(CartService);
  });

  it('იწყებს ცარიელი კალათით', () => {
    expect(svc.items()).toEqual([]);
    expect(svc.total()).toBe(0);
  });
  it('ამატებს პროდუქტებს', () => {
    svc.add({ id: 1, name: 'ყავა', price: 4.5 });
    expect(svc.items().length).toBe(1);
  });

  it('total სწორად ამატებს', () => {
    ((svc.add({ id: 1, name: 'ყავა', price: 4.5 }), svc.add({ id: 2, name: 'წიგნი', price: 10.0 })),
      expect(svc.total()).toBeCloseTo(14.5));
  });

  it("remove შლის სწორ პროდუქტს", ()=>{
    (svc.add({id:1, name:"ყავა", price:4.5}), 
    svc.add({id:2, name:"წიგნი", price:10.0}), 
    svc.remove(1))
    expect(svc.items().length).toBe(1); 
    expect(svc.items()[0].id).toBe(2)

  })

  it("clear აცარიელებს კალათას", ()=>{
    svc.add({id:1, name:"ყავა", price:4.5});
    svc.clear(); 
    expect(svc.items()).toEqual([])
    expect(svc.total()).toBe(0)
  })






});
