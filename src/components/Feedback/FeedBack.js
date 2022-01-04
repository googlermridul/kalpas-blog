import React from "react";
import { useForm } from "react-hook-form";

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
      <div>
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
                     placeholder="Menu firstName"
                  />
                  {errors.firstName && (
                     <span className="error">firstName is required</span>
                  )}
               </div>
               <div className="form-group col-md-6 mb-3">
                  <input
                     className="form-control"
                     defaultValue=""
                     {...register("lastName", { required: true })}
                     type="number"
                     placeholder="lastName"
                  />
                  {errors.lastName && (
                     <span className="error">lastName is required</span>
                  )}
               </div>
               <div className="form-group col-md-6 mb-3">
                  <input
                     className="form-control"
                     defaultValue=""
                     {...register("image", { required: true })}
                     type="text"
                     placeholder="Image URL"
                  />
                  {errors.image && (
                     <span className="error">image url is required</span>
                  )}
               </div>
               <div className="form-group col-md-6 mb-3">
                  <textarea
                     cols="30"
                     rows="10"
                     className="form-control text-area"
                     defaultValue=""
                     {...register("address", { required: true })}
                     type="text"
                     placeholder="address"
                  />
                  {errors.address && (
                     <span className="error">address is required</span>
                  )}
               </div>
            </div>
            <button type="submit" className="btn-black">
               Submit Feedback
            </button>
         </form>
      </div>
   );
};

export default FeedBack;
