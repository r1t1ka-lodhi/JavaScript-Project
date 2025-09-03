document.addEventListener('DOMContentLoaded', () => {   
    const form = document.getElementById("expense-form");
    const expenseName = document.getElementById("expense-name");
    const expenseAmount = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmount = document.getElementById("total-amount");
    const errorMessage = document.getElementById("error-message");

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let total = calculateTotal();
    renderExpenses();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseName.value.trim();
        const amount = parseFloat(expenseAmount.value.trim());

        if (name!=="" && !isNaN(amount) && amount > 0) {
            const newExpense = { 
                id: Date.now(),
                name: name,
                amount: amount
             };
            expenses.push(newExpense);
            saveExpensesToLocalStorage();
            renderExpenses();
            updateTotalAmount();

            expenseName.value = "";
            expenseAmount.value = "";
        }
    });
    function renderExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach(expense => {
            const li = document.createElement("li");
            li.innerHTML = `${expense.name}: Rs${expense.amount.toFixed(2)}
            <button class="delete-btn" data-id="${expense.id}">Delete</button>`;
            expenseList.appendChild(li);
        });
    }
    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }
    function saveExpensesToLocalStorage() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }
    function updateTotalAmount() {
        total = calculateTotal();
        totalAmount.textContent = total.toFixed(2);
    }
    expenseList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter(expense => expense.id !== id);
            saveExpensesToLocalStorage();
            renderExpenses();
            updateTotalAmount();
        }
    })
})