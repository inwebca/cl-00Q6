abstract class Expense {
    protected description: string;
    protected amount: number;
    protected date: Date;

    constructor(description: string, amount: number, date: Date) {
        this.description = description;
        this.amount = amount;
        this.date = date;
    }

    abstract displayInfo(): string;

    getAmount(): number {
        return this.amount;
    }
}


class FoodExpense extends Expense {
    private category: string;

    constructor(description: string, amount: number, date: Date, category: string) {
        super(description, amount, date);
        this.category = category;
    }

    displayInfo(): string {
        return `Food Expense - Description: ${this.description}, Amount: $${this.amount}, Date: ${this.date.toLocaleDateString()}, Category: ${this.category}`;
    }
}

class TransportExpense extends Expense {
    private distance: number;

    constructor(description: string, amount: number, date: Date, distance: number) {
        super(description, amount, date);
        this.distance = distance;
    }

    displayInfo(): string {
        return `Transport Expense - Description: ${this.description}, Amount: $${this.amount}, Date: ${this.date.toLocaleDateString()}, Distance: ${this.distance} km`;
    }
}

class EntertainmentExpense extends Expense {
    private location: string;

    constructor(description: string, amount: number, date: Date, location: string) {
        super(description, amount, date);
        this.location = location;
    }

    displayInfo(): string {
        return `Entertainment Expense - Description: ${this.description}, Amount: $${this.amount}, Date: ${this.date.toLocaleDateString()}, Location: ${this.location}`;
    }
}

class ExpenseTracker {
    private expenses: Expense[] = [];

  
    addExpense(expense: Expense): void {
        this.expenses.push(expense);
    }

    displayExpenses(): void {
        this.expenses.forEach(expense => {
            console.log(expense.displayInfo());
        });
    }
    getTotalAmount(): number {
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
