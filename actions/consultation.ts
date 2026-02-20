"use server"

import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Valid phone number required"),
  visaType: z.string().min(1, "Please select a visa type"),
  message: z.string().optional(),
});

export async function submitConsultation(formData: z.infer<typeof schema>) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  const validatedFields = schema.safeParse(formData);

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors };
  }

  console.log("New Consultation Request:", validatedFields.data);

  return { success: true };
}