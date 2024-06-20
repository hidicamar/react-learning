interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete, onEdit }: Props) => {
    if (expenses.length === 0) return null;
    return (
        <>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                                Description
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Amount
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Category
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            ></th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {expenses.map((expense) => (
                            <tr key={expense.id}>
                                <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                                    {expense.description}
                                </td>

                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                    {expense.amount}
                                </td>

                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                    {expense.category}
                                </td>

                                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                    <button onClick={() => onEdit(expense.id)}>
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => onDelete(expense.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>
                                $
                                {expenses
                                    .reduce(
                                        (acc, expense) => expense.amount + acc,
                                        0
                                    )
                                    .toFixed(2)}
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default ExpenseList;
