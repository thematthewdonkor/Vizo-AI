"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-hot-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Video title must be at least 2 characters.",
  }),

  topic: z.string().min(2, {
    message: "Video topic must be at least 2 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      topic: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-6 md:mt-10">
      {/* Video topic and script */}
      <div className="col-span-2 border-2 border-dashed flex flex-col items-center rounded-md border-white/10 py-6">
        <Form {...form}>
          {" "}
          AZ
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white pb-2">Video Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter video title"
                      className="focus-visible:border-[grey] placeholder:text-xs text-white focus-visible:ring-[grey] focus-visible:ring-[0px] border-[grey]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2">
              <Tabs defaultValue="video_topic">
                <Label className="text-white text-sm font-normal">
                  Video Topic
                </Label>
                <TabsList className="grid w-full grid-cols-2 bg-gray-850">
                  <TabsTrigger
                    value="your_topic"
                    className="text-black text-sm font-normal"
                  >
                    Enter topic
                  </TabsTrigger>
                  <TabsTrigger
                    value="suggestions"
                    className="text-black text-sm font-normal"
                  >
                    Suggestions
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="your_topic" className="text-white">
                  <div className="space-y-1">
                    <Input id="name" placeholder="Enter your own topic" />
                  </div>
                </TabsContent>
                <TabsContent value="suggestions" className="text-white">
                  <div className="text-white">Suggestions will be here</div>
                </TabsContent>
              </Tabs>
              <Button
                className="
              bg-white 
              text-black
              text-sm 
              hover:bg-white 
              hover:text-black
              w-full
              md:w-[140px]
           "
              >
                Generate scripts
              </Button>
            </div>

            {/*Video Voice*/}

            {/* Video Image  style */}

            {/* Video caption */}
          </form>
        </Form>
      </div>

      <div>
        {/* Video preview */}
        <h2 className="text-red-500">Preview</h2>
      </div>
    </div>
  );
}
