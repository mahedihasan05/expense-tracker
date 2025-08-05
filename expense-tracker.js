let expense = [];
let Category = [];
// Main menu system
function showMenu() { 
    /* display options */ 
    console.log(
`1. addExpense()
2. viewAllExpense()  
3. filterExpenses()
4. calculateTotal()
5. removeExpense()
6. Generate Report
7. Exit
Choose option (1-7):`)
    
}

showMenu();

// Expense management
const addExpense = (amount, category, description = "No description added") => { 
    /* add expense */ 
    // priceByCategory = category;
    const item = {
        id: expense.length + 1,
        amount: amount,
        category: category,
        description: description
    }
    expense.push(item);
    let existingCategory = false;

    for(const item of Category) {
        if(item.category_name === category) {
            existingCategory = true;
        }
    }
    //if(!true)
    if(!existingCategory) {
        Category.push({category_name: category, total: amount});
    }
    else {
        for(const item of Category) {
            if(item.category_name === category) {
                item.total += amount;
            }
        }
    }

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

const editExpense = (id, newAmount, newCategory, newDescription) => {
     /* update expense */ 
    const editItem = expense.map(item => {
        if(item.id === id){
            const newExpense = {
                ...item,
                amount: newAmount,
                category: newCategory,
                description: newDescription
            }
            return newExpense;
        }
        return item;
    }
)
    expense = editItem;
    console.log(expense);
    console.log(`Item with ID ${id} is updated successfully.`)
}



// Data operations

function calculateTotal() { 
    /* calculate totals */ 
    let total = 0;
    for(const item of expense){
        total += item.amount;
    }
    return total;
}

const filterExpenses = (category) => {
     /* filter expenses */ 
     const filterExpense = expense.filter(item => item.category === category);
     console.log("Filter by Category:", filterExpense);
}

function generateReport() {
     /* create expense report */ 
    for(const item of Category) {
        console.log(`Category: ${item.category_name}, Total: ${item.total}`);
    }
    console.log(`Total Amount: ${calculateTotal()}` )
}



// Utility functions

const validateInput = (input, type) => {
     /* input validation */ 
}

function formatCurrency(amount) { 
    /* format money display */ 
}