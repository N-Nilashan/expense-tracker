'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import CardsInfo from './_components/CardsInfo'
import { useEffect, useState } from 'react';
import { sql,getTableColumns,eq, desc } from 'drizzle-orm'
import { Budget, Expenses } from '@/utils/schema'
import { db } from '@/utils/dbConfig';
import BarChartDashboard from './_components/BarChartDashboard';

const Dashboard = () => {
  const { user } = useUser();

  const [budgetList,setBudgetList] = useState([]);

  useEffect(() => {
    user && getBudgetList();
  }, [user]);

  // TO get budget list
  const getBudgetList = async () => {
    const result = await db.select({
      ...getTableColumns(Budget),
      totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql`count(${Expenses.id})`.mapWith(Number),
    }).from(Budget)
      .leftJoin(Expenses, eq(Budget.id, Expenses.id))
      .where(eq(Budget.createdBy,user?.primaryEmailAddress?.emailAddress))
      .groupBy(Budget.id)
    .orderBy(desc(Budget.id));
    setBudgetList(result);
  }
  return (
    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Hi, {user?.username || "Guest"} </h2>
      <p className='text-muted'>Here's what happening with your money, Let's manage your expense</p>
      <CardsInfo
      budgetList={budgetList}
      />
      <div className='grid grid-cols-1 md:grid-cols-3 mt-6'>
        <div className='md:col-span-2'>
          <BarChartDashboard
          budgetList={budgetList}
          />
        </div>
        <div>
          OTHER
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
