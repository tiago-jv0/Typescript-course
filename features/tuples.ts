const drink: { color: string; carbonated: boolean; sugar: number } = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string , boolean , number];

const pespi : Drink = ['brown' , true, 40]