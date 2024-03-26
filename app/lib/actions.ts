'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
const FormSchema = z.object({
  username: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  about: z.string(), // .number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  country: z.enum(['United States', 'Mexico', 'Canada']),
});


export type State = {
    errors?: {
        username?: string[];
        about?: string[];
        country?: string[];
    };
    message?: string | null;
  };
   
  export async function editPlanets(prevState: State, formData: FormData) {
    const rawFormData = FormSchema.safeParse({
            username: formData.get('username'),
            about: formData.get('about'),
            country: formData.get('country'),
          });


    if (!rawFormData.success) {
        console.log(rawFormData);
        return {
          errors: rawFormData.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create Invoice.',
        };
      }

      revalidatePath('/dashboard/planets');
      redirect('/dashboard/planets');
}