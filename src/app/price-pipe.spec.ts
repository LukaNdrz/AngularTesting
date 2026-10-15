import { PricePipe } from './price-pipe';

describe('PricePipe', () => {

  const pipe = new PricePipe(); 

  it("აფორმატირებს ჩვეულებრივ ფასს", ()=>{
    expect(pipe.transform(4.5)).toBe("₾4.50")
  }), 
  it("უარყოფითი რიცხვი", ()=>{
    expect(pipe.transform(-1)).toBe("₾0.00")
  })
  it("ნული", ()=>{
    expect(pipe.transform(0)).toBe("₾0.00")
  })

  
});
