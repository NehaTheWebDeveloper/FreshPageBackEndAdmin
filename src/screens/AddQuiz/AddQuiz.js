import React, { useState } from "react";
import { FieldArray, Field } from "formik";
import CircleOptions from "../../component/CircleOption/CircleOptions";

const AddQuizForm = ({ formik }) => {
  const categoryOptions = ["Category 1", "Category 2", "Category 3"];
  const subCategoryOptions = [
    "Subcategory 1",
    "Subcategory 2",
    "Subcategory 3",
  ];
  const bookOptions = ["Book 1", "Book 2", "Book 3"];
  const pointsOptions = ["50-50", "Phone a friend", "swap"];

  const chapterOptions = ["Chapter 1", "Chapter 2", "Chapter 3"];
  const correctAnswerOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [isOnActive, setIsOnActive] = useState(false);
  const [isOffActive, setIsOffActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className=" gap-4 w-full ">
      <FieldArray name="quizzes">
        {({ push, remove }) => (
          <div className="w-full">
            {formik.values.quizzes.map((quiz, quizIndex) => (
              <div
                key={quizIndex}
                className="grid grid-cols-12 gap-5 items-center justify-between bg-white-100 rounded p-4 w-full h-full"
              >
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.quizId`}
                      className="block font-semibold"
                    >
                      Quiz ID
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.quizId`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.quizName`}
                      className="block font-semibold "
                    >
                      Quiz Name
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.quizName`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.chooseCategory`}
                      className="block font-semibold"
                    >
                      Choose Category
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.chooseCategory`}
                      as="select"
                      className="p-2 border rounded w-full focus:outline-none"
                    >
                      {categoryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.chooseSubCategory`}
                      className="block font-semibold"
                    >
                      Choose Subcategory
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.chooseSubCategory`}
                      as="select"
                      className="p-2 border rounded w-full focus:outline-none"
                    >
                      {subCategoryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.chapter`}
                      className="block font-semibold"
                    >
                      Chapter
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.chapter`}
                      as="select"
                      className="p-2 border rounded w-full focus:outline-none"
                    >
                      {chapterOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.book`}
                      className="block font-semibold"
                    >
                      Book/music/audiobook
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.book`}
                      as="select"
                      className="p-2 border rounded w-full focus:outline-none"
                    >
                      {bookOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor={`quizzes.${quizIndex}.book`}
                    className="block font-semibold"
                  >
                    Points for options
                  </label>
                  <div className="grid grid-cols-12 gap-3">
                    <div className="mb-2 col-span-3">
                      <Field
                        name={`quizzes.${quizIndex}.option1`}
                        as="select"
                        className="p-2 border rounded w-full focus:outline-none"
                      >
                        {pointsOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="mb-2 col-span-3">
                      <Field
                        name={`quizzes.${quizIndex}.option2`}
                        as="select"
                        className="p-2 border rounded w-full focus:outline-none"
                      >
                        {pointsOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="mb-2 col-span-3">
                      <Field
                        name={`quizzes.${quizIndex}.option3`}
                        as="select"
                        className="p-2 border rounded w-full focus:outline-none"
                      >
                        {pointsOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <div className="mb-2 col-span-3">
                      <Field
                        name={`quizzes.${quizIndex}.option4`}
                        as="select"
                        className="p-2 border rounded w-full focus:outline-none"
                      >
                        {pointsOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="w-full h-[2px] bg-secondary "></div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2 w-full">
                    <label
                      htmlFor={`quizzes.${quizIndex}.switch`}
                      className=" font-semibold"
                    >
                      Betting
                    </label>
                    <div className="flex">
                      <div
                        className={`flex-grow ${
                          isActive ? "bg-secondary" : "bg-gray-300"
                        }`}
                      >
                        <button
                          type="button"
                          className="text-white font-semibold border w-full px-4 py-2"
                          onClick={handleToggle}
                        >
                          ON
                        </button>
                      </div>
                      <div
                        className={`flex-grow ${
                          !isActive ? "bg-secondary" : "bg-gray-300"
                        }`}
                      >
                        <button
                          type="button"
                          className="text-white font-semibold border w-full px-4 py-2"
                          onClick={handleToggle}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.amount`}
                      className="block font-semibold"
                    >
                      Amount
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.amount`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.reward`}
                      className="block font-semibold"
                    >
                      Reward
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.reward`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.duration`}
                      className="block font-semibold"
                    >
                      Duration
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.duration`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.question`}
                      className="block font-semibold"
                    >
                      Question
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.question`}
                      as="textarea"
                      rows="4"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6 gap-2">
                  <div className="flex gap-2 mt-2">
                    <div className=" bg-gray-200 h-[110px] w-full"></div>
                    <div className="bg-gray-200  h-[110px] w-full "></div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.option1`}
                      className="block font-semibold "
                    >
                      Option 1
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.option1`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none "
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.option2`}
                      className="block font-semibold"
                    >
                      Option 2
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.option2`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.option3`}
                      className="block font-semibold"
                    >
                      Option 3
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.option3`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.option4`}
                      className="block font-semibold"
                    >
                      Option 4
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.option4`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.correctAnswer`}
                      className="block font-semibold"
                    >
                      Select the correct option
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.correctAnswer`}
                      as="select"
                      className="p-2 border rounded w-full focus:outline-none"
                    >
                      {correctAnswerOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.correctAnswer`}
                      className="block font-semibold"
                    >
                      Select the hardness level
                    </label>
                    <div className=" px-10 py-1">
                      <CircleOptions />
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.sourceLink`}
                      className="block font-semibold"
                    >
                      Source Link
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.sourceLink`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none h-"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.type`}
                      className="block font-semibold"
                    >
                      Type
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.type`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="mb-2">
                    <label
                      htmlFor={`quizzes.${quizIndex}.tag`}
                      className="block font-semibold"
                    >
                      Tag
                    </label>
                    <Field
                      name={`quizzes.${quizIndex}.tag`}
                      type="text"
                      className="p-2 border rounded w-full focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* ...Add and Remove buttons... */}
          </div>
        )}
      </FieldArray>
      <div className="grid grid-cols-12 p-4">
        <div className="md:flex  items-center gap-5 col-span-6">
          <button
            type="submit"
            className="bg-transparent text-secondary font-semibold border border-secondary rounded-3xl px-4 py-1  mt-4 w-full"
          >
            Add Next Question
          </button>
          <button
            type="submit"
            className="bg-transparent text-secondary font-semibold border border-secondary rounded-3xl px-4 py-1  mt-4 w-full"
          >
            Save as Draft
          </button>
        </div>
        <div className="col-span-6 justify-end">
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-secondary text-white font-semibold border border-secondary rounded-3xl px-4 py-1  mt-4"
            >
              Submit & Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuizForm;
