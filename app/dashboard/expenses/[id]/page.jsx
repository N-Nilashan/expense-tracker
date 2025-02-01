'use client'
import { db } from "@/utils/dbConfig"
import { Budget, Expenses } from "@/utils/schema"
import { useUser } from "@clerk/nextjs"
import { sql, getTableColumns, eq } from 'drizzle-orm'
import { useEffect, useState, use } from "react"
import BudgetItem from "../../budget/_components/BudgetItem"
import AddExpense from '../_components/AddExpense'

const ExpensesScreen = ({ params }) => {
  const [budgetInfo, setBudgetInfo] = useState()
  const { user } = useUser()
  const { id } = use(params) // Unwrapping `params`

  useEffect(() => {
    user && getBudgetInfo()
  }, [id, user])

  const getBudgetInfo = async () => {
    const result = await db.select({
      ...getTableColumns(Budget),
      totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql`count(${Expenses.id})`.mapWith(Number),
    }).from(Budget)
      .leftJoin(Expenses, eq(Budget.id, Expenses.id))
      .where(eq(Budget.createdBy, user?.primaryEmailAddress?.emailAddress))
      .where(eq(Budget.id, id)) // Using unwrapped `id`
      .groupBy(Budget.id)

    setBudgetInfo(result[0])
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-primary">My Expenses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
        {budgetInfo ? (
          <BudgetItem budget={budgetInfo} />
        ) : (
          <div className="h-[150px] w-full bg-primary-foreground rounded-lg animate-pulse"></div>
        )}
        <AddExpense budgetId={id} user={user} />
      </div>
    </div>
  )
}

export default ExpensesScreen
