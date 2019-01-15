import React, { Component } from 'react'

import  { withRouter } from 'react-router-dom'
import ExpenseList from './ExpenseList'

class TopNavBar extends Component {

    render(){
        let storedExpenses = this.props.expenses.map(expense => {
       return <Expense key={expense.id} expense={expense} addExpenseToDebtList={this.props.addExpenseToDebtList} />
        })

        return (
            <div>
           {storedExpenses} 
              </div>                                         

  )
}
}
export default withRouter(TopNavBar)