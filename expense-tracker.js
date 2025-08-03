const expense = [];

// Main menu system
function showMenu() { 
    /* display options */ 
    console.log(
`1. addExpense()
2. viewAllExpense()  
3. View by Category
4. Calculate Total
5. removeExpense()
6. Generate Report
7. Exit
Choose option (1-7):`)
    
}

showMenu();

// Expense management
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
    viewAllExpense();
}

function removeExpense(id) { 
    /* remove by ID */ 
    expense.splice(id - 1, 1);
    console.log(`Item with ID ${id} removed from expense.`); 
    viewAllExpense();
}

function viewAllExpense(){
    for(const item of expense){
        console.log(`ID: ${item.id}, Amount: ${item.amount}, Category: ${item.category}, Description: ${item.description}`)
    }
}

// const editExpense = (id, newAmount, newCategory, newDescription) => {
//      /* update expense */ 
//     const editItem = {
//         id: expense.length + 1,
//         newAmount: newAmount,
//         newCategory: newCategory,
//         newDescription: newDescription
//     }
//     expense.push(editItem);
//     console.log(`Item with ID ${id} is updated successfully.`)
// }



// Data operations

function calculateTotal(category = null) { 
    /* calculate totals */ 
}

const filterExpenses = (category) => {
     /* filter expenses */ 
     const filterExpense = expense.filter(item => item.category === category);
     console.log("Filter by Category:", filterExpense)
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