import type { ShoppingItem, UsualItem } from "@/lib/types";

export const shoppingItems: ShoppingItem[] = [
  // Produce
  { id: "s1", name: "Bananas", note: "Bunch, not too ripe", quantity: 1, category: "Produce", checked: false },
  { id: "s2", name: "Baby spinach", quantity: 1, category: "Produce", checked: false },
  { id: "s3", name: "Avocados", quantity: 3, category: "Produce", checked: false },
  { id: "s4", name: "Honeycrisp apples", quantity: 6, category: "Produce", checked: false },
  // Bakery
  { id: "s5", name: "Sourdough loaf", quantity: 1, category: "Bakery", checked: false },
  { id: "s6", name: "Bagels", note: "Everything", quantity: 2, category: "Bakery", store: "costco", checked: false },
  // Meat & Fish
  { id: "s7", name: "Chicken thighs", note: "Boneless", quantity: 1, category: "Meat & Fish", checked: false },
  { id: "s8", name: "Salmon fillets", quantity: 2, category: "Meat & Fish", checked: false },
  // Dairy & Eggs
  { id: "s9", name: "Milk 2%", quantity: 2, category: "Dairy & Eggs", checked: false },
  { id: "s10", name: "Eggs", quantity: 1, category: "Dairy & Eggs", checked: false },
  { id: "s11", name: "Cheddar", quantity: 1, category: "Dairy & Eggs", checked: false },
  { id: "s12", name: "Greek yogurt", quantity: 1, category: "Dairy & Eggs", checked: false },
  { id: "s13", name: "Butter", quantity: 1, category: "Dairy & Eggs", checked: false },
  // Pantry
  { id: "s14", name: "Coffee beans", quantity: 1, category: "Pantry", store: "costco", checked: false },
  { id: "s15", name: "Granola bars", quantity: 2, category: "Pantry", store: "costco", checked: false },
  { id: "s16", name: "Pasta", quantity: 2, category: "Pantry", checked: false },
  { id: "s17", name: "Olive oil", quantity: 1, category: "Pantry", checked: false },
  // Household
  { id: "s18", name: "Dish soap", quantity: 1, category: "Household", checked: false },
  { id: "s19", name: "Paper towels", quantity: 1, category: "Household", store: "costco", checked: false },
  { id: "s20", name: "Laundry pods", quantity: 1, category: "Household", store: "costco", checked: false },
  { id: "s21", name: "Bread", quantity: 1, category: "Bakery", checked: false },
];

export const usualItems: UsualItem[] = [
  { id: "u1", name: "Milk 2%", category: "Dairy & Eggs", onList: true },
  { id: "u2", name: "Eggs", category: "Dairy & Eggs", onList: true },
  { id: "u3", name: "Bananas", category: "Produce", onList: true },
  { id: "u4", name: "Bread", category: "Bakery", onList: false },
  { id: "u5", name: "Apples", category: "Produce", onList: false },
  { id: "u6", name: "Coffee beans", category: "Pantry", onList: true },
  { id: "u7", name: "Greek yogurt", category: "Dairy & Eggs", onList: true },
  { id: "u8", name: "Cheddar", category: "Dairy & Eggs", onList: false },
  { id: "u9", name: "Butter", category: "Dairy & Eggs", onList: false },
  { id: "u10", name: "Baby spinach", category: "Produce", onList: true },
  { id: "u11", name: "Chicken thighs", category: "Meat & Fish", onList: true },
  { id: "u12", name: "Paper towels", category: "Household", onList: true },
];
