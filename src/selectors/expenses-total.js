export default expenses =>
  expenses.reduce((sum, { amount }) => sum + amount, 0);
