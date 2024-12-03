import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../components/ui/form";
import { submitTrip } from "../services/tripService";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

// Define the form data interface
interface TripFormData {
  studentName: string;
  collegeId: string;
  destination: string;
  startDate: string;
  endDate: string;
  notes?: string;
}

const TripForm: React.FC = () => {
  const form = useForm<TripFormData>({
    defaultValues: {
      studentName: "",
      collegeId: "",
      destination: "",
      startDate: "",
      endDate: "",
      notes: "",
    },
  });

  // Form submit handler
  const onSubmit: SubmitHandler<TripFormData> = async (data) => {
    try {
      const response = await submitTrip(data);
      console.log("Trip submitted:", response);
      form.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error submitting trip:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" grid grid-cols-3 gap-8"
      >
        {/* Student Name */}
        <FormField
          name="studentName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* College ID */}
        <FormField
          name="collegeId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>College ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter your college ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Destination */}
        <FormField
          name="destination"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <Input placeholder="Enter destination" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Start Date */}
        <FormField
          name="startDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* End Date */}
        <FormField
          name="endDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Notes */}
        <FormField
          name="notes"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Additional information" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit">Submit Trip</Button>
      </form>
    </Form>
  );
};

export default TripForm;
