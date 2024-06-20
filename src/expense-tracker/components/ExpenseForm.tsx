import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
    onSubmit: (data: ExpensesFormData) => void;
}

const schema = z.object({
    description: z.string().min(3).max(100),
    amount: z.number().min(0.01).max(100_000),
    category: z.string(),
});

type ExpensesFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ExpensesFormData>({ resolver: zodResolver(schema) });

    return (
        <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                reset();
            })}
            className="p-4"
        >
            <div className="mb-3">
                <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Description
                </label>
                <input
                    {...register("description")}
                    type="text"
                    id="description"
                    name="description"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.description && (
                    <p className="text-sm text-red-500">
                        {errors.description.message}
                    </p>
                )}
            </div>

            <div className="mb-3">
                <label
                    htmlFor="amount"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Amount
                </label>
                <input
                    {...register("amount", { valueAsNumber: true })}
                    type="number"
                    id="amount"
                    name="amount"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.amount && (
                    <p className="text-sm text-red-500">
                        {errors.amount.message}
                    </p>
                )}
            </div>

            <div className="mb-3">
                <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Category
                </label>
                <select
                    id="category"
                    {...register("category")}
                    name="category"
                    className="block w-full rounded-md border-0 py-1.5 px-2
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                    <option value="">All categories</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                {errors.category && (
                    <p className="text-sm text-red-500">
                        {errors.category.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed"
            >
                Submit
            </button>
        </form>
    );
};

export default ExpenseForm;
