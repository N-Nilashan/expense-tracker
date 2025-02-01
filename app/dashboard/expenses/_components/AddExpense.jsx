import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {db} from '../../../../utils/dbConfig'
import {  Expenses } from '../../../../utils/schema'
import { toast } from 'sonner'

const AddExpense = ({ budgetId, user }) => { 

  const [name,setName]= useState()
  const [amount, setAmount] = useState()

const addNewExpense = async () => {
    const parsedAmount = parseFloat(amount);
    const validAmount = isNaN(parsedAmount) ? 0 : parsedAmount;

    const result = await db.insert(Expenses).values({
        name: name,
        amount: validAmount,
        budgetId: parseInt(budgetId, 10), // Ensure it's a proper integer
        createdAt: new Date() // Directly pass Date object
    }).returning({ insertedId: Expenses.id });

    if (result) {
        toast('New Expense Added!');
    } else {
        toast.error('Failed to add expense');
    }
};



    
  return (
      <div className='border p-5 rounded-lg'>
          <h2 className='font-bold text-lg'>Add Expense</h2>
          <div className='mt-2'>
                  <h2 className='text-primary font-medium my-1'>Expense Name</h2>
                  <Input
                    className='text-primary'
                    placeholder='e.g. Pet'
                    onChange={(e) => setName(e.target.value)}
                    
                  />
          </div>
          <div className='mt-2'>
                  <h2 className='text-primary font-medium my-1'>Expense Amount</h2>
                  <Input
                    className='text-primary'
                    placeholder='e.g. 1000'
                    onChange={(e) => setAmount(e.target.value)}
                    
                  />
          </div>
          <Button
              onClick={()=>addNewExpense()}
              disabled={!(name && amount)} className='mt-3 w-full'
          >
              Add New Expense
          </Button>
    </div>
  )
}

export default AddExpense