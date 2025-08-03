// Main menu system

function showMenu() { 
    /* display options */ 
    console.log(
`1. Add Expense
2. View All Expenses  
3. View by Category
4. Calculate Total
5. Remove Expense
6. Generate Report
7. Exit
Choose option (1-7):`)
    
}

 

// Expense management
const expense = [];
const addExpense = (amount, category, description = "No description added") => { 
    /* add expense */ 
    const item = {
        id: expense.length + 1,
        amount: amount,
        category: category,
        description: description
    }
    expense.push(item);
    console.log(`Item ${category} is added to expense.`);
    viewExpense();
}

function removeExpense(id) { 
    /* remove by ID */ 
    expense.splice(id - 1, 1);
    console.log(`Item with ID ${id} removed from expense.`); 
    viewExpense();
}

function viewExpense(){
    for(const item of expense){
        console.log(`ID: ${item.id}, Amount: ${item.amount}, Category: ${item.category}, Description: ${item.description}`)
    }
}

const editExpense = (id, ...updates) => {
     /* update expense */ 

}

 

// Data operations

function calculateTotal(category = null) { 
    /* calculate totals */ 
}

const filterExpenses = (criteria) => {
     /* filter expenses */ 
}

function generateReport() {
     /* create expense report */ 
}

 

// Utility functions

const validateInput = (input, type) => {
     /* input validation */ 
}

function formatCurrency(amount) { 
    /* format money display */ 
}