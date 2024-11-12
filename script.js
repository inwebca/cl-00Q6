"use strict";
class Expense {
    constructor(description, amount, date) {
        this.description = description;
        this.amount = amount;
        this.date = date;
    }
    getAmount() {
        return this.amount;
    }
}
class FoodExpense extends Expense {
    constructor(description, amount, date, category) {
        super(description, amount, date);
        this.category = category;
    }
    displayInfo() {
        return `Food Expense - Description: ${this.description}, Amount: $${this.amount}, Date: ${this.date.toLocaleDateString()}, Category: ${this.category}`;
    }
}
class TransportExpense extends Expense {
    constructor(description, amount, date, distance) {
        super(description, amount, date);
        this.distance = distance;
    }
    displayInfo() {
        return `Transport Expense - Description: ${this.description}, Amount: $${this.amount}, Date: ${this.date.toLocaleDateString()}, Distance: ${this.distance} km`;
    }
}
class EntertainmentExpense extends Expense {
    constructor(description, amount, date, location) {
        super(description, amount, date);
        this.location = location;
    }
    displayInfo() {
        return `Entertainment Expense - Description: ${this.description}, Amount: $${this.amount}, Date: ${this.date.toLocaleDateString()}, Location: ${this.location}`;
    }
}
class ExpenseTracker {
    constructor() {
        this.expenses = [];
    }
    addExpense(expense) {
        this.expenses.push(expense);
    }
    displayExpenses() {
        this.expenses.forEach(expense => {
            console.log(expense.displayInfo());
        });
    }
    getTotalAmount() {
        return this.expenses.reduce((total, expense) => total + expense.getAmount(), 0);
    }
}
const tracker = new ExpenseTracker();
tracker.addExpense(new FoodExpense("Super C", 50, new Date(2024, 10, 10), "Groceries"));
tracker.addExpense(new FoodExpense("Maxi", 110, new Date(2024, 9, 10), "Groceries"));
tracker.addExpense(new TransportExpense("Uber", 20, new Date(2024, 10, 11), 15));
tracker.addExpense(new EntertainmentExpense("Cinema", 15, new Date(2024, 10, 12), "Downtown"));
tracker.displayExpenses();
console.log(`Total Expenses: $${tracker.getTotalAmount()}`);
