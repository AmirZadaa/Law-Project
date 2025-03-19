'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import useWeb3Forms from '@web3forms/react'
import { useState } from 'react'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  occupation: z.string().optional(),
  message: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(350, {
      message: 'Bio must not be longer than 30 characters.',
    }),
})

export default function ContactUsForm() {
  const [result, setResult] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState<boolean | null>(false)
  const [isloading, setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      phone: '',
      email: '',
      occupation: '',
      message: '',
    },
  })

  const accessKey = '99db5e7a-92c4-434c-838e-ff18a7face3c'

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'My portifio',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (msg) => {
      setIsSuccess(true)
      setResult(msg)
      form.reset()
    },
    onError: (msg) => {
      setIsSuccess(false)
      setResult(msg)
    },
  })

  const handleSubmit = (data: z.infer<typeof FormSchema>) => {
    setIsLoading(true)

    setTimeout(async () => {
      try {
        await onSubmit(data)
      } catch (error) {
        console.error(error)
        setIsSuccess(false)
        setResult('Something went wrong.')
      } finally {
        setIsLoading(false)
      }
    }, 3000) // 5-second delay
  }

  return (
    <div className="bg-foreground lg:px-10 space-y-10 max-md:space-y-6 max-xs:p-2 max-sm:p-3 max-md:p-4 max-lg:p-6 max-xl:p-8 xl:p-12 max-sm:space-y-4 shadow-[10px_20px_10px] shadow-foreground/30 border-2 border-dashed rounded-2xl">
      <h1 className="text-2xl max-sm:text-xl text-center font-bold mx-auto">
        Contact Our Legal Experts Now!
      </h1>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid grid-cols-2 max-md:grid-cols-1 lg:gap-4 max-lg:gap-2"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-lg max-sm:text-base">Name *</FormLabel>
                  <FormControl className="rounded-xl py-8 bg-foreground pl-6 max-sm:pl-3 text-text border-2 focus:shadow-inner">
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-lg max-sm:text-base">Phone *</FormLabel>
                  <FormControl className="rounded-xl py-8 pl-6 max-sm:pl-3 bg-foreground text-text border-2 focus:shadow-inner">
                    <Input placeholder="Your contact number" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display number.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="text-primary-400">
                  <FormLabel className="text-lg max-sm:text-base">Email *</FormLabel>
                  <FormControl className="rounded-xl py-8 bg-foreground pl-6 max-sm:pl-3 text-text border-2 focus:shadow-inner">
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="text-lg max-sm:text-base">Occupation</FormLabel>
                  <FormControl className="rounded-xl py-8 bg-foreground pl-6 max-sm:pl-3 text-text border-2 focus:shadow-inner">
                    <Input placeholder="Your current occupation" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="text-lg max-sm:text-base">Message *</FormLabel>
                  <FormControl className="rounded-xl pl-6 max-sm:pl-3 bg-foreground text-text border-2 focus:shadow-inner">
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className=""
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isloading}
              className="flex md:col-span-2 text-background mt-8 max-lg:mt-6 max-sm:mt-3 self-center mx-auto rounded-full text-lg bg-text hover:bg-accent py-8 px-16 max-lg:py-7 max-lg:px-12 max-sm:px-8 max-sm:py-5 max-sm:text-base"
            >
              {!isloading ? (
                'Submit'
              ) : (
                <svg
                  className="animate-spin border-2 border-r-green-500 border-indigo-100 h-6 w-6 rounded-full"
                  viewBox="0 0 12 12"
                ></svg>
              )}
            </Button>
          </form>
        </Form>
        {/* Success/Error Message */}
        {result && (
          <div
            className={`text-center font-semibold p-2 rounded-md ${
              isSuccess ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {result}
          </div>
        )}
      </div>
    </div>
  )
}
