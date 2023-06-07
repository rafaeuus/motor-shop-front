"use client";
import { ChangeEvent, FormEvent } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Filter, Option } from "@/constants/filters";

interface InputValue {
  [key: string]: string;
}

interface FilterFormProps {
  filters: Filter[];
  handleSubmit: (e: FormEvent) => void;
  setModel: (model: string) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, sectionId: string) => void;
  inputValues: InputValue;
  modelsList: Option[];
}

const FilterFormScreen = ({
  filters,
  handleSubmit,
  setModel,
  handleInputChange,
  inputValues,
  modelsList
}: FilterFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="hidden lg:block">
      {filters.map((section) => (
        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                {section.id === "brand"
                  ? section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          type="checkbox"
                          defaultChecked={option.checked}
                          value={option.value}
                          onChange={(e) => handleInputChange(e, section.id)}
                          onChangeCapture={(e: ChangeEvent<HTMLInputElement>) =>
                            setModel(e.currentTarget.value)
                          }
                          checked={inputValues[section.id] === option.value}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500">
                          {option.label}
                        </label>
                      </div>
                    ))
                  : section.id === "model"
                  ? modelsList.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          type="checkbox"
                          defaultChecked={option.checked}
                          value={option.value}
                          onChange={(e) => handleInputChange(e, section.id)}
                          checked={inputValues[section.id] === option.value}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500">
                          {option.label}
                        </label>
                      </div>
                    ))
                  : section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          type="checkbox"
                          defaultChecked={option.checked}
                          value={option.value}
                          onChange={(e) => handleInputChange(e, section.id)}
                          checked={inputValues[section.id] === option.value}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1 text-gray-500">
                          {option.label}
                        </label>
                      </div>
                    ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2">
        Filtrar
      </button>
    </form>
  );
};

export default FilterFormScreen;
