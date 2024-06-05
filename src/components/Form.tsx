import { FormEvent, useRef, useState } from "react";
import Button from "./Button";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
    name: string;
    age: number;
}

const Form = () => {
    // Uncontrolled controller
    //const nameRef = useRef<HTMLInputElement>(null);
    //const ageRef = useRef<HTMLInputElement>(null);
    //const person = { name: "", age: 0 };

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>();

    const handleFormSubmit = (data: FieldValues) => {
        console.log(data);
    };

    //const [person, setPerson] = useState({
    //    name: "",
    //    age: "",
    //});

    //const handleFormSubmit = (event: FormEvent) => {
    //event.preventDefault();
    //console.log(person);

    /*
        if (nameRef.current !== null) {
            person.name = nameRef.current.value;
        }

        if (ageRef.current !== null) {
            person.age = parseInt(ageRef.current.value);
        }
        */
    //};

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4">
            <div className="mb-3">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Name
                </label>
                <input
                    //onChange={(event) =>
                    //    setPerson({ ...person, name: event.target.value })
                    //}
                    //value={person.name}
                    {...register("name", {
                        required: true,
                        minLength: 3,
                        maxLength: 20,
                    })}
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.name?.type === "required" && (
                    <p className="text-sm text-red-500">Name is required.</p>
                )}
                {errors.name?.type === "minLenght" && (
                    <p className="text-sm text-red-500">Min length is 3.</p>
                )}
                {errors.name?.type === "maxLength" && (
                    <p className="text-sm text-red-500">Max length is 20.</p>
                )}
            </div>

            <div className="mb-3">
                <label
                    htmlFor="age"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Age
                </label>
                <input
                    //onChange={(event) =>
                    //    setPerson({
                    //        ...person,
                    //        age: parseInt(event.target.value),
                    //    })
                    //}
                    //value={person.age}
                    {...register("age", {
                        required: true,
                    })}
                    type="number"
                    id="age"
                    name="age"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>

            <button
                type="submit"
                disabled={!isValid}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-200 disabled:text-black disabled:cursor-not-allowed"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
