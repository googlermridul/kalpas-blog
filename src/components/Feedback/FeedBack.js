import React from "react";
import { useForm } from "react-hook-form";
import "./FeedBack.scss";

const FeedBack = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      console.log(data);
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
                     className="form-control"
                     defaultValue=""
                     {...register("email", { required: true })}
                     type="email"
                     placeholder="Email"
                  />
                  {errors.email && (
                     <span className="error">email is required</span>
                  )}
               </div>
               <div className="form-group col-md-6 mb-3">
                  <input
                     className="form-control"
                     defaultValue=""
                     {...register("phone", { required: true })}
                     type="number"
                     placeholder="Phone"
                  />
                  {errors.phone && (
                     <span className="error">phone is required</span>
                  )}
               </div>
               <div className="form-group col-md-12 mb-3">
                  <input
                     className="form-control"
                     defaultValue=""
                     {...register("country", { required: true })}
                     type="text"
                     placeholder="Country"
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
