"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import { SetStateAction, useState } from "react";
import { FormCreateCustomer } from "../FormCreateCustomer";

export  function HeaderCompanies() {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  return (
    <div className="flex justify-between items-start">
      <h2 className="text 2xl:">lista de compañias</h2>
      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button> Create </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create Customers</DialogTitle>
            <DialogDescription>crear y configurar</DialogDescription>
          </DialogHeader>
          <FormCreateCustomer setOpenModalCreate={setOpenModalCreate} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
