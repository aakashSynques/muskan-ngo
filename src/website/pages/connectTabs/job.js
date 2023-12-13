// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { emailreg, numberreg } from "../../component/validations/validation";
// import { fetch } from "../../../utils";
// import { useDispatch } from "react-redux";
// import { useInput } from "../../../hook/input-hook";


// function Jobs(props) {
//     return (
//         <div>

//         </div>
//     )
// }



// export default Jobs


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { emailreg, numberreg } from "../../component/validations/validation";
import { fetch } from "../../../utils";
import { useDispatch } from "react-redux";
import { useInput } from "../../../hook/input-hook";

const isName = (value) => {
    if (value.trim() === "") {
        return { validated: false, message: "*Please Enter Your Name*" };
    } else {
        return { validated: true, message: "" };
    }
};
const isEmail = (value) => {
    if (value.trim() === "") {
        return { validated: false, message: "*Please Enter Your Email*" };
    } else if (!emailreg.test(value)) {
        return { validated: false, message: "*Your Email Is Invalid*" };
    } else {
        return { validated: true, message: "" };
    }
};
const isMobile = (value) => {
    if (value.trim() === "") {
        return { validated: false, message: "*Please Enter Your Mobile*" };
    } else if (!numberreg.test(value)) {
        return {
            validated: false,
            message: "*Please Enter Your Mobile 10 Digit Only!*",
        };
    } else {
        return { validated: true, message: "" };
    }
};

const isDesignation = (value) => {
    if (value.trim() === "") {
        return {
            validated: false,
            message: "*Please Enter Your Current Designation*",
        };
    } else {
        return { validated: true, message: "" };
    }
};
const isEmployer = (value) => {
    if (value.trim() === "") {
        return {
            validated: false,
            message: "*Please Enter Your Current Employer*",
        };
    } else {
        return { validated: true, message: "" };
    }
};

const isDateofBirth = (value) => {
    if (value.trim() === "") {
        return {
            validated: false,
            message: "*Please Enter Your Date of Birth!*",
        };
    } else {
        return { validated: true, message: "" };
    }
};

const isExperiance = (value) => {
    if (value.trim() === "") {
        return {
            validated: false,
            message: "*Please Enter Your Experiance!*",
        };
    } else {
        return { validated: true, message: "" };
    }
};

const isPostApplied = (value) => {
    if (value.trim() === "") {
        return {
            validated: false,
            message: "*Please Enter Your Post Applied for!*",
        };
    } else {
        return { validated: true, message: "" };
    }
};

const isResume = (value) => {
    if (value.trim() === "") {
        return {
            validated: false,
            message: "*Please Upload Your Resume /CV!*",
        };
    } else {
        return { validated: true, message: "" };
    }
};

function Jobs(props) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [networkError, setNetworkError] = useState(false);
    const [subError, setSubError] = useState("");
    const dispatch = useDispatch();

    const [nameTouch, setNameTouch] = useState("");
    const [isEmailTouch, setEmailTouch] = useState("");
    const [mobileTouch, setMobileTouch] = useState("");
    const [designationTouch, setDesignationTouch] = useState("");
    const [employerTouch, setEmployerTouch] = useState("");
    const [dateofBirthTouch, setDateofBirthTouch] = useState("");
    const [experianceTouch, setExperianceTouch] = useState("");
    const [postApplyTouch, setPostApplyTouch] = useState("");
    const [resumeTouch, setResumeTouch] = useState("");

    const {
        hasError: hasErrorName,
        enterValue: enterValueName,
        onChangeHandler: onChangeHandlerName,
        reset: resetName,
        message: NameMessage,
        isTouch: isTouchName,
        onBlurHandler: onBlurHandlerName,
    } = useInput(isName, setNetworkError, setNameTouch);

    const {
        hasError: hasErrorEmail,
        enterValue: enterValueEmail,
        onChangeHandler: onChangeHandlerEmail,
        reset: resetEmail,
        message: emailMessage,
        isTouch: isTouchEmail,
        onBlurHandler: onBlurHandlerEmail,
    } = useInput(isEmail, setNetworkError, setEmailTouch);

    const {
        hasError: hasErrorMobile,
        enterValue: enterValueMobile,
        onChangeHandler: onChangeHandlerMobile,
        reset: resetMobile,
        message: MobileMessage,
        isTouch: isTouchMobile,
        onBlurHandler: onBlurHandlerMobile,
    } = useInput(isMobile, setNetworkError, setMobileTouch);

    const {
        hasError: hasErrorDesignation,
        enterValue: enterValueDesignation,
        onChangeHandler: onChangeHandlerDesignation,
        reset: resetDesignation,
        message: DesignationMessage,
        isTouch: isTouchDesignation,
        onBlurHandler: onBlurHandlerDesignation,
    } = useInput(isDesignation, setNetworkError, setDesignationTouch);
    const {
        hasError: hasErrorEmployer,
        enterValue: enterValueEmployer,
        onChangeHandler: onChangeHandlerEmployer,
        reset: resetEmployer,
        message: EmployerMessage,
        isTouch: isTouchEmployer,
        onBlurHandler: onBlurHandlerEmployer,
    } = useInput(isEmployer, setNetworkError, setEmployerTouch);

    const {
        hasError: hasErrorDateofBirth,
        enterValue: enterValueDateofBirth,
        onChangeHandler: onChangeHandlerDateofBirth,
        reset: resetDateofBirth,
        message: DateofBirthMessage,
        isTouch: isTouchDateofBirth,
        onBlurHandler: onBlurHandlerDateofBirth,
    } = useInput(isDateofBirth, setNetworkError, setDateofBirthTouch);
    const {
        hasError: hasErrorExperiance,
        enterValue: enterValueExperiance,
        onChangeHandler: onChangeHandlerExperiance,
        reset: resetExperiance,
        message: ExperianceMessage,
        isTouch: isTouchExperiance,
        onBlurHandler: onBlurHandlerExperiance,
    } = useInput(isExperiance, setNetworkError, setExperianceTouch);

    const {
        hasError: hasErrorPostApply,
        enterValue: enterValuePostApply,
        onChangeHandler: onChangeHandlerPostApply,
        reset: resetPostApply,
        message: PostApplyMessage,
        isTouch: isTouchPostApply,
        onBlurHandler: onBlurHandlerPostApply,
    } = useInput(isPostApplied, setNetworkError, setPostApplyTouch);
    const {
        hasError: hasErrorResume,
        enterValue: enterValueResume,
        onChangeHandler: onChangeHandlerResume,
        reset: resetResume,
        message: ResumeMessage,
        isTouch: isTouchResume,
        onBlurHandler: onBlurHandlerResume,
    } = useInput(isResume, setNetworkError, setResumeTouch);
    useEffect(() => {
        setSubError("");
        setNameTouch();
        setEmailTouch("");
        setMobileTouch("");
        setDesignationTouch("");
        setEmployerTouch();
        setDateofBirthTouch();
        setExperianceTouch();
        setPostApplyTouch();
        setResumeTouch();
    }, [
        enterValueName,
        enterValueEmail,
        enterValueMobile,
        enterValueDesignation,
        enterValueEmployer,
        enterValueDateofBirth,
        enterValueExperiance,
        enterValuePostApply,
        enterValueResume,
    ]);

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setNetworkError("");

        if (
            hasErrorName === true ||
            hasErrorEmail === true ||
            hasErrorMobile === true ||
            hasErrorDesignation === true ||
            hasErrorEmployer === true ||
            hasErrorDateofBirth === true ||
            hasErrorExperiance === true ||
            hasErrorPostApply === true ||
            hasErrorResume === true
        ) {
            setSubError("fields");
            setIsLoading(false);
            return false;
        } else if (
            !isTouchName ||
            !isTouchEmail ||
            !isTouchMobile ||
            !isTouchDesignation ||
            !isTouchEmployer ||
            !isTouchDateofBirth ||
            !isTouchExperiance ||
            !isTouchPostApply ||
            !isTouchResume
        ) {
            if (!isTouchName) {
                setNameTouch("*Please Enter Your Full Name*");
            }
            if (!isTouchEmail) {
                setEmailTouch("*Please Enter Your Email*");
            }
            if (!isTouchMobile) {
                setMobileTouch("*Please Enter Your Mobile Number*");
            }
            if (!isTouchResume) {
                setResumeTouch("*Please Upload Your Resume /CV*");
            }
            setSubError("fields");
            setIsLoading(false);
            return false;
        }
        try {

            const body = {
                full_nmae: enterValueName,
                email: enterValueEmail,
                mobile: enterValueMobile,

                resume: enterValueResume,
            }
            const response = await fetch('/form/save-career', 'POST', body, null);

            setIsLoading(false);
            if (response.data === false) {
                setIsLoading(false);
                return false;
            }
            resetName();
            resetEmail();
            resetMobile();
            resetResume();
            // toast.success("Applied Successful!");
        } catch (err) {
            setIsLoading(false);
            if (err.response && err.response.data && err.response.data.message) {
                setNetworkError(err.response.data.message);
                // toast.error(err.response.data.message);
            } else {
                setNetworkError("Something Went Wrong. Please Try Again Later.");
                // toast.error("Something Went Wrong. Please Try Again Later.");
            }
        } finally {
        }
    };
    return (
        <div>
            <form className="space-y-6">
                <div>
                    <div>
                        <div className="mt-2 mx-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Full Name *"
                                onChange={onChangeHandlerName}
                                value={enterValueName}
                                onBlur={() => {
                                    onBlurHandlerName();
                                    setNameTouch("");
                                }}
                            />
                        </div>
                        {hasErrorName && (
                            <strong>
                                {NameMessage}
                            </strong>
                        )}
                        {nameTouch && (
                            <strong>
                                {nameTouch}
                            </strong>
                        )}
                        {subError === "Name not found" && (
                            <strong>
                                This Name Doesn't Exist! You Might Want To SIGN UP.
                            </strong>
                        )}
                    </div>



                    <div>
                        <div className="mt-2 mx-2">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                autoComplete="email"
                                placeholder="E-Mail *"
                                onChange={onChangeHandlerEmail}
                                value={enterValueEmail}
                                onBlur={() => {
                                    onBlurHandlerEmail();
                                    setEmailTouch("");
                                }}
                            />
                        </div>
                        {hasErrorEmail && (
                            <strong>
                                {emailMessage}
                            </strong>
                        )}
                        {isEmailTouch && (
                            <strong>
                                {isEmailTouch}
                            </strong>
                        )}
                        {subError === "Email not found" && (
                            <strong>
                                *This Email Doesn't Exist! You Might Want To SIGN UP.*
                            </strong>
                        )}
                    </div>
                    <div>
                        <div className="mt-2 mx-2">
                            <input
                                id="mobile"
                                name="mobile"
                                type="text"
                                autoComplete="mobile"
                                placeholder="Mobile number *"
                                onChange={onChangeHandlerMobile}
                                value={enterValueMobile}
                                onBlur={() => {
                                    onBlurHandlerMobile();
                                    setMobileTouch("");
                                }}
                            />
                        </div>
                        {hasErrorMobile && (
                            <strong>
                                {MobileMessage}
                            </strong>
                        )}
                        {mobileTouch && (
                            <strong>
                                {mobileTouch}
                            </strong>
                        )}
                        {subError === "passwords" && (
                            <strong>
                                *Password does not match!.*
                            </strong>
                        )}
                    </div>
                </div>




                <div>
                    <div className="mt-2 mx-2">
                        <label>Resume /CV *</label>
                        <input
                            id="resume"
                            name="resume"
                            type="file"
                            autoComplete="resume"
                            onChange={onChangeHandlerResume}
                            value={enterValueResume}
                            onBlur={() => {
                                onBlurHandlerResume();
                                setResumeTouch("");
                            }}
                        />
                    </div>
                    {hasErrorResume && (
                        <strong>
                            {ResumeMessage}
                        </strong>
                    )}
                    {resumeTouch && (
                        <strong>
                            {resumeTouch}
                        </strong>
                    )}
                    {subError === "Name not found" && (
                        <strong>
                            This Name Doesn't Exist! You Might Want To SIGN UP.
                        </strong>
                    )}
                </div>
                <div className="text-center">
                    <Link
                        to="#"

                    >
                        <button
                            // type="submit"
                            onClick={submitHandler}

                        >
                            SUBMIT
                        </button>
                    </Link>
                </div>
            </form>





        </div>
    );
}

export default Jobs;
