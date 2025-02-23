"use client";

import { z } from "zod";
import { isValidCpf } from "../helpers/cpf";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PatternFormat } from "react-number-format";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Por favor, insira seu nome." }),
  cpf: z
    .string()
    .trim()
    .min(1, { message: "CPF é obrigatório." })
    .refine((value) => isValidCpf(value), {
      message: "Por favor, insira um CPF válido.",
    }),
});

type formSchema = z.infer<typeof formSchema>;

const onSubmit = (data: formSchema) => {
  console.log(data);
};

const FinishOrderButton = () => {
  const form = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
    },
  });
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full rounded-full">Finalizar pedido</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Finalizar Pedido</DrawerTitle>
          <DrawerDescription>
            Insira suas informações abaixo para finalizar o seu pedido.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu nome:</FormLabel>
                    <FormControl>
                      <Input placeholder="digite seu nome..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu nome:</FormLabel>
                    <FormControl>
                      <PatternFormat                        
                        placeholder="digite seu CPF..."
                        format="###.###.###-##"
                        customInput={Input}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              

              <DrawerFooter>
                <Button type="submit" variant="destructive" className="rounded-full">Finalizar</Button>
                <DrawerClose asChild>
                  <Button className="w-full rounded-full" variant="outline">Cancelar</Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FinishOrderButton;
