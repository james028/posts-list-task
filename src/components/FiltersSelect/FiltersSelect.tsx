import React, { Dispatch, SetStateAction } from "react";
import { UsersProps } from "../../interfaces/interfaces";

type FiltersSelectStateProps = {
    filterParam: string;
    setFilterParam: Dispatch<SetStateAction<string>>;
    fetchedUsersData: Array<UsersProps>;
};

const FiltersSelect: React.FC<FiltersSelectStateProps> = ({
                                                              filterParam,
                                                              setFilterParam,
                                                              fetchedUsersData,
                                                          }) => {
    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {
            target: { value },
        } = event;

        setFilterParam(value);
    };

    return (
        <div className="w-full py-3 mx-auto flex justify-end max-w-8xl">
            <form className="flex items-end">
                <label
                    htmlFor="authors"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-48"
                >
                    Filter by author:
                </label>
                <select
                    id="authors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={filterParam}
                    onChange={handleChangeSelect}
                >
                    <option value="">Choose author</option>
                    {fetchedUsersData?.map((item: UsersProps) => {
                        return (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        );
                    })}
                </select>
            </form>
        </div>
    );
};

export default FiltersSelect;
