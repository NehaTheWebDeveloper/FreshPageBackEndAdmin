import React, { useState } from "react";
import { Formik, Form } from "formik";
import AddQuizForm from "./AddQuiz";
import { Link } from "react-router-dom";

const AddQuizWrapper = () => {
  const initialValues = {
    quizzes: [
      {
        quizId: "",
        quizName: "",
        chooseCategory: "",
        chooseSubCategory: "",
        book: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",

        chapter: "",
        switch: false,
        amount: "",
        reward: "",
        duration: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctAnswer: "",
        sourceLink: "",
        type: "",
        tag: "",
      },
    ],
  };

  const [selectedLink, setSelectedLink] = useState(""); // State for selected link

  return (
    <>
      <div className="w-full flex flex-col h-full ">
        <div className="flex items-center justify-between px-8 pt-8 h-full">
          <div className="flex items-center justify-start   bg-gradient-radial from-gray1 to-gray2   rounded-3xl   ">
            <Link
              to={"/"}
              className={`text-black hover:font-semibold focus:text-red-500 hover:bg-slate-300 w-[] focus:bg-gradient-radial from-gray1 to-gray2 px-8 py-2 rounded-3xl ${
                selectedLink === "Solo"
                  ? "font-semibold bg-gradient-radial from-gray1 to-gray2"
                  : ""
              }`}
              onClick={() => setSelectedLink("Solo")}
            >
              Solo
            </Link>
            <Link
              to={"/"}
              className={`text-black hover:font-semibold focus:font-semibold hover:bg-gradient-radial  focus:bg-gradient-radial from-gray1 to-gray2 px-8 py-2 rounded-3xl ${
                selectedLink === "1 to 1"
                  ? "font-semibold bg-gradient-radial from-gray1 to-gray2"
                  : ""
              }`}
              onClick={() => setSelectedLink("1 to 1")}
            >
              1 to 1
            </Link>
            <Link
              to={"/"}
              className={`text-black hover:font-semibold focus:font-semibold hover:bg-gradient-radial  focus:bg-gradient-radial from-gray1 to-gray2 px-8 py-2 rounded-3xl ${
                selectedLink === "Multiple"
                  ? "font-semibold bg-gradient-radial from-gray1 to-gray2"
                  : ""
              }`}
              onClick={() => setSelectedLink("Multiple")}
            >
              Multiple
            </Link>
          </div>
        </div>
        <div className="h-full w-full  flex items-center justify-center mt-5 rounded-lg shadow-md">
          <div className="bg-white w-full  p-8   h-full">
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => console.log(values)}
              className="w-full bg-gray-600"
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <AddQuizForm formik={formik} initialValues={initialValues} />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuizWrapper;
