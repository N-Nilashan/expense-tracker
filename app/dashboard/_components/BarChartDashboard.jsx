import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts"

const BarChartDashboard = ({budgetList}) => {
  return (
      <div>
          <BarChart
          width={500}
          height={500}
          data={budgetList}
              margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom:5
          }}
          >
              <XAxis dataKey='name'/>
              <YAxis />
              <Tooltip/>
              <Legend/>
              <Bar dataKey='totalSpend' stackId='a' fill="#3E2723"/>
              <Bar dataKey='amount' stackId='a' fill="#D7CCC8"/>
          </BarChart>
    </div>
  )
}

export default BarChartDashboard