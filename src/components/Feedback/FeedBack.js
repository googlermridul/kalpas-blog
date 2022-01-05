import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "./FeedBack.scss";

const FeedBack = () => {
   const [countries, setCountries] = useState([]);
   const [phoneValue, setPhoneValue] = useState(null);
   const [countryValue, setCountryValue] = useState("");

   useEffect(() => {
      fetch(`https://restcountries.com/v3.1/all`)
         .then((res) => {
            return res.json();
         })
         .then((data) => {
            setCountries(data);
         });
   }, []);

   const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
      const res = fetch(
         "https://kalpas-blog-default-rtdb.firebaseio.com/feedbackData.json",
         {
            method: "POST",
            headers: {
               "Content-type": "application/json",
            },
            body: JSON.stringify(data),
         }
      );
      if (res) {
         alert("your feedback submitted successfully!");
         reset();
      } else {
         alert("something went wrong!");
      }
   };

   return (
      <div className="feed-back">
         <h3>Thank you so much for taking the time!</h3>
         <p>Please provide the below details.</p>

         <form onSubmit={handleSubmit(onSubmit)} className="mb-0 text-start">
            <div className="row">
               <div className="form-group col-md-6 mb-3">
                  <input
                     className="form-control"
                     defaultValue=""
                     {...register("firstName", { required: true })}
                     type="text"
                     placeholder="First name"
                  />
                  {errors.firstName && (
                     <span className="error">first name is required</span>
                  )}
               </div>
               <div className="form-group col-md-6 mb-3">
                  <input
                     className="form-control"
                     defaultValue=""
                     {...register("lastName", { required: true })}
                     type="text"
                     placeholder="Last name"
                  />
                  {errors.lastName && (
                     <span className="error">last name is required</span>
                  )}
               </div>
               <div className="form-group col-md-6 mb-3">
                  <input
                     id="email"
                     className="form-control"
                     type="email"
                     placeholder="Email"
                     {...register("email", {
                        required: "required",
                        pattern: {
                           value: /\S+@\S+\.\S+/,
                           message: "Entered value does not match email format",
                        },
                     })}
                  />
                  {errors.email && (
                     <span role="alert">{errors.email.message}</span>
                  )}
               </div>
               <div className="form-group col-md-6 mb-3">
                  <PhoneInput
                     className="form-control"
                     placeholder="Phone number"
                     {...register("phone", { required: true })}
                     defaultCountry="BD"
                     value={phoneValue}
                     onChange={setPhoneValue}
                     error={
                        phoneValue
                           ? isValidPhoneNumber(phoneValue)
                              ? undefined
                              : "Invalid phone number"
                           : "Phone number required"
                     }
                  />
                  {errors.phone && (
                     <span className="error">phone is required</span>
                  )}
               </div>
               <div className="form-group col-md-12 mb-3">
                  <Select
                     name="country"
                     value="name"
                     {...register("country", { required: true })}
                     options={countries.map((country) => ({
                        value: `${country.name.common}`,
                        label: `${country.name.common}`,
                     }))}
                  />
                  {errors.country && (
                     <span className="error">country is required</span>
                  )}
               </div>
               <div className="form-group col-md-12 mb-3">
                  <textarea
                     cols="50"
                     rows="5"
                     className="form-control text-area"
                     defaultValue=""
                     {...register("address", { required: true })}
                     type="text"
                     placeholder="Address"
                  />
                  {errors.address && (
                     <span className="error">address is required</span>
                  )}
               </div>
            </div>
            <button type="submit" className="btn submit-btn">
               Submit Feedback
            </button>
         </form>
      </div>
   );
};

export default FeedBack;
